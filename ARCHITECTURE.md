# Architecture — Ardham Shastra v2

The v1 campus was a 12 MB generated HTML file plus Python appenders. It taught a real method and then hid that method inside an unreviewable blob. v2 is the same intellectual project with an engineering spine.

## Constraints we kept

- Offline-first. `output: "export"` so `pnpm build` emits a static campus.
- No account. Progress is a ledger in `localStorage` (`ardham-shastra/progress/v2`).
- MIT. Curriculum markdown in `curriculum/` remains the deep packs.
- Forty mandalas. The map did not shrink to a landing page.

## Constraints we added

- TypeScript strict, including `noUncheckedIndexedAccess`.
- FSRS-6 (`ts-fsrs`) instead of SM-2 folklore or a hand-rolled ease factor.
- Retrieval before reveal. Ratings feed the scheduler; peeking is a visible choice.
- Nyāya as a typed five-member proof with an auditor, not a metaphor in a sidebar.
- CI: unit tests, `tsc`, production build.

## Runtime map

```
src/content/modules.ts     40 mandalas, cards, gates
src/content/playbook.ts    loop, seven steps, 90-day arc, RTMA, LICC
src/lib/scheduler.ts       FSRS-6 serialize/deserialize
src/lib/progress.ts        local ledger
src/lib/nyaya.ts           pañcāvayava audit
src/app/                   static App Router surfaces
legacy/                    v1 HTML + generators, frozen
```

Routes compose screens. Domain modules own rules. Client islands own the ledger and the drill. Nothing in `app/` talks to a database.

## Pedagogy map

| Campus name | Operator | 2026 grounding |
|---|---|---|
| Śikṣā | Daily loop, closed-book first | Retrieval practice, spacing, sleep consolidation |
| Pāṇini | Finite grammar + exceptions | Generative rules, worked examples then fade |
| Nyāya | Pramāṇa + five-member proof | Eval rubrics, fallacy taxonomy |
| Smṛti | FSRS-6 | Stability/difficulty model, target 90% retrievability |
| Mārga | 90-day proof arc | Deliberate practice + public artifact |

Labels in `curriculum/` still apply: SOURCE-FAITHFUL, BRIDGE, INVENTION. Do not silently upgrade a bridge into a historical claim.

## Verification

```bash
pnpm test
pnpm typecheck
pnpm build
```

Behavioral proof of the scheduler: `src/lib/scheduler.test.ts` (Again interval < Easy; Good increments reps).

Behavioral proof of the catalog: forty unique slugs, unique card ids, every mandala has a gate.

## What we refused

- A SaaS wrapper around the same HTML.
- An LLM tutor that answers before the student retrieves.
- SM-2 presented as modern memory science.
- Deleting v1. It is in `legacy/` because transmission includes history.
