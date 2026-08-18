"use client";

import { useMemo, useState } from "react";
import { MODULES } from "@/content/modules";
import { auditSyllogism, type Syllogism } from "@/lib/nyaya";
import { retentionStats } from "@/lib/progress";
import { useProgress } from "@/lib/use-progress";

const empty: Syllogism = {
  pratijna: "",
  hetu: "",
  udaharana: "",
  upanaya: "",
  nigamana: "",
};

const FIELDS: { key: keyof Syllogism; label: string }[] = [
  { key: "pratijna", label: "Pratijñā — proposition" },
  { key: "hetu", label: "Hetu — reason" },
  { key: "udaharana", label: "Udāharaṇa — example / vyāpti" },
  { key: "upanaya", label: "Upanaya — application" },
  { key: "nigamana", label: "Nigamana — conclusion" },
];

export default function ProvePage() {
  const { state, ready } = useProgress();
  const stats = retentionStats(state);
  const [form, setForm] = useState<Syllogism>(empty);
  const issues = useMemo(() => auditSyllogism(form), [form]);

  return (
    <main className="space-y-10">
      <header>
        <h2 className="font-serif text-4xl text-palm">Prove</h2>
        <p className="mt-3 max-w-2xl text-palm-dim">
          Local ledger of gates you sealed, plus a Nyāya bench for claims. Nothing leaves this
          browser unless you copy it out.
        </p>
      </header>

      <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat label="Lessons marked" value={stats.lessons} />
        <Stat label="Gates sealed" value={stats.proofs} />
        <Stat label="Cards touched" value={stats.reviewed} />
        <Stat label="Mandalas" value={MODULES.length} />
      </dl>

      <section>
        <h3 className="font-serif text-2xl text-gold">Sealed gates</h3>
        {!ready ? (
          <p className="mt-2 text-sm text-palm-dim">Reading local ledger…</p>
        ) : state.proofs.length === 0 ? (
          <p className="mt-2 text-sm text-palm-dim">No proofs yet. Finish a mandala gate.</p>
        ) : (
          <ul className="mt-4 space-y-3">
            {state.proofs.map((proof) => {
              const mod = MODULES.find((item) => item.slug === proof.moduleSlug);
              return (
                <li key={`${proof.moduleSlug}-${proof.at}`} className="rounded-xl border border-leaf/30 p-4">
                  <p className="text-gold">{mod?.title ?? proof.moduleSlug}</p>
                  <p className="text-sm text-palm">{proof.artifact}</p>
                  <p className="text-xs text-palm-dim">
                    Taught: {proof.taughtWhom} · {proof.at.slice(0, 10)}
                  </p>
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
              <span className="text-palm">{field.label}</span>
              <textarea
                value={form[field.key]}
                onChange={(event) =>
                  setForm((current) => ({ ...current, [field.key]: event.target.value }))
                }
                className="mt-1 min-h-20 w-full rounded-xl border border-palm/15 bg-ink p-3 text-palm"
              />
            </label>
          ))}
        </div>
        <ul className="mt-4 space-y-1 text-sm">
          {issues.length === 0 ? (
            <li className="text-leaf">Sound enough to show another mind.</li>
          ) : (
            issues.map((issue) => (
              <li key={issue.field + issue.message} className="text-saffron">
                {issue.message}
              </li>
            ))
          )}
        </ul>
      </section>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl border border-gold/20 bg-ink-2/70 p-4">
      <dt className="text-xs uppercase tracking-wider text-palm-dim">{label}</dt>
      <dd className="font-serif text-3xl text-gold">{value}</dd>
    </div>
  );
}
