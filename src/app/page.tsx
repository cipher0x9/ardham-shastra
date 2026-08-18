import Link from "next/link";
import { MODULES, PILLAR_META } from "@/content/modules";
import type { Pillar } from "@/lib/types";
import { LOOP } from "@/content/playbook";

const PILLAR_ORDER: Pillar[] = ["siksa", "panini", "nyaya", "memory", "path"];

export default function CampusPage() {
  return (
    <main>
      <section className="mb-14 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-saffron">v2 · rebuilt as a learning OS</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-palm sm:text-5xl">
            Forty mandalas. One method. A scheduler that does not flatter you.
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-palm-dim">
            Indian learning science — śikṣā, Pāṇini, Nyāya — fused with the findings that actually
            survive contact with memory: retrieval, spacing (FSRS-6), interleaving, desirable
            difficulty, and public proof. No account. Progress lives on this machine.
          </p>
        </div>
        <ol className="grid gap-3 self-start rounded-2xl border border-gold/20 bg-ink-2/70 p-5">
          {LOOP.map((step, i) => (
            <li key={step.id} className="flex gap-3 text-sm">
              <span className="font-serif text-gold">{String(i + 1).padStart(2, "0")}</span>
              <span>
                <span className="text-palm">{step.title}</span>
                <span className="text-palm-dim"> · {step.sanskrit} — {step.detail}</span>
              </span>
            </li>
          ))}
        </ol>
      </section>

      {PILLAR_ORDER.map((pillar) => {
        const meta = PILLAR_META[pillar];
        const mods = MODULES.filter((mod) => mod.pillar === pillar);
        return (
          <section key={pillar} className="mb-12">
            <h3 className="font-serif text-2xl text-gold">
              {meta.title}{" "}
              <span className="text-base font-sans text-palm-dim">· {meta.sanskrit}</span>
            </h3>
            <p className="mb-4 mt-1 text-sm text-palm-dim">{meta.blurb}</p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {mods.map((mod) => (
                <Link
                  key={mod.slug}
                  href={`/mandala/${mod.slug}/`}
                  className="rounded-xl border border-palm/10 bg-ink-2/50 p-4 hover:border-gold/40 hover:bg-ink-2"
                >
                  <p className="text-xs text-gold">
                    {String(mod.number).padStart(2, "0")}
                  </p>
                  <p className="font-serif text-lg text-palm">{mod.title}</p>
                  <p className="mt-2 line-clamp-3 text-sm text-palm-dim">{mod.promise}</p>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}
