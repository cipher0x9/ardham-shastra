export function formatRelativeDue(iso: string, now = new Date()): string {
  const due = new Date(iso);
  const ms = due.getTime() - now.getTime();
  if (ms <= 0) return "now";
  const minutes = Math.round(ms / 60_000);
  if (minutes < 60) return `${minutes}m`;
  const hours = Math.round(minutes / 60);
  if (hours < 48) return `${hours}h`;
  const days = Math.round(hours / 24);
  return `${days}d`;
}

export function todayKey(now = new Date()): string {
  return now.toISOString().slice(0, 10);
}

export function percent(n: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((n / total) * 100);
}
