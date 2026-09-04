"use client";

import React from "react";
import { motion } from "framer-motion";
import { TRACKS } from "@/lib/constants";
import { GlassCard } from "@/components/ui/GlassCard";

export const Tracks = () => {
  return (
    <section id="tracks" className="py-24 bg-deep-section/50 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-anton text-4xl md:text-5xl uppercase tracking-wider mb-4"
          >
            Explore <span className="text-accent-lavender">Tracks</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-pure-white/70 max-w-2xl mx-auto"
          >
            Dive deep into specific areas of quantum computing. Choose the path that aligns with your interests and expertise.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRACKS.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <GlassCard className="h-full group hover:-translate-y-2 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center mb-6 group-hover:bg-accent-vibrant transition-colors">
                  <span className="font-anton text-xl text-pure-white">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{track.title}</h3>
                <p className="text-pure-white/70 leading-relaxed">
                  {track.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
