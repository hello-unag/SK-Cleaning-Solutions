import type { Metadata } from "next";
import { ServiceLayout } from "@/components/sections/service-layout";

export const metadata: Metadata = {
  title: "Commercial Cleaning Sydney",
  description: "Elite commercial cleaning solutions tailored for medical suites, showrooms, gyms, and retail hubs across Sydney suburbs.",
};

const commercialChecklist = [
  "High-traffic floor stripping & waxing",
  "Medical suite sterilization & sanitizing",
  "Restroom deep sanitation & restocking",
  "Retail showroom floor scrubbing",
  "Showcase window & entrance glass polishing",
  "Lounge & common area upholstery wipe",
  "High-level ceiling & corner dust extraction",
  "Eco-safe disinfectants throughout",
  "HEPA-filter filtration vacuuming",
  "Disinfected high-touch points (knobs, switches)",
];

const commercialBenefits = [
  {
    title: "Fully Accredited & Insured",
    description: "We carry comprehensive $20M public liability insurance for absolute safety across large commercial buildings.",
    icon: "shield" as const,
  },
  {
    title: "Hospital-Grade Sanitizers",
    description: "Using eco-friendly, non-toxic sanitizers that eliminate 99.9% of bacteria and germs without chemical odors.",
    icon: "sparkles" as const,
  },
  {
    title: "Flexible After-Hours Work",
    description: "Schedules tailored specifically around your business opening hours, ensuring zero disruption to daily activities.",
    icon: "heart" as const,
  },
];

const commercialFaqs = [
  {
    id: "cf-1",
    question: "What types of commercial spaces do you clean?",
    answer: "We clean retail showrooms, medical suites, dental clinics, physical therapy offices, corporate offices, gyms, learning spaces, and community hubs.",
  },
  {
    id: "cf-2",
    question: "Do you supply material safety data sheets (MSDS) for chemicals?",
    answer: "Yes, absolutely. We hold full compliance documents and product safety sheets for all sanitizers and green agents brought onto commercial properties.",
  },
  {
    id: "cf-3",
    question: "Can we book one-off deep sanitizations?",
    answer: "Yes. In addition to our regular commercial contracts, we offer urgent one-off deep cleans, post-infection spray sanitizing, and seasonal detail cleans.",
  },
];

export default function CommercialCleaningPage() {
  return (
    <ServiceLayout
      title="Commercial Cleaning"
      subtitle="Bespoke Commercial Cleaning"
      description="Elite commercial cleaning solutions tailored for medical suites, showrooms, gyms, and retail hubs across Sydney suburbs."
      checklistItems={commercialChecklist}
      benefits={commercialBenefits}
      faqs={commercialFaqs}
      imageUrl="/services-commercial.webp"
    />
  );
}
