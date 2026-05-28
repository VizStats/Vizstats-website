import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { capabilities, processSteps } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Vizstats combines business strategy, design, and technology to turn important data into public-facing experiences.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section-space pt-16 md:pt-24">
        <div className="site-container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-6">
            <Reveal>
              <SectionHeading
                eyebrow="About"
                title="Business strategy, design, and technology working together on public understanding."
                description="Vizstats combines editorial thinking, interface design, and code-native delivery to solve real customer problems for teams working with consequential data."
              />
            </Reveal>
            <Reveal delay={100}>
              <p className="copy-muted max-w-2xl">
                We are not a template shop and we are not a dashboard wrapper.
                We are a small practice built around the belief that serious data
                deserves the same care as serious reporting: clear structure,
                defensible sourcing, and an interface the public can actually
                stay with.
              </p>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <div className="surface-card overflow-hidden p-4">
              <div className="image-frame aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80"
                  alt="A professional team workshop reflecting the collaborative approach behind Vizstats."
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="capabilities" className="section-space bg-white/55">
        <div className="site-container space-y-10">
          <Reveal>
            <SectionHeading
              eyebrow="What we bring"
              title="Four capabilities that stay close to the audience from kickoff to launch."
            />
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {capabilities.map((capability, index) => (
              <Reveal key={capability.title} delay={index * 70}>
                <article className="surface-card card-hover h-full p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
                    0{index + 1}
                  </p>
                  <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                    {capability.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {capability.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container space-y-10">
          <Reveal>
            <SectionHeading
              eyebrow="Process"
              title="A clear process helps complicated work stay legible."
            />
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 70}>
                <article className="surface-card card-hover h-full p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
