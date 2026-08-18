import { describe, expect, it } from "vitest";
import { MODULES } from "@/content/modules";
import { campusSummary, mandalaStatus, nextMandala, sealedSlugs } from "./dashboard";
import { emptyProgress, addProof } from "./progress";

describe("dashboard", () => {
  it("finds the first unsealed mandala", () => {
    const state = emptyProgress();
    expect(nextMandala(state)?.slug).toBe("the-path");
  });

  it("marks sealed mandalas after proof", () => {
    let state = emptyProgress();
    state = addProof(state, {
      moduleSlug: "the-path",
      artifact: "vow.md with loop written from memory",
      taughtWhom: "future me on a voice note",
      at: new Date().toISOString(),
    });
    expect(sealedSlugs(state).has("the-path")).toBe(true);
    expect(mandalaStatus(state, MODULES[0]!)).toBe("sealed");
    expect(nextMandala(state)?.slug).toBe("siksa");
  });

  it("summarizes campus progress", () => {
    const summary = campusSummary(emptyProgress());
    expect(summary.totalMandalas).toBe(40);
    expect(summary.dueCount).toBeGreaterThan(0);
  });
});
