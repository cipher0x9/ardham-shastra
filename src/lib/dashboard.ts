import { MODULES, allCards } from "@/content/modules";
import type { Module, ProgressState } from "./types";
import { dueQueue, retentionStats } from "./progress";
import { isDue, newStoredCard } from "./scheduler";

export type MandalaStatus = "new" | "learning" | "sealed";

export function sealedSlugs(state: ProgressState): Set<string> {
  return new Set(state.proofs.map((proof) => proof.moduleSlug));
}

export function mandalaStatus(state: ProgressState, mod: Module): MandalaStatus {
  if (sealedSlugs(state).has(mod.slug)) return "sealed";
  const touched = mod.cards.some((card) => (state.cards[card.id]?.reps ?? 0) > 0);
  return touched ? "learning" : "new";
}

export function mandalaRetrievalPercent(state: ProgressState, mod: Module): number {
  if (mod.cards.length === 0) return 0;
  const reviewed = mod.cards.filter((card) => (state.cards[card.id]?.reps ?? 0) > 0).length;
  return Math.round((reviewed / mod.cards.length) * 100);
}

export function nextMandala(state: ProgressState): Module | undefined {
  const sealed = sealedSlugs(state);
  return MODULES.find((mod) => !sealed.has(mod.slug));
}

export function campusSummary(state: ProgressState, now = new Date()) {
  const due = dueQueue(state, now);
  const stats = retentionStats(state);
  const sealed = sealedSlugs(state);
  const totalCards = allCards().length;
  const dueCount = due.length;

  return {
    dueCount,
    stats,
    sealedCount: sealed.size,
    totalMandalas: MODULES.length,
    campusPercent: Math.round((sealed.size / MODULES.length) * 100),
    retrievalPercent:
      totalCards === 0
        ? 0
        : Math.round((stats.reviewed / totalCards) * 100),
    next: nextMandala(state),
  };
}

export function upcomingReviews(state: ProgressState, now = new Date(), limit = 5) {
  return allCards()
    .map((card) => {
      const stored = state.cards[card.id] ?? newStoredCard(card.id, now);
      return { card, stored, due: isDue(stored, now) };
    })
    .sort((a, b) => new Date(a.stored.due).getTime() - new Date(b.stored.due).getTime())
    .slice(0, limit);
}
