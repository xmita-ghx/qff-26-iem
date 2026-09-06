import React from "react";
import { cn } from "@/lib/constants";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ket";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-glow disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      primary:
        "rounded-full bg-accent-vibrant text-pure-white hover:bg-accent-glow hover:shadow-[0_0_20px_rgba(157,78,221,0.6)] px-6 py-2.5",
      secondary:
        "rounded-full border border-accent-glow/50 bg-transparent text-pure-white hover:bg-accent-glow/20 px-6 py-2.5",
      ket: "font-anton text-lg tracking-wide rounded-none border-y border-accent-lavender/40 px-6 py-2 text-pure-white bg-surface/20 hover:bg-accent-vibrant/40 hover:border-accent-lavender before:content-['⟨'] before:mr-2 before:text-accent-lavender after:content-['|⟩'] after:ml-2 after:text-accent-lavender",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
