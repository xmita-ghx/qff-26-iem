"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

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

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 min-h-[200px] text-left">
            {/* Card 1 */}
            <div className="flex flex-col">
              <div className="aspect-square w-full rounded-xl overflow-hidden bg-white/5 border border-white/10 mb-4 flex items-center justify-center relative">
                <img
                  src="/team/asmita-ghorai.png"
                  alt="Asmita Ghorai"
                  className="object-cover w-full h-full"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-anton text-white tracking-wide text-lg sm:text-xl md:text-2xl uppercase">Asmita Ghorai</h3>
                  <p className="font-urbanist text-white/80 text-xs sm:text-sm">Lead Organizer, Technical Head</p>
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

            {/* Card 2 */}
            <div className="flex flex-col">
              <div className="aspect-square w-full rounded-xl overflow-hidden bg-white/5 border border-white/10 mb-4 flex items-center justify-center relative">
                <img
                  src="/team/arna-roy.png"
                  alt="Arna Roy"
                  className="object-cover w-full h-full"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-anton text-white tracking-wide text-lg sm:text-xl md:text-2xl uppercase">Arna Roy</h3>
                  <p className="font-urbanist text-white/80 text-xs sm:text-sm">Co-organizer, Operations Lead</p>
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

            {/* Card 3 */}
            <div className="flex flex-col">
              <div className="aspect-square w-full rounded-xl overflow-hidden bg-white/5 border border-white/10 mb-4 flex items-center justify-center relative">
                <img
                  src="/team/moutushi-singh.png"
                  alt="Dr. Moutushi Singh"
                  className="object-cover w-full h-full"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="block font-anton text-xs text-[#E0AAFF] tracking-wider uppercase mb-1">FACULTY ADVISOR</span>
                  <h3 className="font-anton text-white tracking-wide text-lg sm:text-xl md:text-2xl uppercase">Dr. Moutushi Singh</h3>
                  <p className="font-urbanist text-white/80 text-xs sm:text-sm">Convenor</p>
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

            {/* Card 4 */}
            <div className="flex flex-col">
              <div className="aspect-square w-full rounded-xl overflow-hidden bg-white/5 border border-white/10 mb-4 flex items-center justify-center relative">
                <img
                  src="/team/prithwineel-paul.png"
                  alt="Dr. Prithwineel Paul"
                  className="object-cover w-full h-full"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="block font-anton text-xs text-[#E0AAFF] tracking-wider uppercase mb-1">FACULTY ADVISOR</span>
                  <h3 className="font-anton text-white tracking-wide text-lg sm:text-xl md:text-2xl uppercase">Dr. Prithwineel Paul</h3>
                  <p className="font-urbanist text-white/80 text-xs sm:text-sm">Convenor</p>
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