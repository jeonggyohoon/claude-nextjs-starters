'use client';

import Link from 'next/link';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface ILoginFormProps {
  className?: string;
}

export function LoginForm({ className }: ILoginFormProps) {
  return (
    <div className={cn('flex flex-col gap-6', className)}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">로그인</CardTitle>
          <CardDescription>
            이메일과 비밀번호를 입력하여 로그인하세요
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              {/* 이메일 필드 */}
              <div className="grid gap-2">
                <Label htmlFor="email">이메일</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  required
                />
              </div>

              {/* 비밀번호 필드 */}
              <div className="grid gap-2">
                <Label htmlFor="password">비밀번호</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  required
                />
              </div>

              {/* 로그인 버튼 */}
              <Button type="submit" className="w-full">
                로그인하기
              </Button>

              {/* 회원가입 링크 */}
              <div className="text-center text-sm">
                계정이 없으신가요?{' '}
                <Link
                  href="/signup"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  회원가입
                </Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
