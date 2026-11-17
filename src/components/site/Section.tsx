import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function SectionHeading({
  number,
  latin,
  title,
  lead,
  className,
  align = "left",
}: {
  number?: string;
  latin: string;
  title: ReactNode;
  lead?: ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <p className="eyebrow">
        {number ? `No.${number} — ` : ""}
        {latin}
      </p>
      <h2 className="mt-4 text-3xl md:text-[2.6rem]">{title}</h2>
      {lead ? <p className="mt-5 text-[0.95rem] text-muted-foreground">{lead}</p> : null}
    </div>
  );
}

export function PageHero({
  latin,
  title,
  lead,
  image,
  imageAlt,
}: {
  latin: string;
  title: ReactNode;
  lead?: ReactNode;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="border-b hairline">
      <div className="container-editorial grid gap-10 py-14 md:grid-cols-[1.1fr_1fr] md:items-end md:py-20">
        <div className="animate-rise">
          <p className="latin text-5xl text-primary md:text-7xl">{latin}</p>
          <h1 className="mt-4 text-3xl md:text-5xl">{title}</h1>
          {lead ? <p className="mt-6 max-w-xl text-muted-foreground">{lead}</p> : null}
        </div>
        {image ? (
          <div className="overflow-hidden">
            <img
              src={image}
              alt={imageAlt ?? ""}
              className="animate-slow-zoom aspect-[16/10] w-full object-cover"
              width={1280}
              height={800}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function LevelTag({ level }: { level: "初級" | "中級" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center border px-2 py-0.5 text-[0.7rem] tracking-[0.2em]",
        level === "初級" ? "border-sage text-sage" : "border-primary text-primary",
      )}
    >
      {level}
    </span>
  );
}
