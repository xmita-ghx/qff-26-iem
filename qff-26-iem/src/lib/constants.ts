import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const EVENT_DETAILS = {
  name: "Qiskit Fall Fest 2026 at IEM",
  subTheme: "Century of Quantum",
  organizers: ["IEM Centre of Excellence", "QuantCom", "UEM", "IBM Quantum"],
  dates: "November 9–10, 2026",
  mentorDeadline: "September 25, 2026",
};

export const ROUTES = [
  { name: "Register Now", href: "#register" },
  { name: "Apply as Mentor", href: "#mentor" },
  { name: "Explore Tracks", href: "#tracks" },
  { name: "View Schedule", href: "#schedule" },
  { name: "Join Discord", href: "#discord" },
];

export const SCHEDULE = [
  {
    date: "November 9, 2026",
    events: [
      { time: "09:00 AM", title: "Opening Ceremony" },
      { time: "10:30 AM", title: "Keynote: The Century of Quantum" },
      { time: "01:00 PM", title: "Workshop: Qiskit 1.0 Fundamentals" },
    ],
  },
  {
    date: "November 10, 2026",
    events: [
      { time: "09:30 AM", title: "Quantum Algorithms Hackathon" },
      { time: "02:00 PM", title: "Hardware Demonstrations" },
      { time: "05:00 PM", title: "Closing Remarks & Awards" },
    ],
  },
];

export const TRACKS = [
  {
    title: "Workshops",
    description: "Hands-on sessions exploring quantum concepts and tools.",
  },
  {
    title: "Algorithms",
    description: "Deep dives into quantum algorithms and their applications.",
  },
  {
    title: "Hardware",
    description: "Understanding the physical implementation of quantum computers.",
  },
  {
    title: "Qiskit 1.0",
    description: "Mastering the latest version of the Qiskit SDK.",
  },
];

export const PARTNERS = [
  { name: "QuantCom", logo: "/logos/quantcom.png" },
  { name: "IEM Centre of Excellence", logo: "/logos/iem.png" },
  { name: "UEM", logo: "/logos/uem.png" },
  { name: "IBM Quantum", logo: "/logos/ibm-quantum.png" },
];
