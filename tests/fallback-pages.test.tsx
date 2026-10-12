import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NotFound from "@/app/not-found";
import Offline from "@/app/offline/page";
import ErrorPage from "@/app/error";

describe("Fallback pages", () => {
  it("not-found shows the 404 heading and a home link", () => {
    render(<NotFound />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("404");
    expect(screen.getByRole("link", { name: /back to home/i })).toHaveAttribute("href", "/");
  });

  it("offline page shows the offline heading", () => {
    render(<Offline />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("You are offline");
    expect(screen.getByRole("link", { name: /retry/i })).toBeInTheDocument();
  });

  it("error page calls reset when Try again is clicked", async () => {
    const user = userEvent.setup();
    const reset = vi.fn();
    render(<ErrorPage error={new Error("boom")} reset={reset} />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Something went wrong");
    await user.click(screen.getByRole("button", { name: /try again/i }));
    expect(reset).toHaveBeenCalledTimes(1);
  });
});
