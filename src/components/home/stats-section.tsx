import { CountUpNumber } from "@/components/count-up-number";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { stats } from "@/lib/site-content";

export function StatsSection() {
  return (
    <section className="section-space pt-8">
      <div className="site-container space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="At a glance"
            title="Built for scrutiny, public use, and the day the work gets shared widely."
            description="A few practical signals that describe how Vizstats scopes and delivers data experiences."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 90}>
              <article className="surface-card card-hover h-full p-6">
                <p className="text-4xl font-semibold tracking-[-0.05em] text-slate-950">
                  <CountUpNumber value={metric.value} suffix={metric.suffix} />
                </p>
                <p className="mt-4 text-xs font-medium uppercase tracking-[0.22em] text-emerald-700">
                  {metric.label}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {metric.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
