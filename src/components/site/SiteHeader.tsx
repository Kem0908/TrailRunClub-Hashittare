import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { club } from "@/data/club";

export const navItems = [
  { to: "/about", label: "走ったれとは", latin: "About" },
  { to: "/schedule", label: "活動予定", latin: "Schedule" },
  { to: "/reports", label: "活動報告", latin: "Journal" },
  { to: "/members", label: "メンバー", latin: "Members" },
  { to: "/gear", label: "装備", latin: "Gear" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b hairline bg-background/90 backdrop-blur-md">
      <div className="container-editorial flex h-16 items-center justify-between gap-6 md:h-20">
        <Link to="/" className="group flex items-baseline gap-3" aria-label="ホームへ">
          <span className="font-display text-xl font-semibold tracking-[0.12em] md:text-2xl">
            走ったれ
          </span>
          <span className="latin hidden text-base text-muted-foreground sm:inline">
            {club.latin} Trail Running Club
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="メインメニュー">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[0.82rem] tracking-[0.16em] text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant="ink" size="sm" className="px-5">
            <Link to="/join">体験参加</Link>
          </Button>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label="メニューを開く">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[85vw] max-w-sm bg-background">
            <SheetTitle className="font-display text-lg tracking-[0.12em]">走ったれ</SheetTitle>
            <nav className="mt-10 flex flex-col" aria-label="モバイルメニュー">
              {[{ to: "/", label: "ホーム", latin: "Home" } as const, ...navItems, { to: "/join", label: "体験参加・お問い合わせ", latin: "Join" } as const].map(
                (item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between border-b hairline py-4"
                  >
                    <span className="font-display text-lg tracking-[0.1em]">{item.label}</span>
                    <span className="latin text-sm text-muted-foreground">{item.latin}</span>
                  </Link>
                ),
              )}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
