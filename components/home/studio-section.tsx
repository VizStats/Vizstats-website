import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/site-content";

const [featuredProject, ...supportingProjects] = projects;

export function StudioSection() {
  return (
    <section className="section-space">
      <div className="site-container space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Vizstats Studio"
            title="The work."
            description="Some data wants to be a piece. Some data wants to be a place. We build both — sometimes inside a single project. What follows is the work, in the form it asked to take."
          />
        </Reveal>

        <Reveal delay={80}>
          <ProjectCard
            project={featuredProject}
            featured
            ctaLabel="View this case study"
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-2">
          {supportingProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 90}>
              <ProjectCard project={project} ctaLabel="View" />
            </Reveal>
          ))}
        </div>

        <Reveal delay={180} className="flex justify-end">
          <Link
            href="/studio"
            className="accent-link inline-flex items-center gap-2 text-sm"
          >
            See all work
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
