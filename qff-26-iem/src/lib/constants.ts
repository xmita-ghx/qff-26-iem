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
    date: "NOV 9",
    events: [
      { time: "10:00 AM", title: "IBM KEYNOTE" },
      { time: "11:30 AM", title: "QISKIT 101" },
    ],
  },
  {
    date: "NOV 10",
    events: [
      { time: "10:00 AM", title: "DR. PRITHWINEEL PAUL QML" },
      { time: "02:00 PM", title: "DR. SUBRATA CHAKRABORTY HARDWARE" },
    ],
  },
  {
    date: "NOV 11",
    events: [
      { time: "10:00 AM", title: "SPONSOR CHALLENGE KICKOFF" },
      { time: "11:00 AM", title: "24-HR HACKATHON" },
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
  { name: "QuantCom", logo: "/logos/quantcom.svg" },
  { name: "IEM Centre of Excellence", logo: "/logos/iem.svg" },
  { name: "UEM", logo: "/logos/uem.svg" },
  { name: "IBM Quantum", logo: "/logos/ibm-quantum.svg" },
];
