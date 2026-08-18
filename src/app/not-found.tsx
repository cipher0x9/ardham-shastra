import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h2 className="font-serif text-4xl text-palm">This mandala is not on the map.</h2>
      <p className="mt-3 text-palm-dim">Forty modules. You asked for a forty-first, or a broken link.</p>
      <Link href="/" className="mt-6 inline-block text-gold hover:underline">
        Return to campus
      </Link>
    </main>
  );
}
