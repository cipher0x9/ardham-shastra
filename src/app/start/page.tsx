"use client";

import Link from "next/link";
import { useState } from "react";
import { LOOP, SEVEN } from "@/content/playbook";
import { exportProgressJson, setFocusSkill } from "@/lib/progress";
import { useProgress } from "@/lib/use-progress";
import { Button, Panel } from "@/components/ui";

export default function StartPage() {
  const { state, commit, ready } = useProgress();
  const [skill, setSkill] = useState(state.focusSkill ?? "");
  const [copied, setCopied] = useState(false);

  return (
    <main className="space-y-12">
      <header>
        <p className="text-xs uppercase tracking-[0.25em] text-saffron">Five-minute guide</p>
        <h2 className="mt-2 font-serif text-4xl text-palm sm:text-5xl">
          How to use this campus
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-palm-dim">
          You do not need Sanskrit, philosophy, or a PhD in cognitive science. You need ten honest
          minutes and one skill you actually want.
        </p>
      </header>

      <Panel className="p-6">
        <h3 className="font-serif text-2xl text-gold">Step 0 — name your skill</h3>
        <p className="mt-2 text-sm text-palm-dim">
          The campus is the method. Your skill is the proof. SIP, Sanskrit, math, writing — pick
          one.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <input
            value={skill}
            onChange={(event) => setSkill(event.target.value)}
            className="min-w-[16rem] flex-1 rounded-xl border border-palm/15 bg-ink p-3 text-palm outline-none focus:border-gold"
            placeholder="Your focus skill"
          />
          <Button
            disabled={!ready || skill.trim().length < 2}
            onClick={() => commit(setFocusSkill(state, skill))}
          >
            Save focus
          </Button>
        </div>
        {state.focusSkill ? (
          <p className="mt-2 text-sm text-leaf">Saved: {state.focusSkill}</p>
        ) : null}
      </Panel>

      <section className="grid gap-4 md:grid-cols-2">
        {[
          {
            n: "1",
            title: "Open Campus → mandala 01",
            body: "Read once. Do not highlight the whole page.",
          },
          {
            n: "2",
            title: "Retrieve before reveal",
            body: "Write the answer from memory. Then reveal. Rate 1–4 honestly.",
          },
          {
            n: "3",
            title: "Seal the green gate",
            body: "Type a real artifact — file, recording, person taught.",
          },
          {
            n: "4",
            title: "Review daily",
            body: "Click Review in the nav. Do what is due. Ten minutes is enough.",
          },
          {
            n: "5",
            title: "Run Path for 90 days",
            body: "Apply the method to your live skill, not just the campus.",
          },
          {
            n: "6",
            title: "Prove on the bench",
            body: "Use Nyāya five-step proofs for claims in your field.",
          },
        ].map((step) => (
          <Panel key={step.n} className="p-4">
            <p className="text-xs text-gold">Step {step.n}</p>
            <p className="mt-1 font-serif text-xl text-palm">{step.title}</p>
            <p className="mt-2 text-sm text-palm-dim">{step.body}</p>
          </Panel>
        ))}
      </section>

      <section>
        <h3 className="font-serif text-2xl text-gold">Words you will see</h3>
        <dl className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            ["Mandala", "One learning room"],
            ["Śikṣā", "Training attention and recall"],
            ["Pāṇini", "Few rules that generate many cases"],
            ["Nyāya", "Evidence, not vibes"],
            ["FSRS-6", "The review scheduler"],
            ["RTMA / LICC", "Proof you did the thing"],
          ].map(([term, gloss]) => (
            <div key={term} className="rounded-xl border border-palm/10 bg-ink-2/50 p-3 text-sm">
              <dt className="text-gold">{term}</dt>
              <dd className="text-palm-dim">{gloss}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Panel className="p-5">
          <h3 className="font-serif text-xl text-gold">Daily loop</h3>
          <ol className="mt-3 space-y-2 text-sm">
            {LOOP.map((step, i) => (
              <li key={step.id}>
                <span className="text-gold">{i + 1}.</span>{" "}
                <span className="text-palm">{step.title}</span> — {step.detail}
              </li>
            ))}
          </ol>
        </Panel>
        <Panel className="p-5">
          <h3 className="font-serif text-xl text-gold">Seven-step playbook</h3>
          <ol className="mt-3 space-y-2 text-sm">
            {SEVEN.map((step) => (
              <li key={step.n}>
                <span className="text-gold">{step.n}.</span>{" "}
                <span className="text-palm">{step.title}</span> — {step.detail}
              </li>
            ))}
          </ol>
        </Panel>
      </section>

      <Panel className="p-5">
        <h3 className="font-serif text-xl text-gold">Backup your ledger</h3>
        <p className="mt-2 text-sm text-palm-dim">
          Progress stays in this browser. Copy JSON to keep a backup.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button
            variant="ghost"
            onClick={async () => {
              await navigator.clipboard.writeText(exportProgressJson(state));
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
          >
            {copied ? "Copied" : "Copy progress JSON"}
          </Button>
        </div>
      </Panel>

      <div className="flex flex-wrap gap-4">
        <Link
          href="/mandala/the-path/"
          className="rounded-full bg-gold px-6 py-2.5 text-sm font-medium text-ink"
        >
          Begin mandala 01
        </Link>
        <Link
          href="/review/"
          className="rounded-full border border-gold/30 px-6 py-2.5 text-sm text-palm hover:bg-gold/10"
        >
          Open review
        </Link>
      </div>
    </main>
  );
}
