import Link from "next/link";
import { LOOP } from "@/content/playbook";
import { CampusDashboard } from "@/components/campus-dashboard";
import { CampusMap } from "@/components/campus-map";
import { Onboarding } from "@/components/onboarding";
import { Panel } from "@/components/ui";

export default function CampusPage() {
  return (
    <main>
      <Onboarding />
      <CampusDashboard />

      <section className="mb-12 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-saffron">Lifetime mastery OS</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-palm sm:text-5xl">
            Forty mandalas. One method. Memory that survives contact with reality.
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-palm-dim">
            Śikṣā trains recall. Pāṇini gives you grammars. Nyāya audits proof. FSRS-6 schedules
            reviews so you do not lie to yourself with highlights. No account — your ledger lives
            on this machine.
          </p>
          <Link
            href="/start/"
            className="mt-6 inline-block text-sm text-gold hover:underline"
          >
            New here? Read the five-minute guide →
          </Link>
        </div>
        <Panel className="p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Daily loop</p>
          <ol className="mt-4 grid gap-3">
            {LOOP.map((step, i) => (
              <li key={step.id} className="flex gap-3 text-sm">
                <span className="font-serif text-gold">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <span className="text-palm">{step.title}</span>
                  <span className="text-palm-dim"> · {step.detail}</span>
                </span>
              </li>
            ))}
          </ol>
        </Panel>
      </section>

      <CampusMap />
    </main>
  );
}
