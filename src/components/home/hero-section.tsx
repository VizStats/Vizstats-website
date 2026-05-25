import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { heroCopy, projects } from "@/lib/site-content";

const featuredProject = projects[0];

export function HeroSection() {
  return (
    <section className="section-space pt-16 md:pt-24">
      <div className="site-container grid gap-12 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
        <div className="space-y-8">
          <Reveal>
            <p className="eyebrow">Data experience agency</p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="display-hero max-w-4xl">{heroCopy.title}</h1>
          </Reveal>

          <div className="max-w-2xl space-y-5">
            <Reveal delay={140}>
              <p className="copy-muted text-lg">{heroCopy.paragraphOne}</p>
            </Reveal>
            <Reveal delay={220}>
              <p className="copy-muted text-lg">{heroCopy.paragraphTwo}</p>
            </Reveal>
          </div>

          <Reveal delay={300} className="flex flex-wrap items-center gap-5">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-slate-950 px-6 text-white hover:bg-slate-800"
            >
              <Link href="/contact">
                {heroCopy.primaryCta}
                <ArrowRight className="size-4" />
              </Link>
            </Button>

            <Link
              href="/studio"
              className="accent-link inline-flex items-center gap-2 text-sm"
            >
              {heroCopy.secondaryCta}
              <MoveRight className="size-4" />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={180}>
          <div className="relative">
            <div className="surface-card overflow-hidden p-4 md:p-5">
              <div className="image-frame aspect-[4/4.25] md:aspect-[4/3.95]">
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80"
                  alt="Professionals reviewing a complex data product together."
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/38 via-slate-950/0 to-white/10" />
              </div>

              <div className="absolute left-8 top-8 max-w-[13rem] rounded-[1.35rem] border border-white/65 bg-white/88 p-4 shadow-lg backdrop-blur">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-emerald-700">
                  Featured release
                </p>
                <p className="mt-3 text-lg font-semibold tracking-[-0.03em] text-slate-950">
                  {featuredProject.name}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {featuredProject.metrics.join(" · ")}
                </p>
              </div>

              <div className="absolute bottom-8 right-8 max-w-[15rem] rounded-[1.35rem] border border-slate-200 bg-slate-950 p-5 text-white shadow-xl">
                <p className="text-xs uppercase tracking-[0.22em] text-white/55">
                  What the build holds
                </p>
                <p className="mt-3 text-sm leading-6 text-white/78">
                  Editorially defensible structure, strong public legibility,
                  and code-native delivery built for real traffic.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
