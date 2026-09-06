"use client";

import React from "react";
import { motion } from "framer-motion";
import { EVENT_DETAILS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { HeroQuantumCanvas } from "@/components/canvas/HeroQuantumCanvas";

export const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 min-h-screen items-center px-8 md:px-16 lg:px-24 pt-24 pb-12 relative overflow-hidden">
      {/* Left Column */}
      <div className="lg:col-span-7 flex flex-col items-start justify-center z-10 pl-4 md:pl-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          <h1 className="font-anton text-6xl md:text-8xl lg:text-9xl text-white tracking-tight leading-none uppercase">
            QISKIT FALL FEST
          </h1>
          <h2 className="font-anton text-4xl md:text-6xl text-white mt-3 uppercase">
            2026
          </h2>
          <h3 className="font-anton text-3xl md:text-5xl text-[#E0AAFF] mt-2 uppercase">
            AT IEM
          </h3>

          <p className="font-urbanist text-left max-w-lg text-white/85 text-lg mt-6 leading-relaxed">
            <strong className="block mb-2 text-accent-lavender text-xl font-medium">Chi(r)ps: A Decade of Harmony on the Cloud.</strong>
            This year’s QFF theme at IEM honors IBM’s 2026 milestone—ten years of quantum computing on the cloud! It creatively connects to a powerful vibrant metaphor: IBM’s quantum chips themselves are named after birds, reflecting how engineers actually tune these machines. In celebrating this milestone, the theme highlights both the evolution of quantum hardware and the flourishing of the global quantum community.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4 mt-8">
            <Button variant="ket" className="px-8 py-3 rounded-full">
              REGISTER NOW
            </Button>
          </div>

          <div className="font-anton uppercase text-accent-lavender tracking-widest text-sm md:text-base mt-8">
            NOVEMBER 9, 10, AND 11, 2026 | IEM KOLKATA
          </div>
          <p className="font-urbanist text-accent-lavender text-sm sm:text-base md:text-lg mt-2 leading-relaxed">
            Come join us this fall! <br className="hidden sm:inline" />
            At Institute of Engineering and Management, Kolkata or virtually.
          </p>
        </motion.div>
      </div>

      {/* Right Column */}
      <div className="lg:col-span-5 relative w-full h-[650px] lg:h-[850px] flex items-center justify-end pr-4 md:pr-8">
        <HeroQuantumCanvas />
      </div>

      {/* Bottom gradient fade for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-deep-base to-transparent z-10 pointer-events-none" />
    </section>
  );
};
