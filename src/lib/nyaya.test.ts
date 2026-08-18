import { describe, expect, it } from "vitest";
import { auditSyllogism, isSound } from "./nyaya";

describe("nyaya audit", () => {
  it("rejects slogans", () => {
    const issues = auditSyllogism({
      pratijna: "AI is smart",
      hetu: "because",
      udaharana: "see twitter",
      upanaya: "so",
      nigamana: "QED",
    });
    expect(issues.length).toBeGreaterThan(0);
    expect(isSound({
      pratijna: "AI is smart",
      hetu: "because",
      udaharana: "see twitter",
      upanaya: "so",
      nigamana: "QED",
    })).toBe(false);
  });

  it("accepts a full five-member proof whose conclusion restates the claim", () => {
    const syllogism = {
      pratijna: "Retrieval practice beats rereading for long retention.",
      hetu: "Because producing a memory trace strengthens the cue-target link more than restudy.",
      udaharana: "Roediger and Karpicke showed testing outperforms restudy on delayed tests.",
      upanaya: "This campus item is a delayed retention task of the same kind.",
      nigamana: "Therefore retrieval practice beats rereading for long retention.",
    };
    expect(auditSyllogism(syllogism)).toEqual([]);
    expect(isSound(syllogism)).toBe(true);
  });
});
