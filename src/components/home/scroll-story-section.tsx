import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { scrollBeats } from "@/lib/site-content";

export function ScrollStorySection() {
  return (
    <section className="section-space bg-white/45">
      <div className="site-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="space-y-5 lg:sticky lg:top-28">
          <Reveal>
            <p className="eyebrow">Scroll narrative</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="section-title max-w-2xl">
              An alternative to the formats people endure.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="copy-muted max-w-xl">
              This section visualizes the problem Vizstats is built to solve:
              important data trapped in formats the public never really wants to
              use.
            </p>
          </Reveal>

          <p className="sr-only">
            An animated scroll sequence visualizing the failure of conventional
            data tools — PDFs, dashboards, portals — and Vizstats&apos;
            alternative approach. Static image alternative shown.
          </p>

          <Reveal delay={180}>
            <div className="surface-card overflow-hidden p-4">
              <div className="image-frame aspect-[4/4.2] md:aspect-[4/3.2]">
                <Image
                  src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1400&q=80"
                  alt="A designer and analyst reviewing a public-facing interface together."
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-950/8 to-transparent" />
                <div className="absolute left-5 top-5 grid gap-3">
                  {["PDF", "Dashboard", "Portal"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/45 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="absolute inset-x-5 bottom-5 rounded-[1.35rem] border border-white/20 bg-slate-950/78 p-5 text-white backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/55">
                    Reduced-motion fallback
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/78">
                    From the work we make: a moment from the kind of platform
                    Vizstats builds when the data needs both narrative and
                    depth.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-5">
          {scrollBeats.map((beat, index) => (
            <Reveal key={beat.title} delay={index * 70}>
              <article className="surface-card card-hover p-6 md:p-8">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
                  Beat {index + 1}
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                  {beat.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {beat.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
