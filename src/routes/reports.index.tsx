import { createFileRoute } from "@tanstack/react-router";

import { ReportCard } from "@/components/site/ReportCard";
import { PageHero } from "@/components/site/Section";
import { reports } from "@/data/club";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/reports/")({
  head: () => ({
    meta: pageMeta("活動報告", "飯縄山、戸隠古道、北アルプスなど、トレランクラブ【走ったれ】のこれまでの山行・朝練の記録。"),
  }),
  component: Reports,
});

function Reports() {
  const lead = reports[0]!;
  const rest = reports.slice(1);
  return (
    <>
      <PageHero
        latin="Journal"
        title="活動報告"
        lead="これまでの山行や朝練の記録です。絶景、トレイルグルメ、仲間との時間。走ったれの雰囲気をのぞいてみてください。"
      />
      <section className="container-editorial py-20 md:py-28">
        <ReportCard report={lead} large />
        <div className="mt-20 grid gap-16 md:grid-cols-3 md:gap-10">
          {rest.map((r) => (
            <ReportCard key={r.slug} report={r} />
          ))}
        </div>
      </section>
    </>
  );
}
