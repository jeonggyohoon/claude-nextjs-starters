import { Logo } from '@/components/common/Logo';
import { NavLink } from '@/components/common/NavLink';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import { MobileNav } from './MobileNav';

// 네비게이션 아이템
const NAV_ITEMS = [
  { href: '/', label: '홈' },
  { href: '/about', label: '소개' },
];

// 헤더 컴포넌트
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* 로고 */}
        <Logo />

        {/* 데스크톱 네비게이션 */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* 우측 영역: 테마 토글 + 모바일 메뉴 */}
        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <MobileNav navItems={NAV_ITEMS} />
        </div>
      </div>
    </header>
  );
}
