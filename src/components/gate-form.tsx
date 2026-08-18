"use client";

import { useState } from "react";
import type { Module } from "@/lib/types";
import { addProof } from "@/lib/progress";
import { useProgress } from "@/lib/use-progress";
import { Badge, Button, Panel } from "./ui";

export function GateForm({ module }: { module: Module }) {
  const { state, commit, ready } = useProgress();
  const existing = state.proofs.find((proof) => proof.moduleSlug === module.slug);
  const [artifact, setArtifact] = useState(existing?.artifact ?? "");
  const [taughtWhom, setTaughtWhom] = useState(existing?.taughtWhom ?? "");
  const [saved, setSaved] = useState(Boolean(existing));

  return (
    <Panel className="border-saffron/25 p-5">
      <div className="flex flex-wrap items-center gap-2">
        <p className="text-xs uppercase tracking-[0.2em] text-saffron">Green gate</p>
        {saved ? <Badge tone="leaf">sealed</Badge> : <Badge tone="saffron">proof required</Badge>}
      </div>
      <p className="mt-3 font-serif text-xl text-palm">{module.gate.prompt}</p>
      <p className="mt-2 text-sm text-palm-dim">
        Expected artifact: <span className="text-palm">{module.gate.artifact}</span>
      </p>
      <form
        className="mt-4 space-y-3"
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
        <label className="block text-sm">
          <span className="text-palm-dim">What exists in the world now?</span>
          <textarea
            required
            minLength={12}
            value={artifact}
            onChange={(event) => setArtifact(event.target.value)}
            className="mt-1 min-h-24 w-full rounded-xl border border-palm/15 bg-ink p-3 text-palm outline-none focus:border-gold"
            placeholder="Describe the file, recording, or proof someone could find without you."
          />
        </label>
        <label className="block text-sm">
          <span className="text-palm-dim">Whom did you teach?</span>
          <input
            required
            minLength={2}
            value={taughtWhom}
            onChange={(event) => setTaughtWhom(event.target.value)}
            className="mt-1 w-full rounded-xl border border-palm/15 bg-ink p-3 text-palm outline-none focus:border-gold"
            placeholder="A person, a future-you voice note, a student"
          />
        </label>
        <Button type="submit" disabled={!ready}>
          {saved ? "Update proof" : "Seal the gate"}
        </Button>
      </form>
    </Panel>
  );
}
