"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  value: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
}

export const AccordionItem = ({
  trigger,
  children,
  isOpen = false,
  onToggle,
  className,
}: AccordionItemProps) => {
  return (
    <div className={cn("border-b border-primary/10 py-2", className)}>
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between py-4 text-left font-medium text-primary hover:text-secondary transition-colors duration-200 focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="text-base md:text-lg font-semibold">{trigger}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-secondary flex-shrink-0 ml-4"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-4 text-neutral-grey text-sm md:text-base leading-relaxed pl-1">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface AccordionProps {
  items: Array<{
    id: string;
    question: string;
    answer: React.ReactNode;
  }>;
  className?: string;
  allowMultiple?: boolean;
}

export const Accordion = ({ items, className, allowMultiple = false }: AccordionProps) => {
  const [openItems, setOpenItems] = React.useState<string[]>([]);

  const handleToggle = (id: string) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenItems((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn("w-full space-y-1", className)}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          value={item.id}
          trigger={item.question}
          isOpen={openItems.includes(item.id)}
          onToggle={() => handleToggle(item.id)}
        >
          {item.answer}
        </AccordionItem>
      ))}
    </div>
  );
};
