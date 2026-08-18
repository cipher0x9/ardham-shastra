"use client";

import Link from "next/link";
import { campusSummary } from "@/lib/dashboard";
import { useProgress } from "@/lib/use-progress";
import { Badge, Panel, ProgressRing, StatTile } from "./ui";

export function CampusDashboard() {
  const { state, ready } = useProgress();
  if (!ready) return null;

  const summary = campusSummary(state);
  const focus = state.focusSkill;

  return (
    <section className="mb-12 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
      <Panel className="p-6">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gold">Today</p>
            <h2 className="mt-2 font-serif text-3xl text-palm">
              {summary.dueCount > 0
                ? `${summary.dueCount} cards waiting`
                : "Queue clear — well retrieved"}
            </h2>
            <p className="mt-2 max-w-lg text-sm text-palm-dim">
              {focus
                ? `Focus skill: ${focus}. The campus trains the method; your skill is the proof.`
                : "Name a focus skill in onboarding or on the Start page."}
            </p>
          </div>
          <div className="flex gap-4">
            <ProgressRing value={summary.campusPercent} label="sealed" />
            <ProgressRing value={summary.retrievalPercent} label="recall" />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {summary.dueCount > 0 ? (
            <Link
              href="/review/"
              className="rounded-full bg-gold px-6 py-2.5 text-sm font-medium text-ink hover:bg-gold/90"
            >
              Start review ({summary.dueCount})
            </Link>
          ) : null}
          {summary.next ? (
            <Link
              href={`/mandala/${summary.next.slug}/`}
              className="rounded-full border border-gold/30 px-6 py-2.5 text-sm text-palm hover:bg-gold/10"
            >
              Continue · {summary.next.title}
            </Link>
          ) : null}
          <Link
            href="/path/"
            className="rounded-full border border-palm/15 px-6 py-2.5 text-sm text-palm-dim hover:text-gold"
          >
            90-day path
          </Link>
        </div>
      </Panel>

      <div className="grid grid-cols-2 gap-3">
        <StatTile label="Streak" value={summary.stats.streak} hint="days with reviews" />
        <StatTile label="Today" value={summary.stats.today} hint="cards rated" />
        <StatTile
          label="Gates sealed"
          value={`${summary.sealedCount}/${summary.totalMandalas}`}
        />
        <StatTile label="Mature cards" value={summary.stats.mature} hint="≥21 day interval" />
      </div>

      {summary.dueCount === 0 && summary.sealedCount === 0 ? (
        <Panel className="col-span-full border-leaf/30 p-4 lg:col-span-2">
          <p className="text-sm text-palm">
            <Badge tone="leaf">Tip</Badge>{" "}
            <span className="ml-2">
              Open mandala 01, read once, retrieve every card, seal the green gate. Tomorrow the
              scheduler wakes up.
            </span>
          </p>
        </Panel>
      ) : null}
    </section>
  );
}
