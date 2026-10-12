import { beforeEach, describe, expect, it } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "@/components/navbar/Navbar";
import { Providers } from "./providers";

beforeEach(() => window.localStorage.clear());

describe("Navbar", () => {
  it("renders the three social links inside one pill", () => {
    render(
      <Providers>
        <Navbar />
      </Providers>,
    );

    const pill = document.querySelector(".icon-ring");
    expect(pill).not.toBeNull();

    const links = pill!.querySelectorAll("a");
    expect(links).toHaveLength(3);
    expect(links[0]).toHaveAttribute("href", expect.stringContaining("github.com/Mostafa1630"));
    expect(links[1]).toHaveAttribute("href", expect.stringContaining("linkedin.com/in/"));
    expect(links[2]).toHaveAttribute("href", expect.stringContaining("drive.google.com"));
    for (const link of links) {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", expect.stringContaining("noreferrer"));
    }
  });

  it("has the spinning arc svg with a 1/8-perimeter dash", () => {
    render(
      <Providers>
        <Navbar />
      </Providers>,
    );

    const rect = document.querySelector(".icon-ring-line rect");
    expect(rect).not.toBeNull();
    expect(rect).toHaveAttribute("pathLength", "100");
    expect(rect!.getAttribute("stroke-dasharray")).toBe("12.5 87.5");
  });

  it("switches the document language direction on toggle", async () => {
    const user = userEvent.setup();
    render(
      <Providers>
        <Navbar />
      </Providers>,
    );

    await user.click(screen.getByRole("button", { name: "Switch language" }));

    await waitFor(() => {
      expect(document.documentElement.lang).toBe("ar");
      expect(document.documentElement.dir).toBe("rtl");
    });
  });
});
