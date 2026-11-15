"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { EVENT_DETAILS, LINKS } from "@/lib/constants";
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

            <h2 className="text-4xl md:text-5xl tracking-wider mb-6 flex justify-center items-center">
              <span className="font-montserrat font-light text-accent-lavender mr-2">|</span>
              <span className="font-anton uppercase">CALL FOR MENTORS</span>
              <span className="font-montserrat font-light text-accent-lavender ml-2">⟩</span>
            </h2>

            <p className="text-lg text-pure-white/80 max-w-2xl mx-auto mb-10">
              Are you experienced in quantum computing, Qiskit, or quantum machine learning? Join us as a mentor to guide teams, review projects, and share your expertise with the next generation of quantum developers and unlock exclusive perks!
            </p>

            <a
              href={LINKS.mentorForm}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button variant="ket" className="mx-auto">
                |APPLY AS MENTOR⟩
              </Button>
            </a>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};