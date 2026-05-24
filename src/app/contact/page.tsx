import type { Metadata } from "next";
import { ContactPlanner } from "@/components/contact-planner";
import { contactPromises } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Build a VizStats launch plan for an executive room, operations wall, or premium client analytics surface.",
};

export default function ContactPage() {
  return (
    <div className="space-y-10 pb-16">
      <section className="pt-10">
        <div className="site-container grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-panel rounded-[2rem] p-6 md:p-8">
            <p className="eyebrow">Contact</p>
            <h1 className="section-title mt-4 max-w-3xl">
              Bring the decision that matters most. We will shape the room
              around it.
            </h1>
            <p className="copy-muted mt-5 max-w-xl text-lg">
              The fastest way to make this real is to define the audience, the
              ritual, and the signal that should never again be hidden in a
              spreadsheet tab.
            </p>
          </div>

          <div className="grid gap-4">
            {contactPromises.map((promise) => (
              <div
                key={promise}
                className="glass-panel rounded-[2rem] p-6 text-lg leading-8 text-white/78"
              >
                {promise}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="site-container">
          <ContactPlanner />
        </div>
      </section>
    </div>
  );
}
