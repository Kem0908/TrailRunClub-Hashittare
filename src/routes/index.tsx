import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowDown } from "lucide-react";

import { EventList } from "@/components/site/EventList";
import { MemberCard } from "@/components/site/MemberCard";
import { ReportCard } from "@/components/site/ReportCard";
import { LevelTag, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { club, fields, images, members, reports, upcomingEvents } from "@/data/club";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "トレランクラブ【走ったれ】｜信州の山を、仲間と走ったれ！" },
      {
        name: "description",
        content:
          "長野県北信・中信・東信、北アルプス周辺、長野市の里山で活動するトレイルランニングクラブ。週末朝6時の犀川河川敷ランから絶景トレイルまで、初心者大歓迎。",
      },
      { property: "og:title", content: "トレランクラブ【走ったれ】｜信州の山を、仲間と走ったれ！" },
      {
        property: "og:description",
        content: "信州・長野のトレイルランニングクラブ。初心者〜経験者まで、和気あいあいと山を楽しもう。",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const stats = [
  { label: "山行", value: "月1〜2回" },
  { label: "朝練", value: "土日 6:00〜" },
  { label: "参加費", value: "0円" },
  { label: "エリア", value: "北信・中信・東信" },
];

function Home() {
  const lead = reports[0]!;
  const rest = reports.slice(1);
  return (
    <>
      {/* Hero */}
      <section className="relative -mt-16 min-h-[100svh] overflow-hidden bg-ink text-ink-foreground md:-mt-20">
        <img
          src={images.heroAlps}
          alt="北アルプスの稜線を走るランナーたち"
          width={1920}
          height={1152}
          className="animate-slow-zoom absolute inset-0 h-full w-full object-cover"
        />
        <div className="photo-fade absolute inset-0" />
        <div className="container-editorial relative flex min-h-[100svh] flex-col justify-between pb-10 pt-28 md:pt-36">
          <div className="flex items-start justify-between text-xs tracking-[0.3em] text-ink-foreground/80">
            <span>SHINSHU / NAGANO</span>
            <span className="hidden md:inline">TRAIL RUNNING CLUB — EST. 2021</span>
          </div>

          <div className="animate-rise max-w-4xl">
            <p className="latin text-2xl text-ink-foreground/85 md:text-3xl">Run the mountains, together.</p>
            <h1 className="mt-4 text-[2.6rem] leading-[1.25] md:text-[5.2rem]">
              信州の山を、
              <br />
              仲間と走ったれ！
            </h1>
            <p className="mt-6 max-w-xl text-[0.95rem] text-ink-foreground/85">
              北アルプスの稜線から長野市の里山、朝6時の犀川河川敷まで。
              絶景とトレイルグルメ、レース完走まで、和気あいあいと楽しむトレイルランニングクラブです。
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild variant="rust" size="xl">
                <Link to="/join">
                  体験参加してみる <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="onPhoto" size="xl">
                <Link to="/schedule">活動予定を見る</Link>
              </Button>
            </div>
          </div>

          <div className="flex items-end justify-between text-xs tracking-[0.25em] text-ink-foreground/70">
            <span className="inline-flex items-center gap-2">
              <ArrowDown className="size-3.5" /> SCROLL
            </span>
            <span>Photo: 北アルプス・夜明けの稜線</span>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="container-editorial py-24 md:py-36">
        <div className="grid gap-14 md:grid-cols-[1fr_1.15fr] md:gap-20">
          <SectionHeading
            number="01"
            latin="About Hashittare"
            title={
              <>
                初心者からレース完走志向まで、
                <br className="hidden md:block" />
                信州の山を遊び尽くす。
              </>
            }
          />
          <div className="space-y-6 text-[0.97rem]">
            <p className="font-display text-lg leading-loose md:text-xl">
              「トレランクラブ【走ったれ】」は、長野県北信・中信・東信エリアや北アルプス周辺、長野市の里山をフィールドに活動するトレイルランニングクラブです。
            </p>
            <p className="text-muted-foreground">
              和気あいあいと絶景や下山後のトレイルグルメを楽しむスタイルから、レース完走を目指すステップアップまで。それぞれのペースで、山を楽しんでいます。
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-sm tracking-[0.18em] text-primary hover:gap-3 transition-all">
              クラブについて詳しく <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        <dl className="mt-20 grid grid-cols-2 border-t hairline md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="border-b hairline py-8 pr-4 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0">
              <dt className="eyebrow text-muted-foreground">{s.label}</dt>
              <dd className="mt-3 font-display text-xl lg:text-[1.65rem]">{s.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-xs text-muted-foreground">※ 参加費は「{club.fee}」！</p>
      </section>

      {/* Schedule */}
      <section className="bg-card py-24 md:py-32">
        <div className="container-editorial">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading number="02" latin="Upcoming" title="これからの活動予定" />
            <Link to="/schedule" className="inline-flex items-center gap-2 text-sm tracking-[0.18em] text-primary">
              すべての予定 <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-12">
            <EventList events={upcomingEvents.slice(0, 3)} />
          </div>
        </div>
      </section>

      {/* Journal */}
      <section className="container-editorial py-24 md:py-36">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading number="03" latin="Journal" title="活動報告" lead="山行や朝練の記録。走ったれの雰囲気が伝わります。" />
          <Link to="/reports" className="inline-flex items-center gap-2 text-sm tracking-[0.18em] text-primary">
            すべての活動報告 <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-14 grid gap-14 md:grid-cols-[1.4fr_1fr] md:gap-12">
          <ReportCard report={lead} large />
          <div className="grid gap-12">
            {rest.slice(0, 2).map((r) => (
              <ReportCard key={r.slug} report={r} />
            ))}
          </div>
        </div>
      </section>

      {/* Fields */}
      <section className="bg-ink py-24 text-ink-foreground md:py-32">
        <div className="container-editorial">
          <p className="eyebrow">No.04 — Fields</p>
          <h2 className="mt-4 text-3xl md:text-[2.6rem]">主な活動フィールド</h2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {fields.map((f) => (
              <article key={f.name} className="group relative overflow-hidden">
                <img
                  src={f.image}
                  alt={f.name}
                  loading="lazy"
                  width={1280}
                  height={1600}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="card-fade absolute inset-0" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="inline-block bg-ink-foreground/90 px-2 py-0.5 text-[0.7rem] tracking-[0.2em] text-ink">
                    {f.level}
                  </span>
                  <h3 className="mt-3 text-2xl">{f.name}</h3>
                  <p className="text-sm text-ink-foreground/80">{f.area}</p>
                  <p className="latin mt-1 text-lg text-ink-foreground/80">{f.stats}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Members */}
      <section className="container-editorial py-24 md:py-36">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading number="05" latin="Members" title="一緒に走る仲間たち" />
          <Link to="/members" className="inline-flex items-center gap-2 text-sm tracking-[0.18em] text-primary">
            メンバー紹介 <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-14 grid gap-12 md:grid-cols-3">
          {members.slice(0, 3).map((m, i) => (
            <MemberCard key={m.name} member={m} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <img
          src={images.fieldSaigawa}
          alt="朝霧の犀川河川敷を走るランナー"
          loading="lazy"
          width={1280}
          height={1600}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="photo-fade absolute inset-0" />
        <div className="container-editorial relative py-28 text-center md:py-40">
          <p className="eyebrow text-ink-foreground/80">Join us</p>
          <h2 className="mx-auto mt-5 max-w-3xl text-3xl md:text-5xl">
            山に対する熱い気持ちを持って、
            <br />
            一緒に走ったれ！
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm text-ink-foreground/85">
            まずは週末朝の犀川河川敷ランから。初参加の連絡、次回開催日の確認、質問など、お気軽にどうぞ。
          </p>
          <div className="mt-10 flex justify-center">
            <Button asChild variant="rust" size="xl">
              <Link to="/join">
                体験参加・お問い合わせ <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="mt-10 flex justify-center gap-3">
            <LevelTag level="初級" />
            <span className="text-xs text-ink-foreground/70">初心者の方も大歓迎です</span>
          </div>
        </div>
      </section>
    </>
  );
}
