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
      ket: "group flex items-center rounded-none border-y border-accent-lavender/40 px-6 py-2 bg-surface/20 hover:bg-accent-vibrant/40 hover:border-accent-lavender",
    };

    if (variant === "ket") {
      return (
        <button
          ref={ref}
          className={cn(baseStyles, variants[variant], className)}
          {...props}
        >
          <span className="font-montserrat font-light text-accent-lavender mr-2 text-xl">|</span>
          <span className="font-anton tracking-wider uppercase text-white">{children}</span>
          <span className="font-montserrat font-light text-accent-lavender ml-2 text-xl">⟩</span>
        </button>
      );
    }

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
