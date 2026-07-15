"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, Award } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const MotionLink = motion(Link);

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-36 pb-16 bg-primary text-white overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0f345e] via-[#08213E] to-[#041121]" />
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-secondary/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[450px] h-[450px] rounded-full bg-[#1e4e7e]/10 blur-[130px] pointer-events-none" />
      
      {/* Thin elegant grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content Block */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/5 border border-secondary/25 backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-secondary animate-pulse-slow" />
              <span className="text-xs md:text-sm font-semibold tracking-wider text-secondary uppercase">
                Sydney's Premier Cleaning Specialists
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] font-heading text-white"
            >
              Impeccable Cleaning, <br />
              <span className="bg-gradient-to-r from-secondary via-amber-200 to-secondary bg-clip-text text-transparent border-shine">
                Bespoke Luxury Care.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-neutral-grey font-medium leading-relaxed max-w-2xl"
            >
              Providing elite commercial, office, and residential cleaning solutions across all Sydney suburbs. Designed for corporate offices and luxury homes.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5"
            >
              <MotionLink
                href="#contact"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  buttonVariants({ variant: "primary", size: "lg" }),
                  "flex items-center justify-center space-x-2 font-semibold shadow-gold-glow cursor-pointer"
                )}
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
              </MotionLink>
              <MotionLink
                href="#services"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  buttonVariants({ variant: "outlineGold", size: "lg" }),
                  "font-semibold text-secondary-dark hover:text-white hover:bg-secondary cursor-pointer"
                )}
              >
                Explore Services
              </MotionLink>
            </motion.div>

            {/* Vetted Staff Info Block */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 max-w-lg text-left space-y-1.5"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse-slow" />
                <span className="text-[10px] uppercase font-bold tracking-[0.15em] text-secondary">
                  Vetted Professional Staff
                </span>
              </div>
              <p className="text-xs text-neutral-grey leading-relaxed">
                <strong className="text-white">Uniformed & Fully Insured:</strong> Every staff member is fully trained, police-checked, and wears our official SK brand uniform on-site.
              </p>
            </motion.div>

            {/* Trust Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 border-t border-white/5 grid grid-cols-2 gap-4 max-w-lg"
            >
              <div className="flex items-center space-x-2.5">
                <ShieldCheck className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm font-semibold tracking-wide text-white/95">100% Insured & Vetted</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Award className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm font-semibold tracking-wide text-white/95">100% Satisfaction Guarantee</span>
              </div>
            </motion.div>

          </div>

          {/* Uniform Showcase / Graphic Display Side */}
          <div className="lg:col-span-5 relative block w-full mt-10 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full h-[320px] sm:h-[400px] lg:h-[480px] rounded-3xl overflow-hidden shadow-premium border border-secondary/20 bg-primary/40 group"
            >
              {/* Uniform mockup image */}
              <img
                src="/cleaner.png"
                alt="SK Cleaning Solutions Branded Professional Cleaner"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Subtle top/bottom vignette overlay for framing */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/15 pointer-events-none" />

              {/* Small floating Guarantee badge */}
              <div className="absolute top-4 right-4 bg-primary/80 backdrop-blur-sm border border-secondary/30 px-3 py-1.5 rounded-full flex items-center space-x-1.5 shadow-premium">
                <ShieldCheck className="w-3.5 h-3.5 text-secondary" />
                <span className="text-[9px] uppercase font-extrabold tracking-wider text-white">
                  SK Certified
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
