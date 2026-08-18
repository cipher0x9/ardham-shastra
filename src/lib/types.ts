export type Pillar = "siksa" | "panini" | "nyaya" | "memory" | "path";

export type RetrievalCard = {
  id: string;
  prompt: string;
  answer: string;
  hint?: string;
};

export type Card = RetrievalCard;

export type LessonSection = {
  heading: string;
  body: string;
};

export type Lesson = {
  id: string;
  title: string;
  minutes: number;
  sections: LessonSection[];
};

export type Module = {
  slug: string;
  number: number;
  title: string;
  sanskrit: string;
  pillar: Pillar;
  promise: string;
  youWill: string[];
  lessons: Lesson[];
  cards: RetrievalCard[];
  gate: { prompt: string; artifact: string };
  pack?: string;
};

export type RatingLabel = "again" | "hard" | "good" | "easy";

export type StoredCard = {
  cardId: string;
  due: string;
  stability: number;
  difficulty: number;
  elapsed_days: number;
  scheduled_days: number;
  reps: number;
  lapses: number;
  state: number;
  last_review: string | null;
  learning_steps: number;
};

export type ProofEntry = {
  moduleSlug: string;
  artifact: string;
  taughtWhom: string;
  at: string;
};

export type ProgressState = {
  version: 2;
  cards: Record<string, StoredCard>;
  completedLessons: string[];
  proofs: ProofEntry[];
  startedAt: string;
};
