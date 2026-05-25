import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { perspectiveCards } from "@/lib/site-content";

export function PerspectiveSection() {
  return (
    <section className="section-space">
      <div className="site-container space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="How we think about the work"
            title="Five working beliefs that shape every project we take on."
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-2">
          {perspectiveCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 70}>
              <details className="surface-card card-hover group h-full p-6 md:p-7">
                <summary className="list-none cursor-pointer space-y-4">
                  <div className="flex items-start justify-between gap-5">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                        {card.title}
                      </h3>
                      <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-700">
                        {card.subtitle}
                      </p>
                    </div>
                    <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                      Open
                    </span>
                  </div>
                  <p className="text-sm leading-7 text-slate-600">
                    {card.hoverReveal}
                  </p>
                </summary>

                <div className="mt-6 space-y-4 border-t border-slate-200 pt-6 text-sm leading-7 text-slate-600">
                  <p>{card.body}</p>
                  {card.linkLabel && card.linkHref ? (
                    <Link href={card.linkHref} className="accent-link inline-flex text-sm">
                      {card.linkLabel}
                    </Link>
                  ) : null}
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
