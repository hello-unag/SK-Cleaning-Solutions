import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ShieldCheck, Clock, Award, Star, ThumbsUp, Calendar, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingAction } from "@/components/ui/floating-action";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Cleaning Services",
  description: "Explore our range of professional cleaning services in Sydney, including commercial office cleaning, end of lease, strata, and window cleaning.",
};

const services = [
  {
    title: "Commercial Cleaning",
    desc: "Bespoke cleaning solutions for retail showrooms, educational centers, medical clinics, and industrial facilities. Tailored maintenance ensuring a secure, sterile environment.",
    href: "/services/commercial-cleaning",
    icon: ShieldCheck,
    features: ["Medical Suite Sterilization", "Retail Floor Polishing", "Tailored Site Walkthroughs"],
  },
  {
    title: "Office Cleaning",
    desc: "High-standard corporate workspace care. Flexible schedules (daily, weekly, after-hours) designed to minimize office disruption and foster a healthy staff environment.",
    href: "/services/office-cleaning",
    icon: Clock,
    features: ["Desk & Keyboard Sanitizing", "Boardroom Presentation Care", "Rubbish & Recycling Management"],
  },
  {
    title: "End of Lease Cleaning",
    desc: "Bond return cleaning with a 100% success rate. We follow strict, agency-approved checklist criteria to make sure tenants get their rental bond returned in full.",
    href: "/services/end-of-lease-cleaning",
    icon: Award,
    features: ["Deep Oven & Kitchen Clean", "Detailed Wall & Baseboard Wash", "Steam Carpet Cleaning Option"],
  },
  {
    title: "Builders Cleaning",
    desc: "Post-construction and renovation deep clean. Removing industrial dust, paint spots, grout residue, and polishing glass for handover-ready presentation.",
    href: "/services/builders-cleaning",
    icon: Sparkles,
    features: ["High-Level Dust Removal", "Glass & Frame Paint Scraping", "Floor Scuff & Grout Wash"],
  },
  {
    title: "Window Cleaning",
    desc: "Professional interior and exterior window wash. Using pure-water technology and squeegee methods to leave glass spotless and streak-free.",
    href: "/services/window-cleaning",
    icon: ThumbsUp,
    features: ["Pure Water-Fed Pole Systems", "Track & Screen Cleaning", "Double Story Facilities"],
  },
  {
    title: "Strata Cleaning",
    desc: "Cleaning and upkeep of apartment common areas, lobbies, corridors, lifts, stairwells, and outdoor walkways. Structured on regular contract schedules.",
    href: "/services/strata-cleaning",
    icon: Star,
    features: ["Stairwell & Lift Sanitizing", "Common Lobby Vacuum & Mop", "Bin Rotation & Outer Walkways"],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-bg-light flex flex-col justify-between">
      <Navbar />

      <main id="main-content" tabIndex={-1} className="flex-grow outline-none">
        {/* Services Hero Section */}
        <section className="relative pt-36 pb-20 bg-primary text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0f345e] via-[#08213E] to-[#041121]" />
          <div className="absolute -top-[100px] -right-[100px] w-[300px] h-[300px] rounded-full bg-secondary/5 blur-[80px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/5 border border-secondary/25 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-secondary animate-pulse-slow" />
              <span className="text-xs font-semibold tracking-wider text-secondary uppercase">
                Services Directory
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading text-white">
              Professional Cleaning Solutions
            </h1>

            <p className="text-lg sm:text-xl text-neutral-grey font-medium leading-relaxed max-w-3xl mx-auto">
              Our comprehensive range of commercial and domestic services serves all Greater Sydney suburbs. Explore our specialized solutions below.
            </p>
          </div>
        </section>

        {/* Services Listing Section */}
        <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} hoverEffect={true} className="flex flex-col justify-between h-full p-2 group text-left">
                  <CardHeader className="space-y-4">
                    <Link href={service.href} className="block w-12 h-12 focus:outline-none" aria-label={`Read more about our ${service.title} services`}>
                      <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center border border-secondary/15 group-hover:bg-primary/10 transition-colors">
                        <Icon className="w-6 h-6 text-secondary-dark" aria-hidden="true" />
                      </div>
                    </Link>
                    <CardTitle className="text-2xl font-bold font-heading hover:text-secondary-dark transition-colors focus-within:text-secondary-dark">
                      <Link href={service.href} className="focus:outline-none">
                        {service.title}
                      </Link>
                    </CardTitle>
                    <Link href={service.href} className="block focus:outline-none" aria-label={`Read more about our ${service.title} services`}>
                      <CardDescription className="text-sm leading-relaxed text-neutral-grey hover:text-primary transition-colors cursor-pointer">
                        {service.desc}
                      </CardDescription>
                    </Link>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <h4 className="text-xs uppercase font-extrabold tracking-widest text-primary/80">Key Highlights:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-neutral-grey">
                      {service.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary-dark flex-shrink-0" aria-hidden="true" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between border-t border-primary/5 pt-4 mt-6">
                    <Link href={service.href} className="text-xs font-semibold text-secondary-dark hover:text-gold-hover transition-colors flex items-center group/btn focus:outline-none" aria-label={`Explore details for our ${service.title} services`}>
                      <span>Explore Service Details</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1 transform group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                    <Link
                      href="/request-quote"
                      className={cn(buttonVariants({ variant: "outline", size: "sm" }), "cursor-pointer")}
                    >
                      Request Quote
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Global CTA Section */}
        <section className="bg-primary text-white py-16 relative overflow-hidden text-center">
          <div className="absolute top-[20%] left-[-100px] w-[300px] h-[300px] rounded-full bg-secondary/5 blur-[100px] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
            <h2 className="text-2xl sm:text-4xl font-extrabold font-heading">
              Need a Customized Cleaning Checklist?
            </h2>
            <p className="text-neutral-grey max-w-lg mx-auto text-sm sm:text-base">
              No two spaces are alike. We can customize any of our core cleaning procedures to suit your operational needs or building specifications.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/request-quote"
                className={cn(buttonVariants({ variant: "primary" }), "shadow-gold-glow cursor-pointer")}
              >
                Request Free Quote
              </Link>
              <Link
                href="/contact"
                className={cn(buttonVariants({ variant: "outlineGold" }), "text-secondary hover:text-white hover:bg-secondary cursor-pointer")}
              >
                Contact Office
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FloatingAction />
      <Footer />
    </div>
  );
}
