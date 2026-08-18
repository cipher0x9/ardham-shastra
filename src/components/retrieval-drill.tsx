"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { Card, RatingLabel } from "@/lib/types";
import { gradeCard } from "@/lib/progress";
import { newStoredCard, previewIntervals } from "@/lib/scheduler";
import { formatRelativeDue } from "@/lib/format";
import { useProgress } from "@/lib/use-progress";
import { Badge, Button, Panel } from "./ui";

const RATINGS: { id: RatingLabel; label: string; hint: string; key: string }[] = [
  { id: "again", label: "Again", hint: "lost it", key: "1" },
  { id: "hard", label: "Hard", hint: "costly", key: "2" },
  { id: "good", label: "Good", hint: "clean", key: "3" },
  { id: "easy", label: "Easy", hint: "too easy", key: "4" },
];

export function RetrievalDrill({
  cards,
  title = "Retrieve",
}: {
  cards: Card[];
  title?: string;
}) {
  const { state, commit, ready } = useProgress();
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [attempt, setAttempt] = useState("");
  const [done, setDone] = useState(false);

  const card = cards[index];
  const total = cards.length;
  const progress = total === 0 ? 100 : Math.round((index / total) * 100);

  const stored = card ? state.cards[card.id] ?? newStoredCard(card.id) : undefined;

  const previews = useMemo(() => {
    if (!card || !stored) return null;
    const intervals = previewIntervals(stored);
    const now = new Date();
    return RATINGS.map((rating) => ({
      ...rating,
      next: formatRelativeDue(intervals[rating.id].toISOString(), now),
    }));
  }, [card, stored]);

  const rate = useCallback(
    (rating: RatingLabel) => {
      if (!card || !revealed) return;
      commit(gradeCard(state, card.id, rating));
      if (index + 1 >= total) {
        setDone(true);
        return;
      }
      setIndex((value) => value + 1);
      setRevealed(false);
      setAttempt("");
    },
    [card, revealed, commit, state, index, total],
  );

  useEffect(() => {
    if (!revealed || !card) return;
    const onKey = (event: KeyboardEvent) => {
      const rating = RATINGS.find((item) => item.key === event.key);
      if (rating) rate(rating.id);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [revealed, card, rate]);

  if (done || !card) {
    return (
      <Panel className="border-leaf/30 p-6 text-center">
        <p className="font-serif text-2xl text-leaf">Session complete</p>
        <p className="mt-2 text-sm text-palm-dim">
          {done
            ? "You rated every card in this queue. Come back when Review shows due again."
            : "Queue clear. That is retrieval, not rereading."}
        </p>
        {done ? (
          <Button
            className="mt-4"
            variant="ghost"
            onClick={() => {
              setDone(false);
              setIndex(0);
              setRevealed(false);
              setAttempt("");
            }}
          >
            Restart queue
          </Button>
        ) : null}
      </Panel>
    );
  }

  return (
    <Panel className="p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold">{title}</p>
          <p className="text-sm text-palm-dim">
            Card {index + 1} of {total} · closed book first
          </p>
        </div>
        <Badge tone="dim">{progress}% through queue</Badge>
      </div>

      <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-ink">
        <div className="h-full bg-gold transition-all" style={{ width: `${progress}%` }} />
      </div>

      <h3 className="font-serif text-2xl leading-snug text-palm">{card.prompt}</h3>
      {card.hint && !revealed ? (
        <p className="mt-2 text-sm text-palm-dim">Hint: {card.hint}</p>
      ) : null}

      <textarea
        value={attempt}
        onChange={(event) => setAttempt(event.target.value)}
        placeholder="Write it from memory. Do not peek."
        className="mt-4 min-h-32 w-full rounded-xl border border-palm/15 bg-ink p-4 text-palm outline-none focus:border-gold"
        disabled={!ready || revealed}
        autoFocus
      />

      {!revealed ? (
        <Button className="mt-4" onClick={() => setRevealed(true)} disabled={!ready}>
          Reveal answer
        </Button>
      ) : (
        <div className="mt-4 space-y-4">
          <div className="rounded-xl border border-palm/10 bg-ink p-4 text-sm leading-relaxed text-palm">
            {card.answer}
          </div>
          <p className="text-xs text-palm-dim">
            Rate the retrieval you actually did. Keys 1–4 work here. Easy after peeking poisons
            FSRS-6.
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            {previews?.map((rating) => (
              <button
                key={rating.id}
                type="button"
                onClick={() => rate(rating.id)}
                className="rounded-xl border border-gold/25 px-4 py-3 text-left hover:bg-gold/10"
              >
                <span className="text-palm">
                  <kbd className="mr-2 rounded bg-ink px-1.5 text-gold">{rating.key}</kbd>
                  {rating.label}
                </span>
                <span className="ml-2 text-palm-dim">{rating.hint}</span>
                <span className="mt-1 block text-xs text-gold">next in ~{rating.next}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </Panel>
  );
}
