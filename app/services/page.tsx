import type { Metadata } from "next";
import Parallax from "@/components/parallax/Parallax";
import Services from "@/components/services/Services";

export const metadata: Metadata = {
  title: "Services — Harvey Tyler",
  description: "What I do: branding, UI/UX design, web development and digital marketing.",
};

export default function ServicesPage() {
  return (
    <>
      <section>
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
    </>
  );
}
