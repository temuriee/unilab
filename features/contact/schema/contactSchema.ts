import { z } from "zod";
export const contactSchema = z.object({
  name: z
    .string()
    .min(8, "Name must be at least 8 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z.email("Please enter a valid email").min(1, "Email is required"),

  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description must be less than 500 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
