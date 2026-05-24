import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, DatabaseZap, Layers3, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  launchSteps,
  platformCapabilities,
  platformLayers,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "See how VizStats structures telemetry, narrative, and operating loops into one premium data visualization system.",
};

export default function PlatformPage() {
  return (
    <div className="space-y-10 pb-16">
      <section className="relative overflow-hidden pt-10">
        <div className="site-container">
          <div className="glass-panel rounded-[2.5rem] p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div className="space-y-5">
                <p className="eyebrow">Platform</p>
                <h1 className="section-title max-w-4xl">
                  A modern data stack wrapped in product-grade calm.
                </h1>
                <p className="copy-muted max-w-2xl text-lg">
                  VizStats is built to translate messy source systems into a
                  clear operating picture for leaders, operators, and client
                  teams without making them think about the plumbing.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {platformCapabilities.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5"
                  >
                    <p className="text-4xl font-semibold text-white">
                      {item.value}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.26em] text-white/38">
                      {item.title}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-white/66">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="site-container grid gap-6 lg:grid-cols-3">
          {platformLayers.map((layer, index) => (
            <article
              key={layer.name}
              className="glass-panel rounded-[2rem] p-6 md:p-8"
            >
              <div className="flex items-center gap-3 text-white">
                {index === 0 ? (
                  <DatabaseZap className="size-5 text-[#59d8ff]" />
                ) : index === 1 ? (
                  <Layers3 className="size-5 text-[#f6a34f]" />
                ) : (
                  <Workflow className="size-5 text-[#9ce477]" />
                )}
                <p className="eyebrow !mb-0">{layer.name}</p>
              </div>
              <p className="mt-5 text-xl font-semibold text-white">
                {layer.description}
              </p>
              <ul className="mt-6 grid gap-3">
                {layer.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="rounded-3xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-6 text-white/70"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="site-container grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-panel rounded-[2rem] p-6 md:p-8">
            <p className="eyebrow">Delivery arc</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              The product is only real if the meeting changes after launch.
            </h2>
            <p className="copy-muted mt-4 max-w-xl">
              We do not stop at screens. Each release includes the operating
              ritual, ownership model, and update loop needed to keep the system
              sharp once the novelty wears off.
            </p>
          </div>

          <div className="grid gap-4">
            {launchSteps.map((step) => (
              <article
                key={step.phase}
                className="glass-panel rounded-[2rem] p-6 md:p-7"
              >
                <p className="text-xs uppercase tracking-[0.26em] text-white/40">
                  {step.phase}
                </p>
                <p className="mt-3 text-lg leading-8 text-white/82">
                  {step.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="site-container">
          <div className="glass-panel rounded-[2.5rem] p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div className="space-y-4">
                <p className="eyebrow">Move next</p>
                <h2 className="section-title max-w-3xl">
                  If the interface feels calm, the work behind it can move
                  faster.
                </h2>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-white px-5 text-slate-950 hover:bg-white/90"
                >
                  <Link href="/contact">
                    Build your rollout
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
