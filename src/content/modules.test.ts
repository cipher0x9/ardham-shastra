import { describe, expect, it } from "vitest";
import { MODULES, allCards } from "./modules";

describe("campus catalog", () => {
  it("ships forty uniquely numbered mandalas", () => {
    expect(MODULES).toHaveLength(40);
    const slugs = MODULES.map((mod) => mod.slug);
    const numbers = MODULES.map((mod) => mod.number);
    expect(new Set(slugs).size).toBe(40);
    expect(new Set(numbers).size).toBe(40);
    expect(Math.min(...numbers)).toBe(1);
    expect(Math.max(...numbers)).toBe(40);
  });

  it("gives every mandala retrieval cards and a proof gate", () => {
    for (const mod of MODULES) {
      expect(mod.cards.length).toBeGreaterThanOrEqual(2);
      expect(mod.gate.prompt.length).toBeGreaterThan(20);
      expect(mod.gate.artifact.length).toBeGreaterThan(3);
      expect(mod.lessons[0]?.sections.length).toBeGreaterThan(0);
    }
    expect(allCards().length).toBeGreaterThanOrEqual(80);
  });

  it("keeps card ids unique", () => {
    const ids = allCards().map((card) => card.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
