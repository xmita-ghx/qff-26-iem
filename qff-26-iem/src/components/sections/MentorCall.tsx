"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { EVENT_DETAILS } from "@/lib/constants";
import { Calendar } from "lucide-react";

export const MentorCall = () => {
  return (
    <section id="mentor" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="max-w-4xl mx-auto p-8 md:p-12 text-center border-accent-glow/40 bg-gradient-to-b from-surface/60 to-deep-section/60">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-accent-vibrant/20 border border-accent-vibrant/30">
              <Calendar size={16} className="text-accent-lavender" />
              <span className="text-sm font-semibold tracking-wide text-pure-white">
                Deadline: <span className="text-accent-lavender">{EVENT_DETAILS.mentorDeadline}</span>
              </span>
            </div>

            <h2 className="font-anton text-4xl md:text-5xl uppercase tracking-wider mb-6">
              <span className="text-accent-lavender">⟨</span> Call for Mentors <span className="text-accent-lavender">|⟩</span>
            </h2>

            <p className="text-lg text-pure-white/80 max-w-2xl mx-auto mb-10">
              Are you experienced in quantum computing, Qiskit, or quantum algorithms? Join us as a mentor to guide teams, review projects, and share your expertise with the next generation of quantum developers.
            </p>

            <Button variant="primary" className="text-lg px-10 py-4 font-bold shadow-[0_0_30px_rgba(157,78,221,0.4)]">
              Apply to Mentor
            </Button>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};
