import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function CtaSection() {
  return (
    <section className="section-space bg-[#0d0b1e]">
      <div className="site-container">
        <Reveal className="mx-auto max-w-3xl space-y-8 text-center">
          <p
            className="eyebrow"
            style={{ color: "rgb(155 132 255 / 80%)" }}
          >
            Start a project
          </p>
          <h2
            className="section-title"
            style={{ color: "#ffffff" }}
          >
            Have data that deserves to be experienced?
          </h2>
          <p
            className="copy-muted mx-auto max-w-xl"
            style={{ color: "rgba(255,255,255,0.52)" }}
          >
            We take on a small number of engagements a year. If your data is
            meant to reach beyond the people who made it, tell us about it.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-white px-7 font-semibold text-[#0d0b1e] hover:bg-white/90"
            >
              <Link href="/contact">
                Tell us about your project
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Link
              href="/studio"
              className="inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: "rgb(155 132 255)" }}
            >
              Browse the work first
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
