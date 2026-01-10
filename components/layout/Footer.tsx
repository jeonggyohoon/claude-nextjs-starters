// 푸터 컴포넌트
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto flex h-16 items-center justify-center px-4">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} 스타터킷. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
