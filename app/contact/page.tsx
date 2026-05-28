import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { contactChecklist } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell Vizstats about the audience, the data, and the public experience you need to launch.",
};

export default function ContactPage() {
  return (
    <>
      <section className="section-space pt-16 md:pt-24">
        <div className="site-container grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="space-y-6">
            <Reveal>
              <SectionHeading
                eyebrow="Contact"
                title="Tell us about your project."
                description="We take on a small number of engagements each year. If your data is meant to reach beyond the people who made it, this is the place to start."
              />
            </Reveal>
            <Reveal delay={100}>
              <div className="surface-card p-6">
                <p className="text-sm font-semibold text-slate-950">
                  What helps start the conversation
                </p>
                <div className="mt-5 grid gap-3">
                  {contactChecklist.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-600"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
