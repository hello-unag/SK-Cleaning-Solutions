import type { Metadata } from "next";
import { ServiceLayout } from "@/components/sections/service-layout";

export const metadata: Metadata = {
  title: "Strata Cleaning Sydney | Common Area Cleaning",
  description: "Professional strata cleaning and maintenance of residential apartment common areas, lobbies, stairwells, and outdoor walkways in Sydney.",
};

const strataChecklist = [
  "Lobby vacuuming & entrance glass squeegee",
  "Stairwell sweep, vacuum & damp mop",
  "Elevator tracks, mirrors & walls sanitizing",
  "Common restroom sanitizing & restocking",
  "Bin room hose-out & council rotation",
  "Driveway sweep & cobweb removal",
  "Car park litter sweeps & collecting",
  "Strata logbook entry logs updated",
  "Common hallway high dust and cobweb check",
  "External letterbox dusting & glass polish",
];

const strataBenefits = [
  {
    title: "Strata Manager Compliance",
    description: "We provide detailed safety records, incident reports, and complete insurance certificates for your strata books.",
    icon: "shield" as const,
  },
  {
    title: "Quiet Resident Cleaning",
    description: "Our cleaning crews operate quietly and respectfully, ensuring absolute resident privacy and tranquility.",
    icon: "heart" as const,
  },
  {
    title: "Council Bin Rotation",
    description: "Never miss a council collection day. We schedule bin rotations, curb placement, and post-pickup sanitizing.",
    icon: "sparkles" as const,
  },
];

const strataFaqs = [
  {
    id: "sf-1",
    question: "Do you supply and manage light bulb replacements?",
    answer: "Yes, basic light bulb replacements in common stairwells and hallways can be added as a contract task, keeping your properties safe.",
  },
  {
    id: "sf-2",
    question: "Can you manage emergency cleanup callouts?",
    answer: "Yes. Strata complexes under contract can access priority emergency cleaning callouts (e.g. storm water cleanups, spills) at hourly rates.",
  },
  {
    id: "sf-3",
    question: "How do you log and track crew visits?",
    answer: "We place a log sheet inside the main electrical/strata cupboard and update our GPS tracking logs upon every site entry and exit.",
  },
];

export default function StrataCleaningPage() {
  return (
    <ServiceLayout
      title="Strata Cleaning"
      subtitle="Common Property Upkeep"
      description="Consistent common area cleaning contracts for residential apartment buildings, townhouse complexes, and strata developments."
      checklistItems={strataChecklist}
      benefits={strataBenefits}
      faqs={strataFaqs}
      imageUrl="/services-strata.webp"
    />
  );
}
