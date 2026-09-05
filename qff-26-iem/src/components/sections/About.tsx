"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

export const About = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-anton text-4xl md:text-5xl lg:text-6xl uppercase tracking-wider mb-2">
              THE CENTURY OF <span className="text-accent-lavender">QUANTUM</span>
            </h2>
            <h3 className="font-anton text-2xl md:text-3xl uppercase tracking-wider mb-8 text-pure-white/70">
              A DECADE OF QUANTUM ON THE CLOUD, 2016-2026
            </h3>

            <div className="space-y-6 text-lg text-pure-white/85 leading-relaxed font-urbanist">
              <p>
                Quantum computing is moving from theoretical physics to practical application, and the Qiskit Fall Fest is a global series of events designed to democratize access to quantum education. In 2026, we are proud to host this monumental gathering at the Institute of Engineering & Management (IEM), in collaboration with industry leaders like IBM Quantum.
              </p>
              <p>
                By connecting advanced hardware engineering with collaborative growth, QFF26 celebrates a decade of cloud quantum computing as a shared flight path: from early prototypes to frontier processors, from isolated labs to a global chorus of students, researchers, and developers.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
