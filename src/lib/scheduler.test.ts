import { describe, expect, it } from "vitest";
import { isDue, newStoredCard, reviewCard } from "./scheduler";

describe("FSRS-6 wrapper", () => {
  it("marks a fresh card due immediately", () => {
    const now = new Date("2026-08-18T12:00:00Z");
    const card = newStoredCard("demo:1", now);
    expect(isDue(card, now)).toBe(true);
    expect(card.reps).toBe(0);
  });

  it("pushes Good reviews into the future and increments reps", () => {
    const now = new Date("2026-08-18T12:00:00Z");
    const card = newStoredCard("demo:1", now);
    const next = reviewCard(card, "good", now);
    expect(next.reps).toBeGreaterThan(card.reps);
    expect(new Date(next.due).getTime()).toBeGreaterThan(now.getTime());
  });

  it("keeps Again closer than Easy", () => {
    const now = new Date("2026-08-18T12:00:00Z");
    const card = newStoredCard("demo:1", now);
    const again = reviewCard(card, "again", now);
    const easy = reviewCard(card, "easy", now);
    expect(new Date(easy.due).getTime()).toBeGreaterThan(new Date(again.due).getTime());
  });
});
