---
description: 'Phase 기반 점진적 계획 문서를 plans/ 폴더에 생성합니다'
allowed-tools:
  [
    'Read(*)',
    'Write(*)',
    'Bash(mkdir:*)',
    'Bash(ls:*)',
    'Bash(find:*)',
    'Bash(cat:*)',
  ]
---

# Claude 명령어: Plandoc

Phase 단위로 독립 실행 및 테스트 가능한 기획/설계 문서를 생성합니다.

## 사용법

```
/plandoc feature <기능명>
/plandoc feature <기능명> --phases 4
/plandoc sprint <스프린트명>
/plandoc architecture <시스템명>
/plandoc db <스키마명>
/plandoc api <API명>
```

## Phase 설계 원칙

### 핵심 규칙

1. **독립성** - 각 Phase는 단독 배포/테스트 가능
2. **점진적 가치** - Phase 1만으로도 동작하는 MVP
3. **명확한 경계** - Phase 간 의존성 최소화
4. **검증 가능** - 각 Phase 완료 시 테스트 체크리스트 포함

### Phase 구조 가이드

```
Phase 1: Foundation (기반)
  └─ 핵심 데이터 구조 + 기본 CRUD
  └─ ✅ 이것만으로 기본 동작 가능

Phase 2: Core Features (핵심 기능)
  └─ 주요 비즈니스 로직
  └─ ✅ 사용자에게 실제 가치 제공

Phase 3: Enhancement (강화)
  └─ UX 개선, 성능 최적화
  └─ ✅ 품질 향상

Phase 4: Advanced (고급) [선택]
  └─ AI 기능, 고급 분석 등
  └─ ✅ 차별화 요소
```

## 문서 타입별 설명

### feature - 기능 기획서
```
plans/features/YYYY-MM-DD-<기능명>.md
```
Phase 기반 기능 구현 계획. 각 Phase별 작업 항목, 기술 명세, 테스트 체크리스트 포함.

### sprint - 스프린트 계획
```
plans/sprints/YYYY-MM-DD-<스프린트명>.md
```
스프린트 목표, 작업 항목, 우선순위, 리스크 관리.

### architecture - 아키텍처 설계
```
plans/architecture/<시스템명>.md
```
시스템 개요, 컴포넌트 다이어그램(Mermaid), 데이터 흐름, 기술 스택.

### db - 데이터베이스 설계
```
plans/database/<스키마명>.md
```
ERD(Mermaid), 테이블 스키마, 인덱스 전략, 마이그레이션 계획.

### api - API 설계
```
plans/api/<API명>.md
```
엔드포인트 목록, 요청/응답 스키마, 인증, 에러 처리.

## 폴더 구조

```
plans/
├── features/
│   ├── 2025-01-11-uph-dashboard.md
│   └── 2025-01-15-ai-query-assistant.md
├── sprints/
│   └── 2025-01-sprint-01.md
├── architecture/
│   └── bi-system.md
├── database/
│   └── production-metrics.md
└── api/
    └── uph-analytics-api.md
```

## 문서 템플릿

### 문서 상단 메타정보

```markdown
---
title: <제목>
created: YYYY-MM-DD
status: planning | phase-1 | phase-2 | phase-3 | completed
current_phase: 1
total_phases: 3
author: <작성자>
related: [관련 문서 링크]
---
```

### Feature 문서 구조

```markdown
---
title: <기능명>
created: YYYY-MM-DD
status: planning
current_phase: 1
total_phases: 3
author: 
---

# <기능명> 구현 계획

## 📋 개요
- **목적**: 
- **대상 사용자**: 
- **예상 효과**: 

## 🎯 최종 목표
[완성된 기능의 모습 설명]

---

## Phase 1: Foundation (기반)
> 🎯 **목표**: [이 Phase에서 달성할 것]
> ⏱️ **예상 기간**: N일
> 🚀 **결과물**: [이 Phase만으로 가능한 것]

### 작업 항목
- [ ] 작업 1
- [ ] 작업 2
- [ ] 작업 3

### 기술 명세
[데이터 구조, API 스펙 등]

### ✅ 완료 조건 (테스트 체크리스트)
- [ ] 테스트 1: [구체적 검증 항목]
- [ ] 테스트 2: [구체적 검증 항목]
- [ ] 테스트 3: [구체적 검증 항목]

### 📦 산출물
- [ ] 파일/컴포넌트 목록

---

## Phase 2: Core Features (핵심 기능)
> 🎯 **목표**: 
> ⏱️ **예상 기간**: N일
> 🚀 **결과물**: 
> ⚠️ **의존성**: Phase 1 완료 필요

### 작업 항목
- [ ] 작업 1
- [ ] 작업 2

### 기술 명세
[추가되는 로직, API 등]

### ✅ 완료 조건 (테스트 체크리스트)
- [ ] 테스트 1
- [ ] 테스트 2

### 📦 산출물
- [ ] 파일/컴포넌트 목록

---

## Phase 3: Enhancement (강화)
> 🎯 **목표**: 
> ⏱️ **예상 기간**: N일
> 🚀 **결과물**: 
> ⚠️ **의존성**: Phase 2 완료 필요

### 작업 항목
- [ ] 작업 1
- [ ] 작업 2

### ✅ 완료 조건 (테스트 체크리스트)
- [ ] 테스트 1
- [ ] 테스트 2

### 📦 산출물
- [ ] 파일/컴포넌트 목록

---

## 📊 진행 현황

| Phase | 상태 | 시작일 | 완료일 | 비고 |
|-------|------|--------|--------|------|
| Phase 1 | ⬜ 대기 | - | - | |
| Phase 2 | ⬜ 대기 | - | - | |
| Phase 3 | ⬜ 대기 | - | - | |

**상태 아이콘**: ⬜ 대기 | 🔄 진행중 | ✅ 완료 | ⏸️ 보류

## 🚨 리스크 & 블로커

| 리스크 | 영향 Phase | 심각도 | 대응 방안 |
|--------|-----------|--------|----------|
| | | 🔴/🟡/🟢 | |

## 📝 변경 이력

| 날짜 | 변경 내용 | 사유 |
|------|----------|------|
| YYYY-MM-DD | 최초 작성 | |
```

## 프로세스

1. **문서 타입 확인** - feature/sprint/architecture/db/api
2. **plans/ 폴더 구조 생성** - 없으면 자동 생성
3. **템플릿 기반 문서 생성** - 날짜 포함 파일명
4. **Phase 수 조정** - --phases 옵션으로 커스터마이징 (기본 3개)
5. **기존 문서 확인** - 중복 방지

## 규칙

- 한국어 작성 (기술 용어는 영어 허용)
- Mermaid 다이어그램 적극 활용
- 각 Phase는 **독립적으로 테스트 가능**하게 설계
- TODO 체크박스로 진행상황 추적
- Phase 완료 조건은 **구체적이고 검증 가능**하게 작성