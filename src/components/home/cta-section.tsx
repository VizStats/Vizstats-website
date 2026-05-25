import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function CtaSection() {
  return (
    <section className="section-space">
      <div className="site-container">
        <Reveal className="surface-card overflow-hidden">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-8 md:p-12">
              <p className="eyebrow">Have data that deserves to be experienced?</p>
              <h2 className="section-title mt-4 max-w-3xl">
                Have data that deserves to be experienced?
              </h2>
              <p className="copy-muted mt-5 max-w-2xl">
                We take on a small number of engagements a year. If your data is
                meant to reach beyond the people who made it, tell us about it.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-slate-950 px-6 text-white hover:bg-slate-800"
                >
                  <Link href="/contact">
                    Tell us about your project
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Link href="/studio" className="accent-link text-sm">
                  Or browse the work first
                </Link>
              </div>
            </div>

            <div className="relative min-h-[320px]">
              <Image
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80"
                alt="A project team discussing a serious data product in a bright meeting room."
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/25 via-slate-950/15 to-slate-950/45" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
