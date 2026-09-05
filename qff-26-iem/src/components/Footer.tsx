import React from "react";
import { EVENT_DETAILS } from "@/lib/constants";

export const Footer = () => {
  return (
    <footer className="border-t border-surface/50 bg-deep-base/50 relative z-10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
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
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-accent-lavender">Community</h4>
            <ul className="space-y-2 text-pure-white/70">
              <li><a href="#" className="hover:text-pure-white transition-colors">Discord Server</a></li>
              <li><a href="#" className="hover:text-pure-white transition-colors">GitHub Repository</a></li>
              <li><a href="#" className="hover:text-pure-white transition-colors">Code of Conduct</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-accent-lavender">Contact</h4>
            <ul className="space-y-2 text-pure-white/70">
              <li><a href="mailto:contact@iem.edu" className="hover:text-pure-white transition-colors">Email Us</a></li>
              <li><a href="tel:+1234567890" className="hover:text-pure-white transition-colors">Call Us</a></li>
              <li><a href="#support" className="hover:text-pure-white transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-surface/50 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-pure-white/50">
          <p>© 2026 {EVENT_DETAILS.name}. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Open Source & Community Driven.</p>
        </div>
      </div>
    </footer>
  );
};
