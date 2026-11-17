import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { MemberCard } from "@/components/site/MemberCard";
import { PageHero } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { images, members } from "@/data/club";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/members")({
  head: () => ({
    meta: pageMeta("メンバー紹介", "トレランクラブ【走ったれ】で一緒に走る仲間たちの紹介。代表、朝練リーダー、山行リーダーほか。"),
  }),
  component: Members,
});

function Members() {
  return (
    <>
      <PageHero
        latin="Members"
        title="メンバー紹介"
        lead="走り始めたばかりの人も、レースに挑戦する人も。信州の山が好きな仲間が集まっています。"
        image={images.reportIizuna}
        imageAlt="飯縄山の山頂で笑顔のメンバー"
      />
      <section className="container-editorial py-24 md:py-32">
        <div className="grid gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((m, i) => (
            <MemberCard key={m.name} member={m} index={i} />
          ))}
        </div>
        <div className="mt-24 border-t hairline pt-14 text-center">
          <p className="font-display text-2xl md:text-3xl">次は、あなたの番です。</p>
          <Button asChild variant="rust" size="xl" className="mt-8">
            <Link to="/join">
              体験参加してみる <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
