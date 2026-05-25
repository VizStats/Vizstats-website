import { CtaSection } from "@/components/home/cta-section";
import { FaqSection } from "@/components/home/faq-section";
import { HeroSection } from "@/components/home/hero-section";
import { PerspectiveSection } from "@/components/home/perspective-section";
import { ScrollStorySection } from "@/components/home/scroll-story-section";
import { StatsSection } from "@/components/home/stats-section";
import { StudioSection } from "@/components/home/studio-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { TrustStrip } from "@/components/home/trust-strip";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <StatsSection />
      <ScrollStorySection />
      <StudioSection />
      <TestimonialsSection />
      <PerspectiveSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
