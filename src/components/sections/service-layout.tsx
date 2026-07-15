"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, MapPin, ShieldCheck, HeartHandshake } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingAction } from "@/components/ui/floating-action";
import { Accordion } from "@/components/ui/accordion";
import { ContactForm } from "@/components/sections/contact-form";
import { Card, CardContent } from "@/components/ui/card";

export interface ServiceLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  checklistTitle?: string;
  checklistItems: string[];
  benefits: Array<{
    title: string;
    description: string;
    icon: "shield" | "heart" | "sparkles";
  }>;
  faqs: Array<{
    id: string;
    question: string;
    answer: React.ReactNode;
  }>;
  imageUrl: string;
}

export function ServiceLayout({
  title,
  subtitle,
  description,
  checklistTitle = "What is Included in Our Premium Clean",
  checklistItems,
  benefits,
  faqs,
  imageUrl,
}: ServiceLayoutProps) {
  
  const getIcon = (type: string) => {
    switch (type) {
      case "shield":
        return <ShieldCheck className="w-6 h-6 text-secondary-dark" aria-hidden="true" />;
      case "heart":
        return <HeartHandshake className="w-6 h-6 text-secondary-dark" aria-hidden="true" />;
      default:
        return <Sparkles className="w-6 h-6 text-secondary-dark" aria-hidden="true" />;
    }
  };

  return (
    <div className="min-h-screen bg-bg-light flex flex-col justify-between">
      <Navbar />

      <main id="main-content" tabIndex={-1} className="flex-grow outline-none">
        
        {/* Service Hero section */}
        <section className="relative pt-28 sm:pt-36 pb-12 sm:pb-20 bg-primary text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0f345e] via-[#08213E] to-[#041121]" />
          <div className="absolute -top-[100px] -right-[100px] w-[300px] h-[300px] rounded-full bg-secondary/5 blur-[80px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Text Info */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/5 border border-secondary/25 backdrop-blur-md"
                >
                  <Sparkles className="w-3.5 h-3.5 text-secondary animate-pulse-slow" />
                  <span className="text-xs font-semibold tracking-wider text-secondary uppercase">
                    {subtitle}
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading text-white"
                >
                  {title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg sm:text-xl text-neutral-grey font-medium leading-relaxed"
                >
                  {description}
                </motion.p>
              </div>

              {/* Right Column: Branded Cleaner Image */}
              <div className="lg:col-span-5 relative w-full aspect-square rounded-2xl overflow-hidden border border-secondary/25 shadow-premium bg-primary/40 group mt-8 lg:mt-0">
                <img
                  src={imageUrl}
                  alt={`${title} Service`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle framing overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/10 pointer-events-none" />
              </div>

            </div>
          </div>
        </section>

        {/* Core details & Interactive Form Section */}
        <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Content (Checklists & Details) */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* Checklist */}
              <div className="space-y-6 bg-white p-6 sm:p-8 rounded-2xl border border-primary/5 shadow-premium">
                <h2 className="text-2xl font-bold font-heading text-primary border-b border-primary/5 pb-4">
                  {checklistTitle}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {checklistItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-secondary/20">
                        <Check className="w-3 h-3 text-secondary-dark stroke-[3px]" aria-hidden="true" />
                      </div>
                      <span className="text-sm sm:text-base text-primary/85">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold font-heading text-primary">
                  Why Hire SK Cleaning Solutions
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {benefits.map((benefit, index) => (
                    <Card key={index} hoverEffect={true} className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center border border-secondary/15 mb-4">
                        {getIcon(benefit.icon)}
                      </div>
                      <h3 className="text-base font-bold text-primary mb-2 font-heading">{benefit.title}</h3>
                      <p className="text-xs text-neutral-grey leading-relaxed">{benefit.description}</p>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Area Coverage Badge */}
              <div className="flex items-center space-x-3.5 p-4 rounded-xl bg-primary/5 border border-secondary/15">
                <MapPin className="w-6 h-6 text-secondary-dark flex-shrink-0" aria-hidden="true" />
                <p className="text-sm font-semibold text-primary">
                  Serving all Sydney metropolitan suburbs with customized corporate schedules.
                </p>
              </div>

            </div>

            {/* Right Content (Sticky Lead Form) */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <ContactForm />
            </div>

          </div>
        </section>

        {/* FAQs Accordion Section */}
        <section className="bg-white border-t border-primary/5 py-12 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-3">
              <h2 className="text-3xl font-bold font-heading text-primary">
                Frequently Asked Questions
              </h2>
              <p className="text-neutral-grey max-w-lg mx-auto text-sm sm:text-base">
                Common questions about our professional {title.toLowerCase()} service in Sydney.
              </p>
            </div>
            <div className="border border-primary/5 shadow-premium p-6 sm:p-10 rounded-2xl bg-white">
              <Accordion items={faqs} />
            </div>
          </div>
        </section>

      </main>

      <FloatingAction />
      <Footer />
    </div>
  );
}
