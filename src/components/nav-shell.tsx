"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { dueQueue } from "@/lib/progress";
import { useProgress } from "@/lib/use-progress";
import { cn } from "@/lib/cn";

const NAV = [
  { href: "/", label: "Campus" },
  { href: "/start/", label: "Start" },
  { href: "/path/", label: "Path" },
  { href: "/review/", label: "Review", badge: true },
  { href: "/prove/", label: "Prove" },
];

export function NavShell() {
  const pathname = usePathname();
  const { state, ready } = useProgress();
  const due = ready ? dueQueue(state).length : 0;

  return (
    <nav className="flex flex-wrap gap-1 rounded-full border border-gold/20 bg-ink-2/80 p-1 text-sm">
      {NAV.map((item) => {
        const active =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href.replace(/\/$/, ""));
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "relative rounded-full px-4 py-1.5 transition-colors",
              active ? "bg-gold/15 text-gold" : "text-palm-dim hover:bg-gold/10 hover:text-gold",
            )}
          >
            {item.label}
            {item.badge && due > 0 ? (
              <span className="ml-1.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-saffron px-1 text-[10px] font-semibold text-ink">
                {due > 99 ? "99+" : due}
              </span>
            ) : null}
          </Link>
        );
      })}
    </nav>
  );
}
