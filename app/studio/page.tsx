import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { capabilities, processSteps, projects } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Selected Vizstats work across scrollytelling, information hubs, and investigative databases.",
};

export default function StudioPage() {
  return (
    <>
      <section className="section-space pt-16 md:pt-24">
        <div className="site-container space-y-10">
          <Reveal>
            <SectionHeading
              eyebrow="Studio"
              title="Work designed to hold complexity without burying the audience."
              description="Vizstats Studio is where guided narrative, information architecture, and front-end delivery meet. Some projects become a piece. Some become a place. The strongest ones do both."
            />
          </Reveal>

          <div className="grid gap-6">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 80}>
                <ProjectCard
                  project={project}
                  featured={index === 0}
                  ctaLabel={index === 0 ? "View this case study" : "View project"}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="formats" className="section-space bg-white/55">
        <div className="site-container grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((capability, index) => (
            <Reveal key={capability.title} delay={index * 70}>
              <article className="surface-card card-hover h-full p-6">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
                  Capability {index + 1}
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
      </section>

      <section className="section-space">
        <div className="site-container space-y-10">
          <Reveal>
            <SectionHeading
              eyebrow="Process"
              title="A four-step process built for complicated source material."
            />
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 70}>
                <article className="surface-card card-hover h-full p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
                    0{index + 1}
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
