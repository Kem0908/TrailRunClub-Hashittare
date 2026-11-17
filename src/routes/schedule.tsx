import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { EventList } from "@/components/site/EventList";
import { LevelTag, PageHero, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { club, images, regularSessions, upcomingEvents } from "@/data/club";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: pageMeta(
      "活動予定",
      "週末朝6時の犀川河川敷ラン、長野市の里山トレイル、北アルプス周辺の山岳トレイルなど、走ったれのこれからの活動予定。",
    ),
  }),
  component: Schedule,
});

function Schedule() {
  return (
    <>
      <PageHero
        latin="Schedule"
        title="活動予定"
        lead={`参加費はすべての回で「${club.fee}」。まずはお気軽にご参加ください。`}
        image={images.fieldSaigawa}
        imageAlt="朝霧の犀川河川敷"
      />

      <section className="container-editorial py-24 md:py-32">
        <SectionHeading latin="Upcoming" title="これからの予定" lead="天候や積雪状況により内容が変わる場合があります。参加前にご連絡ください。" />
        <div className="mt-12">
          <EventList events={upcomingEvents} />
        </div>
      </section>

      <section className="bg-card py-24 md:py-32">
        <div className="container-editorial">
          <SectionHeading latin="Regular sessions" title="定期練習" />
          <div className="mt-14 grid gap-px bg-border md:grid-cols-3">
            {regularSessions.map((s) => (
              <article key={s.label} className="bg-card p-8">
                <div className="flex items-center justify-between">
                  <span className="eyebrow">{s.label}</span>
                  <LevelTag level={s.level} />
                </div>
                <p className="mt-6 font-display text-2xl">{s.when}</p>
                <p className="mt-2 text-sm">{s.where}</p>
                <p className="mt-4 text-sm text-muted-foreground">{s.detail}</p>
              </article>
            ))}
          </div>
          <div className="mt-14 flex justify-center">
            <Button asChild variant="rust" size="xl">
              <Link to="/join">
                参加の連絡をする <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
