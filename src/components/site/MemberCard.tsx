import type { Member } from "@/data/club";

export function MemberCard({ member, index }: { member: Member; index: number }) {
  return (
    <article className="group border-t hairline pt-6">
      <div className="flex items-start justify-between">
        <div className="flex size-20 items-center justify-center rounded-full bg-paper-deep font-display text-2xl tracking-[0.1em] transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          {member.name.slice(0, 1)}
        </div>
        <span className="latin text-4xl text-foreground/20">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <p className="eyebrow mt-6">{member.role}</p>
      <h3 className="mt-2 text-2xl">{member.name}</h3>
      <p className="mt-4 text-sm">「{member.comment}」</p>
      <dl className="mt-5 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-xs text-muted-foreground">
        <dt>入会</dt>
        <dd>{member.since}年</dd>
        <dt>拠点</dt>
        <dd>{member.home}</dd>
        <dt>好きな山</dt>
        <dd>{member.favorite}</dd>
      </dl>
    </article>
  );
}
