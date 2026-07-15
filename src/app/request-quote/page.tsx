import type { Metadata } from "next";
import { Sparkles, CalendarRange, Clock, Send, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingAction } from "@/components/ui/floating-action";
import { ContactForm } from "@/components/sections/contact-form";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Request a Free Quote",
  description: "Get a free, obligation-free quote tailored for your specific commercial or residential cleaning requirements in Sydney.",
};

export default function RequestQuotePage() {
  return (
    <div className="min-h-screen bg-bg-light flex flex-col justify-between">
      <Navbar />

      <main id="main-content" tabIndex={-1} className="flex-grow outline-none">
        
        {/* Hero Section */}
        <section className="relative pt-36 pb-20 bg-primary text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0f345e] via-[#08213E] to-[#041121]" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/5 border border-secondary/25 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-secondary animate-pulse-slow" />
              <span className="text-xs font-semibold tracking-wider text-secondary uppercase">
                Estimate Request
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-heading text-white">
              Request Your Free Quote
            </h1>

            <p className="text-lg sm:text-xl text-neutral-grey font-medium leading-relaxed max-w-3xl mx-auto">
              Tell us about your cleaning specifications. We provide clear, obligation-free estimates tailored to your budget and operational frequency.
            </p>
          </div>
        </section>

        {/* Process & Form layout */}
        <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Explanatory process */}
            <div className="lg:col-span-6 space-y-8 text-left">
              
              <div className="space-y-3">
                <h2 className="text-3xl font-bold font-heading text-primary">
                  How Our Quote Process Works
                </h2>
                <p className="text-neutral-grey text-base leading-relaxed">
                  We strive to make hiring professional cleaners straightforward. Follow these three simple steps to secure your premium service estimate:
                </p>
              </div>

              {/* Steps */}
              <div className="space-y-6">
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary/15 flex items-center justify-center flex-shrink-0 text-secondary-dark font-bold font-heading text-sm">
                    01
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-primary font-heading">Submit Specifications</h3>
                    <p className="text-xs text-neutral-grey mt-1">Fill out our quick form detailing your property size, suburb location, and desired cleaning frequency.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary/15 flex items-center justify-center flex-shrink-0 text-secondary-dark font-bold font-heading text-sm">
                    02
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-primary font-heading">Receive Custom Estimate</h3>
                    <p className="text-xs text-neutral-grey mt-1">Our dedicated estimator reviews your details and calls or emails you with a transparent pricing outline within 2 hours.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary/15 flex items-center justify-center flex-shrink-0 text-secondary-dark font-bold font-heading text-sm">
                    03
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-primary font-heading">Schedule Your Clean</h3>
                    <p className="text-xs text-neutral-grey mt-1">Approve the quote, choose your preferred time, and let our vetted crew take care of the rest with premium cleaning gear.</p>
                  </div>
                </div>

              </div>

              {/* Guarantees */}
              <div className="pt-6 border-t border-primary/10 grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2 text-primary font-semibold text-sm">
                  <ShieldCheck className="w-5 h-5 text-secondary-dark flex-shrink-0" aria-hidden="true" />
                  <span>No Obligation Clean</span>
                </div>
                <div className="flex items-center space-x-2 text-primary font-semibold text-sm">
                  <Clock className="w-5 h-5 text-secondary-dark flex-shrink-0" aria-hidden="true" />
                  <span>2-Hour Quote Return</span>
                </div>
              </div>

            </div>

            {/* Right Column: Booking Form */}
            <div className="lg:col-span-6">
              <ContactForm />
            </div>

          </div>
        </section>

      </main>

      <FloatingAction />
      <Footer />
    </div>
  );
}
