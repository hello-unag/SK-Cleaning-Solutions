import type { Metadata } from "next";
import { ServiceLayout } from "@/components/sections/service-layout";

export const metadata: Metadata = {
  title: "Office Cleaning Sydney | Professional Corporate Cleaners",
  description: "High-standard corporate workspace office cleaning services in Sydney. Flexible schedules (daily, weekly, after-hours) customized to your company.",
};

const officeChecklist = [
  "Keyboard, mouse & desk sanitization",
  "Boardroom table & chair detailing",
  "Kitchenette deep clean & sanitizing",
  "Safe waste bin disposal & recycling",
  "Upholstery & chair steam treatment",
  "Air vent & grille dust vacuuming",
  "Entrance glass squeegee clean",
  "Document secure-shred waste disposal",
  "Restroom surface wash & disinfected taps",
  "Hardwood floor sweeping & luxury mop",
];

const officeBenefits = [
  {
    title: "After-Hours Schedule",
    description: "Our office cleaning specialists visit after your employees go home, keeping your working hours quiet and productive.",
    icon: "sparkles" as const,
  },
  {
    title: "Secure Lockup Vetting",
    description: "Every crew member is trained in security alarms, keypad codes, and building locking procedures.",
    icon: "shield" as const,
  },
  {
    title: "Healthy Staff Standards",
    description: "Our dual-motor HEPA vacuum systems trap 99% of pollen and dust, fostering a clean and allergen-free workspace.",
    icon: "heart" as const,
  },
];

const officeFaqs = [
  {
    id: "of-1",
    question: "Do you clean individual employee desks?",
    answer: "Yes, we wipe down keyboard keys, computer mouse units, monitors, and desk workspaces, taking care not to displace corporate paperwork.",
  },
  {
    id: "of-2",
    question: "What is your frequency contract policy?",
    answer: "We offer monthly, bi-weekly, weekly, or daily services. There are no lock-in contracts; you can modify or cancel schedules with just 48 hours notice.",
  },
  {
    id: "of-3",
    question: "Do you supply toilet paper and hand towels?",
    answer: "Yes. We can restock commercial soap, paper towels, and toilet paper, invoicing items at wholesale prices or using your internal supplies.",
  },
];

export default function OfficeCleaningPage() {
  return (
    <ServiceLayout
      title="Office Cleaning"
      subtitle="Workspace Presentation Care"
      description="Pragmatic, high-quality after-hours office cleaning. Maintain a spotless desk environment, pristine meeting rooms, and fresh air standards."
      checklistItems={officeChecklist}
      benefits={officeBenefits}
      faqs={officeFaqs}
      imageUrl="/services-office.webp"
    />
  );
}
