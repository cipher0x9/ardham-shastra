"use client";

import Link from "next/link";
import { RetrievalDrill } from "@/components/retrieval-drill";
import { campusSummary } from "@/lib/dashboard";
import { dueQueue, retentionStats } from "@/lib/progress";
import { useProgress } from "@/lib/use-progress";
import { Panel, StatTile } from "@/components/ui";

export default function ReviewPage() {
  const { state, ready } = useProgress();
  const due = ready ? dueQueue(state) : [];
  const stats = retentionStats(state);
  const summary = ready ? campusSummary(state) : null;
  const cards = due.map((item) => item.card);

  return (
    <main>
      <header className="mb-8">
        <h2 className="font-serif text-4xl text-palm">Review</h2>
        <p className="mt-3 max-w-2xl text-palm-dim">
          FSRS-6 at 90% target retention. Write before reveal. Rate honestly — keys 1–4 after
          reveal. Easy means too easy.
        </p>
      </header>

      <dl className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatTile label="Due now" value={cards.length} />
        <StatTile label="Streak" value={stats.streak} hint="days" />
        <StatTile label="Rated today" value={stats.today} />
        <StatTile
          label="Campus sealed"
          value={summary ? `${summary.sealedCount}/40` : "—"}
        />
      </dl>

      {ready && cards.length === 0 ? (
        <Panel className="mb-8 border-leaf/30 p-5 text-sm text-palm">
          Nothing due right now. Open a mandala to introduce new cards, or come back later — the
          scheduler will ask again.
        </Panel>
      ) : null}

      {ready ? (
        <RetrievalDrill cards={cards} title="Daily review" />
      ) : (
        <p>Loading local ledger…</p>
      )}

      <p className="mt-8 text-sm text-palm-dim">
        New to this?{" "}
        <Link href="/start/" className="text-gold hover:underline">
          Read the five-minute guide
        </Link>
      </p>
    </main>
  );
}
