import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { GearChecklist } from "@/components/site/GearChecklist";
import { PageHero } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/gear")({
  head: () => ({
    meta: pageMeta(
      "必須装備・持ち物",
      "トレランシューズ、ザック、水分1L以上、レインウェア、熊鈴、楽しむ気持ち。走ったれ参加前の装備チェックリスト。",
    ),
  }),
  component: Gear,
});

function Gear() {
  return (
    <>
      <PageHero
        latin="Gear"
        title="必須装備・持ち物"
        lead="安全に楽しく山を走るための必須アイテムです。参加前の準備チェックにご活用ください（タップでチェックできます）。"
      />
      <section className="container-editorial py-20 md:py-28">
        <GearChecklist />
        <div className="mt-14 grid gap-8 border hairline bg-card p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <div>
            <p className="eyebrow">Note</p>
            <p className="mt-3 text-sm text-muted-foreground">
              犀川河川敷のロード練習時は通常のランニングシューズと飲み物でOKです。山行時は各自での山岳保険・スポーツ保険への加入を推奨しています。
            </p>
          </div>
          <Button asChild variant="ink" size="xl">
            <Link to="/join">
              準備ができたら参加連絡 <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
