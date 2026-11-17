import { createFileRoute } from "@tanstack/react-router";

import { ContactForm } from "@/components/site/ContactForm";
import { PageHero, SectionHeading } from "@/components/site/Section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { club, faqs, joinSteps } from "@/data/club";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: pageMeta(
      "体験参加・お問い合わせ",
      "トレランクラブ【走ったれ】への体験参加・お問い合わせ。初回参加までの3ステップとよくある質問もこちら。",
    ),
  }),
  component: Join,
});

function Join() {
  return (
    <>
      <PageHero
        latin="Join us"
        title="体験参加・お問い合わせ"
        lead="初参加のご連絡、次回開催日の確認、質問など、いつでもお気軽にメッセージをお送りください。初心者の方も大歓迎です！"
      />

      <section className="container-editorial py-24 md:py-28">
        <SectionHeading latin="How to join" title="初回参加までの3ステップ" />
        <ol className="mt-14 grid gap-12 md:grid-cols-3">
          {joinSteps.map((s, i) => (
            <li key={s.title} className="border-t hairline pt-8">
              <p className="latin text-6xl text-primary">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-xl">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="form" className="bg-card py-24 md:py-28">
        <div className="container-editorial grid gap-14 md:grid-cols-[1fr_1.6fr] md:gap-20">
          <div>
            <SectionHeading latin="Contact" title="参加連絡フォーム" />
            <p className="mt-6 text-sm text-muted-foreground">
              参加費は「{club.fee}」。内容を確認してメールでご連絡します。SNSからのご連絡も歓迎です。
            </p>
            <div className="mt-6 flex gap-6 text-sm">
              <a href={club.instagram} target="_blank" rel="noreferrer" className="text-primary underline-offset-4 hover:underline">
                Instagram
              </a>
              <a href={club.x} target="_blank" rel="noreferrer" className="text-primary underline-offset-4 hover:underline">
                X (Twitter)
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="container-editorial py-24 md:py-28">
        <div className="grid gap-14 md:grid-cols-[1fr_1.6fr] md:gap-20">
          <SectionHeading latin="FAQ" title="よくある質問" />
          <Accordion type="single" collapsible className="border-t hairline">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`q${i}`} className="hairline">
                <AccordionTrigger className="py-6 text-left font-display text-lg hover:no-underline">
                  <span className="flex gap-4">
                    <span className="latin text-primary">Q.</span>
                    {f.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pl-9 text-[0.95rem] leading-loose text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
