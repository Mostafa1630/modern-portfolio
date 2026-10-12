import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contact from "@/components/contact/Contact";
import { translations } from "@/data/translations";
import { Providers } from "./providers";

const en = translations.en.contact;

beforeEach(() => window.localStorage.clear());

function mockWeb3Forms(body: Record<string, unknown>) {
  const fetchMock = vi.fn().mockResolvedValue({ json: async () => body });
  vi.stubGlobal("fetch", fetchMock);
  return fetchMock;
}

async function fillAndSubmit(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByPlaceholderText(en.namePlaceholder), "Test User");
  await user.type(screen.getByPlaceholderText(en.emailPlaceholder), "test@example.com");
  await user.type(screen.getByPlaceholderText(en.messagePlaceholder), "Hello there");
  await user.click(screen.getByRole("button", { name: en.submit }));
}

describe("Contact form (Web3Forms)", () => {
  it("posts the form data with an access key on submit", async () => {
    const user = userEvent.setup();
    const fetchMock = mockWeb3Forms({ success: true });
    render(
      <Providers>
        <Contact />
      </Providers>,
    );

    await fillAndSubmit(user);

    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
    const [url, options] = fetchMock.mock.calls[0];
    expect(url).toBe("https://api.web3forms.com/submit");
    expect(options.method).toBe("POST");
    const form = options.body as FormData;
    expect(form.get("name")).toBe("Test User");
    expect(form.get("email")).toBe("test@example.com");
    expect(form.get("message")).toBe("Hello there");
    expect(form.get("access_key")).toBeTruthy();
  });

  it("shows a green success toast and resets the form", async () => {
    const user = userEvent.setup();
    mockWeb3Forms({ success: true });
    render(
      <Providers>
        <Contact />
      </Providers>,
    );

    await fillAndSubmit(user);

    const toast = await screen.findByRole("status");
    expect(toast).toHaveTextContent(en.success);
    expect(toast.className).toContain("bg-green-600");
    expect(screen.getByPlaceholderText(en.namePlaceholder)).toHaveValue("");
  });

  it("shows an error message when submission fails", async () => {
    const user = userEvent.setup();
    mockWeb3Forms({ success: false });
    render(
      <Providers>
        <Contact />
      </Providers>,
    );

    await fillAndSubmit(user);

    await waitFor(() => expect(screen.getByText(en.error)).toBeInTheDocument());
    expect(screen.queryByRole("status")).toBeNull();
  });

  it("ignores double submits while sending", async () => {
    const user = userEvent.setup();
    const fetchMock = mockWeb3Forms({ success: true });
    render(
      <Providers>
        <Contact />
      </Providers>,
    );

    await fillAndSubmit(user);
    const button = screen.getByRole("button", { name: en.submit });
    await user.click(button).catch(() => {});

    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
  });
});
