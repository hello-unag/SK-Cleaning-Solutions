import type { Metadata } from "next";
import { ServiceLayout } from "@/components/sections/service-layout";

export const metadata: Metadata = {
  title: "Builders Cleaning Sydney | Post-Construction Cleaners",
  description: "Premium post-construction and renovation builders cleaning services. Detailed handover-ready cleaning for new builds across Sydney.",
};

const buildersChecklist = [
  "Drywall dust extraction & vacuuming",
  "Grout residue & cement film wash",
  "Glass scraping & paint spot removal",
  "Cabinet inside/outside vacuum & clean",
  "Baseboard, door frame & hinge detailing",
  "Balcony tile high-pressure wash",
  "Light fixture label removal & wash",
  "Plumbing fixture silicone & wax polish",
  "Intrusive sticker & protective film peeling",
  "HVAC duct & filter vacuum cleaning",
];

const buildersBenefits = [
  {
    title: "White Card Certified",
    description: "Every cleaner assigned to builders cleaning holds active site-induction certifications (White Cards) and proper safety gear.",
    icon: "shield" as const,
  },
  {
    title: "Micro-Silica Filtering",
    description: "Our dual-motor HEPA vacuums extract micro-silica masonry dust safely, protecting your new occupants.",
    icon: "sparkles" as const,
  },
  {
    title: "Handover Deadlines",
    description: "We work efficiently around project schedules to make sure we hit occupancy certificate and buyer handover dates.",
    icon: "heart" as const,
  },
];

const buildersFaqs = [
  {
    id: "bf-1",
    question: "Do you supply your own scaffolding and ladders?",
    answer: "Yes, our team brings high-reach extension ladders and safety steps. For extreme-height facades, we coordinate scaffolding or scissor-lift access.",
  },
  {
    id: "bf-2",
    question: "What is the difference between a rough clean and a final clean?",
    answer: "A rough clean is done post-framing/plastering to remove heavy debris. The final clean is the handover clean, where we polish glass, vacuum fine dust, and detail cabinets.",
  },
  {
    id: "bf-3",
    question: "Are your cleaners insured for active construction sites?",
    answer: "Yes. We carry full workers compensation, public liability insurance, and adhere to strict SWMS (Safe Work Method Statements) for construction sites.",
  },
];

export default function BuildersCleaningPage() {
  return (
    <ServiceLayout
      title="Builders Cleaning"
      subtitle="Post-Construction Handover"
      description="Detailed deep cleaning services for post-renovations and new builds. We extract construction dust and prepare your site for handover."
      checklistItems={buildersChecklist}
      benefits={buildersBenefits}
      faqs={buildersFaqs}
      imageUrl="/services-builders.webp"
    />
  );
}
