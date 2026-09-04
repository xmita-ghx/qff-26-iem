"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

export const About = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-anton text-4xl md:text-5xl lg:text-6xl uppercase tracking-wider mb-6">
              The Century of <span className="text-accent-lavender">Quantum</span>
            </h2>
            <div className="space-y-6 text-lg text-pure-white/80 leading-relaxed">
              <p>
                Quantum computing is moving from theoretical physics to practical application. The Qiskit Fall Fest is a global series of quantum computing events, and in 2026, we are proud to host this monumental gathering at the Institute of Engineering & Management (IEM).
              </p>
              <p>
                Driven by a collaborative spirit between academia and industry leaders like IBM Quantum, this event aims to democratize access to quantum education and foster the next generation of quantum researchers and developers.
              </p>
            </div>

            <div className="mt-10 flex gap-6">
               <div className="flex flex-col">
                 <span className="font-anton text-4xl text-accent-glow">2</span>
                 <span className="text-sm text-pure-white/60 uppercase tracking-widest mt-1">Days</span>
               </div>
               <div className="flex flex-col">
                 <span className="font-anton text-4xl text-accent-glow">4+</span>
                 <span className="text-sm text-pure-white/60 uppercase tracking-widest mt-1">Tracks</span>
               </div>
               <div className="flex flex-col">
                 <span className="font-anton text-4xl text-accent-glow">100+</span>
                 <span className="text-sm text-pure-white/60 uppercase tracking-widest mt-1">Attendees</span>
               </div>
            </div>
          </motion.div>

          {/* Right Visual / Card Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
             <div className="absolute inset-0 bg-accent-vibrant/20 blur-[100px] rounded-full z-0" />
             <GlassCard className="relative z-10 p-8 md:p-12">
               <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-accent-lavender">|</span> Our Mission <span>⟩</span>
               </h3>
               <p className="text-pure-white/80 mb-6">
                 To build a robust, inclusive quantum community in India. Whether you are writing your first quantum circuit or researching error correction, QFF IEM provides the platform, mentorship, and resources to accelerate your journey.
               </p>
               <ul className="space-y-3">
                 <li className="flex items-start gap-3">
                   <div className="mt-1 w-1.5 h-1.5 rounded-full bg-accent-glow flex-shrink-0" />
                   <span className="text-pure-white/90">Hands-on access to IBM Quantum systems</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="mt-1 w-1.5 h-1.5 rounded-full bg-accent-glow flex-shrink-0" />
                   <span className="text-pure-white/90">Expert-led workshops on Qiskit 1.0</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="mt-1 w-1.5 h-1.5 rounded-full bg-accent-glow flex-shrink-0" />
                   <span className="text-pure-white/90">Networking with industry professionals</span>
                 </li>
               </ul>
             </GlassCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
