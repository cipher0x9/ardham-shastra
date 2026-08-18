import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GateForm } from "@/components/gate-form";
import { RetrievalDrill } from "@/components/retrieval-drill";
import { MODULES, MODULE_BY_SLUG } from "@/content/modules";

type Params = { slug: string };

export function generateStaticParams() {
  return MODULES.map((mod) => ({ slug: mod.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const mod = MODULE_BY_SLUG.get(slug);
  if (!mod) return { title: "Missing mandala" };
  return { title: `${mod.number}. ${mod.title}` };
}

export default async function MandalaPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const mod = MODULE_BY_SLUG.get(slug);
  if (!mod) notFound();

  const lesson = mod.lessons[0];

  return (
    <article>
      <p className="text-xs uppercase tracking-[0.25em] text-gold">
        Mandala {String(mod.number).padStart(2, "0")} · {mod.sanskrit}
      </p>
      <h2 className="mt-2 font-serif text-4xl text-palm">{mod.title}</h2>
      <p className="mt-4 max-w-3xl text-lg text-palm-dim">{mod.promise}</p>

      <ul className="mt-6 grid gap-2 text-sm text-palm sm:grid-cols-3">
        {mod.youWill.map((item) => (
          <li key={item} className="rounded-lg border border-palm/10 bg-ink-2/60 p-3">
            {item}
          </li>
        ))}
      </ul>

      {lesson ? (
        <section className="mt-10 space-y-6">
          <h3 className="font-serif text-2xl text-gold">{lesson.title}</h3>
          {lesson.sections.map((section) => (
            <div key={section.heading}>
              <h4 className="font-serif text-xl text-palm">{section.heading}</h4>
              <p className="mt-2 max-w-3xl leading-relaxed text-palm-dim">{section.body}</p>
            </div>
          ))}
          {mod.pack ? (
            <p className="text-sm text-gold">
              Deep pack in the repo: <code>{mod.pack}</code>
            </p>
          ) : null}
        </section>
      ) : null}

      <section className="mt-12">
        <h3 className="mb-4 font-serif text-2xl text-gold">Retrieve</h3>
        <RetrievalDrill cards={mod.cards} />
      </section>

      <section className="mt-12">
        <GateForm module={mod} />
      </section>

      <p className="mt-10 text-sm">
        <Link href="/" className="text-gold hover:underline">
          ← Campus map
        </Link>
      </p>
    </article>
  );
}
