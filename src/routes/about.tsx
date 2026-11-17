import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { LevelTag, PageHero, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { club, fields, images } from "@/data/club";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: pageMeta(
      "走ったれとは",
      "長野県北信・中信・東信、北アルプス周辺、長野市の里山をフィールドに活動するトレランクラブ【走ったれ】の紹介。",
    ),
  }),
  component: About,
});

const values = [
  {
    no: "I",
    title: "初心者〜中級者中心で和気あいあい",
    text: "「トレランを始めたいけれど一人では不安」「ロード10km走れるようになったので山に挑戦したい」という方大歓迎！急な登りは無理せず歩き、みんなで声を掛け合いながら進みます。",
  },
  {
    no: "II",
    title: "絶景・トレイルグルメも全力で楽しむ",
    text: "信州ならではのパノラマ稜線や四季の里山を満喫したあとは、下山後の温泉や地元グルメも大切な楽しみのひとつ。レース完走を目指すメンバーへの刺激や情報交換も盛んです。",
  },
  {
    no: "III",
    title: "週末朝6時の犀川河川敷ランニング練習",
    text: "月1〜2回の山行に加えて、土曜または日曜の朝6時から長野市・犀川河川敷で基礎体力づくりのランニング練習を実施。朝活で爽やかに一日をスタートできます！",
  },
];

function About() {
  return (
    <>
      <PageHero
        latin="About"
        title="走ったれとは"
        lead="初心者からレース完走志向まで、それぞれのペースで信州の山を遊び尽くすトレイルランニングクラブです。"
        image={images.fieldSatoyama}
        imageAlt="長野市の里山の森を走るランナー"
      />

      <section className="container-editorial py-24 md:py-32">
        <SectionHeading latin="Our style" title="走ったれの、3つの楽しみ方" />
        <div className="mt-14 grid gap-12 md:grid-cols-3">
          {values.map((v) => (
            <article key={v.no} className="border-t hairline pt-8">
              <p className="latin text-5xl text-primary">{v.no}</p>
              <h3 className="mt-5 text-xl">{v.title}</h3>
              <p className="mt-4 text-sm text-muted-foreground">{v.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-card py-24 md:py-32">
        <div className="container-editorial">
          <SectionHeading
            latin="Fields"
            title="主な活動フィールド"
            lead="朝の犀川河川敷から長野市周辺の里山、そして北アルプスや信州各地の絶景トレイルまで幅広く活動しています。"
          />
          <div className="mt-16 space-y-20">
            {fields.map((f, i) => (
              <article key={f.name} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <img src={f.image} alt={f.name} loading="lazy" width={1280} height={1600} className="aspect-[4/3] w-full object-cover" />
                </div>
                <div>
                  <p className="latin text-6xl text-foreground/15">{String(i + 1).padStart(2, "0")}</p>
                  <div className="mt-2 flex items-center gap-3">
                    <LevelTag level={f.level} />
                    <span className="text-xs tracking-[0.18em] text-muted-foreground">{f.area}</span>
                  </div>
                  <h3 className="mt-4 text-2xl md:text-3xl">{f.name}</h3>
                  <p className="latin mt-2 text-xl text-primary">{f.stats}</p>
                  <p className="mt-5 text-muted-foreground">{f.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-editorial py-24 text-center md:py-32">
        <p className="eyebrow">Fee</p>
        <p className="mt-4 font-display text-3xl md:text-4xl">参加費は「{club.fee}」</p>
        <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
          交通費（乗り合い時のガソリン代等）や、下山後の温泉代・トレイルグルメ代は各自実費となります。
        </p>
        <Button asChild variant="ink" size="xl" className="mt-10">
          <Link to="/join">
            体験参加・お問い合わせ <ArrowRight />
          </Link>
        </Button>
      </section>
    </>
  );
}
