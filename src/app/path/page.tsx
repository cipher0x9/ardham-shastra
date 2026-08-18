import { LOOP, NINETY, RTMA, LICC, SEVEN } from "@/content/playbook";

export default function PathPage() {
  return (
    <main className="space-y-14">
      <header>
        <h2 className="font-serif text-4xl text-palm">The path</h2>
        <p className="mt-3 max-w-2xl text-lg text-palm-dim">
          Seven generators. Six daily moves. A ninety-day proof arc. RTMA and LICC so you cannot
          lie to yourself with highlighters.
        </p>
      </header>

      <section>
        <h3 className="font-serif text-2xl text-gold">Daily loop</h3>
        <ol className="mt-4 grid gap-3 sm:grid-cols-2">
          {LOOP.map((step, index) => (
            <li key={step.id} className="rounded-xl border border-palm/10 bg-ink-2/60 p-4">
              <p className="text-xs text-gold">
                {index + 1} · {step.sanskrit}
              </p>
              <p className="font-serif text-xl text-palm">{step.title}</p>
              <p className="text-sm text-palm-dim">{step.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h3 className="font-serif text-2xl text-gold">Seven-step playbook</h3>
        <ol className="mt-4 space-y-3">
          {SEVEN.map((step) => (
            <li key={step.n} className="grid gap-1 border-l-2 border-gold/40 pl-4">
              <p className="font-serif text-xl text-palm">
                {step.n}. {step.title}
              </p>
              <p className="text-sm text-palm-dim">{step.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h3 className="font-serif text-2xl text-gold">Ninety days</h3>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[32rem] text-left text-sm">
            <thead className="text-gold">
              <tr>
                <th className="py-2">Phase</th>
                <th>Days</th>
                <th>Focus</th>
              </tr>
            </thead>
            <tbody>
              {NINETY.map((row) => (
                <tr key={row.phase} className="border-t border-palm/10">
                  <td className="py-2 text-palm">{row.phase}</td>
                  <td className="text-gold">{row.days}</td>
                  <td className="text-palm-dim">{row.focus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="font-serif text-2xl text-gold">RTMA</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {RTMA.map((item) => (
              <li key={item.id}>
                <span className="text-palm">{item.title}.</span>{" "}
                <span className="text-palm-dim">{item.detail}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-serif text-2xl text-gold">LICC</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {LICC.map((item) => (
              <li key={item.id}>
                <span className="text-palm">{item.title}.</span>{" "}
                <span className="text-palm-dim">{item.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
