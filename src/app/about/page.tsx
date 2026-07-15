import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ShieldCheck, HeartHandshake, MapPin, Award, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingAction } from "@/components/ui/floating-action";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about SK Cleaning Solutions. Sydney's premium commercial and residential cleaning specialists with years of trusted service.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg-light flex flex-col justify-between">
      <Navbar />

      <main id="main-content" tabIndex={-1} className="flex-grow outline-none">
        {/* About Hero Banner */}
        <section className="relative pt-36 pb-20 bg-primary text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0f345e] via-[#08213E] to-[#041121]" />
          <div className="absolute -top-[100px] -right-[100px] w-[300px] h-[300px] rounded-full bg-secondary/5 blur-[80px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/5 border border-secondary/25 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-secondary animate-pulse-slow" />
              <span className="text-xs font-semibold tracking-wider text-secondary uppercase">
                Our Story
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading text-white">
              Redefining Commercial <br />
              & Residential Cleaning
            </h1>

            <p className="text-lg sm:text-xl text-neutral-grey font-medium leading-relaxed max-w-3xl mx-auto">
              SK Cleaning Solutions is Sydney’s elite provider of bespoke cleaning services. We combine luxury care with rigorous security protocols for pristine presentation.
            </p>
          </div>
        </section>

        {/* Company Vision & Values */}
        <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h2 className="text-3xl font-bold font-heading text-primary">
                Setting the Benchmark for Spotless Workspaces
              </h2>
              <p className="text-neutral-grey text-base leading-relaxed">
                Founded with a vision to deliver premium cleaning services to Sydney’s corporate and residential sectors, SK Cleaning Solutions has earned a reputation for compromise-free excellence. We understand that a clean workspace is vital for staff productivity, safety, and brand reputation.
              </p>
              <p className="text-neutral-grey text-base leading-relaxed">
                Our team is trained in hospital-grade cross-contamination protocols, using color-coded microfibers, HEPA filter vacuum cleaners, and premium organic chemicals. From high-rise office suites in the CBD to luxury residences in Manly, we provide bespoke schedules that work around your business hours.
              </p>
              <div className="pt-4">
                <Link
                  href="/request-quote"
                  className={cn(buttonVariants({ variant: "primary" }), "inline-flex cursor-pointer")}
                >
                  Book a Consultation
                </Link>
              </div>
            </div>

            {/* Core Values grid */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-6">
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/5 border border-secondary/15 flex items-center justify-center flex-shrink-0 text-secondary-dark">
                    <ShieldCheck className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-primary font-heading">Security Vetted Team</h3>
                    <p className="text-xs text-neutral-grey mt-1">Every cleaner undergoes police checks, identity confirmation, and thorough safety orientation before visiting your premises.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/5 border border-secondary/15 flex items-center justify-center flex-shrink-0 text-secondary-dark">
                    <Award className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-primary font-heading">Bond Back Guarantee</h3>
                    <p className="text-xs text-neutral-grey mt-1">Our end of lease cleanings follow strict real estate checklists, ensuring 100% return of your rental bond.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/5 border border-secondary/15 flex items-center justify-center flex-shrink-0 text-secondary-dark">
                    <HeartHandshake className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-primary font-heading">Eco-Friendly Cleaning</h3>
                    <p className="text-xs text-neutral-grey mt-1">We prioritize the environment and family health, using non-toxic, chemical-free solutions where possible.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Vetting Detail & Accreditations */}
        <section className="py-12 sm:py-20 bg-white border-y border-primary/5 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold font-heading text-primary">
                Unmatched Trust & Compliance
              </h2>
              <p className="text-neutral-grey max-w-lg mx-auto text-sm sm:text-base">
                We maintain full compliance with Australian health, safety, and security requirements.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="p-6 space-y-4">
                <CheckCircle2 className="w-8 h-8 text-secondary-dark mx-auto" aria-hidden="true" />
                <h3 className="text-lg font-bold text-primary font-heading">$20M Public Liability</h3>
                <p className="text-xs text-neutral-grey leading-relaxed">
                  Fully covered for high-rise commercial structures and commercial contracts, safeguarding your physical assets.
                </p>
              </div>
              <div className="p-6 space-y-4">
                <CheckCircle2 className="w-8 h-8 text-secondary-dark mx-auto" aria-hidden="true" />
                <h3 className="text-lg font-bold text-primary font-heading">Eco-Safe Green Clean</h3>
                <p className="text-xs text-neutral-grey leading-relaxed">
                  We use biodegradable cleaning agents that are safe for your family, staff, and the environment.
                </p>
              </div>
              <div className="p-6 space-y-4">
                <CheckCircle2 className="w-8 h-8 text-secondary-dark mx-auto" aria-hidden="true" />
                <h3 className="text-lg font-bold text-primary font-heading">Sydney Suburb Coverage</h3>
                <p className="text-xs text-neutral-grey leading-relaxed">
                  Mobile crew nodes stationed across East, West, North, and South regions to serve you promptly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Geographic Coverage Regions list */}
        <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          <div className="space-y-3">
            <MapPin className="w-8 h-8 text-secondary-dark mx-auto" aria-hidden="true" />
            <h2 className="text-3xl font-bold font-heading text-primary">
              Serving All Sydney Districts
            </h2>
            <p className="text-neutral-grey max-w-lg mx-auto text-sm sm:text-base">
              Our mobile cleaning nodes allow us to reach your premises anywhere in Greater Sydney.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-left text-sm text-primary font-semibold">
            <div className="bg-bg-light p-4 rounded-xl border border-primary/5 flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span>Sydney CBD & City Centre</span>
            </div>
            <div className="bg-bg-light p-4 rounded-xl border border-primary/5 flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span>North Shore & Beaches</span>
            </div>
            <div className="bg-bg-light p-4 rounded-xl border border-primary/5 flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span>Inner West & City South</span>
            </div>
            <div className="bg-bg-light p-4 rounded-xl border border-primary/5 flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span>Eastern Suburbs</span>
            </div>
            <div className="bg-bg-light p-4 rounded-xl border border-primary/5 flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span>Parramatta & West Hub</span>
            </div>
            <div className="bg-bg-light p-4 rounded-xl border border-primary/5 flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span>Hills District & Northwest</span>
            </div>
            <div className="bg-bg-light p-4 rounded-xl border border-primary/5 flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span>Southwest & Liverpool</span>
            </div>
            <div className="bg-bg-light p-4 rounded-xl border border-primary/5 flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span>Sutherland Shire & South</span>
            </div>
          </div>
        </section>
      </main>

      <FloatingAction />
      <Footer />
    </div>
  );
}
