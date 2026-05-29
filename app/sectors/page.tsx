import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { sectors } from "@/lib/site-content";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sectors",
  description:
    "The kinds of editorial, research, and public-interest teams Vizstats designs data experiences for.",
};

export default function SectorsPage() {
  return (
    <>
      <section className="section-space pt-16 md:pt-24">
        <div className="site-container space-y-10">
          <Reveal>
            <SectionHeading
              eyebrow="Sectors"
              title="Work shaped for organizations that need public understanding, not just internal reporting."
              description="We partner best with teams whose data has consequences beyond the room where it was made."
            />
          </Reveal>

          <div className="grid gap-6 xl:grid-cols-2">
            {sectors.map((sector, index) => (
              <Reveal key={sector.title} delay={index * 70}>
                <article className="surface-card card-hover overflow-hidden">
                  <div className="grid md:grid-cols-[0.92fr_1.08fr]">
                    <div className="image-frame rounded-none border-0 shadow-none min-h-[260px]">
                      <Image
                        src={sector.image}
                        alt={sector.imageAlt}
                        fill
                        sizes="(min-width: 1280px) 25vw, (min-width: 768px) 40vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-5 p-6">
                      <h2 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                        {sector.title}
                      </h2>
                      <p className="text-sm leading-7 text-slate-600">
                        {sector.summary}
                      </p>
                      <div className="grid gap-3">
                        {sector.details.map((detail) => (
                          <div
                            key={detail}
                            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-700"
                          >
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
