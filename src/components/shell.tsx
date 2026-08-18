import Link from "next/link";
import { NavShell } from "./nav-shell";

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
            Learn anything. Master everything. One method, forty rooms.
          </p>
        </Link>
        <NavShell />
      </header>
      <div className="palm-rule mb-10" />
      {children}
      <footer className="mt-auto pt-16 text-center text-xs text-palm-dim">
        No account · Progress stays on this machine ·{" "}
        <Link href="/start/" className="text-gold hover:underline">
          How to use
        </Link>
      </footer>
    </div>
  );
}
