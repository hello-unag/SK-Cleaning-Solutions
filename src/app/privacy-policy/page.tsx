import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingAction } from "@/components/ui/floating-action";
import { Sparkles, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the Privacy Policy for SK Cleaning Solutions. Detailed guidelines on how we collect, store, and protect your data under Australian Law.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-bg-light flex flex-col justify-between">
      <Navbar />

      <main id="main-content" tabIndex={-1} className="flex-grow outline-none">
        
        {/* Header Hero */}
        <section className="relative pt-36 pb-20 bg-primary text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0f345e] via-[#08213E] to-[#041121]" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/5 border border-secondary/25 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-secondary animate-pulse-slow" />
              <span className="text-xs font-semibold tracking-wider text-secondary uppercase">
                Legal Documentation
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-heading text-white">
              Privacy Policy
            </h1>

            <p className="text-lg text-neutral-grey font-medium leading-relaxed max-w-2xl mx-auto">
              Compliance guidelines outlining the collection, storage, use, and protection of your personal information in accordance with Australian law.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left text-body-text">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-premium border border-primary/5 space-y-8">
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-heading text-primary">1. Our Commitment to Privacy</h2>
              <p className="text-neutral-grey leading-relaxed">
                SK Cleaning Solutions ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy details how we manage and safeguard your personal information in accordance with the <em>Privacy Act 1988</em> (Cth) and the Australian Privacy Principles (APPs).
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-heading text-primary">2. Information We Collect</h2>
              <p className="text-neutral-grey leading-relaxed">
                To provide our commercial, office, and residential cleaning services, we collect personal information that is reasonably necessary for our business activities. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-grey leading-relaxed">
                <li>Contact details (such as your full name, email address, physical address, and telephone number).</li>
                <li>Booking preferences (such as preferred service dates, access guidelines, and special service requirements).</li>
                <li>Property characteristics (such as the number of bedrooms, bathrooms, and size of the clean area).</li>
                <li>Payment details necessary to process invoices and secure bookings.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-heading text-primary">3. How We Collect Information</h2>
              <p className="text-neutral-grey leading-relaxed">
                We collect personal information directly from you when you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-grey leading-relaxed">
                <li>Submit a form via our quote system or contact forms on our website.</li>
                <li>Speak with us directly over the telephone (0489 143 310) or correspond via WhatsApp/email.</li>
                <li>Schedule services or make transactions with our accounts department.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-heading text-primary">4. Use of Your Personal Information</h2>
              <p className="text-neutral-grey leading-relaxed">
                Your personal information is used strictly to conduct our operations, including to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-grey leading-relaxed">
                <li>Provide accurate pricing, clean estimates, and schedule cleaner dispatch.</li>
                <li>Deliver commercial, strata, office, and domestic cleaning services.</li>
                <li>Process billing, invoices, and process credit card/bank payments.</li>
                <li>Resolve customer inquiries, quality disputes, or property manager bond return requirements.</li>
                <li>Coordinate internal staff check-ins and update security logs.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-heading text-primary">5. Security & Storage</h2>
              <p className="text-neutral-grey leading-relaxed">
                We take all reasonable security precautions to safeguard your personal data from loss, misuse, unauthorized access, alteration, or disclosure. Personal information is stored in secure electronic databases with restricted employee access controls. While we take every effort to secure details, no transmission of information over the internet can be guaranteed as 100% secure.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-heading text-primary">6. Sharing of Personal Information</h2>
              <p className="text-neutral-grey leading-relaxed">
                We do not sell, rent, or trade your personal information. We may share necessary contact details with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-grey leading-relaxed">
                <li>Our subcontracted and employed professional cleaning crews assigned to service your premises.</li>
                <li>Third-party service providers (such as hosting, billing platforms, and card processors) acting on our behalf.</li>
                <li>Law enforcement or regulatory agencies where required by Australian statute.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-heading text-primary">7. Access & Corrections</h2>
              <p className="text-neutral-grey leading-relaxed">
                Under the Australian Privacy Principles, you have the right to access and request corrections to any personal information we hold about you. You can request changes by emailing us at <a href="mailto:info@skcleaningsolutions.com.au" className="text-secondary font-semibold hover:underline">info@skcleaningsolutions.com.au</a>.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-heading text-primary">8. Contact Information</h2>
              <p className="text-neutral-grey leading-relaxed">
                If you have questions about this policy, require access to your file, or wish to make a privacy-related complaint, please contact us at:
              </p>
              <div className="p-5 rounded-2xl bg-bg-light border border-primary/5 space-y-1.5 text-sm text-primary font-semibold">
                <p>SK Cleaning Solutions</p>
                <p>Phone: <a href="tel:0489143310" className="text-secondary hover:underline">0489 143 310</a></p>
                <p>Email: <a href="mailto:info@skcleaningsolutions.com.au" className="text-secondary hover:underline">info@skcleaningsolutions.com.au</a></p>
                <p>Location: Sydney Metropolitan Area, NSW, Australia</p>
              </div>
            </div>

          </div>
        </section>

      </main>

      <FloatingAction />
      <Footer />
    </div>
  );
}
