"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";

export const Registrations = () => {
  return (
    <section id="registrations" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
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
      </div>
    </section>
  );
};
