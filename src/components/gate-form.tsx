"use client";

import { useState } from "react";
import type { Module } from "@/lib/types";
import { addProof } from "@/lib/progress";
import { useProgress } from "@/lib/use-progress";

export function GateForm({ module }: { module: Module }) {
  const { state, commit, ready } = useProgress();
  const existing = state.proofs.find((proof) => proof.moduleSlug === module.slug);
  const [artifact, setArtifact] = useState(existing?.artifact ?? "");
  const [taughtWhom, setTaughtWhom] = useState(existing?.taughtWhom ?? "");
  const [saved, setSaved] = useState(Boolean(existing));

  return (
    <form
      className="space-y-3 rounded-2xl border border-saffron/30 bg-ink-2/70 p-5"
      onSubmit={(event) => {
        event.preventDefault();
        commit(
          addProof(state, {
            moduleSlug: module.slug,
            artifact: artifact.trim(),
            taughtWhom: taughtWhom.trim(),
            at: new Date().toISOString(),
          }),
        );
        setSaved(true);
      }}
    >
      <p className="text-xs uppercase tracking-[0.2em] text-saffron">Green gate · proof</p>
      <p className="font-serif text-xl text-palm">{module.gate.prompt}</p>
      <p className="text-sm text-palm-dim">Expected artifact: {module.gate.artifact}</p>
      <label className="block text-sm">
        <span className="text-palm-dim">What exists in the world now?</span>
        <textarea
          required
          minLength={12}
          value={artifact}
          onChange={(event) => setArtifact(event.target.value)}
          className="mt-1 min-h-24 w-full rounded-xl border border-palm/15 bg-ink p-3 text-palm"
        />
      </label>
      <label className="block text-sm">
        <span className="text-palm-dim">Whom did you teach, even if it was future-you on a recording?</span>
        <input
          required
          minLength={2}
          value={taughtWhom}
          onChange={(event) => setTaughtWhom(event.target.value)}
          className="mt-1 w-full rounded-xl border border-palm/15 bg-ink p-3 text-palm"
        />
      </label>
      <button
        type="submit"
        disabled={!ready}
        className="rounded-full bg-saffron px-5 py-2 text-sm font-medium text-ink"
      >
        {saved ? "Update proof" : "Seal the gate"}
      </button>
    </form>
  );
}
