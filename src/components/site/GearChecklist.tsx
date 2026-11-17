import { Check, RotateCcw } from "lucide-react";
import { useState } from "react";

import { gear } from "@/data/club";
import { cn } from "@/lib/utils";

export function GearChecklist() {
  const [checked, setChecked] = useState<boolean[]>(() => gear.map(() => false));
  const count = checked.filter(Boolean).length;
  const done = count === gear.length;

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-6 border-b hairline pb-6">
        <div>
          <p className="eyebrow">Checklist</p>
          <p className="mt-2 latin text-6xl leading-none">
            {count}
            <span className="text-3xl text-muted-foreground"> / {gear.length}</span>
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            {done ? "準備万端！一緒に走ったれ！" : "項目をタップして準備を確認しよう"}
          </p>
        </div>
        <button
          type="button"
          onClick={() => setChecked(gear.map(() => false))}
          className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-muted-foreground hover:text-primary"
        >
          <RotateCcw className="size-3.5" /> リセット
        </button>
      </div>
      <div className="h-1 w-full bg-paper-deep">
        <div className="h-full bg-primary transition-all duration-500" style={{ width: `${(count / gear.length) * 100}%` }} />
      </div>
      <ul className="grid md:grid-cols-2">
        {gear.map((item, i) => (
          <li key={item.name} className="border-b hairline md:odd:border-r">
            <button
              type="button"
              aria-pressed={checked[i]}
              onClick={() => setChecked((prev) => prev.map((v, j) => (j === i ? !v : v)))}
              className="group flex w-full items-start gap-5 p-6 text-left transition-colors hover:bg-card md:p-8"
            >
              <span
                className={cn(
                  "mt-1 flex size-7 shrink-0 items-center justify-center border transition-colors",
                  checked[i] ? "border-primary bg-primary text-primary-foreground" : "hairline",
                )}
              >
                {checked[i] ? <Check className="size-4" /> : null}
              </span>
              <span>
                <span className="latin text-sm text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                <span className={cn("mt-1 block font-display text-xl", checked[i] && "text-primary")}>{item.name}</span>
                <span className="mt-2 block text-sm text-muted-foreground">{item.note}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
