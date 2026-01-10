'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { NavLink } from '@/components/common/NavLink';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import { Logo } from '@/components/common/Logo';
import { Separator } from '@/components/ui/separator';

// 네비게이션 아이템 타입
interface INavItem {
  href: string;
  label: string;
}

interface IMobileNavProps {
  navItems: INavItem[];
}

// 모바일 네비게이션 (Sheet 사이드바)
export function MobileNav({ navItems }: IMobileNavProps) {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">메뉴 열기</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72">
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
          <SheetDescription className="sr-only">
            사이트 네비게이션 메뉴
          </SheetDescription>
        </SheetHeader>
        <Separator className="my-4" />
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              onClick={handleClose}
              className="text-base"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <Separator className="my-4" />
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">테마</span>
          <ThemeToggle />
        </div>
      </SheetContent>
    </Sheet>
  );
}
