"use client";

import React, { useState, useEffect } from "react";
import { ROUTES } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ensure Hackathon appears right after Schedule / View Schedule
  const navItems = React.useMemo(() => {
    const items = [...ROUTES];
    const scheduleIndex = items.findIndex(
      (r) =>
        r.name.toLowerCase().includes("schedule") ||
        r.href.includes("schedule")
    );
    const hackathonItem = { name: "Hackathon", href: "#hackathon" };

    if (!items.some((r) => r.href === "#hackathon")) {
      if (scheduleIndex !== -1) {
        items.splice(scheduleIndex + 1, 0, hackathonItem);
      } else {
        items.push(hackathonItem);
      }
    }
    return items;
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-deep-base/80 backdrop-blur-md border-b border-surface py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 md:w-10 md:h-10 rounded-lg overflow-hidden border border-white/15 bg-white/5 flex items-center justify-center flex-shrink-0">
              <img
                src="/logos/navbar-logo.png"
                alt="QFF Logo"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
            <span className="font-anton text-xl tracking-wider text-white">QFF 2026</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map((route) => (
              <li key={route.name}>
                <a
                  href={route.href}
                  className="text-sm font-medium text-pure-white/80 hover:text-accent-lavender transition-colors"
                >
                  {route.name}
                </a>
              </li>
            ))}
          </ul>
          <a href="#registrations">
            <Button variant="ket" className="text-xs uppercase tracking-wider px-5 py-2.5 whitespace-nowrap">
              REGISTRATIONS OPEN SEP 29, 2026
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-pure-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-deep-base/95 backdrop-blur-xl border-b border-surface p-6 md:hidden flex flex-col gap-4">
          {navItems.map((route) => (
            <a
              key={route.name}
              href={route.href}
              className="text-lg font-medium text-pure-white hover:text-accent-lavender"
              onClick={() => setMobileMenuOpen(false)}
            >
              {route.name}
            </a>
          ))}
          <a href="#registrations" onClick={() => setMobileMenuOpen(false)}>
            <Button variant="ket" className="w-full mt-4 justify-center text-xs uppercase tracking-wider py-3">
              REGISTRATIONS OPEN SEP 29, 2026
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
};