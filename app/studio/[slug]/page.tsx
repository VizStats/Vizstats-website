import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { getProjectBySlug, projects } from "@/lib/site-content";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.name,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="section-space pt-16 md:pt-24">
        <div className="site-container space-y-8">
          <Reveal>
            <Link
              href="/studio"
              className="accent-link inline-flex items-center gap-2 text-sm"
            >
              <ArrowLeft className="size-4" />
              Back to Studio
            </Link>
          </Reveal>

          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="space-y-5">
              <Reveal>
                <p className="eyebrow">{project.client} · {project.type}</p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="section-title max-w-3xl">{project.name}</h1>
              </Reveal>
              <Reveal delay={140}>
                <p className="text-xl leading-8 text-slate-700">
                  {project.tagline}
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="copy-muted max-w-2xl">{project.summary}</p>
              </Reveal>
              <Reveal delay={260} className="flex flex-wrap gap-3">
                {project.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-500"
                  >
                    {metric}
                  </span>
                ))}
              </Reveal>
            </div>

            <Reveal delay={180}>
              <div className="surface-card overflow-hidden p-4">
                <div className="image-frame aspect-[4/3]">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-space bg-white/55">
        <div className="site-container grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <article className="surface-card p-6 md:p-8">
              <p className="eyebrow">Overview</p>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                {project.overview}
              </p>
              <p className="mt-6 text-sm leading-7 text-slate-600">
                {project.challenge}
              </p>
            </article>
          </Reveal>

          <div className="grid gap-5">
            {project.approach.map((item, index) => (
              <Reveal key={item} delay={index * 70}>
                <article className="surface-card card-hover p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
                    Approach {index + 1}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <article className="surface-card p-6 md:p-8">
              <p className="eyebrow">Outcome</p>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                {project.outcome}
              </p>
            </article>
          </Reveal>

          <Reveal delay={80}>
            <article className="surface-card p-6 md:p-8">
              <p className="eyebrow">Deliverables</p>
              <div className="mt-5 grid gap-3">
                {project.deliverables.map((deliverable) => (
                  <div
                    key={deliverable}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-700"
                  >
                    {deliverable}
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}
