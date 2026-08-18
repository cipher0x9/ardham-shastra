import {
  Card,
  createEmptyCard,
  fsrs,
  Rating,
  type Grade,
  generatorParameters,
} from "ts-fsrs";
import type { RatingLabel, StoredCard } from "./types";

const scheduler = fsrs(
  generatorParameters({
    request_retention: 0.9,
    enable_fuzz: true,
    enable_short_term: true,
  }),
);

export const RATING_TO_GRADE: Record<RatingLabel, Grade> = {
  again: Rating.Again,
  hard: Rating.Hard,
  good: Rating.Good,
  easy: Rating.Easy,
};

export function newStoredCard(cardId: string, now = new Date()): StoredCard {
  return toStored(cardId, createEmptyCard(now));
}

export function reviewCard(
  stored: StoredCard,
  rating: RatingLabel,
  now = new Date(),
): StoredCard {
  const card = fromStored(stored);
  const scheduling = scheduler.next(card, now, RATING_TO_GRADE[rating]);
  return toStored(stored.cardId, scheduling.card);
}

export function isDue(stored: StoredCard, now = new Date()): boolean {
  return new Date(stored.due).getTime() <= now.getTime();
}

export function previewIntervals(stored: StoredCard, now = new Date()) {
  const card = fromStored(stored);
  const log = scheduler.repeat(card, now);
  return {
    again: log[Rating.Again].card.due,
    hard: log[Rating.Hard].card.due,
    good: log[Rating.Good].card.due,
    easy: log[Rating.Easy].card.due,
  };
}

function toStored(cardId: string, card: Card): StoredCard {
  return {
    cardId,
    due: card.due.toISOString(),
    stability: card.stability,
    difficulty: card.difficulty,
    elapsed_days: card.elapsed_days,
    scheduled_days: card.scheduled_days,
    reps: card.reps,
    lapses: card.lapses,
    state: card.state,
    last_review: card.last_review ? card.last_review.toISOString() : null,
    learning_steps: card.learning_steps,
  };
}

function fromStored(stored: StoredCard): Card {
  return {
    due: new Date(stored.due),
    stability: stored.stability,
    difficulty: stored.difficulty,
    elapsed_days: stored.elapsed_days,
    scheduled_days: stored.scheduled_days,
    reps: stored.reps,
    lapses: stored.lapses,
    state: stored.state,
    last_review: stored.last_review ? new Date(stored.last_review) : undefined,
    learning_steps: stored.learning_steps,
  };
}
