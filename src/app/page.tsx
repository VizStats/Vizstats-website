import Link from "next/link";
import { ArrowRight, Orbit, Radar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { homePanels } from "@/lib/site-data";

export default function Home() {
  return (
    <div className="snap-y snap-mandatory">
      <section className="relative isolate flex min-h-screen snap-start items-end overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(89,216,255,0.22),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(156,228,119,0.18),transparent_22%),linear-gradient(180deg,#09151f_0%,#04070a_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.58))]" />

        <div className="site-container relative grid gap-12 pb-14 pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:pb-18">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-[0.68rem] uppercase tracking-[0.28em] text-white/62">
              <Sparkles className="size-3.5 text-[#59d8ff]" />
              Tesla-sharp data experiences for serious teams
            </div>

            <div className="space-y-6">
              <h1 className="display-hero max-w-5xl">
                Make the whole business legible before the meeting starts.
              </h1>
              <p className="copy-muted max-w-2xl text-lg md:text-xl">
                VizStats builds premium data visualization rooms for operators,
                executives, and client-facing teams. The feel is cinematic. The
                data discipline is ruthless.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-white px-5 text-slate-950 hover:bg-white/90"
              >
                <Link href="/contact">
                  Start a build
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-white/16 bg-white/[0.04] px-5 text-white hover:bg-white/[0.08]"
              >
                <Link href="/platform">Explore the platform</Link>
              </Button>
            </div>
          </div>

          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-6 md:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(89,216,255,0.22),transparent_38%)]" />
            <div className="relative space-y-6">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.26em] text-white/46">
                <span>Live command room</span>
                <span>04 active surfaces</span>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {[
                  { label: "Resolution time", value: "01:34" },
                  { label: "Forecast variance", value: "2.8%" },
                  { label: "At-risk regions", value: "03" },
                  { label: "Teams aligned", value: "09" },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-3xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.26em] text-white/38">
                      {metric.label}
                    </p>
                    <p className="mt-4 text-3xl font-semibold text-white">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-[#08131c]/75 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-white">
                      Executive signal mix
                    </p>
                    <p className="text-sm text-white/46">
                      Throughput, margin pressure, service risk
                    </p>
                  </div>
                  <Orbit className="size-5 text-[#59d8ff]" />
                </div>
                <div className="flex h-28 items-end gap-2">
                  {[36, 64, 52, 78, 70, 96, 72, 88, 110].map((height, index) => (
                    <div
                      key={height}
                      className="flex-1 rounded-t-full bg-gradient-to-t from-[#59d8ff]/20 to-white/80"
                      style={{ height: `${height}px`, opacity: 0.48 + index * 0.05 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {homePanels.map((panel) => (
        <section
          key={panel.id}
          className="relative isolate flex min-h-screen snap-start items-end overflow-hidden"
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${panel.gradientClass}`}
          />
          <div className={`absolute right-[10%] top-[18%] size-64 rounded-full blur-3xl ${panel.glowClass}`} />

          <div className="site-container relative grid gap-10 pb-14 pt-24 lg:grid-cols-[1fr_0.9fr] lg:items-end lg:pb-18">
            <div className="space-y-6">
              <p className="eyebrow">{panel.label}</p>
              <h2 className="section-title max-w-4xl">{panel.title}</h2>
              <p className="copy-muted max-w-2xl text-lg">{panel.description}</p>

              <div className="flex flex-wrap gap-2">
                {panel.tags.map((tag) => (
                  <span key={tag} className="metric-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-panel rounded-[2rem] p-6 md:p-8">
              <div className="grid gap-4">
                {panel.stats.map((stat) => (
                  <div
                    key={stat}
                    className="rounded-3xl border border-white/10 bg-white/[0.03] px-5 py-5 text-lg text-white/84"
                  >
                    {stat}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between rounded-[1.75rem] border border-white/10 bg-white/[0.03] px-5 py-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.26em] text-white/38">
                    Experience mode
                  </p>
                  <p className="mt-2 text-lg font-medium text-white">
                    Designed like a premium product, operated like infrastructure.
                  </p>
                </div>
                <Radar className="size-5 text-white/72" />
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="relative py-20">
        <div className="site-container">
          <div className="glass-panel rounded-[2.5rem] p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div className="space-y-4">
                <p className="eyebrow">Final call</p>
                <h2 className="section-title max-w-3xl">
                  Four routes. One clear promise. Your data should feel like the
                  future, not a cleanup project.
                </h2>
                <p className="copy-muted max-w-2xl">
                  We combine Fuselab-style product thinking with Tesla-grade
                  restraint to ship rooms people want to use in front of other
                  people.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-white px-5 text-slate-950 hover:bg-white/90"
                >
                  <Link href="/work">See the work</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-white/16 bg-white/[0.04] px-5 text-white hover:bg-white/[0.08]"
                >
                  <Link href="/contact">Build your plan</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
