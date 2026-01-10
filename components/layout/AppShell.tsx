import { Header } from './Header';
import { Footer } from './Footer';

interface IAppShellProps {
  children: React.ReactNode;
}

// 앱 전체 레이아웃 쉘
export function AppShell({ children }: IAppShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
