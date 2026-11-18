import { describe, expect, it } from "vitest";

import { contactSchema } from "@/lib/contact-schema";

const valid = {
  name: "山田",
  email: "yamada@example.com",
  inquiryType: "朝練に参加したい",
  message: "参加したいです",
};

describe("contact form rules", () => {
  it("accepts a complete submission without experience", () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
  });

  it("requires an email address in a valid format", () => {
    expect(contactSchema.safeParse({ ...valid, email: "not-an-email" }).success).toBe(false);
  });

  it("requires choosing an inquiry type", () => {
    const { inquiryType: _omit, ...rest } = valid;
    expect(contactSchema.safeParse(rest).success).toBe(false);
  });
});
