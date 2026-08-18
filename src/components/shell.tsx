import Link from "next/link";

const NAV = [
  { href: "/", label: "Campus" },
  { href: "/path/", label: "Path" },
  { href: "/review/", label: "Review" },
  { href: "/prove/", label: "Prove" },
];

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-5 pb-16 pt-8">
      <header className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <Link href="/" className="group">
          <p className="text-xs tracking-[0.28em] text-gold uppercase">CYPHER0X9 · MIT · offline</p>
          <h1 className="font-serif text-3xl text-palm group-hover:text-gold sm:text-4xl">
            Ardham Shastra
          </h1>
          <p className="mt-1 max-w-md text-sm text-palm-dim">
            Science of meaning. Lifetime mastery OS.
          </p>
        </Link>
        <nav className="flex flex-wrap gap-1 rounded-full border border-gold/20 bg-ink-2/80 p-1 text-sm">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-1.5 text-palm-dim hover:bg-gold/10 hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
      <div className="palm-rule mb-10" />
      {children}
      <footer className="mt-auto pt-16 text-center text-xs text-palm-dim">
        Learn anything. Master everything. From this world to beyond.
      </footer>
    </div>
  );
}
