"use client";

import { RetrievalDrill } from "@/components/retrieval-drill";
import { dueQueue, retentionStats } from "@/lib/progress";
import { useProgress } from "@/lib/use-progress";

export default function ReviewPage() {
  const { state, ready } = useProgress();
  const due = ready ? dueQueue(state) : [];
  const stats = retentionStats(state);
  const cards = due.map((item) => item.card);

  return (
    <main>
      <h2 className="font-serif text-4xl text-palm">Review</h2>
      <p className="mt-3 max-w-2xl text-palm-dim">
        FSRS-6, target retention 90%. New cards are due immediately. Rate the retrieval you
        performed, not the answer you read.
      </p>
      <dl className="my-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          ["Due now", String(cards.length)],
          ["Reviewed", String(stats.reviewed)],
          ["Mature (≥21d)", String(stats.mature)],
          ["Sealed gates", String(stats.proofs)],
        ].map(([label, value]) => (
          <div key={label} className="rounded-xl border border-gold/20 bg-ink-2/70 p-4">
            <dt className="text-xs uppercase tracking-wider text-palm-dim">{label}</dt>
            <dd className="font-serif text-3xl text-gold">{value}</dd>
          </div>
        ))}
      </dl>
      {ready ? <RetrievalDrill cards={cards} /> : <p>Loading local ledger…</p>}
    </main>
  );
}
