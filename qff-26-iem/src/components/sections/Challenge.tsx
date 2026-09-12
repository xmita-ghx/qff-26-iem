"use client";

import React from "react";
import { motion } from "framer-motion";

export const Challenge = () => {
  return (
    <section id="challenge" className="py-24 relative z-10 border-t border-surface/50">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* Section Heading */}
          <h2 className="font-anton text-4xl md:text-5xl uppercase tracking-wider mb-2">
            ABOUT THE <span className="text-[#E0AAFF]">CHALLENGE</span>
          </h2>

          {/* Subtitle / Timeline */}
          <p className="font-anton font-light text-sm md:text-base text-[#E0AAFF]/90 tracking-widest uppercase mb-10">
            NOV 10, 2026, 10:00 PM IST – NOV 11, 2026, 10:00 PM IST | Virtual
          </p>

          {/* Body Content */}
          <div className="font-urbanist text-left text-white/85 text-base sm:text-lg leading-relaxed space-y-6 bg-surface/30 border border-white/10 p-8 md:p-10 rounded-2xl backdrop-blur-md shadow-[0_0_20px_rgba(157,78,221,0.15)]">
            <p className="text-xl sm:text-2xl text-white font-bold">
              Theme: Chi(r)ps and Qreativity!
            </p>

            <p>
              Medicine, banking, and supply chains wage a constant war on quantum noise... pouring millions into error-correction to force reality to behave. Art operates on the exact reverse principle.
            </p>

            <p>
              While every sector treats quantum randomness as a catastrophy demanding strict determinism, creativity thrives on it. Superposition, interference, and collapse aren&apos;t bugs here; they are the heartbeat of the canvas itself. A stray glitch in a clinical algorithm is a life-threatening hazard. A stray glitch in a <strong>qreative</strong> beat? That&apos;s the hook!
            </p>

            <p className="text-accent-lavender font-medium pt-2">
              More info about the challenge coming soon!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};