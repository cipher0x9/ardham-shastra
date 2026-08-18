"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { MODULES } from "@/content/modules";
import { campusSummary } from "@/lib/dashboard";
import { auditSyllogism, type Syllogism } from "@/lib/nyaya";
import { exportProgressJson, retentionStats } from "@/lib/progress";
import { useProgress } from "@/lib/use-progress";
import { Badge, Button, Panel, StatTile } from "@/components/ui";

const empty: Syllogism = {
  pratijna: "",
  hetu: "",
  udaharana: "",
  upanaya: "",
  nigamana: "",
};

const FIELDS: { key: keyof Syllogism; label: string; hint: string }[] = [
  { key: "pratijna", label: "Pratijñā", hint: "What are you claiming?" },
  { key: "hetu", label: "Hetu", hint: "Why should anyone believe it?" },
  { key: "udaharana", label: "Udāharaṇa", hint: "An example where the link holds" },
  { key: "upanaya", label: "Upanaya", hint: "Apply the example to your case" },
  { key: "nigamana", label: "Nigamana", hint: "Restate the claim — same words" },
];

export default function ProvePage() {
  const { state, ready } = useProgress();
  const stats = retentionStats(state);
  const summary = campusSummary(state);
  const [form, setForm] = useState<Syllogism>(empty);
  const [copied, setCopied] = useState(false);
  const issues = useMemo(() => auditSyllogism(form), [form]);
  const sound = issues.length === 0 && form.pratijna.trim().length > 0;

  return (
    <main className="space-y-10">
      <header>
        <h2 className="font-serif text-4xl text-palm">Prove</h2>
        <p className="mt-3 max-w-2xl text-palm-dim">
          Your local ledger of sealed gates, plus a Nyāya bench for any claim. Nothing leaves this
          browser unless you copy it.
        </p>
      </header>

      <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatTile label="Gates sealed" value={`${summary.sealedCount}/40`} />
        <StatTile label="Streak" value={stats.streak} hint="review days" />
        <StatTile label="Cards touched" value={stats.reviewed} />
        <StatTile label="Mature" value={stats.mature} hint="≥21d interval" />
      </dl>

      <section>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-serif text-2xl text-gold">Sealed gates</h3>
          <Button
            variant="ghost"
            onClick={async () => {
              await navigator.clipboard.writeText(exportProgressJson(state));
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
          >
            {copied ? "Copied JSON" : "Backup ledger"}
          </Button>
        </div>
        {!ready ? (
          <p className="text-sm text-palm-dim">Reading local ledger…</p>
        ) : state.proofs.length === 0 ? (
          <Panel className="p-5 text-sm text-palm-dim">
            No proofs yet. Finish a mandala and seal its green gate.
          </Panel>
        ) : (
          <ul className="space-y-3">
            {state.proofs
              .slice()
              .reverse()
              .map((proof) => {
                const mod = MODULES.find((item) => item.slug === proof.moduleSlug);
                return (
                  <li key={`${proof.moduleSlug}-${proof.at}`}>
                    <Panel className="border-leaf/25 p-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-serif text-lg text-gold">
                          {mod?.title ?? proof.moduleSlug}
                        </p>
                        <Badge tone="leaf">sealed</Badge>
                      </div>
                      <p className="mt-2 text-sm text-palm">{proof.artifact}</p>
                      <p className="mt-1 text-xs text-palm-dim">
                        Taught: {proof.taughtWhom} · {proof.at.slice(0, 10)}
                      </p>
                      {mod ? (
                        <Link
                          href={`/mandala/${mod.slug}/`}
                          className="mt-2 inline-block text-xs text-gold hover:underline"
                        >
                          Revisit mandala
                        </Link>
                      ) : null}
                    </Panel>
                  </li>
                );
              })}
          </ul>
        )}
      </section>

      <section>
        <h3 className="font-serif text-2xl text-gold">Nyāya bench</h3>
        <p className="mt-2 text-sm text-palm-dim">
          Five members. If the conclusion drifts from the proposition, the proof changed mid-air.
        </p>
        <div className="mt-4 grid gap-3">
          {FIELDS.map((field) => (
            <label key={field.key} className="text-sm">
              <span className="text-palm">
                {field.label}{" "}
                <span className="text-palm-dim">— {field.hint}</span>
              </span>
              <textarea
                value={form[field.key]}
                onChange={(event) =>
                  setForm((current) => ({ ...current, [field.key]: event.target.value }))
                }
                className="mt-1 min-h-20 w-full rounded-xl border border-palm/15 bg-ink p-3 text-palm outline-none focus:border-gold"
              />
            </label>
          ))}
        </div>
        <Panel className={`mt-4 p-4 ${sound ? "border-leaf/30" : "border-saffron/30"}`}>
          {sound ? (
            <p className="text-leaf">Sound enough to show another mind.</p>
          ) : (
            <ul className="space-y-1 text-sm text-saffron">
              {issues.length === 0 ? (
                <li>Fill all five members with full clauses.</li>
              ) : (
                issues.map((issue) => (
                  <li key={issue.field + issue.message}>{issue.message}</li>
                ))
              )}
            </ul>
          )}
        </Panel>
      </section>
    </main>
  );
}
