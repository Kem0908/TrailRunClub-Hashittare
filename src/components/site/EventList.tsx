import { formatDateParts, type UpcomingEvent } from "@/data/club";
import { LevelTag } from "./Section";

export function EventList({ events }: { events: UpcomingEvent[] }) {
  return (
    <ol className="border-t hairline">
      {events.map((e) => {
        const d = formatDateParts(e.date);
        return (
          <li
            key={`${e.date}-${e.title}`}
            className="grid grid-cols-[4.5rem_1fr] gap-x-5 gap-y-2 border-b hairline py-6 md:grid-cols-[7rem_1fr_14rem] md:items-center md:gap-8 md:py-8"
          >
            <div className="row-span-2 md:row-span-1">
              <p className="latin text-sm text-muted-foreground">
                {d.monthLatin} {d.year}
              </p>
              <p className="latin text-5xl leading-none md:text-6xl">{String(d.day).padStart(2, "0")}</p>
              <p className="mt-1 text-xs tracking-[0.2em] text-muted-foreground">
                （{d.weekday}）{e.start}〜
              </p>
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow">{e.kind}</span>
                <LevelTag level={e.level} />
              </div>
              <h3 className="mt-2 text-xl md:text-2xl">{e.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{e.note}</p>
            </div>
            <dl className="col-start-2 text-sm md:col-start-auto">
              <div className="flex gap-3">
                <dt className="text-muted-foreground">場所</dt>
                <dd>{e.place}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="text-muted-foreground">距離</dt>
                <dd>{e.distance}</dd>
              </div>
            </dl>
          </li>
        );
      })}
    </ol>
  );
}
