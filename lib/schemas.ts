import { z } from "zod";

import { isValidEmail, normalizeEmail } from "@/lib/email-validation";

const emailSchema = z
  .string()
  .transform(normalizeEmail)
  .refine(isValidEmail, {
    message: "Please enter a valid email address.",
  });

const marketingConsentSchema = z
  .preprocess(
    (value) => value === true || value === "true" || value === "on",
    z.boolean(),
  )
  .refine((value) => value, {
    message: "Please agree to receive email communication before submitting.",
  });

export const leadSchema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  email: emailSchema,
  phone: z.string().min(6),
  serviceInterest: z.string().min(2),
  message: z.string().min(10),
  marketingConsent: marketingConsentSchema,
  context: z.enum(["contact", "consultation"]),
  turnstileToken: z.string().optional(),
  hubspotTrackingCookie: z.string().optional(),
});

export const estimateSchema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  email: emailSchema,
  phone: z.string().min(6),
  companySize: z.string().min(1),
  locationBand: z.string().min(1),
  supportTier: z.string().min(1),
  cameraBand: z.string().min(1),
  networkScope: z.string().min(1),
  complianceLevel: z.string().min(1),
  serviceMix: z.array(z.string()).min(1),
  notes: z.string().optional(),
  turnstileToken: z.string().optional(),
  hubspotTrackingCookie: z.string().optional(),
});

export const checklistLeadSchema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  email: emailSchema,
  phone: z.string().optional(),
  marketingConsent: marketingConsentSchema,
  score: z.number().min(0).max(50),
  maxScore: z.literal(50),
  scorePercent: z.number().min(0).max(100),
  scoreBandId: z.enum(["excellent", "good", "needs-attention", "high-risk"]),
  scoreBandLabel: z.string().min(2),
  categoryScores: z
    .array(
      z.object({
        categoryId: z.string().min(2),
        category: z.string().min(2),
        score: z.number().min(0).max(5),
        maxScore: z.literal(5),
      }),
    )
    .length(10),
  hubspotTrackingCookie: z.string().optional(),
});
