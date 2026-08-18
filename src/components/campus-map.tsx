"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { MODULES, PILLAR_META } from "@/content/modules";
import type { Pillar } from "@/lib/types";
import { mandalaRetrievalPercent, mandalaStatus, sealedSlugs } from "@/lib/dashboard";
import { useProgress } from "@/lib/use-progress";
import { Badge, Panel } from "./ui";

const PILLAR_ORDER: Pillar[] = ["siksa", "panini", "nyaya", "memory", "path"];

const STATUS_BADGE = {
  new: { tone: "dim" as const, label: "new" },
  learning: { tone: "lotus" as const, label: "in progress" },
  sealed: { tone: "leaf" as const, label: "sealed" },
};

export function CampusMap() {
  const { state, ready } = useProgress();
  const [query, setQuery] = useState("");
  const [pillar, setPillar] = useState<Pillar | "all">("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return MODULES.filter((mod) => {
      if (pillar !== "all" && mod.pillar !== pillar) return false;
      if (!q) return true;
      return (
        mod.title.toLowerCase().includes(q) ||
        mod.promise.toLowerCase().includes(q) ||
        mod.sanskrit.toLowerCase().includes(q)
      );
    });
  }, [query, pillar]);

  if (!ready) return null;

  const sealed = sealedSlugs(state);

  return (
    <div>
      <Panel className="mb-8 flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search mandalas…"
          className="flex-1 rounded-xl border border-palm/15 bg-ink px-4 py-2 text-sm text-palm outline-none focus:border-gold"
        />
        <div className="flex flex-wrap gap-2">
          <FilterChip active={pillar === "all"} onClick={() => setPillar("all")}>
            All
          </FilterChip>
          {PILLAR_ORDER.map((key) => (
            <FilterChip key={key} active={pillar === key} onClick={() => setPillar(key)}>
              {PILLAR_META[key].title}
            </FilterChip>
          ))}
        </div>
      </Panel>

      {PILLAR_ORDER.map((key) => {
        const mods = filtered.filter((mod) => mod.pillar === key);
        if (mods.length === 0) return null;
        const meta = PILLAR_META[key];
        return (
          <section key={key} className="mb-12">
            <h3 className="font-serif text-2xl text-gold">
              {meta.title}{" "}
              <span className="text-base font-sans text-palm-dim">· {meta.sanskrit}</span>
            </h3>
            <p className="mb-4 mt-1 text-sm text-palm-dim">{meta.blurb}</p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {mods.map((mod) => {
                const status = mandalaStatus(state, mod);
                const badge = STATUS_BADGE[status];
                const pct = mandalaRetrievalPercent(state, mod);
                return (
                  <Link
                    key={mod.slug}
                    href={`/mandala/${mod.slug}/`}
                    className="group rounded-xl border border-palm/10 bg-ink-2/50 p-4 transition hover:-translate-y-0.5 hover:border-gold/40 hover:bg-ink-2 hover:shadow-[0_8px_30px_rgba(201,162,39,0.08)]"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-xs text-gold">{String(mod.number).padStart(2, "0")}</p>
                      <Badge tone={badge.tone}>{badge.label}</Badge>
                    </div>
                    <p className="mt-1 font-serif text-lg text-palm group-hover:text-gold">
                      {mod.title}
                    </p>
                    <p className="mt-2 line-clamp-2 text-sm text-palm-dim">{mod.promise}</p>
                    <div className="mt-3 h-1 overflow-hidden rounded-full bg-ink">
                      <div
                        className="h-full bg-gold/70 transition-all"
                        style={{ width: `${sealed.has(mod.slug) ? 100 : pct}%` }}
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-3 py-1 text-xs ${
        active
          ? "bg-gold/15 text-gold"
          : "border border-palm/10 text-palm-dim hover:text-palm"
      }`}
    >
      {children}
    </button>
  );
}
