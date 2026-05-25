import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/lib/site-content";

export function TestimonialsSection() {
  return (
    <section className="section-space bg-white/55">
      <div className="site-container space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="From the people we've worked with"
            title="Specific reactions matter more than generic praise."
            description="The strongest signals are the moments clients remember clearly — what changed, what surprised them, and what the audience could finally do."
          />
        </Reveal>

        <div className="grid gap-5 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.quote} delay={index * 90}>
              <article className="surface-card card-hover flex h-full flex-col p-6">
                <div className="flex items-center gap-4">
                  <div className="image-frame size-16 rounded-full border-slate-200 shadow-none">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.imageAlt}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-6 text-lg leading-8 text-slate-700">
                  “{testimonial.quote}”
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
