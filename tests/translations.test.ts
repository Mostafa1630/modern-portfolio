import { describe, expect, it } from "vitest";
import { translations } from "@/data/translations";

type Tree = Record<string, unknown>;

const flatten = (obj: Tree, prefix = ""): string[] =>
  Object.entries(obj).flatMap(([key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    if (typeof value === "string") return [path];
    return flatten(value as Tree, path);
  });

const get = (obj: Tree, path: string): unknown =>
  path.split(".").reduce<unknown>((acc, key) => (acc as Tree)[key], obj);

describe("translations", () => {
  const arKeys = flatten(translations.ar as Tree);
  const enKeys = flatten(translations.en as Tree);

  it("arabic and english have exactly the same keys", () => {
    expect([...arKeys].sort()).toEqual([...enKeys].sort());
  });

  it("has no empty translation values", () => {
    for (const key of enKeys) {
      expect(String(get(translations.en as Tree, key)).trim()).not.toBe("");
      expect(String(get(translations.ar as Tree, key)).trim()).not.toBe("");
    }
  });
});
