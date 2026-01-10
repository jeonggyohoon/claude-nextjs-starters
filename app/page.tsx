import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowRight, Zap, Palette, Code2, Blocks, Sparkles } from 'lucide-react';
import { Container } from '@/components/layout/Container';

// 주요 기능 데이터
const FEATURES = [
  {
    icon: Zap,
    title: '빠른 성능',
    description:
      'Next.js 15의 최신 기능과 React 19로 최적화된 성능을 제공합니다.',
  },
  {
    icon: Palette,
    title: '다크모드 지원',
    description:
      'next-themes를 활용한 시스템 연동 다크모드를 지원합니다.',
  },
  {
    icon: Code2,
    title: '타입 안전성',
    description:
      'TypeScript와 shadcn/ui로 타입 안전한 개발 환경을 제공합니다.',
  },
  {
    icon: Blocks,
    title: '컴포넌트 기반',
    description:
      'shadcn/ui 기반의 재사용 가능한 UI 컴포넌트를 제공합니다.',
  },
  {
    icon: Sparkles,
    title: '모던 스타일링',
    description:
      'Tailwind CSS 4로 빠르고 일관된 스타일링이 가능합니다.',
  },
];

// 홈 페이지 컴포넌트
export default function HomePage() {
  return (
    <div className="py-16">
      {/* 히어로 섹션 */}
      <Container>
        <section className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Next.js 스타터킷
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Next.js 15 App Router, React 19, TypeScript, Tailwind CSS,
            shadcn/ui를 활용한 모던 웹 애플리케이션 스타터킷입니다.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/about">
                시작하기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Button>
          </div>
        </section>

        {/* 기능 카드 섹션 */}
        <section className="mt-24">
          <h2 className="text-center text-2xl font-bold">주요 기능</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <Card key={feature.title} className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <feature.icon className="h-10 w-10 text-primary" />
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
