import type { Metadata } from "next";
// Let's use Lucide icons and basic standard Tailwind layout.
import { Mail, Phone, MapPin, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingAction } from "@/components/ui/floating-action";
import { ContactForm } from "@/components/sections/contact-form";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with SK Cleaning Solutions. Call 0489 143 310 or request a callback for premium commercial & domestic cleaning in Sydney.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-bg-light flex flex-col justify-between">
      <Navbar />

      <main id="main-content" tabIndex={-1} className="flex-grow outline-none">
        
        {/* Contact Hero */}
        <section className="relative pt-36 pb-20 bg-primary text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0f345e] via-[#08213E] to-[#041121]" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/5 border border-secondary/25 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-secondary animate-pulse-slow" />
              <span className="text-xs font-semibold tracking-wider text-secondary uppercase">
                Contact Office
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-heading text-white">
              Get In Touch With Us
            </h1>

            <p className="text-lg sm:text-xl text-neutral-grey font-medium leading-relaxed max-w-3xl mx-auto">
              Have questions about our commercial cleaning contracts, safety certificates, or house clean bookings? Reach out to our customer care team.
            </p>
          </div>
        </section>

        {/* Contact info grid & booking form */}
        <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Contact Details Column */}
            <div className="lg:col-span-6 space-y-8 text-left">
              
              <div className="space-y-3">
                <h2 className="text-3xl font-bold font-heading text-primary">
                  We are here to assist you
                </h2>
                <p className="text-neutral-grey text-base leading-relaxed">
                  Our professional support center is based in Sydney, coordinating cleaning crews stationed across all districts to ensure prompt arrivals and high service standards.
                </p>
              </div>

              {/* Detail Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <Card className="p-5 lg:p-4 xl:p-6">
                  <div className="flex items-center space-x-3.5 text-secondary-dark mb-3">
                    <Phone className="w-5 h-5" aria-hidden="true" />
                    <h3 className="text-sm font-bold uppercase tracking-wider text-primary font-heading">Call Support</h3>
                  </div>
                  <a href="tel:0489143310" className="text-xs sm:text-sm lg:text-xs xl:text-sm font-bold text-primary hover:text-secondary-dark duration-300 block" aria-label="Call SK Cleaning Solutions at 0489 143 310">
                    0489 143 310
                  </a>
                  <p className="text-xs text-neutral-grey mt-1">Mon-Sat: 7:00 AM - 6:00 PM</p>
                </Card>

                <Card className="p-5 lg:p-4 xl:p-6">
                  <div className="flex items-center space-x-3.5 text-secondary-dark mb-3">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                    <h3 className="text-sm font-bold uppercase tracking-wider text-primary font-heading">Email Inquiries</h3>
                  </div>
                  <a href="mailto:info@skcleaningsolutions.com.au" className="text-xs sm:text-sm lg:text-xs xl:text-sm font-bold text-primary hover:text-secondary-dark duration-300 block" aria-label="Email SK Cleaning Solutions at info@skcleaningsolutions.com.au">
                    info@skcleaningsolutions.com.au
                  </a>
                  <p className="text-xs text-neutral-grey mt-1">Expect a reply in 2 hours</p>
                </Card>

                <Card className="p-6 sm:col-span-2">
                  <div className="flex items-center space-x-3.5 text-secondary-dark mb-3">
                    <MapPin className="w-5 h-5" aria-hidden="true" />
                    <h3 className="text-sm font-bold uppercase tracking-wider text-primary font-heading">Suburbs Served</h3>
                  </div>
                  <p className="text-sm font-semibold text-primary">All Greater Sydney Suburbs</p>
                  <p className="text-xs text-neutral-grey mt-1 leading-relaxed">
                    Including CBD, Parramatta, Hills District, North Shore, Inner West, Eastern Suburbs, Western Suburbs, and Sutherland Shire.
                  </p>
                </Card>

              </div>

              {/* Trust Panel */}
              <div className="p-5 rounded-2xl bg-primary/5 border border-secondary/15 flex items-start space-x-4">
                <ShieldCheck className="w-6 h-6 text-secondary-dark flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h4 className="text-sm font-bold text-primary font-heading">Secure Lockup & SWMS Certified</h4>
                  <p className="text-xs text-neutral-grey mt-0.5 leading-relaxed">
                    Our team provides complete licensing compliance certificates, safety induction logs, and site inspection surveys before any contract service.
                  </p>
                </div>
              </div>

            </div>

            {/* Form Column */}
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
