import type { ProgressState, ProofEntry, StoredCard } from "./types";
import { isDue, newStoredCard, reviewCard } from "./scheduler";
import type { RatingLabel } from "./types";
import { allCards } from "@/content/modules";

const KEY = "ardham-shastra/progress/v2";

export function emptyProgress(now = new Date()): ProgressState {
  return {
    version: 2,
    cards: {},
    completedLessons: [],
    proofs: [],
    startedAt: now.toISOString(),
  };
}

export function loadProgress(): ProgressState {
  if (typeof window === "undefined") return emptyProgress();
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return emptyProgress();
    const parsed = JSON.parse(raw) as ProgressState;
    if (parsed.version !== 2) return emptyProgress();
    return parsed;
  } catch {
    return emptyProgress();
  }
}

export function saveProgress(state: ProgressState) {
  window.localStorage.setItem(KEY, JSON.stringify(state));
}

export function ensureCard(state: ProgressState, cardId: string): StoredCard {
  const existing = state.cards[cardId];
  if (existing) return existing;
  const created = newStoredCard(cardId);
  state.cards[cardId] = created;
  return created;
}

export function gradeCard(
  state: ProgressState,
  cardId: string,
  rating: RatingLabel,
  now = new Date(),
): ProgressState {
  const next = structuredClone(state);
  const card = ensureCard(next, cardId);
  next.cards[cardId] = reviewCard(card, rating, now);
  return next;
}

export function markLessonComplete(state: ProgressState, lessonId: string): ProgressState {
  if (state.completedLessons.includes(lessonId)) return state;
  return {
    ...state,
    completedLessons: [...state.completedLessons, lessonId],
  };
}

export function addProof(state: ProgressState, proof: ProofEntry): ProgressState {
  return { ...state, proofs: [...state.proofs, proof] };
}

export function dueQueue(state: ProgressState, now = new Date()) {
  return allCards()
    .map((card) => {
      const stored = state.cards[card.id] ?? newStoredCard(card.id, now);
      return { card, stored, due: isDue(stored, now) };
    })
    .filter((item) => item.due);
}

export function retentionStats(state: ProgressState) {
  const cards = Object.values(state.cards);
  const reviewed = cards.filter((card) => card.reps > 0);
  const mature = reviewed.filter((card) => card.scheduled_days >= 21);
  return {
    reviewed: reviewed.length,
    mature: mature.length,
    proofs: state.proofs.length,
    lessons: state.completedLessons.length,
  };
}
