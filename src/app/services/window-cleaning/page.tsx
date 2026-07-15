import type { Metadata } from "next";
import { ServiceLayout } from "@/components/sections/service-layout";

export const metadata: Metadata = {
  title: "Professional Window Cleaning Sydney | Interior & Exterior",
  description: "Crystal clear exterior and interior professional window cleaning using advanced water-fed pole pure water technologies in Sydney.",
};

const windowChecklist = [
  "Pure water demineralized pole wash",
  "Detail track & frame sweep-down",
  "Flyscreen wash & dry treatment",
  "Glass scraping for paint & bird marks",
  "Double-hung sash glass cleaning",
  "Glass pool fence scrub & polish",
  "Skylight & solar panel clean",
  "Streak-free squeegee hand wash",
  "Sill wiping & spider web clearing",
  "Balustrade & glass panel cleaning",
];

const windowBenefits = [
  {
    title: "Pure Water Technology",
    description: "Our advanced carbon filtration systems leave glass streak-free and cleaner for longer without chemical residues.",
    icon: "sparkles" as const,
  },
  {
    title: "High-Reach Extension",
    description: "Demineralized water-fed carbon poles allow us to clean windows up to 4 stories high safely from the ground.",
    icon: "shield" as const,
  },
  {
    title: "Coating Protection",
    description: "We use non-abrasive soft brushes and avoid harsh acidic compounds to safeguard UV glass tints and films.",
    icon: "heart" as const,
  },
];

const windowFaqs = [
  {
    id: "wf-1",
    question: "Do you clean internal windows as well?",
    answer: "Yes. For interiors, we use standard squeegee and microfiber hand wash methods with drop sheets to protect flooring.",
  },
  {
    id: "wf-2",
    question: "How often should commercial building windows be cleaned?",
    answer: "High-traffic retail fronts look best with fortnightly or monthly cleans. Corporate offices generally schedule quarterly or bi-annual glass sweeps.",
  },
  {
    id: "wf-3",
    question: "What happens if it rains on my scheduled window cleaning day?",
    answer: "If light rain occurs, pure water washes are unaffected. In heavy storms or strong winds, we reschedule for safety and quality results.",
  },
];

export default function WindowCleaningPage() {
  return (
    <ServiceLayout
      title="Window Cleaning"
      subtitle="Streak-Free Clarity"
      description="Elite interior and exterior window wash. Using pure water-fed pole systems and expert squeegee techniques for crystal-clear results."
      checklistItems={windowChecklist}
      benefits={windowBenefits}
      faqs={windowFaqs}
      imageUrl="/services-window.webp"
    />
  );
}
