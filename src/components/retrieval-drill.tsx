"use client";

import { useState } from "react";
import type { Card } from "@/lib/types";
import { gradeCard } from "@/lib/progress";
import { useProgress } from "@/lib/use-progress";

const RATINGS = [
  { id: "again" as const, label: "Again", hint: "lost it" },
  { id: "hard" as const, label: "Hard", hint: "costly" },
  { id: "good" as const, label: "Good", hint: "clean" },
  { id: "easy" as const, label: "Easy", hint: "too easy" },
];

export function RetrievalDrill({ cards }: { cards: Card[] }) {
  const { state, commit, ready } = useProgress();
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [attempt, setAttempt] = useState("");

  const card = cards[index];
  const remaining = cards.length - index;

  if (!card) {
    return (
      <p className="rounded-xl border border-leaf/40 bg-leaf/10 p-4 text-sm text-palm">
        Queue clear. That is retrieval, not rereading.
      </p>
    );
  }

  return (
    <section className="rounded-2xl border border-gold/25 bg-ink-2/80 p-5">
      <p className="text-xs uppercase tracking-[0.2em] text-gold">
        Closed book · {remaining} left
      </p>
      <h3 className="mt-2 font-serif text-2xl text-palm">{card.prompt}</h3>
      {card.hint && !revealed ? (
        <p className="mt-2 text-sm text-palm-dim">Hint: {card.hint}</p>
      ) : null}

      <textarea
        value={attempt}
        onChange={(event) => setAttempt(event.target.value)}
        placeholder="Write it from memory before you reveal."
        className="mt-4 min-h-28 w-full rounded-xl border border-palm/15 bg-ink p-3 text-palm outline-none focus:border-gold"
        disabled={!ready}
      />

      {!revealed ? (
        <button
          type="button"
          className="mt-4 rounded-full bg-gold px-5 py-2 text-sm font-medium text-ink"
          onClick={() => setRevealed(true)}
        >
          Reveal
        </button>
      ) : (
        <div className="mt-4 space-y-4">
          <div className="rounded-xl border border-palm/10 bg-ink p-3 text-sm leading-relaxed text-palm">
            {card.answer}
          </div>
          <p className="text-xs text-palm-dim">
            Rate the retrieval you actually did — not the one you wish you had.
            Peeking then hitting Easy poisons FSRS-6.
          </p>
          <div className="flex flex-wrap gap-2">
            {RATINGS.map((rating) => (
              <button
                key={rating.id}
                type="button"
                className="rounded-full border border-gold/30 px-4 py-2 text-sm text-palm hover:bg-gold/10"
                onClick={() => {
                  commit(gradeCard(state, card.id, rating.id));
                  setIndex((value) => value + 1);
                  setRevealed(false);
                  setAttempt("");
                }}
              >
                {rating.label}
                <span className="ml-2 text-palm-dim">{rating.hint}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
