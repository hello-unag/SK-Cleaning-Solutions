import type { Metadata } from "next";
import { ServiceLayout } from "@/components/sections/service-layout";

export const metadata: Metadata = {
  title: "End of Lease Cleaning Sydney | 100% Bond Back Guarantee",
  description: "Sydney's leading bond return end of lease cleaning service. 100% bond back satisfaction guarantee following strict real estate checklists.",
};

const eolChecklist = [
  "Oven, rangehood & cooktop degreasing",
  "Inside/outside cabinet vacuum & wash",
  "Window track & frame detailed cleaning",
  "Baseboard & light switch wash",
  "Wall spot cleaning & scuff removal",
  "Shower screen descaling & tile grout wash",
  "Toilet disinfected & calcium descaling",
  "Cobweb clearing & garage sweeps",
  "Laundry sink wash & filter cleaning",
  "Balcony sweep & rail wash-down",
];

const eolBenefits = [
  {
    title: "100% Bond Guarantee",
    description: "In the unlikely event that your property manager raises any issues, our crew will return to clean it for free.",
    icon: "shield" as const,
  },
  {
    title: "Agency-Approved Criteria",
    description: "We follow strict checklists vetted by major Sydney real estate agencies, making sure every corner is up to standard.",
    icon: "sparkles" as const,
  },
  {
    title: "Steam Carpet Option",
    description: "Combine exit cleaning with professional hot-water carpet extraction to secure your tenancy deposit.",
    icon: "heart" as const,
  },
];

const eolFaqs = [
  {
    id: "ef-1",
    question: "Do you clean the walls?",
    answer: "Yes, spot-cleaning walls to remove scuff marks, handprints, and dirt spots is included in our standard list. We also offer full wall washing if needed.",
  },
  {
    id: "ef-2",
    question: "How long does an end of lease clean take?",
    answer: "Depending on the size and initial condition of the property, it usually ranges between 4 to 8 hours for a crew of two to complete the clean.",
  },
  {
    id: "ef-3",
    question: "Do we need to keep electricity and water connected?",
    answer: "Yes, definitely. Our steam extractors, vacuums, and hot water methods require active water and power connections on site during the clean.",
  },
];

export default function EndOfLeaseCleaningPage() {
  return (
    <ServiceLayout
      title="End of Lease Cleaning"
      subtitle="Bond Return Guarantee"
      description="Agency-approved exit cleaning services with a 100% bond return guarantee for residential tenancy handovers across all Sydney suburbs."
      checklistItems={eolChecklist}
      benefits={eolBenefits}
      faqs={eolFaqs}
      imageUrl="/services-end-of-lease.webp"
    />
  );
}
