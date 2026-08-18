"use client";

import Link from "next/link";
import { MODULES } from "@/content/modules";
import type { Module } from "@/lib/types";
import { mandalaRetrievalPercent, mandalaStatus } from "@/lib/dashboard";
import { useProgress } from "@/lib/use-progress";
import { GateForm } from "./gate-form";
import { RetrievalDrill } from "./retrieval-drill";
import { Badge, Panel } from "./ui";

export function MandalaRoom({ mod }: { mod: Module }) {
  const { state, ready } = useProgress();
  const status = ready ? mandalaStatus(state, mod) : "new";
  const pct = ready ? mandalaRetrievalPercent(state, mod) : 0;
  const prevSlug = MODULES.find((m) => m.number === mod.number - 1)?.slug;
  const nextSlug = MODULES.find((m) => m.number === mod.number + 1)?.slug;

  return (
    <>
      <div className="mb-8 flex flex-wrap items-center gap-3">
        <Badge tone={status === "sealed" ? "leaf" : status === "learning" ? "lotus" : "dim"}>
          {status === "sealed" ? "gate sealed" : status === "learning" ? "in progress" : "new"}
        </Badge>
        <span className="text-sm text-palm-dim">{pct}% cards retrieved at least once</span>
      </div>

      <Panel className="mb-10 p-4">
        <p className="text-xs uppercase tracking-wider text-gold">Three moves in this room</p>
        <ol className="mt-3 grid gap-2 text-sm sm:grid-cols-3">
          <li className="rounded-lg border border-palm/10 bg-ink/50 p-3">
            <strong className="text-palm">1 · Read</strong>
            <span className="text-palm-dim"> — once, no highlight marathon</span>
          </li>
          <li className="rounded-lg border border-palm/10 bg-ink/50 p-3">
            <strong className="text-palm">2 · Retrieve</strong>
            <span className="text-palm-dim"> — write, reveal, rate</span>
          </li>
          <li className="rounded-lg border border-palm/10 bg-ink/50 p-3">
            <strong className="text-palm">3 · Prove</strong>
            <span className="text-palm-dim"> — artifact + teach</span>
          </li>
        </ol>
      </Panel>

      <section className="mt-12">
        <h3 className="mb-4 font-serif text-2xl text-gold">Retrieve</h3>
        <RetrievalDrill cards={mod.cards} title={`Mandala ${mod.number}`} />
      </section>

      <section className="mt-12">
        <GateForm module={mod} />
      </section>

      <nav className="mt-12 flex flex-wrap justify-between gap-4 border-t border-palm/10 pt-8 text-sm">
        {prevSlug ? (
          <Link href={`/mandala/${prevSlug}/`} className="text-gold hover:underline">
            ← Mandala {String(mod.number - 1).padStart(2, "0")}
          </Link>
        ) : (
          <span />
        )}
        <Link href="/" className="text-palm-dim hover:text-gold">
          Campus map
        </Link>
        {nextSlug ? (
          <Link href={`/mandala/${nextSlug}/`} className="text-gold hover:underline">
            Mandala {String(mod.number + 1).padStart(2, "0")} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </>
  );
}
