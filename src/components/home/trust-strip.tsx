import { Reveal } from "@/components/reveal";
import { trustStrip } from "@/lib/site-content";

export function TrustStrip() {
  return (
    <section className="pb-10 md:pb-14">
      <div className="site-container">
        <Reveal className="surface-card overflow-hidden px-6 py-5 md:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <p className="max-w-2xl text-sm font-medium leading-7 text-slate-700">
              {trustStrip.title}
            </p>

            <div className="flex flex-wrap gap-2">
              {trustStrip.clients.map((client) => (
                <span
                  key={client}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-500"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
