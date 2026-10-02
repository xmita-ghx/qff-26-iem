"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

export const Team = () => {
  return (
    <section id="team" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-anton text-4xl md:text-5xl uppercase tracking-wider mb-12">
            TEAM
          </h2>

          {/* Student Organizers: 2 columns on mobile, 3 columns on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-left mb-8 md:mb-12">
            {/* Card 1: Asmita Ghorai */}
            <div className="flex flex-col w-full">
              <div className="aspect-square w-full rounded-xl overflow-hidden bg-white/5 border border-white/10 mb-4 flex items-center justify-center relative">
                <img
                  src="/team/asmita-ghorai.png"
                  alt="Asmita Ghorai"
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-anton text-white tracking-wide text-lg sm:text-xl md:text-2xl uppercase">
                    Asmita Ghorai
                  </h3>
                  <p className="font-urbanist text-white/80 text-xs sm:text-sm">
                    Lead Organizer
                  </p>
                </div>
                <a
                  href="https://www.linkedin.com/in/asmita-ghorai-a613563a5"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-1.5 md:p-2 rounded-full bg-white/5 border border-white/10 hover:border-[#E0AAFF] hover:text-[#E0AAFF] transition-all flex-shrink-0"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>

            {/* Card 2: Arna Roy */}
            <div className="flex flex-col w-full">
              <div className="aspect-square w-full rounded-xl overflow-hidden bg-white/5 border border-white/10 mb-4 flex items-center justify-center relative">
                <img
                  src="/team/arna-roy.png"
                  alt="Arna Roy"
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-anton text-white tracking-wide text-lg sm:text-xl md:text-2xl uppercase">
                    Arna Roy
                  </h3>
                  <p className="font-urbanist text-white/80 text-xs sm:text-sm">
                    Co-Organizer
                  </p>
                </div>
                <a
                  href="https://www.linkedin.com/in/arna-roy-0a839a366"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-1.5 md:p-2 rounded-full bg-white/5 border border-white/10 hover:border-[#E0AAFF] hover:text-[#E0AAFF] transition-all flex-shrink-0"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>

            {/* Card 3: Tousif Aman Halder - Centers on row 2 for mobile, matches exact 1-col size */}
            <div className="flex flex-col col-span-2 justify-self-center w-[calc(50%-0.75rem)] lg:col-span-1 lg:w-full">
              <div className="aspect-square w-full rounded-xl overflow-hidden bg-white/5 border border-white/10 mb-4 flex items-center justify-center relative">
                <img
                  src="/team/tousif-aman-halder.png"
                  alt="Tousif Aman Halder"
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-anton text-white tracking-wide text-lg sm:text-xl md:text-2xl uppercase">
                    Tousif Aman Halder
                  </h3>
                  <p className="font-urbanist text-white/80 text-xs sm:text-sm">
                    Co-Organizer
                  </p>
                </div>
                <a
                  href="https://www.linkedin.com/in/tousif-aman-halder-b61157323"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-1.5 md:p-2 rounded-full bg-white/5 border border-white/10 hover:border-[#E0AAFF] hover:text-[#E0AAFF] transition-all flex-shrink-0"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Faculty Advisors: 2 cols on mobile (row 3) & 2 centered cards on desktop (row 2) */}
          <div className="grid grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto text-left">
            {/* Card 4: Dr. Moutushi Singh */}
            <div className="flex flex-col w-full">
              <div className="aspect-square w-full rounded-xl overflow-hidden bg-white/5 border border-white/10 mb-4 flex items-center justify-center relative">
                <img
                  src="/team/moutushi-singh.png"
                  alt="Dr. Moutushi Singh"
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="block font-anton text-xs text-[#E0AAFF] tracking-wider uppercase mb-1">
                    FACULTY ADVISOR
                  </span>
                  <h3 className="font-anton text-white tracking-wide text-lg sm:text-xl md:text-2xl uppercase">
                    Dr. Moutushi Singh
                  </h3>
                  <p className="font-urbanist text-white/80 text-xs sm:text-sm">
                    Convenor
                  </p>
                </div>
                <a
                  href="https://www.linkedin.com/in/dr-moutushi-singh-bb295b6a"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-1.5 md:p-2 rounded-full bg-white/5 border border-white/10 hover:border-[#E0AAFF] hover:text-[#E0AAFF] transition-all flex-shrink-0"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>

            {/* Card 5: Dr. Prithwineel Paul */}
            <div className="flex flex-col w-full">
              <div className="aspect-square w-full rounded-xl overflow-hidden bg-white/5 border border-white/10 mb-4 flex items-center justify-center relative">
                <img
                  src="/team/prithwineel-paul.png"
                  alt="Dr. Prithwineel Paul"
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="block font-anton text-xs text-[#E0AAFF] tracking-wider uppercase mb-1">
                    FACULTY ADVISOR
                  </span>
                  <h3 className="font-anton text-white tracking-wide text-lg sm:text-xl md:text-2xl uppercase">
                    Dr. Prithwineel Paul
                  </h3>
                  <p className="font-urbanist text-white/80 text-xs sm:text-sm">
                    Convenor
                  </p>
                </div>
                <a
                  href="https://www.linkedin.com/in/prithwineel-paul-768aa212"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-1.5 md:p-2 rounded-full bg-white/5 border border-white/10 hover:border-[#E0AAFF] hover:text-[#E0AAFF] transition-all flex-shrink-0"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};