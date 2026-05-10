// app/contact/page.tsx
import { ContactForm } from "@/features/contact/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Luminae. Tell us about your concerns and we will get back to you as soon as possible.",
};

export default function ContactPage() {
  return (
    <main className="w-full flex-1">
      <ContactForm />
    </main>
  );
}
