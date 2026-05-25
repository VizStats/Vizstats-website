import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Note } from "@/lib/site-content";

type NoteCardProps = {
  note: Note;
};

export function NoteCard({ note }: NoteCardProps) {
  return (
    <article className="surface-card card-hover overflow-hidden">
      <div className="image-frame rounded-none border-0 shadow-none aspect-[16/10]">
        <Image
          src={note.image}
          alt={note.imageAlt}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between gap-4 text-xs font-medium uppercase tracking-[0.22em] text-emerald-700">
          <span>{note.category}</span>
          <span className="text-slate-400">{note.readTime}</span>
        </div>
        <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
          {note.title}
        </h3>
        <p className="text-sm leading-7 text-slate-600">{note.excerpt}</p>
        <Link
          href={`/notes/${note.slug}`}
          className="accent-link inline-flex items-center gap-2 text-sm"
        >
          Read note
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </article>
  );
}
