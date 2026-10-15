"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export const Challenge = () => {
  return (
    <section id="hackathon" className="py-24 relative z-10 border-t border-surface/50 scroll-mt-20">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* Section Heading */}
          <h2 className="font-anton text-4xl md:text-5xl uppercase tracking-wider mb-2">
            ABOUT THE <span className="text-[#E0AAFF]">HACKATHON</span>
          </h2>

          {/* Subtitle / Timeline */}
          <p className="font-anton font-light text-sm md:text-base text-[#E0AAFF]/90 tracking-widest uppercase mb-10">
            NOV 10, 2026, 10:00 PM IST – NOV 11, 2026, 10:00 PM IST | Virtual
          </p>

          {/* Body Content */}
          <div className="font-urbanist text-left text-white/85 text-base sm:text-lg leading-relaxed space-y-6 bg-surface/30 border border-white/10 p-8 md:p-10 rounded-2xl backdrop-blur-md shadow-[0_0_20px_rgba(157,78,221,0.15)]">
            <p className="text-xl sm:text-2xl text-white font-anton uppercase tracking-wide">
              THE ATOMIQ HACKATHON
            </p>

            <p>
              Get ready to tune your circuits—<strong className="text-white">The Atomiq Hackathon</strong> is landing on Devpost as a <span className="text-[#E0AAFF]">24-hour virtual sprint</span> hosted in collaboration with IBM Quantum. Whether you&apos;re hacking solo or rolling in with a <strong className="text-white">crew of up to three</strong>, you&apos;ll have just one turn of the clock to build, push your code, and drop a showoff spotlighting how your quantum logic comes to life. With a <span className="text-[#E0AAFF]">dedicated cash prize pool</span>, <strong className="text-white">8+ exciting domains</strong>, bragging rights and credentials on the line, it’s time to see what happens when computational rigor establishes entanglement with boundless creation.
            </p>

            <p className="text-[#E0AAFF]/95">
              Full problem statements and submission coordinates are dropping on November 10—keep your environments Millikelvin cool! ;)
            </p>

            <p className="text-sm sm:text-base text-white/70 border-t border-white/10 pt-4">
              <strong className="text-white">Heads-up:</strong> Devpost handles project submissions, but completing your registration on the <span className="text-[#E0AAFF]">official Google Form is mandatory</span> to take part in the hackathon.
            </p>

            <div className="pt-2 flex justify-start">
              <a
                href="https://atomiq-hackathon-qff-26-iem.devpost.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ket" className="px-7 py-3 text-xs sm:text-sm uppercase tracking-wider">
                  HACKATHON PORTAL
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};