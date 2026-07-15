"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const serviceOptions = [
  { value: "commercial", label: "Commercial & Office Cleaning" },
  { value: "residential", label: "Residential & Domestic Cleaning" },
  { value: "end-of-lease", label: "End of Lease Cleaning" },
  { value: "deep-clean", label: "Deep & Construction Clean" },
  { value: "other", label: "Other" },
];

export function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    suburb: "",
    service: "commercial",
    date: "",
    message: "",
  });

  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setLoading(false);
    setSubmitted(true);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      suburb: "",
      service: "commercial",
      date: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-2xl shadow-premium border border-primary/5 p-6 md:p-8 relative overflow-hidden">
      {/* Decorative border shine */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-secondary/50 via-secondary to-secondary/50" />

      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="contact-form"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tight text-primary font-heading">
                Book a Free Consultation
              </h3>
              <p className="text-sm text-neutral-grey">
                Get an obligation-free quote tailored for your specific cleaning requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. John Smith"
                required
              />
              <Input
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 0400 000 000"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. john@company.com"
                required
              />
              <Input
                label="Sydney Suburb"
                name="suburb"
                value={formData.suburb}
                onChange={handleChange}
                placeholder="e.g. Parramatta"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Service dropdown */}
              <div className="flex flex-col space-y-1.5">
                <label
                  htmlFor="required-service-select"
                  className="text-sm font-semibold tracking-wide text-primary"
                >
                  Required Service
                  <span className="text-secondary ml-1">*</span>
                </label>
                <select
                  id="required-service-select"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="flex h-11 w-full rounded-lg border border-primary/10 bg-bg-light px-4 py-2 text-sm text-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary focus:bg-white"
                  required
                >
                  {serviceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <Input
                label="Preferred Date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <Textarea
              label="Additional Details"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about the size of the area, number of bedrooms/bathrooms, schedule frequency, or special requirements..."
              rows={4}
              required
            />

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full flex items-center justify-center space-x-2 font-bold shadow-gold-glow"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Processing Request...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-1" />
                  <span>Request My Free Quote</span>
                </>
              )}
            </Button>
          </motion.form>
        ) : (
          <motion.div
            key="success-message"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="flex flex-col items-center justify-center text-center py-12 space-y-5"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/20">
              <CheckCircle2 className="w-10 h-10 animate-bounce" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tight text-primary font-heading">
                Inquiry Submitted!
              </h3>
              <p className="text-base text-neutral-grey max-w-sm">
                Thank you for contacting SK Cleaning Solutions. Our representative will contact you with a customized estimate within the next 2 business hours.
              </p>
            </div>

            <div className="pt-4">
              <Button
                variant="outline"
                size="default"
                onClick={() => setSubmitted(false)}
                className="flex items-center space-x-2 font-medium"
              >
                <Calendar className="w-4 h-4 mr-1 text-secondary" />
                <span>Submit Another Request</span>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
