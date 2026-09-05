"use client";

import React from "react";
import { motion } from "framer-motion";

export const Team = () => {
  return (
    <section id="team" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-anton text-4xl md:text-5xl uppercase tracking-wider mb-12">
            TEAM
          </h2>

          <div className="min-h-[200px]">
            {/* Future team member cards will go here */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
