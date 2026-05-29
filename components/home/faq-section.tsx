import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { faqs } from "@/lib/site-content";

export function FaqSection() {
  return (
    <section className="section-space bg-white/55">
      <div className="site-container space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Common questions"
            title="The practical questions usually arrive before the brief does."
          />
        </Reveal>

        <div className="grid gap-4">
          {faqs.map((item, index) => (
            <Reveal key={item.question} delay={index * 60}>
              <details className="surface-card card-hover p-5 md:p-6">
                <summary className="cursor-pointer list-none text-lg font-semibold tracking-[-0.03em] text-slate-950">
                  {item.question}
                </summary>
                <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600">
                  {item.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <Link
            href="/contact"
            className="accent-link inline-flex items-center gap-2 text-sm"
          >
            More questions? Tell us about your project
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
