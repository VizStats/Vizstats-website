import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { getNoteBySlug, notes } from "@/lib/site-content";

type NotePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return notes.map((note) => ({
    slug: note.slug,
  }));
}

export async function generateMetadata({
  params,
}: NotePageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    return {};
  }

  return {
    title: note.title,
    description: note.excerpt,
  };
}

export default async function NotePage({ params }: NotePageProps) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    notFound();
  }

  return (
    <>
      <section className="section-space pt-16 md:pt-24">
        <div className="site-container max-w-4xl space-y-8">
          <Reveal>
            <Link
              href="/notes"
              className="accent-link inline-flex items-center gap-2 text-sm"
            >
              <ArrowLeft className="size-4" />
              Back to Notes
            </Link>
          </Reveal>

          <Reveal delay={60}>
            <p className="eyebrow">{note.category}</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="section-title">{note.title}</h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="text-lg leading-8 text-slate-700">{note.excerpt}</p>
          </Reveal>
        </div>
      </section>

      <section className="pb-10">
        <div className="site-container max-w-5xl">
          <Reveal>
            <div className="surface-card overflow-hidden p-4">
              <div className="image-frame aspect-[16/8.5]">
                <Image
                  src={note.image}
                  alt={note.imageAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 75vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space pt-8">
        <div className="site-container max-w-3xl space-y-6">
          {note.body.map((paragraph, index) => (
            <Reveal key={paragraph} delay={index * 70}>
              <p className="text-base leading-8 text-slate-700">{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
