import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingAction } from "@/components/ui/floating-action";
import { Sparkles, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the Terms of Service for SK Cleaning Solutions. Detailed contract conditions, booking policies, and compliance under Australian Consumer Law.",
};

export default function TermsOfServicePage() {
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
                Agreement Terms
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-heading text-white">
              Terms of Service
            </h1>

            <p className="text-lg text-neutral-grey font-medium leading-relaxed max-w-2xl mx-auto">
              Please read these Terms and Conditions carefully. By scheduling a service with us, you agree to comply with these terms under Australian Consumer Law.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left text-body-text">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-premium border border-primary/5 space-y-8">
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-heading text-primary">1. Agreement to Terms</h2>
              <p className="text-neutral-grey leading-relaxed">
                These Terms of Service govern the agreement between SK Cleaning Solutions ("we", "us", or "our") and the customer ("you" or "your") for the provision of professional cleaning services in Sydney. By booking, accepting a quote, or allowing our cleaning crew access to your property, you acknowledge and agree to be bound by these terms.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-heading text-primary">2. Services & Quotes</h2>
              <p className="text-neutral-grey leading-relaxed">
                We agree to provide cleaning services as described in your confirmed booking or quote. Estimates are provided based on the details provided in our online forms (such as bedrooms, bathrooms, and clean area conditions). If the actual state of the property differs significantly from details supplied, we reserve the right to revise the final billing fee accordingly, in consultation with you.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-heading text-primary">3. Bookings, Cancellations & Rescheduling</h2>
              <ul className="list-disc pl-6 space-y-2 text-neutral-grey leading-relaxed">
                <li><strong>Cancellations:</strong> We require at least 48 hours notice for any cancellation or booking changes. Cancellations made within 48 hours of the scheduled time may incur a cancellation fee.</li>
                <li><strong>Access issues:</strong> If our cleaning crew arrives and is unable to access the property (due to locked doors, lack of key, or security alarm issues), a lock-out fee may apply to cover travel and dispatch costs.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-heading text-primary">4. Payments & Billing</h2>
              <p className="text-neutral-grey leading-relaxed">
                Payments must be settled in full in accordance with invoice terms:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-grey leading-relaxed">
                <li>For residential and one-off bookings (such as End of Lease cleans), payment is due immediately upon completion of services.</li>
                <li>For corporate and commercial contracts, payment terms are 7, 14, or 30 days from the invoice date, as explicitly agreed in writing.</li>
                <li>All prices quoted are in Australian Dollars (AUD) and are subject to Goods and Services Tax (GST) where applicable.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-heading text-primary">5. Access, Utilities & Safety</h2>
              <ul className="list-disc pl-6 space-y-2 text-neutral-grey leading-relaxed">
                <li><strong>Utilities:</strong> You must ensure the property has uninterrupted electrical power and running hot/cold water available during the clean. If these utilities are not available, our cleaners may not be able to execute services, and standard fees will still apply.</li>
                <li><strong>Safety:</strong> The site must be safe for our workers, free from structural hazards, or dangerous substances. Cleaners reserve the right to leave if they deem the site unsafe.</li>
                <li><strong>Keys & Security:</strong> If you leave keys or security codes for our cleaners, we will secure your premises upon entry and exit. We maintain strict security vetting for all check-ins.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-heading text-primary">6. 100% Bond Back Guarantee Terms</h2>
              <p className="text-neutral-grey leading-relaxed">
                For our End of Lease Cleaning services, we provide a 100% bond return guarantee:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-grey leading-relaxed">
                <li>If your real estate property manager raises issues with the cleanliness standard, you must notify us in writing within 72 hours of clean completion.</li>
                <li>We will dispatch a crew to return to the property and re-clean the disputed checklist items for free.</li>
                <li>This guarantee does not cover issues unrelated to cleanliness (e.g. wall damage, structural wear, or carpet stains that require commercial repairs).</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-heading text-primary">7. Liability & Exclusions</h2>
              <ul className="list-disc pl-6 space-y-2 text-neutral-grey leading-relaxed">
                <li>Our services are covered by comprehensive $20M Public Liability Insurance.</li>
                <li>To the maximum extent permitted under Australian Consumer Law, we exclude liability for indirect, incidental, or consequential damages.</li>
                <li>Any claims for accidental property breakage must be reported to our office in writing within 24 hours of clean completion.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-heading text-primary">8. Governing Law</h2>
              <p className="text-neutral-grey leading-relaxed">
                These terms are governed by the laws of the State of New South Wales (NSW), Australia. Any disputes arising from this agreement will be subject to the exclusive jurisdiction of the courts of NSW.
              </p>
            </div>

          </div>
        </section>

      </main>

      <FloatingAction />
      <Footer />
    </div>
  );
}
