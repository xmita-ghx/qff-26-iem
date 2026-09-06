"use client";

import React from "react";
import { EVENT_DETAILS } from "@/lib/constants";
import { Linkedin, Instagram, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-surface/50 bg-deep-base/50 relative z-10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-12 mb-12">
          <div className="col-span-1 lg:col-span-2">
            <h3 className="font-anton text-2xl tracking-wider mb-4">
              {EVENT_DETAILS.name}
            </h3>
            <p className="text-pure-white/70 max-w-sm">
              The Century of Quantum. Hosted at IEM in collaboration with leading academic and industry partners.
            </p>
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-accent-glow/50 bg-surface/60 shadow-[0_0_15px_rgba(157,78,221,0.4)] flex items-center justify-center mt-4 relative">
              <img
                src="/logos/qff-logo.png"
                alt="QFF Circular Logo"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-accent-lavender">Quick Links</h4>
            <ul className="space-y-2 text-pure-white/70">
              <li><a href="#about" className="hover:text-pure-white transition-colors">About the Event</a></li>
              <li><a href="#schedule" className="hover:text-pure-white transition-colors">Schedule</a></li>
              <li><a href="#tracks" className="hover:text-pure-white transition-colors">Tracks</a></li>
              <li><a href="#mentor" className="hover:text-pure-white transition-colors">Call for Mentors</a></li>
              <li><a href="#team" className="hover:text-pure-white transition-colors">Team</a></li>
              <li><a href="#registrations" className="hover:text-pure-white transition-colors">Registrations</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-accent-lavender">Community</h4>
            <ul className="space-y-2 text-pure-white/70">
              <li><a href="#" className="hover:text-pure-white transition-colors">Discord Server</a></li>
              <li><a href="#" className="hover:text-pure-white transition-colors">Code of Conduct</a></li>
              <li><a href="#" className="hover:text-pure-white transition-colors">WhatsApp Community</a></li>
            </ul>
            <p className="text-xs text-pure-white/50 mt-2 font-urbanist">
              (we will provide the WhatsApp Community invitation after registration)
            </p>
          </div>
          <div>
            <h4 className="font-bold text-[#E0AAFF] mb-4">Location for In-Person</h4>
            <div className="flex items-start gap-2 text-white/80 text-sm leading-relaxed">
              <MapPin className="text-[#E0AAFF] flex-shrink-0 mt-1" size={18}/>
              <span>
                Centre of Excellence for Quantum Computing, IEM Kolkata, Godrej Genesis Building, 15th Floor, Street Number 18, Block EP & GP, Sector V, Bidhannagar, Kolkata, West Bengal 700091, India
              </span>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-[#E0AAFF] mb-4">Contact</h4>
            <a
              href="mailto:qiskitfallfest26iem@gmail.com"
              className="text-white/80 hover:text-white transition-colors text-sm break-all"
            >
              qiskitfallfest26iem@gmail.com
            </a>
          </div>
          <div>
            <h4 className="font-bold text-[#E0AAFF] mb-4">Socials</h4>
            <div className="flex items-center gap-3 text-white/80">
              <a
                href="#"
                aria-label="LinkedIn"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#E0AAFF] hover:text-[#E0AAFF] transition-all"
              >
                <Linkedin size={20}/>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#E0AAFF] hover:text-[#E0AAFF] transition-all"
              >
                <Instagram size={20}/>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-surface/50 pt-8 flex flex-col items-center justify-center text-sm text-pure-white/60 text-center space-y-1">
          <p>© 2026 Qiskit Fall Fest 2026. IEM Centre of Excellence for Quantum Computing—Institute of Engineering and Management.</p>
          <p className="text-pure-white/40 text-xs">
            Qiskit and Qiskit Fall Fest are IBM trademarks. This event is organized by IEM Kolkata.
          </p>
        </div>
      </div>
    </footer>
  );
};
