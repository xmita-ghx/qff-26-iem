"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SCHEDULE } from "@/lib/constants";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";

interface ScheduleEvent {
  time: string;
  title: string;
  speakerLabel?: string;
  speaker?: string;
  description?: string;
  highlight?: string;
  focusAreas?: string[];
}

export const Schedule = () => {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section id="schedule" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-anton text-4xl md:text-5xl uppercase tracking-wider mb-4">
            Event <span className="text-accent-lavender">Schedule</span>
          </h2>
          <div className="mt-8 flex gap-6 justify-center">
            <div className="flex flex-col">
              <span className="font-anton text-4xl text-accent-glow">3</span>
              <span className="text-sm text-pure-white/60 uppercase tracking-widest mt-1">Days</span>
            </div>
            <div className="flex flex-col">
              <span className="font-anton text-4xl text-accent-glow">6</span>
              <span className="text-sm text-pure-white/60 uppercase tracking-widest mt-1">Tracks</span>
            </div>
            <div className="flex flex-col">
              <span className="font-anton text-4xl text-accent-glow">100+</span>
              <span className="text-sm text-pure-white/60 uppercase tracking-widest mt-1">Attendees</span>
            </div>
          </div>
        </div>

        {/* Day Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {SCHEDULE.map((day, index) => (
            <button
              key={day.date}
              onClick={() => setActiveDay(index)}
              className={`px-8 py-3 rounded-full font-anton text-lg tracking-wider uppercase transition-all duration-300 flex flex-col items-center justify-center ${
                activeDay === index
                  ? "bg-accent-vibrant text-pure-white shadow-[0_0_15px_rgba(157,78,221,0.5)]"
                  : "bg-surface/50 text-pure-white/60 hover:bg-surface hover:text-pure-white"
              }`}
            >
              <span>DAY {index + 1} ({day.date})</span>
              <span className="text-[10px] mt-1 px-2 py-0.5 rounded-full bg-pure-white/20">
                {index === 0 ? "IN-PERSON" : "VIRTUAL"}
              </span>
            </button>
          ))}
        </div>

        {/* Timezone Indicator */}
        <div className="text-center sm:text-right pr-2 mb-3">
          <span className="font-urbanist text-sm text-[#E0AAFF]/80 tracking-wide">
            All times are in IST.
          </span>
        </div>

        {/* Schedule List */}
        <GlassCard className="p-8 relative max-h-[600px] overflow-y-auto custom-scrollbar">
          {/* Vertical Timeline Track */}
          <div className="absolute left-10 md:left-40 top-8 bottom-8 w-1 bg-gradient-to-b from-[#9D4EDD] via-[#E0AAFF] to-[#3C096C] rounded-full hidden sm:block"></div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8 relative z-10 sm:pl-12 md:pl-48"
            >
              {(SCHEDULE[activeDay].events as ScheduleEvent[]).map((event, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-start gap-4 p-4 rounded-xl hover:bg-surface/50 transition-colors"
                >
                  <div className="sm:absolute sm:left-0 sm:w-32 flex-shrink-0 text-left sm:text-right sm:pr-8 pt-1">
                    <span className="text-accent-lavender font-anton text-xl tracking-wide uppercase">
                      {event.time}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-anton uppercase text-white tracking-wide">
                      {event.title}
                    </h4>

                    {/* Speaker label & name display */}
                    {(event.speakerLabel || event.speaker) && (
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#E0AAFF] mt-1">
                        {event.speakerLabel ? `${event.speakerLabel} ` : ""}
                        {event.speaker && <span className="text-white/90">{event.speaker}</span>}
                      </p>
                    )}

                    {event.description && (
                      <p className="text-sm text-pure-white/70 mt-2 font-urbanist leading-relaxed">
                        {event.description}
                      </p>
                    )}

                    {/* Pale purple highlight sentence */}
                    {event.highlight && (
                      <p className="text-sm font-medium text-[#E0AAFF] mt-2 font-urbanist">
                        {event.highlight}
                      </p>
                    )}

                    {event.focusAreas && event.focusAreas.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-white/10 font-urbanist">
                        <p className="text-xs font-bold uppercase tracking-wider text-accent-lavender mb-2">
                          Key Focus Areas
                        </p>
                        <ul className="space-y-2 text-xs md:text-sm text-pure-white/80 list-none pl-1">
                          {event.focusAreas.map((point, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-2">
                              <span className="text-accent-lavender font-bold mt-0.5">•</span>
                              <span className="leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </GlassCard>

        {/* Schedule Bottom Callout & Button */}
        <div className="mt-12 text-center flex flex-col items-center bg-surface/30 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
          <p className="font-urbanist text-base md:text-lg text-pure-white/90 leading-relaxed max-w-2xl mb-6">
            Whether you&apos;re here to learn, connect, <strong className="text-white font-bold">#qreate</strong>, or win big,{" "}
            <span className="text-[#E0AAFF] font-medium">QFF 2026 at IEM</span> is where it all happens!
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="font-urbanist text-sm uppercase tracking-wider text-[#E0AAFF]/80">
              Want to learn more?
            </span>
            <a href="#hackathon">
              <Button variant="ket" className="px-6 py-2.5 rounded-full text-xs sm:text-sm uppercase tracking-wider">
                |About the Hackathon⟩
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};