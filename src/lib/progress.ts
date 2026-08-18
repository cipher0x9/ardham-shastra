import type { ProgressState, ProofEntry, RatingLabel, StoredCard } from "./types";
import { isDue, newStoredCard, reviewCard } from "./scheduler";
import { allCards } from "@/content/modules";
import { todayKey } from "./format";

const KEY = "ardham-shastra/progress/v2";

export function emptyProgress(now = new Date()): ProgressState {
  return {
    version: 2,
    cards: {},
    completedLessons: [],
    proofs: [],
    startedAt: now.toISOString(),
    reviewStreak: 0,
    reviewsToday: 0,
  };
}

export function loadProgress(): ProgressState {
  if (typeof window === "undefined") return emptyProgress();
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return emptyProgress();
    const parsed = JSON.parse(raw) as ProgressState;
    if (parsed.version !== 2) return emptyProgress();
    return {
      ...emptyProgress(),
      ...parsed,
      cards: parsed.cards ?? {},
      completedLessons: parsed.completedLessons ?? [],
      proofs: parsed.proofs ?? [],
    };
  } catch {
    return emptyProgress();
  }
}

export function saveProgress(state: ProgressState) {
  window.localStorage.setItem(KEY, JSON.stringify(state));
}

export function exportProgressJson(state: ProgressState): string {
  return JSON.stringify(state, null, 2);
}

export function ensureCard(state: ProgressState, cardId: string): StoredCard {
  const existing = state.cards[cardId];
  if (existing) return existing;
  const created = newStoredCard(cardId);
  state.cards[cardId] = created;
  return created;
}

function bumpReviewMeta(state: ProgressState, now = new Date()): ProgressState {
  const day = todayKey(now);
  const prevDay = state.lastReviewDay;
  let streak = state.reviewStreak ?? 0;
  if (prevDay !== day) {
    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);
    const wasYesterday = prevDay === todayKey(yesterday);
    streak = wasYesterday ? streak + 1 : 1;
  }
  return {
    ...state,
    lastReviewDay: day,
    reviewStreak: streak,
    reviewsToday: prevDay === day ? (state.reviewsToday ?? 0) + 1 : 1,
  };
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
  return bumpReviewMeta(next, now);
}

export function markLessonComplete(state: ProgressState, lessonId: string): ProgressState {
  if (state.completedLessons.includes(lessonId)) return state;
  return {
    ...state,
    completedLessons: [...state.completedLessons, lessonId],
  };
}

export function addProof(state: ProgressState, proof: ProofEntry): ProgressState {
  const without = state.proofs.filter((item) => item.moduleSlug !== proof.moduleSlug);
  return { ...state, proofs: [...without, proof] };
}

export function setFocusSkill(state: ProgressState, skill: string): ProgressState {
  return { ...state, focusSkill: skill.trim() };
}

export function completeOnboarding(state: ProgressState): ProgressState {
  return { ...state, onboardingDone: true };
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
    streak: state.reviewStreak ?? 0,
    today: state.reviewsToday ?? 0,
  };
}
