import React from "react";
import { cn } from "@/lib/constants";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-2xl bg-surface/40 backdrop-blur-md border border-accent-glow/20 p-6 shadow-[0_0_15px_rgba(157,78,221,0.1)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(157,78,221,0.2)] hover:border-accent-glow/40",
          className
        )}
        {...props}
      >
        {/* Subtle inner top highlight */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-lavender/30 to-transparent" />

        <div className="relative z-10">{children}</div>
      </div>
    );
  }
);
GlassCard.displayName = "GlassCard";
