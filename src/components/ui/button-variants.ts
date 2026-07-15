import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer tracking-wide",
  {
    variants: {
      variant: {
        primary: "bg-secondary text-primary font-semibold hover:bg-gold-hover shadow-premium hover:shadow-premium-hover relative overflow-hidden border-shine",
        secondary: "bg-primary text-white hover:bg-opacity-95 shadow-premium hover:shadow-premium-hover border border-primary/20",
        outline: "border border-primary/25 bg-transparent text-primary hover:bg-primary/5 hover:border-primary/50",
        outlineGold: "border border-secondary bg-transparent text-secondary hover:bg-secondary/5",
        glass: "glass-premium text-primary hover:bg-white/80 border border-white/40 shadow-premium",
        ghost: "hover:bg-primary/5 text-primary",
        link: "text-secondary underline-offset-4 hover:underline bg-transparent p-0",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);
