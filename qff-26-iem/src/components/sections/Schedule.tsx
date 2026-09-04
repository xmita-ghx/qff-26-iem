"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SCHEDULE } from "@/lib/constants";
import { GlassCard } from "@/components/ui/GlassCard";

export const Schedule = () => {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section id="schedule" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-anton text-4xl md:text-5xl uppercase tracking-wider mb-4">
            Event <span className="text-accent-lavender">Schedule</span>
          </h2>
        </div>

        {/* Day Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {SCHEDULE.map((day, index) => (
            <button
              key={day.date}
              onClick={() => setActiveDay(index)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeDay === index
                  ? "bg-accent-vibrant text-pure-white shadow-[0_0_15px_rgba(157,78,221,0.5)]"
                  : "bg-surface/50 text-pure-white/60 hover:bg-surface hover:text-pure-white"
              }`}
            >
              Day {index + 1} — {day.date}
            </button>
          ))}
        </div>

        {/* Schedule List */}
        <GlassCard className="p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {SCHEDULE[activeDay].events.map((event, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row md:items-center gap-4 p-4 rounded-xl hover:bg-surface/50 transition-colors border-l-2 border-transparent hover:border-accent-glow"
                >
                  <div className="md:w-32 flex-shrink-0">
                    <span className="text-accent-lavender font-anton text-lg tracking-wide">
                      {event.time}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{event.title}</h4>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </GlassCard>
      </div>
    </section>
  );
};
