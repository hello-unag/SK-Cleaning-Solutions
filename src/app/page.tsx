import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, Clock, Award, Star, ThumbsUp, Calendar, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "SK Cleaning Solutions | Premium Commercial & Residential Cleaning Sydney",
  description: "Sydney's trusted commercial, office, and residential cleaning service. Serving all Sydney suburbs with bespoke premium cleaning solutions.",
  alternates: {
    canonical: "https://skcleaningsolutions.com.au",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CleaningService",
  "name": "SK Cleaning Solutions",
  "image": "https://skcleaningsolutions.com.au/logo-thick-no-tagline.png",
  "url": "https://skcleaningsolutions.com.au",
  "telephone": "0489143310",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sydney Metropolitan Area",
    "addressLocality": "Sydney",
    "addressRegion": "NSW",
    "postalCode": "2000",
    "addressCountry": "AU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-33.8688",
    "longitude": "151.2093"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "07:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.facebook.com/share/1LcxrS8yS2/?mibextid=wwXIfr",
    "https://www.instagram.com/skcleaningsolutions_sydney?igsh=MTJzYXA2YnpzZ3k2MQ%3D%3D&utm_source=qr"
  ],
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Sydney"
    }
  ]
};
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingAction } from "@/components/ui/floating-action";
import { HeroSection } from "@/components/sections/hero-section";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { ContactForm } from "@/components/sections/contact-form";

const servicesList = [
  {
    title: "Commercial Cleaning",
    desc: "Bespoke cleaning solutions for retail stores, showrooms, medical clinics, and school facilities across Sydney.",
    href: "/services/commercial-cleaning",
    icon: ShieldCheck,
  },
  {
    title: "Office Cleaning",
    desc: "Maintain a pristine and productive workspace with flexible daily, weekly, or after-hours corporate schedules.",
    href: "/services/office-cleaning",
    icon: Clock,
  },
  {
    title: "End of Lease Cleaning",
    desc: "Sydney’s leading bond return cleaning. 100% satisfaction guarantee with agency-approved detailed checklists.",
    href: "/services/end-of-lease-cleaning",
    icon: Award,
  },
  {
    title: "Builders Cleaning",
    desc: "Detailed post-construction deep clean. Removing dust, residue, paint spots, and polishing surfaces for handover.",
    href: "/services/builders-cleaning",
    icon: Sparkles,
  },
  {
    title: "Window Cleaning",
    desc: "Crystal-clear exterior and interior window cleaning using advanced water-fed pole pure water technologies.",
    href: "/services/window-cleaning",
    icon: ThumbsUp,
  },
  {
    title: "Strata Cleaning",
    desc: "Cleaning and maintenance of residential common areas, lobbies, stairwells, and properties on a contract schedule.",
    href: "/services/strata-cleaning",
    icon: Star,
  },
];

const homeFaqItems = [
  {
    id: "hfaq-1",
    question: "Which areas in Sydney do you service?",
    answer: "We cover all major Sydney suburbs and districts, including the Sydney CBD, North Shore, Eastern Suburbs, Inner West, Western Sydney, Parramatta, Hills District, and Sutherland Shire.",
  },
  {
    id: "hfaq-2",
    question: "Do we have to sign a long-term contract for office cleaning?",
    answer: "No, we do not lock our clients into rigid contracts. We offer flexible month-to-month service agreements, allowing you to scale or change your cleaning schedule as your business requirements evolve.",
  },
  {
    id: "hfaq-3",
    question: "What eco-friendly practices do you implement?",
    answer: "We are committed to health and sustainability. We use non-toxic, biodegradable green cleaning chemicals and HEPA-filter vacuums, which improve indoor air quality and protect both your staff and the environment.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-light flex flex-col justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main id="main-content" tabIndex={-1} className="flex-grow outline-none">
        
        {/* Luxury Hero Banner */}
        <HeroSection />

        {/* Brand Key Stats Section */}
        <section className="py-16 bg-white border-y border-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-1">
                <p className="text-4xl sm:text-5xl font-extrabold text-primary font-heading">
                  10+
                </p>
                <p className="text-xs sm:text-sm font-semibold tracking-wider text-secondary-dark uppercase">
                  Years Service
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-4xl sm:text-5xl font-extrabold text-primary font-heading">
                  99.8%
                </p>
                <p className="text-xs sm:text-sm font-semibold tracking-wider text-secondary-dark uppercase">
                  Client Satisfaction
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-4xl sm:text-5xl font-extrabold text-primary font-heading">
                  100%
                </p>
                <p className="text-xs sm:text-sm font-semibold tracking-wider text-secondary-dark uppercase">
                  Insured & Bond Guarantee
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-4xl sm:text-5xl font-extrabold text-primary font-heading">
                  All
                </p>
                <p className="text-xs sm:text-sm font-semibold tracking-wider text-secondary-dark uppercase">
                  Sydney Suburbs
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section id="services" className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/5 border border-secondary/25">
              <Sparkles className="w-3.5 h-3.5 text-secondary-dark" />
              <span className="text-xs uppercase font-extrabold tracking-widest text-secondary-dark">
                Our Capabilities
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-primary">
              Bespoke Cleaning Services
            </h2>
            <p className="text-neutral-grey max-w-lg mx-auto text-sm sm:text-base">
              Explore our specialist commercial and residential services tailored to Sydney’s elite facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} hoverEffect={true} className="flex flex-col justify-between h-full text-left group">
                  <CardHeader className="space-y-4">
                    <Link href={service.href} className="block w-12 h-12 focus:outline-none" aria-label={`Read more about our ${service.title} services`}>
                      <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center border border-secondary/15 group-hover:bg-primary/10 transition-colors">
                        <Icon className="w-6 h-6 text-secondary-dark" />
                      </div>
                    </Link>
                    <CardTitle className="text-xl font-bold hover:text-secondary-dark transition-colors focus-within:text-secondary-dark">
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
                  <CardFooter className="pt-2">
                    <Link href={service.href} className="text-xs font-semibold text-secondary-dark hover:text-gold-hover transition-colors flex items-center group/btn focus:outline-none" aria-label={`View details for ${service.title} services`}>
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1 transform group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Why Choose Us / Trust Badges Section */}
        <section id="why-choose-us" className="py-12 sm:py-20 bg-primary text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#0f345e] via-[#08213E] to-[#041121]" />
          <div className="absolute top-[20%] left-[-100px] w-[300px] h-[300px] rounded-full bg-secondary/5 blur-[100px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Col text */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-secondary/30">
                <ShieldCheck className="w-3.5 h-3.5 text-secondary" />
                <span className="text-xs uppercase font-extrabold tracking-widest text-secondary">
                  The SK Guarantee
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
                Impeccable Standards. <br />
                Uncompromising Trust.
              </h2>
              <p className="text-neutral-grey text-sm sm:text-base leading-relaxed">
                At SK Cleaning Solutions, we believe that presentation is everything. We combine rigorous security vetting, thorough commercial training, and sustainable eco-cleaning tools to deliver an absolute premium experience.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3.5">
                  <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary stroke-[3px]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-tight">24/7 Priority Support</h4>
                    <p className="text-xs text-neutral-grey mt-0.5">Dedicated supervisors for immediate responses.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3.5">
                  <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary stroke-[3px]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-tight">Eco-Safe Green Clean</h4>
                    <p className="text-xs text-neutral-grey mt-0.5">Protecting our client families and the environment.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Quote banner / Graphic */}
            <div className="lg:col-span-6">
              <div className="bg-white/5 border border-white/10 backdrop-blur-md p-8 sm:p-10 rounded-3xl space-y-6 text-left">
                <h3 className="text-xl font-bold font-heading text-secondary uppercase tracking-widest">
                  Our Brand Values
                </h3>
                <ul className="space-y-4">
                  <li className="border-l-2 border-secondary pl-4">
                    <h4 className="text-base font-bold text-white">Integrity First</h4>
                    <p className="text-xs text-neutral-grey mt-0.5">Vetted, police-checked cleaners with complete tracking protocols.</p>
                  </li>
                  <li className="border-l-2 border-secondary pl-4">
                    <h4 className="text-base font-bold text-white">Consistent Excellence</h4>
                    <p className="text-xs text-neutral-grey mt-0.5">Color-coded cleaning methods to avoid cross-contamination.</p>
                  </li>
                  <li className="border-l-2 border-secondary pl-4">
                    <h4 className="text-base font-bold text-white">Bespoke Client Schedules</h4>
                    <p className="text-xs text-neutral-grey mt-0.5">Schedules structured purely to accommodate your operations.</p>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </section>


        {/* FAQ Accordion Section */}
        <section id="faqs" className="bg-white border-t border-primary/5 py-12 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-3">
              <h2 className="text-3xl font-bold font-heading text-primary">
                Frequently Asked Questions
              </h2>
              <p className="text-neutral-grey max-w-lg mx-auto text-sm sm:text-base">
                Everything you need to know about our premium cleaning systems and security setups.
              </p>
            </div>
            <div className="border border-primary/5 shadow-premium p-6 sm:p-10 rounded-2xl bg-white">
              <Accordion items={homeFaqItems} />
            </div>
          </div>
        </section>

        {/* Bottom Booking Contact CTA Form Section */}
        <section id="contact" className="py-12 sm:py-20 bg-bg-light border-t border-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Booking Text Details */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/5 border border-secondary/25">
                <Calendar className="w-3.5 h-3.5 text-secondary-dark" />
                <span className="text-xs uppercase font-extrabold tracking-widest text-secondary-dark">
                  Free Quote
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-primary leading-tight">
                Ready to Experience <br />
                The SK Cleaning Standard?
              </h2>
              <p className="text-neutral-grey text-sm sm:text-base leading-relaxed">
                Contact our customer support team to schedule a site walkthrough or query about custom commercial contracts. We tailor every cleaning list to meet the exact parameters of your space.
              </p>
              <div className="space-y-3.5">
                <a href="tel:0489143310" className="flex items-center space-x-3 text-primary hover:text-secondary-dark duration-300 font-semibold" aria-label="Call SK Cleaning Solutions at 0489 143 310">
                  <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-secondary-dark">
                    <Clock className="w-4.5 h-4.5" aria-hidden="true" />
                  </div>
                  <span>Phone Quote: 0489 143 310</span>
                </a>
                <a href="mailto:info@skcleaningsolutions.com.au" className="flex items-center space-x-3 text-primary hover:text-secondary-dark duration-300 font-semibold" aria-label="Email SK Cleaning Solutions at info@skcleaningsolutions.com.au">
                  <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-secondary-dark">
                    <ShieldCheck className="w-4.5 h-4.5" aria-hidden="true" />
                  </div>
                  <span>Email Quote: info@skcleaningsolutions.com.au</span>
                </a>
              </div>
            </div>

            {/* Booking Form Layout */}
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
