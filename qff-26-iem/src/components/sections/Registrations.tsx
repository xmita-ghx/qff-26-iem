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

            <div className="space-y-8 text-base md:text-lg text-pure-white/80 max-w-2xl mx-auto mb-10 text-left font-urbanist">
              <p className="font-medium text-white/90">
                Registrations open September 29, 2026. Stay tuned!
              </p>

              {/* Subsection: Who can participate? */}
              <div className="space-y-2">
                <h4 className="font-anton text-xl md:text-2xl text-accent-lavender tracking-wide">
                  Who can participate?
                </h4>
                <ul className="space-y-1.5 text-white list-none">
                  <li>• Open to all students and researchers, regardless of discipline or year of study.</li>
                  <li>• Please note that the in-person (Day 1) sessions are open only to attendees affiliated with IEM Kolkata and Newtown.</li>
                  <li>• The virtual counterpart (Day 2 and 3) of our event is open to all!</li>
                </ul>
              </div>

              {/* Subsection: Swags, Badges and Certificates? */}
              <div className="space-y-2">
                <h4 className="font-anton text-xl md:text-2xl text-accent-lavender tracking-wide">
                  Swags, Badges and Certificates?
                </h4>
                <ul className="space-y-1.5 text-white list-none">
                  <li>• All in-person participants receive physical swags and certificates.</li>
                  <li>• Digital badges, stickers and credentials issued via Credly and Certifier for the challenge winners.</li>
                  <li>• Official certificates of completion issued to participants upon clearing workshop/lab criteria and participating actively.</li>
                </ul>
              </div>

              {/* Subsection: Registration cost? */}
              <div className="space-y-2">
                <h4 className="font-anton text-xl md:text-2xl text-accent-lavender tracking-wide">
                  Registration cost?
                </h4>
                <ul className="space-y-1.5 text-white list-none">
                  <li>• None! Free for all.</li>
                </ul>
              </div>

              {/* Subsection: Prerequisites? */}
              <div className="space-y-2">
                <h4 className="font-anton text-xl md:text-2xl text-accent-lavender tracking-wide">
                  Prerequisites?
                </h4>
                <ul className="space-y-1.5 text-white list-none">
                  <li>• Basic knowledge of Python and a personal laptop.</li>
                  <li>• Prior background in quantum mechanics or complex physics is <strong className="font-bold">not</strong> required.</li>
                </ul>
              </div>

              {/* Mandatory Registration Notice */}
              <p className="pt-2 text-sm md:text-base text-pure-white/70 border-t border-white/10">
                Registration is required. In-person attendees should confirm they can attend at IEM and consent to event photography during registration.
              </p>
            </div>

            {/* Warning Banner */}
            <p className="text-accent-lavender font-bold font-urbanist text-base md:text-lg mb-6 tracking-wide">
              Seats are limited for Day 1 (In-Person). Early registration is highly recommended.
            </p>

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