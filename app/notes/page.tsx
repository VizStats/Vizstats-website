import type { Metadata } from "next";
import { NoteCard } from "@/components/note-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { notes } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Notes",
  description:
    "Short essays on audience, methodology, technology, and restraint in data experience design.",
};

export default function NotesPage() {
  return (
    <>
      <section className="section-space pt-16 md:pt-24">
        <div className="site-container space-y-10">
          <Reveal>
            <SectionHeading
              eyebrow="Notes"
              title="Short essays on how the work gets shaped."
              description="A place for the thinking behind the builds: audience framing, methodology, delivery, and the design choices that help serious data travel further."
            />
          </Reveal>

          <div className="grid gap-6 xl:grid-cols-3">
            {notes.map((note, index) => (
              <Reveal key={note.slug} delay={index * 70}>
                <NoteCard note={note} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
