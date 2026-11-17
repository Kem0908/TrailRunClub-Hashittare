import { z } from "zod";

export const inquiryTypes = ["朝練に参加したい", "山行に参加したい", "質問・その他"] as const;
export const experienceLevels = ["トレイルは初めて", "何回か経験あり", "レース経験あり"] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(1, "お名前を入力してください").max(100, "お名前は100文字以内でお願いします"),
  email: z
    .string()
    .trim()
    .min(1, "メールアドレスを入力してください")
    .email("メールアドレスの形式が正しくありません")
    .max(255, "メールアドレスが長すぎます"),
  inquiryType: z.enum(inquiryTypes, { errorMap: () => ({ message: "お問い合わせの種類を選んでください" }) }),
  experience: z.enum(experienceLevels).optional(),
  message: z
    .string()
    .trim()
    .min(1, "メッセージを入力してください")
    .max(2000, "メッセージは2000文字以内でお願いします"),
});

export type ContactInput = z.infer<typeof contactSchema>;
