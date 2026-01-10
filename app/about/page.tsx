import type { Metadata } from 'next';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/layout/Container';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: '소개 | Next.js 스타터킷',
  description: 'Next.js 스타터킷의 기술 스택과 특징을 소개합니다.',
};

// 기술 스택 데이터
const TECH_STACK = [
  {
    category: '프레임워크',
    items: [
      { name: 'Next.js', version: '15+', description: 'React 기반 풀스택 프레임워크' },
      { name: 'React', version: '19', description: 'UI 라이브러리' },
    ],
  },
  {
    category: '언어 & 타입',
    items: [
      { name: 'TypeScript', version: '5', description: '정적 타입 언어' },
    ],
  },
  {
    category: '스타일링',
    items: [
      { name: 'Tailwind CSS', version: '4', description: '유틸리티 CSS 프레임워크' },
      { name: 'shadcn/ui', version: 'latest', description: 'UI 컴포넌트 라이브러리' },
    ],
  },
  {
    category: '유틸리티',
    items: [
      { name: 'next-themes', version: 'latest', description: '다크모드 관리' },
      { name: 'usehooks-ts', version: 'latest', description: 'TypeScript 훅 라이브러리' },
      { name: 'Lucide React', version: 'latest', description: '아이콘 라이브러리' },
      { name: 'Sonner', version: 'latest', description: '토스트 알림' },
    ],
  },
];

// 소개 페이지 컴포넌트
export default function AboutPage() {
  return (
    <div className="py-16">
      <Container>
        {/* 페이지 헤더 */}
        <section>
          <h1 className="text-3xl font-bold">소개</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            이 스타터킷은 모던 웹 애플리케이션 개발을 위한 기본 구조와
            검증된 라이브러리들을 제공합니다.
          </p>
        </section>

        <Separator className="my-8" />

        {/* 기술 스택 섹션 */}
        <section>
          <h2 className="text-2xl font-bold">기술 스택</h2>
          <div className="mt-8 space-y-8">
            {TECH_STACK.map((category) => (
              <div key={category.category}>
                <h3 className="mb-4 text-lg font-semibold text-muted-foreground">
                  {category.category}
                </h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((tech) => (
                    <Card key={tech.name}>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{tech.name}</CardTitle>
                          <Badge variant="secondary">v{tech.version}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          {tech.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-8" />

        {/* 프로젝트 구조 섹션 */}
        <section>
          <h2 className="text-2xl font-bold">프로젝트 구조</h2>
          <Card className="mt-6">
            <CardContent className="pt-6">
              <pre className="overflow-x-auto text-sm">
{`├── app/                    # Next.js App Router
│   ├── layout.tsx          # 루트 레이아웃
│   ├── page.tsx            # 홈 페이지
│   └── about/              # 소개 페이지
│
├── components/
│   ├── common/             # 공통 컴포넌트
│   │   ├── ThemeToggle     # 다크모드 토글
│   │   ├── Logo            # 로고
│   │   └── NavLink         # 네비게이션 링크
│   │
│   ├── layout/             # 레이아웃 컴포넌트
│   │   ├── AppShell        # 앱 쉘
│   │   ├── Header          # 헤더
│   │   ├── Footer          # 푸터
│   │   └── MobileNav       # 모바일 네비게이션
│   │
│   └── ui/                 # shadcn/ui 컴포넌트
│
└── lib/                    # 유틸리티`}
              </pre>
            </CardContent>
          </Card>
        </section>
      </Container>
    </div>
  );
}
