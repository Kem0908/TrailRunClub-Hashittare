import { Link } from "@tanstack/react-router";

import { formatDateJa, type Report } from "@/data/club";
import { cn } from "@/lib/utils";

export function ReportCard({ report, large = false }: { report: Report; large?: boolean }) {
  return (
    <Link
      to="/reports/$slug"
      params={{ slug: report.slug }}
      className="group block"
    >
      <div className="overflow-hidden">
        <img
          src={report.image}
          alt={report.title}
          loading="lazy"
          width={1600}
          height={1066}
          className={cn(
            "w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]",
            large ? "aspect-[4/3]" : "aspect-[3/2]",
          )}
        />
      </div>
      <div className="mt-5 flex items-center gap-4 text-xs tracking-[0.18em] text-muted-foreground">
        <span className="latin text-sm tracking-normal">{formatDateJa(report.date)}</span>
        <span className="h-px w-8 bg-foreground/30" />
        <span>{report.area}</span>
      </div>
      <h3
        className={cn(
          "mt-3 transition-colors group-hover:text-primary",
          large ? "text-2xl md:text-3xl" : "text-xl",
        )}
      >
        {report.title}
      </h3>
      <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">{report.excerpt}</p>
    </Link>
  );
}
