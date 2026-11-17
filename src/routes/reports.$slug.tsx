import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { ReportCard } from "@/components/site/ReportCard";
import { Button } from "@/components/ui/button";
import { formatDateJa, reports } from "@/data/club";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/reports/$slug")({
  loader: ({ params }) => {
    const report = reports.find((r) => r.slug === params.slug);
    if (!report) throw notFound();
    return { report };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? pageMeta(loaderData.report.title, loaderData.report.excerpt)
      : [{ title: "活動報告が見つかりません｜トレランクラブ【走ったれ】" }, { name: "robots", content: "noindex" }],
  }),
  notFoundComponent: () => (
    <div className="container-editorial py-32 text-center">
      <h1 className="text-3xl">活動報告が見つかりませんでした</h1>
      <Link to="/reports" className="mt-6 inline-block text-primary">
        活動報告一覧へ
      </Link>
    </div>
  ),
  component: ReportDetail,
});

function ReportDetail() {
  const { report } = Route.useLoaderData();
  const others = reports.filter((r) => r.slug !== report.slug).slice(0, 3);

  return (
    <article>
      <header className="container-editorial pt-14 md:pt-20">
        <Link to="/reports" className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-muted-foreground hover:text-primary">
          <ArrowLeft className="size-3.5" /> 活動報告一覧
        </Link>
        <div className="mt-10 max-w-4xl">
          <p className="latin text-lg text-primary">{formatDateJa(report.date)}</p>
          <h1 className="mt-3 text-3xl md:text-5xl">{report.title}</h1>
        </div>
        <dl className="mt-10 grid grid-cols-3 border-y hairline text-sm">
          <div className="py-5 pr-4">
            <dt className="eyebrow text-muted-foreground">Area</dt>
            <dd className="mt-2">{report.area}</dd>
          </div>
          <div className="border-l hairline py-5 px-4">
            <dt className="eyebrow text-muted-foreground">Course</dt>
            <dd className="mt-2">{report.stats}</dd>
          </div>
          <div className="border-l hairline py-5 px-4">
            <dt className="eyebrow text-muted-foreground">Members</dt>
            <dd className="mt-2">{report.members}人</dd>
          </div>
        </dl>
      </header>

      <div className="container-editorial mt-12">
        <img src={report.image} alt={report.title} width={1600} height={1066} className="w-full object-cover md:aspect-[16/8]" />
      </div>

      <div className="container-editorial py-16 md:py-24">
        <div className="mx-auto max-w-2xl space-y-8 text-[1.02rem]">
          <p className="font-display text-xl leading-relaxed md:text-2xl">{report.excerpt}</p>
          {report.body.map((p, i) => (
            <p key={i} className="text-foreground/85">
              {p}
            </p>
          ))}
          <div className="pt-6">
            <Button asChild variant="ink" size="xl">
              <Link to="/join">
                次回、一緒に走りませんか <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <section className="border-t hairline bg-card py-20">
        <div className="container-editorial">
          <p className="eyebrow">More Journal</p>
          <h2 className="mt-3 text-2xl">ほかの活動報告</h2>
          <div className="mt-10 grid gap-12 md:grid-cols-3">
            {others.map((r) => (
              <ReportCard key={r.slug} report={r} />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
