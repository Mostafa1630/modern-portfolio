import type { Metadata } from "next";
import Contact from "@/components/contact/Contact";

export const metadata: Metadata = {
  title: "Contact — Harvey Tyler",
  description: "Get in touch: let's work together.",
};

export default function ContactPage() {
  return (
    <section>
      <Contact />
    </section>
  );
}
