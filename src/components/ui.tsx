import { cn } from "@/lib/cn";

export function Panel({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-gold/15 bg-ink-2/60 backdrop-blur-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function StatTile({
  label,
  value,
  hint,
}: {
  label: string;
  value: string | number;
  hint?: string;
}) {
  return (
    <div className="rounded-xl border border-gold/20 bg-ink/40 p-4">
      <dt className="text-xs uppercase tracking-wider text-palm-dim">{label}</dt>
      <dd className="font-serif text-3xl text-gold">{value}</dd>
      {hint ? <p className="mt-1 text-xs text-palm-dim">{hint}</p> : null}
    </div>
  );
}

export function Badge({
  tone = "gold",
  children,
}: {
  tone?: "gold" | "leaf" | "saffron" | "lotus" | "dim";
  children: React.ReactNode;
}) {
  const tones = {
    gold: "border-gold/40 bg-gold/10 text-gold",
    leaf: "border-leaf/40 bg-leaf/10 text-leaf",
    saffron: "border-saffron/40 bg-saffron/10 text-saffron",
    lotus: "border-lotus/40 bg-lotus/10 text-lotus",
    dim: "border-palm/15 bg-ink/40 text-palm-dim",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        tones[tone],
      )}
    >
      {children}
    </span>
  );
}

export function Button({
  variant = "primary",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "danger";
}) {
  const variants = {
    primary: "bg-gold text-ink hover:bg-gold/90",
    ghost: "border border-gold/30 text-palm hover:bg-gold/10",
    danger: "border border-saffron/40 text-saffron hover:bg-saffron/10",
  };
  return (
    <button
      type="button"
      className={cn(
        "rounded-full px-5 py-2 text-sm font-medium transition-colors disabled:opacity-40",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}

export function ProgressRing({ value, label }: { value: number; label: string }) {
  const clamped = Math.min(100, Math.max(0, value));
  return (
    <div className="relative flex h-24 w-24 items-center justify-center">
      <svg className="h-24 w-24 -rotate-90" viewBox="0 0 36 36">
        <circle cx="18" cy="18" r="15.5" fill="none" stroke="rgba(201,162,39,0.15)" strokeWidth="2" />
        <circle
          cx="18"
          cy="18"
          r="15.5"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="2"
          strokeDasharray={`${clamped} 100`}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute text-center">
        <p className="font-serif text-xl text-gold">{clamped}%</p>
        <p className="text-[10px] uppercase tracking-wider text-palm-dim">{label}</p>
      </div>
    </div>
  );
}
