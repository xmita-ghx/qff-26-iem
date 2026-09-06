"use client";

import React from "react";
import { motion } from "framer-motion";
import { PARTNERS } from "@/lib/constants";

export const Partners = () => {
  return (
    <section className="py-24 bg-deep-section/30 relative z-10 border-t border-surface/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-anton text-3xl uppercase tracking-wider mb-2">
            Organizers & <span className="text-accent-lavender">Partners</span>
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
          {PARTNERS.map((partner, index) => {
            const isLarge =
              partner.logo.includes("quantcom") ||
              partner.logo.includes("ibm-quantum");

            return (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <div
                  className={`relative flex items-center justify-center transition-all ${
                    isLarge
                      ? "w-44 h-24 md:w-56 md:h-28"
                      : "w-32 h-16 md:w-40 md:h-20"
                  }`}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="relative z-10 max-w-full max-h-full object-contain filter drop-shadow-md bg-transparent"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
