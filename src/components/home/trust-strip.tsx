import { Reveal } from "@/components/reveal";
import { trustStrip } from "@/lib/site-content";

export function TrustStrip() {
  return (
    <section className="pb-12 md:pb-16">
      <div className="site-container">
        <Reveal className="space-y-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">
            {trustStrip.title}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {trustStrip.clients.map((client) => (
              <span
                key={client}
                className="rounded-full border border-primary/18 bg-primary/6 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary/70"
              >
                {client}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
