import { createServerFn } from "@tanstack/react-start";

import { contactSchema } from "./contact-schema";

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      name: data.name,
      email: data.email,
      inquiry_type: data.inquiryType,
      experience: data.experience ?? null,
      message: data.message,
    });
    if (error) {
      console.error("contact insert failed", error);
      return { ok: false as const };
    }
    return { ok: true as const };
  });
