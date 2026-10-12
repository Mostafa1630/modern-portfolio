import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Skills from "@/components/skills/Skills";
import Footer from "@/components/footer/Footer";
import Services from "@/components/services/Services";
import Portfolio from "@/components/portfolio/Portfolio";
import projects from "@/data/projects.json";
import { services } from "@/data/services";
import { translations } from "@/data/translations";
import { Providers } from "./providers";

beforeEach(() => window.localStorage.clear());

describe("Skills", () => {
  it("renders every chip logo from the single sprite", () => {
    const { container } = render(
      <Providers>
        <Skills />
      </Providers>,
    );

    const uses = container.querySelectorAll(".marquee-track use");
    expect(uses.length).toBeGreaterThan(0);
    for (const use of uses) {
      expect(use.getAttribute("href")).toMatch(/^\/skills\/sprite\.svg#/);
    }

    const unique = new Set([...uses].map((u) => u.getAttribute("href")));
    expect(unique.size).toBe(31);
  });
});

describe("Services", () => {
  it("renders all three service cards with visible descriptions", () => {
    render(
      <Providers>
        <Services />
      </Providers>,
    );

    for (const service of services) {
      expect(screen.getByText(service.title.en)).toBeInTheDocument();
      expect(screen.getByText(service.desc.en)).toBeInTheDocument();
    }
  });
});

describe("Footer", () => {
  it("shows the name, role and copyright", () => {
    render(
      <Providers>
        <Footer />
      </Providers>,
    );

    expect(document.querySelector("footer")).not.toBeNull();
    expect(screen.getByText(new RegExp(translations.en.footer.role))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(translations.en.footer.rights))).toBeInTheDocument();
  });
});

describe("Portfolio", () => {
  it("renders every project title from projects.json", () => {
    render(
      <Providers>
        <Portfolio />
      </Providers>,
    );

    for (const project of projects) {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    }
  });
});
