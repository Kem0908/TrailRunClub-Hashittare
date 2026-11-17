import { zodResolver } from "@hookform/resolvers/zod";
import { useServerFn } from "@tanstack/react-start";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  contactSchema,
  experienceLevels,
  inquiryTypes,
  type ContactInput,
} from "@/lib/contact-schema";
import { submitContact } from "@/lib/contact.functions";
import { cn } from "@/lib/utils";

function Chips<T extends string>({
  options,
  value,
  onChange,
  name,
}: {
  options: readonly T[];
  value: T | undefined;
  onChange: (v: T) => void;
  name: string;
}) {
  return (
    <div role="radiogroup" aria-label={name} className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const active = value === opt;
        return (
          <button
            key={opt}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(opt)}
            className={cn(
              "border px-4 py-2 text-sm transition-colors",
              active
                ? "border-foreground bg-foreground text-background"
                : "hairline bg-transparent hover:border-foreground",
            )}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

const fieldClass =
  "h-12 rounded-none border-0 border-b hairline bg-transparent px-0 text-base shadow-none focus-visible:border-primary focus-visible:ring-0";

export function ContactForm() {
  const send = useServerFn(submitContact);
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (values: ContactInput) => {
    setStatus("idle");
    try {
      const res = await send({ data: values });
      if (res.ok) {
        setStatus("sent");
        reset({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="border hairline bg-card p-10 text-center">
        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check />
        </div>
        <h3 className="mt-6 text-2xl">送信ありがとうございます！</h3>
        <p className="mt-3 text-sm text-muted-foreground">
          内容を確認のうえ、ご入力いただいたメールアドレスへご連絡します。一緒に走れるのを楽しみにしています。
        </p>
        <Button variant="editorial" className="mt-8" onClick={() => setStatus("idle")}>
          もう一度送る
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-9">
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <Label htmlFor="name" className="eyebrow">
            お名前 *
          </Label>
          <Input id="name" autoComplete="name" className={fieldClass} {...register("name")} />
          {errors.name ? <p className="mt-2 text-xs text-destructive">{errors.name.message}</p> : null}
        </div>
        <div>
          <Label htmlFor="email" className="eyebrow">
            メールアドレス *
          </Label>
          <Input id="email" type="email" autoComplete="email" className={fieldClass} {...register("email")} />
          {errors.email ? <p className="mt-2 text-xs text-destructive">{errors.email.message}</p> : null}
        </div>
      </div>

      <div>
        <p className="eyebrow mb-3">お問い合わせの種類 *</p>
        <Controller
          control={control}
          name="inquiryType"
          render={({ field }) => (
            <Chips name="お問い合わせの種類" options={inquiryTypes} value={field.value} onChange={field.onChange} />
          )}
        />
        {errors.inquiryType ? (
          <p className="mt-2 text-xs text-destructive">{errors.inquiryType.message}</p>
        ) : null}
      </div>

      <div>
        <p className="eyebrow mb-3">トレイルランの経験</p>
        <Controller
          control={control}
          name="experience"
          render={({ field }) => (
            <Chips name="トレイルランの経験" options={experienceLevels} value={field.value} onChange={field.onChange} />
          )}
        />
      </div>

      <div>
        <Label htmlFor="message" className="eyebrow">
          メッセージ *
        </Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="参加したい日程、走力、気になることなど、お気軽にどうぞ。"
          className="mt-2 rounded-none border hairline bg-card text-base shadow-none focus-visible:border-primary focus-visible:ring-0"
          {...register("message")}
        />
        {errors.message ? <p className="mt-2 text-xs text-destructive">{errors.message.message}</p> : null}
      </div>

      {status === "error" ? (
        <p className="text-sm text-destructive">
          送信できませんでした。時間をおいてもう一度お試しいただくか、SNSからご連絡ください。
        </p>
      ) : null}

      <Button type="submit" variant="rust" size="xl" disabled={isSubmitting} className="w-full md:w-auto">
        {isSubmitting ? "送信中…" : "この内容で送信する"}
        <ArrowRight />
      </Button>
    </form>
  );
}
