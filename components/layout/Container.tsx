import { cn } from '@/lib/utils';

interface IContainerProps {
  children: React.ReactNode;
  className?: string;
}

// 콘텐츠 너비 제한 컨테이너
export function Container({ children, className }: IContainerProps) {
  return (
    <div className={cn('container mx-auto px-4', className)}>
      {children}
    </div>
  );
}
