import Link from 'next/link';
import { Layers } from 'lucide-react';

interface ILogoProps {
  showText?: boolean;
}

// 로고 컴포넌트
export function Logo({ showText = true }: ILogoProps) {
  return (
    <Link href="/" className="flex items-center gap-2 font-bold">
      <Layers className="h-6 w-6 text-primary" />
      {showText && <span className="text-xl">스타터킷</span>}
    </Link>
  );
}
