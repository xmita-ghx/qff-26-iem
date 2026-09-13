"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { LINKS } from "@/lib/constants";
import { MessageSquare } from "lucide-react";

export const Registrations = () => {
  return (
    <section id="registrations" className="py-24 relative z-10">
      <div className="container mx-auto px-6 space-y-16">
        {/* Registrations Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="max-w-4xl mx-auto p-8 md:p-12 text-center">
            <h2 className="font-anton text-4xl md:text-5xl uppercase tracking-wider mb-6">
              REGISTRATIONS
            </h2>

            <div className="space-y-6 text-lg text-pure-white/80 max-w-2xl mx-auto mb-10 text-left font-urbanist">
              <p>
                Registrations open soon. Stay tuned!
              </p>
              <p>
                Please note that the in-person registration is open only to attendees affiliated to IEM Kolkata. The virtual counterpart of our event is open to the public!
              </p>
              <p>
                Registration is required. In-person attendees should confirm they can attend at IEM and consent to event photography during registration.
              </p>
            </div>

            <Button variant="ket" className="mx-auto">
              REGISTER NOW
            </Button>
          </GlassCard>
        </motion.div>

        {/* Discord Anchor Target & Community Card */}
        <div id="discord" className="scroll-mt-32" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <GlassCard className="max-w-4xl mx-auto p-8 md:p-10 text-center border-accent-glow/40 bg-gradient-to-b from-surface/50 to-deep-section/50">
            <div className="w-12 h-12 rounded-full bg-[#5865F2]/20 border border-[#5865F2]/40 flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="text-accent-lavender" size={24} />
            </div>

            <h3 className="font-anton text-3xl md:text-4xl uppercase tracking-wider mb-4 text-white">
              JOIN OUR DISCORD COMMUNITY
            </h3>

            <p className="text-base md:text-lg text-pure-white/80 max-w-xl mx-auto mb-8 font-urbanist">
              Connect with fellow participants, get announcements, find teammates, and engage directly with speakers and mentors throughout the fest.
            </p>

            <a
              href={LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button variant="ket" className="mx-auto">
                JOIN DISCORD
              </Button>
            </a>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};