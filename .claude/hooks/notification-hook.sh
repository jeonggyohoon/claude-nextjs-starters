#!/bin/bash
# Claude Code Notification Hook

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"

# .env 파일에서 웹훅 URL 읽기
ENV_FILE="$PROJECT_ROOT/.env"
WEBHOOK_URL=""
if [ -f "$ENV_FILE" ]; then
    WEBHOOK_URL=$(grep "^SLACK_WEBHOOK_URL=" "$ENV_FILE" | cut -d'=' -f2)
fi

if [ -z "$WEBHOOK_URL" ]; then
    echo "SLACK_WEBHOOK_URL을 찾을 수 없습니다."
    exit 1
fi

# stdin에서 JSON 읽어서 메시지 파싱
INPUT=$(cat)
MESSAGE=$(echo "$INPUT" | /c/ProgramData/chocolatey/bin/jq.exe -r '.message // "Claude Code Notification"')
WORK_DIR="${CLAUDE_WORKING_DIRECTORY:-$(pwd)}"

# Git 정보
cd "$WORK_DIR" 2>/dev/null
GIT_BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "N/A")
GIT_STATUS_RAW=$(git status --porcelain 2>/dev/null)
if [ -n "$GIT_STATUS_RAW" ]; then
    MODIFIED=$(echo "$GIT_STATUS_RAW" | grep -c "^ *M" 2>/dev/null || true)
    ADDED=$(echo "$GIT_STATUS_RAW" | grep -cE "^ *A|^\?\?" 2>/dev/null || true)
    DELETED=$(echo "$GIT_STATUS_RAW" | grep -c "^ *D" 2>/dev/null || true)
    [ -z "$MODIFIED" ] && MODIFIED=0
    [ -z "$ADDED" ] && ADDED=0
    [ -z "$DELETED" ] && DELETED=0
    GIT_STATUS="M:$MODIFIED A:$ADDED D:$DELETED"
else
    GIT_STATUS="Clean"
fi

# 현재 시간
CURRENT_TIME=$(date "+%Y-%m-%d %H:%M:%S")

# 프로젝트명
PROJECT_NAME=$(basename "$WORK_DIR")

# Slack 페이로드
PAYLOAD=$(cat <<EOF
{
    "username": "Claude Code",
    "icon_emoji": ":bell:",
    "attachments": [{
        "color": "#ff9800",
        "title": ":bell: Claude Code",
        "text": "$MESSAGE",
        "fields": [
            {"title": ":file_folder: Project", "value": "$PROJECT_NAME", "short": true},
            {"title": ":seedling: Branch", "value": "$GIT_BRANCH", "short": true},
            {"title": ":bar_chart: Status", "value": "$GIT_STATUS", "short": true},
            {"title": ":clock1: Time", "value": "$CURRENT_TIME", "short": true}
        ],
        "footer": "Claude Code Hooks"
    }]
}
EOF
)

curl -s -X POST -H "Content-Type: application/json; charset=utf-8" -d "$PAYLOAD" "$WEBHOOK_URL" > /dev/null
