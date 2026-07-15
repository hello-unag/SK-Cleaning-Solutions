"use client";

import * as React from "react";
import { Sparkles, Compass, ShieldCheck, Mail, Phone, Clock, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Accordion } from "@/components/ui/accordion";
import { ContactForm } from "@/components/sections/contact-form";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingAction } from "@/components/ui/floating-action";

const faqSampleItems = [
  {
    id: "faq-1",
    question: "Do you bring your own cleaning equipment and supplies?",
    answer: "Yes, absolutely. SK Cleaning Solutions provides all necessary premium commercial-grade equipment and eco-friendly cleaning supplies. If you have specific preferences or products you want us to use, we are happy to accommodate.",
  },
  {
    id: "faq-2",
    question: "Are your cleaners insured and police-checked?",
    answer: "Yes. Every member of our cleaning crew undergoes a rigorous vetting process, including full national police background checks. We also hold comprehensive $20 million public liability insurance for your absolute peace of mind.",
  },
  {
    id: "faq-3",
    question: "Can we schedule cleanings outside of business hours?",
    answer: "Of course. We specialize in commercial cleaning and offer flexible scheduling, including early mornings, late evenings, overnight, and weekends, ensuring minimal disruption to your daily operations.",
  },
];

export default function DesignSystemPage() {
  const [activeTab, setActiveTab] = React.useState<"palette" | "typography" | "buttons" | "cards" | "components">("palette");

  const colors = [
    { name: "Primary Deep Navy", hex: "#08213E", desc: "Used for brand backgrounds, primary headers, and trust signals.", bgClass: "bg-primary", textClass: "text-white" },
    { name: "Secondary Luxury Gold", hex: "#C49C54", desc: "Used exclusively for accents, icons, highlighting active elements, and CTA highlights.", bgClass: "bg-secondary", textClass: "text-primary font-bold" },
    { name: "Secondary Text Grey", hex: "#6A7685", desc: "Used for body descriptions, dates, metadata, and placeholder text.", bgClass: "bg-neutral-grey", textClass: "text-white" },
    { name: "Light Warm Grey", hex: "#F8F8F7", desc: "Used for card backgrounds, secondary sections, and light form inputs.", bgClass: "bg-bg-light", textClass: "text-primary" },
    { name: "Background White", hex: "#FFFFFF", desc: "Default layout background ensuring clean negative space.", bgClass: "bg-white border border-primary/5", textClass: "text-primary" },
  ];

  return (
    <div className="min-h-screen bg-bg-light pb-20">
      {/* Navbar Integration */}
      <Navbar />

      {/* Hero Header for Design System */}
      <section className="relative pt-32 pb-16 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0f345e] via-[#08213E] to-[#041121]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-secondary/30">
            <Sparkles className="w-3.5 h-3.5 text-secondary" />
            <span className="text-xs uppercase font-extrabold tracking-widest text-secondary">
              Style Guide & System
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            SK Cleaning Design System
          </h1>
          <p className="text-neutral-grey max-w-xl mx-auto text-sm sm:text-base">
            Premium luxury components created with Next.js 15, React 19, TypeScript, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </section>

      {/* Interactive Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-primary/10 pb-4 mb-10">
          {(["palette", "typography", "buttons", "cards", "components"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all duration-300 border focus:outline-none cursor-pointer ${
                activeTab === tab
                  ? "bg-primary text-white border-primary shadow-premium"
                  : "bg-white text-primary border-primary/10 hover:border-secondary hover:text-secondary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Contents */}
        <div className="space-y-12">
          
          {/* TAB 1: COLOR PALETTE */}
          {activeTab === "palette" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {colors.map((color) => (
                <Card key={color.name} hoverEffect={true}>
                  <div className={`h-36 ${color.bgClass} flex items-end p-4 relative`}>
                    <span className={`text-xs uppercase tracking-widest px-2.5 py-1 rounded bg-black/10 backdrop-blur-md ${color.textClass}`}>
                      {color.hex}
                    </span>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg font-bold">{color.name}</CardTitle>
                    <CardDescription className="text-sm mt-1">{color.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          )}

          {/* TAB 2: TYPOGRAPHY */}
          {activeTab === "typography" && (
            <div className="bg-white p-6 sm:p-10 rounded-2xl border border-primary/5 shadow-premium space-y-10 animate-fade-in">
              
              {/* Headings */}
              <div className="space-y-6">
                <h3 className="text-xs uppercase tracking-widest text-secondary font-bold border-b border-primary/5 pb-2">
                  Headings - Poppins (Font Family)
                </h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] text-neutral-grey font-bold uppercase tracking-wider block mb-1">H1 - Hero Title (4xl / 6xl)</span>
                    <h1 className="text-4xl sm:text-5xl font-extrabold">Sydney's Trusted Cleaning Partner</h1>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-grey font-bold uppercase tracking-wider block mb-1">H2 - Section Title (3xl)</span>
                    <h2 className="text-3xl font-bold">Bespoke Cleaning Solutions</h2>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-grey font-bold uppercase tracking-wider block mb-1">H3 - Card / Sub-Heading (xl)</span>
                    <h3 className="text-xl font-bold">Commercial & Office Space Care</h3>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-grey font-bold uppercase tracking-wider block mb-1">H4 - Sub-Item Title (lg)</span>
                    <h4 className="text-lg font-semibold">Quality Service Guaranteed</h4>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="space-y-6">
                <h3 className="text-xs uppercase tracking-widest text-secondary font-bold border-b border-primary/5 pb-2">
                  Body Typography - Inter (Font Family)
                </h3>
                <div className="space-y-4 max-w-2xl">
                  <div>
                    <span className="text-[10px] text-neutral-grey font-bold uppercase tracking-wider block mb-1">Lead Paragraph (text-lg / xl)</span>
                    <p className="text-lg text-neutral-grey font-medium leading-relaxed">
                      We offer tailored office, medical suite, gym, and retail showroom cleaning schedules that fit perfectly around your Sydney operating hours.
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-grey font-bold uppercase tracking-wider block mb-1">Default Body Text (text-base)</span>
                    <p className="text-base text-primary/80 leading-relaxed">
                      Our elite cleaning team undergoes extensive security vetting and commercial training to guarantee that your facilities are not only spotless but secure.
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-grey font-bold uppercase tracking-wider block mb-1">Small Meta Text (text-xs / sm)</span>
                    <p className="text-xs text-neutral-grey">
                      * All contracts require 24 hours notice for scheduled cancellation without incurring penalty.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: BUTTONS */}
          {activeTab === "buttons" && (
            <div className="bg-white p-6 sm:p-10 rounded-2xl border border-primary/5 shadow-premium space-y-10 animate-fade-in">
              
              {/* Button Styles */}
              <div className="space-y-6">
                <h3 className="text-xs uppercase tracking-widest text-secondary font-bold border-b border-primary/5 pb-2">
                  Interactive Button Styles
                </h3>
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="primary">
                    Primary Luxury Gold
                  </Button>
                  <Button variant="secondary">
                    Secondary Solid Navy
                  </Button>
                  <Button variant="outline">
                    Outline Deep Navy
                  </Button>
                  <Button variant="outlineGold">
                    Outline Gold accent
                  </Button>
                  <Button variant="glass">
                    Glassmorphism button
                  </Button>
                  <Button variant="ghost">
                    Ghost Link style
                  </Button>
                  <Button variant="link">
                    Text Link
                  </Button>
                </div>
              </div>

              {/* Sizes */}
              <div className="space-y-6">
                <h3 className="text-xs uppercase tracking-widest text-secondary font-bold border-b border-primary/5 pb-2">
                  Sizes & Icon Configurations
                </h3>
                <div className="flex flex-wrap items-end gap-4">
                  <Button variant="primary" size="lg" className="flex items-center space-x-2">
                    <span>Large Button</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                  <Button variant="primary" size="default">
                    Default Size
                  </Button>
                  <Button variant="primary" size="sm">
                    Small Button
                  </Button>
                  <Button variant="outline" size="icon">
                    <Compass className="w-5 h-5 text-secondary" />
                  </Button>
                </div>
              </div>

            </div>
          )}

          {/* TAB 4: PREMIUM CARDS */}
          {activeTab === "cards" && (
            <div className="space-y-10 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Default Card */}
                <Card variant="default">
                  <CardHeader>
                    <CardTitle className="text-lg">Default Card</CardTitle>
                    <CardDescription>White background with micro border shadow.</CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm">
                    Standard premium container for listing services, features, and text elements.
                  </CardContent>
                  <CardFooter className="text-xs text-secondary font-semibold">
                    Read More
                  </CardFooter>
                </Card>

                {/* Light Card */}
                <Card variant="light">
                  <CardHeader>
                    <CardTitle className="text-lg">Light Card</CardTitle>
                    <CardDescription>Warm grey background shading.</CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm">
                    Excellent for setting structural elements apart within white layouts.
                  </CardContent>
                  <CardFooter className="text-xs text-secondary font-semibold">
                    Read More
                  </CardFooter>
                </Card>

                {/* Navy Card */}
                <Card variant="navy" className="border-shine">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">Navy Card</CardTitle>
                    <CardDescription className="text-white/60">Rich Deep Navy Blue.</CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-white/80">
                    Perfect for highlighting exclusive packages or guarantees.
                  </CardContent>
                  <CardFooter className="text-xs text-secondary font-semibold border-t border-white/5">
                    Premium Feature
                  </CardFooter>
                </Card>

                {/* Glassmorphism Card */}
                <Card variant="glass">
                  <CardHeader>
                    <CardTitle className="text-lg">Glassmorphism Card</CardTitle>
                    <CardDescription>Semi-transparent backdrop blur.</CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm">
                    Stunning when overlaid on colored/dark banner backgrounds.
                  </CardContent>
                  <CardFooter className="text-xs text-secondary font-semibold">
                    Interactive
                  </CardFooter>
                </Card>

              </div>
            </div>
          )}

          {/* TAB 5: ADVANCED SECTIONS / ACCORDIONS / FORMS */}
          {activeTab === "components" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start animate-fade-in">
              
              {/* Form Demonstration */}
              <div className="lg:col-span-6 space-y-6">
                <h3 className="text-xs uppercase tracking-widest text-secondary font-bold border-b border-primary/5 pb-2">
                  Interactive Contact Form (Live Submission)
                </h3>
                <ContactForm />
              </div>

              {/* Accordion Showcase */}
              <div className="lg:col-span-6 space-y-6">
                <h3 className="text-xs uppercase tracking-widest text-secondary font-bold border-b border-primary/5 pb-2">
                  FAQ Accordion Section (Framer Motion)
                </h3>
                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-primary/5 shadow-premium">
                  <Accordion items={faqSampleItems} />
                </div>

                {/* Icons Grid */}
                <h3 className="text-xs uppercase tracking-widest text-secondary font-bold border-b border-primary/5 pb-2 pt-6">
                  Design System Lucide Icons Mapping
                </h3>
                <div className="grid grid-cols-4 gap-4 bg-white p-6 rounded-2xl border border-primary/5 shadow-premium text-center">
                  <div className="flex flex-col items-center p-2.5 hover:text-secondary duration-300">
                    <ShieldCheck className="w-6 h-6 mb-2 text-secondary" />
                    <span className="text-[10px] text-neutral-grey">Trust Indicator</span>
                  </div>
                  <div className="flex flex-col items-center p-2.5 hover:text-secondary duration-300">
                    <Mail className="w-6 h-6 mb-2 text-secondary" />
                    <span className="text-[10px] text-neutral-grey">Email Contact</span>
                  </div>
                  <div className="flex flex-col items-center p-2.5 hover:text-secondary duration-300">
                    <Phone className="w-6 h-6 mb-2 text-secondary" />
                    <span className="text-[10px] text-neutral-grey">Direct Phone</span>
                  </div>
                  <div className="flex flex-col items-center p-2.5 hover:text-secondary duration-300">
                    <Clock className="w-6 h-6 mb-2 text-secondary" />
                    <span className="text-[10px] text-neutral-grey">Operating Hours</span>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>
      </div>

      {/* Floating Action integration */}
      <FloatingAction />

      {/* Footer Integration */}
      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
}
