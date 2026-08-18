# START HERE — Ardham Shastra

## What this is (plain English)

This is not a school with lectures you binge.

It is a **method for mastering any skill**, running in your browser. Forty short rooms (mandalas) teach the method. A review queue asks you to recall them later, the way a good coach would — not every day on everything, only when you are about to forget.

Think of it as:

- a **map** of how learning actually works
- a **daily drill** that stores your scores on this computer only
- a **90-day plan** you apply to one real skill (Sanskrit, SIP, math, writing — anything)

No account. No paywall. Nothing is uploaded.

## What you do

1. Install once (below), then open the site.
2. Click **Campus**. Pick mandala 01.
3. Read it once. Do not highlight the whole page.
4. When the retrieve box appears, **write the answer from memory**, then reveal.
5. Rate honestly: Again / Hard / Good / Easy. Easy means it was too easy — do not lie to the scheduler.
6. At the green gate, type a real artifact (a file, a recording, a person you taught). That is the exam.
7. Come back tomorrow. Click **Review**. Do whatever is due. Ten minutes is enough.

When you have finished 01–04, pick **one live skill** and run it through **Path** for 90 days.

## 60 seconds to open it

You need Node.js 20+ and [pnpm](https://pnpm.io/installation).

```bash
cd ~/Build/ardham-shastra
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Offline copy you can keep: `pnpm build`, then open or serve the `out/` folder. Your review ledger stays in this browser.

## First hour (do this order)

1. **The Path** — write the vow from memory.
2. **Śikṣā** — closed-book the learning loop.
3. **Pāṇini** — one page of grammar for a skill you actually want.
4. **Nyāya** — five-step proof of one claim in that skill.
5. **Review** — rate the cards. FSRS-6 will not save a fake Easy.

## Words you will see

| Word | Meaning |
|---|---|
| Mandala | One room / module |
| Śikṣā | Training of attention, sound, recall |
| Pāṇini | Write few rules that generate many cases |
| Nyāya | How you know: evidence, not vibes |
| FSRS-6 | The scheduler that times your reviews |
| RTMA | Run, Trace, Metric, Artifact — proof you did the thing |
| LICC | Leg, ID, Counter, Capture — proof your claim can be checked |

## 90 days

In the app: **Path**. Or [`curriculum/MASTERY-PLAYBOOK-90DAY.md`](./curriculum/MASTERY-PLAYBOOK-90DAY.md).

No artifact, no claim.

## Old HTML campus

Still at [`legacy/university/v1-ARDHAM-SHASTRA.html`](./legacy/university/v1-ARDHAM-SHASTRA.html). v2 is the one to use.

*"Learn anything. Master everything. From this world to beyond."*
