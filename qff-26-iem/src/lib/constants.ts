import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const EVENT_DETAILS = {
  name: "Qiskit Fall Fest 2026 at IEM",
  subTheme: "Century of Quantum",
  organizers: ["IEM", "IEM Centre of Excellence", "QuantCom", "UEM", "IBM Quantum"],
  dates: "November 9–10, 2026",
  mentorDeadline: "October 2, 2026",
};

export const LINKS = {
  discord: "https://discord.gg/cqcYqYFYm",
  linkedin: "https://www.linkedin.com/company/qiskit-fall-fest-2026-iem",
  mentorForm: "https://forms.gle/xak22KHJq5ijn1D68",
};

export const ROUTES = [
  { name: "Register Now", href: "#registrations" },
  { name: "View Schedule", href: "#schedule" },
  { name: "Apply as Mentor", href: "#mentor" },
  { name: "Join Discord", href: "#discord" },
  { name: "Team", href: "#team" },
];

export const SCHEDULE = [
  {
    date: "NOV 9",
    events: [
      { time: "11:00 AM - 2:00 PM", title: "IBM SPEAKER", description: "Session 1: Talk + Workshop (Quantum Computing Introduction + Qiskit 101)" },
      { time: "2:00 PM - 2:30 PM", title: "CHI(R)PS—NETWORKING BREAK", description: "Light Lunch + Networking (30-minute light lunch + networking break)" },
      { time: "2:30 PM - 3:30 PM", title: "DR. PRITHWINEEL PAUL", description: "Session 2: QML Introduction Talk + Workshop (On-site session covering QML fundamentals)" },
    ],
  },
  {
    date: "NOV 10",
    events: [
      { time: "7:00 PM - 9:00 PM", title: "DR. SUBRATA CHAKRABORTY", description: "Session 1: Talk (Chips Hardware deep dive)" },
      { time: "9:00 PM - 9:30 PM", title: "CHI(R)PS—NETWORKING BREAK", description: "Networking Session (30-minute networking break)" },
      { time: "9:30 PM - 10:00 PM", title: "SPONSOR CHALLENGE", description: "Challenge Kickoff (Sponsor Challenge Kickoff)" },
    ],
  },
  {
    date: "NOV 11",
    events: [
      { time: "(Previous Day 10:00 PM) - 10:00 PM", title: "SPONSOR CHALLENGE", description: "Challenge (Sponsor Challenge: Participants submit solutions/ideas; prizes awarded based on results. Challenge ends, 3 winners announced, top 5 receive recognition, and leaderboard released)" },
    ],
  },
];

export const TRACKS = [
  {
    title: "Workshops",
    description: "Hands-on sessions exploring quantum concepts and tools.",
  },
  {
    title: "Quantum Machine Learning",
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