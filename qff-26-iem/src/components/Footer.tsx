import React from "react";
import { EVENT_DETAILS } from "@/lib/constants";

export const Footer = () => {
  return (
    <footer className="border-t border-surface/50 bg-deep-base/50 relative z-10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 lg:col-span-2">
            <h3 className="font-anton text-2xl tracking-wider mb-4">
              {EVENT_DETAILS.name}
            </h3>
            <p className="text-pure-white/70 max-w-sm">
              The Century of Quantum. Hosted at IEM in collaboration with leading academic and industry partners.
            </p>
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
              <li><a href="#" className="hover:text-pure-white transition-colors">Whatsapp Community</a></li>
            </ul>
            <p className="text-xs text-pure-white/50 mt-2 font-urbanist">(we will provide the invitation after registration)</p>
          </div>
        </div>

        <div className="border-t border-surface/50 pt-8 flex flex-col items-center justify-center text-sm text-pure-white/50 text-center">
          <p>Qiskit and Qiskit Fall Fest are IBM marks. This event is organized by IEM QC CoE at IEM, Kolkata.</p>
        </div>
      </div>
    </footer>
  );
};
