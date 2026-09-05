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
          <span className="font-anton text-2xl tracking-widest text-pure-white group-hover:text-accent-lavender transition-colors">
            QFF 2026
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {ROUTES.map((route) => (
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
          <Button variant="ket">REGISTER</Button>
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
          {ROUTES.map((route) => (
            <a
              key={route.name}
              href={route.href}
              className="text-lg font-medium text-pure-white hover:text-accent-lavender"
              onClick={() => setMobileMenuOpen(false)}
            >
              {route.name}
            </a>
          ))}
          <Button variant="ket" className="w-full mt-4 justify-center">
            REGISTER
          </Button>
        </div>
      )}
    </nav>
  );
};
