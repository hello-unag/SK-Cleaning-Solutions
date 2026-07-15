"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const MotionLink = motion(Link);

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on navigate/anchor click
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full bg-white border-b border-primary/5 shadow-premium",
        isScrolled ? "py-2.5" : "py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <Link href="/" className="focus:outline-none flex items-center h-full" aria-label="SK Cleaning Solutions Home">
            <Logo />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "text-sm font-semibold tracking-wide transition-colors duration-300 relative py-1 focus:outline-none",
                    isActive ? "text-secondary" : "text-primary hover:text-secondary"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300",
                      isActive ? "w-full" : "group-hover:w-full"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-5">
            <a
              href="tel:0489143310"
              className="flex items-center space-x-2 font-semibold text-sm transition-colors duration-300 text-primary hover:text-secondary-dark"
              aria-label="Call SK Cleaning Solutions at 0489 143 310"
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-secondary border bg-primary/5 border-secondary/10">
                <Phone className="w-4 h-4" aria-hidden="true" />
              </div>
              <span>0489 143 310</span>
            </a>
            <MotionLink
              href="/request-quote"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={cn(buttonVariants({ variant: "primary", size: "default" }))}
            >
              Get a Free Quote
            </MotionLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <a
              href="tel:0489143310"
              className="w-10 h-10 rounded-full flex items-center justify-center text-secondary border bg-primary/5 border-secondary/10"
              aria-label="Call Us"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 flex items-center justify-center focus:outline-none transition-colors duration-300 text-primary"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            role="region"
            aria-label="Mobile Navigation"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-primary/5 shadow-premium overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-4">
              <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation Menu">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="text-base font-semibold text-primary hover:text-secondary-dark py-2 border-b border-primary/5 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="pt-2 flex flex-col space-y-4">
                <a
                  href="tel:0489143310"
                  onClick={handleLinkClick}
                  className="flex items-center justify-center space-x-3 text-primary font-semibold text-base py-3 rounded-xl bg-primary/5 border border-secondary/10 hover:text-secondary-dark"
                  aria-label="Call SK Cleaning Solutions at 0489 143 310"
                >
                  <Phone className="w-4 h-4 text-secondary" aria-hidden="true" />
                  <span>Call 0489 143 310</span>
                </a>
                <MotionLink
                  href="/request-quote"
                  onClick={handleLinkClick}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(buttonVariants({ variant: "primary", size: "lg" }), "w-full text-center justify-center")}
                >
                  Get a Free Quote
                </MotionLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
