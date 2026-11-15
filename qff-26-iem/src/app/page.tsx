import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { MentorCall } from "@/components/sections/MentorCall";
import { Tracks } from "@/components/sections/Tracks";
import { Schedule } from "@/components/sections/Schedule";
import { Challenge } from "@/components/sections/Challenge";
import { Partners } from "@/components/sections/Partners";
import { Team } from "@/components/sections/Team";
import { Registrations } from "@/components/sections/Registrations";
import { QuantumField } from "@/components/canvas/QuantumField";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-deep-base text-pure-white selection:bg-accent-vibrant selection:text-pure-white">
      {/* Background Interactive Field */}
      <QuantumField />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <Hero />
      <About />
      <Tracks />
      <Schedule />
      <Challenge />
      <MentorCall />
      <Team />
      <Registrations />
      <Partners />

      {/* Footer */}
      <Footer />
    </main>
  );
}