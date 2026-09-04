"use client";

import React from "react";
import { motion } from "framer-motion";
import { EVENT_DETAILS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { HeroQuantumCanvas } from "@/components/canvas/HeroQuantumCanvas";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Canvas Background */}
      <HeroQuantumCanvas />

      {/* Content Overlay */}
      <div className="container relative z-10 mx-auto px-6 flex flex-col items-center justify-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-accent-glow/30 bg-surface/30 backdrop-blur-sm">
            <span className="text-sm font-semibold tracking-widest text-accent-lavender uppercase">
              {EVENT_DETAILS.subTheme}
            </span>
          </div>

          <h1 className="font-anton text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter mb-6 text-gradient drop-shadow-2xl">
            Qiskit Fall Fest
            <br />
            <span className="text-pure-white">2026</span>
          </h1>

          <p className="text-xl md:text-2xl text-pure-white/80 mb-10 max-w-2xl mx-auto font-light">
            Join the global quantum computing community at IEM. Explore, learn, and build the future of quantum technology.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="ket" className="w-full sm:w-auto text-lg px-8 py-3">
              Register Now
            </Button>
            <Button variant="secondary" className="w-full sm:w-auto text-lg px-8 py-3 bg-surface/20 backdrop-blur-sm">
              Explore Tracks
            </Button>
          </div>

          <div className="mt-16 flex items-center justify-center gap-8 text-sm font-medium text-pure-white/60">
            <div className="flex flex-col items-center">
              <span className="text-accent-lavender font-bold text-lg">{EVENT_DETAILS.dates.split(',')[0]}</span>
              <span>2026</span>
            </div>
            <div className="w-px h-8 bg-surface"></div>
            <div className="flex flex-col items-center">
              <span className="text-accent-lavender font-bold text-lg">IEM</span>
              <span>Kolkata</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-deep-base to-transparent z-10" />
    </section>
  );
};
