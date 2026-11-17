import { Link } from "@tanstack/react-router";

import { club } from "@/data/club";
import { navItems } from "./SiteHeader";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-editorial grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:py-20">
        <div>
          <p className="latin text-3xl text-ink-foreground/70">{club.latin}</p>
          <p className="mt-2 font-display text-2xl tracking-[0.12em]">{club.name}</p>
          <p className="mt-4 max-w-sm text-sm text-ink-foreground/70">
            長野県北信・中信・東信、北アルプス周辺、長野市の里山をフィールドに活動するトレイルランニングクラブ。
          </p>
        </div>
        <div>
          <p className="eyebrow text-ink-foreground/60">Menu</p>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-ink-foreground/80 hover:text-ink-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/join" className="text-ink-foreground/80 hover:text-ink-foreground">
                体験参加・お問い合わせ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-ink-foreground/60">Follow</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={club.instagram} target="_blank" rel="noreferrer" className="text-ink-foreground/80 hover:text-ink-foreground">
                Instagram
              </a>
            </li>
            <li>
              <a href={club.x} target="_blank" rel="noreferrer" className="text-ink-foreground/80 hover:text-ink-foreground">
                X (Twitter)
              </a>
            </li>
          </ul>
          <p className="mt-8 text-xs text-ink-foreground/60">参加費：{club.fee}</p>
        </div>
      </div>
      <div className="border-t border-ink-foreground/15">
        <div className="container-editorial flex flex-col justify-between gap-2 py-6 text-xs text-ink-foreground/50 md:flex-row">
          <span>© {new Date().getFullYear()} {club.name}</span>
          <span className="tracking-[0.2em] uppercase">{club.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
