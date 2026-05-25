import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/lib/site-content";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
  ctaLabel?: string;
};

export function ProjectCard({
  project,
  featured = false,
  ctaLabel = "View project",
}: ProjectCardProps) {
  return (
    <article
      className={cn(
        "surface-card card-hover overflow-hidden",
        featured ? "grid gap-0 lg:grid-cols-[1.08fr_0.92fr]" : "flex h-full flex-col"
      )}
    >
      <div className={cn("image-frame rounded-none border-0 shadow-none", featured ? "min-h-[360px]" : "aspect-[16/10]")}>
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes={featured ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-slate-950/5 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-emerald-700">
            {project.client} · {project.type}
          </p>
          <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
            {project.name}
          </h3>
          <p className="text-lg leading-8 text-slate-700">{project.tagline}</p>
          <p className="text-sm leading-7 text-slate-600">{project.summary}</p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-500"
            >
              {tag}
            </span>
          ))}
        </div>

        {featured ? (
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {project.metrics.map((metric) => (
              <div
                key={metric}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700"
              >
                {metric}
              </div>
            ))}
          </div>
        ) : null}

        <div className="mt-8">
          <Link
            href={`/studio/${project.slug}`}
            className="accent-link inline-flex items-center gap-2 text-sm"
          >
            {ctaLabel}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
