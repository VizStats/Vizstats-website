import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { caseStudies, operatingPrinciples } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Examples of how VizStats turns executive, operational, and client data into premium decision rooms.",
};

export default function WorkPage() {
  return (
    <div className="space-y-10 pb-16">
      <section className="pt-10">
        <div className="site-container">
          <div className="glass-panel rounded-[2.5rem] p-8 md:p-12">
            <p className="eyebrow">Selected work</p>
            <h1 className="section-title mt-4 max-w-4xl">
              Built for teams that need fewer dashboards and better decisions.
            </h1>
            <p className="copy-muted mt-5 max-w-2xl text-lg">
              These are the kinds of systems we build: high-trust operating
              rooms with enough polish for leadership and enough precision for
              the teams doing the work.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="site-container grid gap-6 xl:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.client}
              className="glass-panel flex h-full flex-col rounded-[2rem] p-6 md:p-8"
            >
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.26em] text-white/38">
                  {study.sector}
                </p>
                <h2 className="text-3xl font-semibold text-white">
                  {study.client}
                </h2>
                <p className="text-lg leading-8 text-white/84">{study.impact}</p>
                <p className="copy-muted">{study.description}</p>
              </div>

              <ul className="mt-6 grid gap-3">
                {study.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="rounded-3xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-6 text-white/70"
                  >
                    {outcome}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="site-container grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="glass-panel rounded-[2rem] p-6 md:p-8">
            <p className="eyebrow">Operating principles</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              The clone inspiration is visual. The product discipline is the real differentiator.
            </h2>
            <p className="copy-muted mt-4 max-w-xl">
              Tesla gave us the confidence to strip things back. Fuselab gave us
              permission to make complex enterprise moments feel intentional.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {operatingPrinciples.map((principle) => (
              <div
                key={principle}
                className="glass-panel rounded-[2rem] p-6 text-lg leading-8 text-white/80"
              >
                {principle}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="site-container">
          <div className="glass-panel rounded-[2.5rem] p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div className="space-y-4">
                <p className="eyebrow">Next move</p>
                <h2 className="section-title max-w-3xl">
                  Your first room does not need to do everything. It needs to
                  make one critical conversation unmistakably better.
                </h2>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-white px-5 text-slate-950 hover:bg-white/90"
                >
                  <Link href="/contact">
                    Build your plan
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
