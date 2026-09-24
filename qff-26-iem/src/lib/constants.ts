import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const EVENT_DETAILS = {
  name: "Qiskit Fall Fest 2026 at IEM",
  subTheme: "Century of Quantum",
  organizers: ["IEM", "IEM Centre of Excellence", "QuantCom", "UEM", "IBM Quantum"],
  dates: "November 9–11, 2026",
  mentorDeadline: "October 2, 2026",
};

export const LINKS = {
  discord: "https://discord.gg/cqcYqYFYm",
  linkedin: "https://www.linkedin.com/company/qiskit-fall-fest-2026-iem",
  mentorForm: "https://forms.gle/xak22KHJq5ijn1D68",
  instagram: "https://www.instagram.com/qiskitfallfestiem?stkn=MWs5bm5vMXk2aDViZw",
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
      { 
        time: "11:00 AM - 2:00 PM", 
        title: "IBM QUANTUM KEYNOTE", 
        description: "Session 1: Talk + Workshop (Quantum Computing Introduction + Qiskit 101)" 
      },
      { 
        time: "2:00 PM - 2:30 PM", 
        title: "CHI(R)PS—NETWORKING BREAK", 
        description: "Light Lunch + Networking (30-minute light lunch + networking break)" 
      },
      { 
        time: "2:30 PM - 3:30 PM", 
        title: "DR. PRITHWINEEL PAUL", 
        description: "Session 2: QML Introduction Talk + Workshop (On-site session covering QML fundamentals)" 
      },
      {
        time: "3:30 PM - 4:00 PM",
        title: "HAPPY HOUR + QUIZ!",
        speaker: "Top 3 receive exclusive swags!",
        description: "Unwind after an intense session of power-packed learning! Grab a #quantum drink, connect with fellow builders, creators and enthusiasts, and face off in a high-speed trivia showdown. Bring your sharpest mind—the top 3 brainiacs walk away with exclusive QFF26 swag! Includes an event photography session right after!"
      },
    ],
  },
  {
    date: "NOV 10",
    events: [
      { 
        time: "7:00 PM - 9:00 PM", 
        title: "DR. SUBRATA CHAKRABORTY", 
        description: "Session 1: Talk — Bridging the Physical and Logical Layers: From Mesoscopic Superconducting Qubits to the Quantum Hardware–Software Interface",
        focusAreas: [
          "Mesoscopic Superconductivity & Qubit Physics: Physical realization of transmon qubits in superconducting circuits, Josephson junction dynamics, and microwave control lines in IBM Quantum processors.",
          "System–Bath Coupling & Noise Mitigation: Modeling environmental decoherence, crosstalk, and dissipation mechanisms (system-bath interactions) to design robust dynamical decoupling sequences and error mitigation strategies.",
          "Hardware-to-Software Interfacing & Pulse-Level Control: Translating abstract gate operations into calibrated microwave pulses via Qiskit Pulse, pulse-level scheduling, and hardware-aware circuit transpilation.",
          "Processor Topology & Coupling Architectures: Inter-qubit coupling mechanisms (e.g., tunable couplers in modern architectures like Heron), heavy-hex lattice constraints, and mapping logical circuits onto physical chip layouts."
        ]
      },
      { 
        time: "9:00 PM - 9:30 PM", 
        title: "CHI(R)PS—NETWORKING BREAK", 
        description: "Networking Session (30-minute networking break)" 
      },
      { 
        time: "9:30 PM - 10:00 PM", 
        title: "HACKATHON", 
        description: "Hackathon Kickoff (Challenge guidelines, rules, and problem statement release)" 
      },
    ],
  },
  {
    date: "NOV 11",
    events: [
      { 
        time: "(Previous Day 10:00 PM) - 10:00 PM", 
        title: "HACKATHON", 
        description: "24-Hour Virtual Hackathon: Participants build and submit creative quantum solutions; projects judged across innovation and technical execution." 
      },
      {
        time: "10:00 PM - 10:30 PM",
        title: "HAPPY HOUR + QUIZ!",
        speaker: "Top 3 receive special recognition!",
        description: "You’ve pushed your limits, coded through the night, and built incredible quantum solutions—now it’s time to celebrate! Cross the hackathon finish line with a fun, interactive wind-down quiz. Cap off 24 hours of hacking with an energetic social quiz, claim bragging rights and get recognized on stage before the final curtain call!"
      },
      {
        time: "POST-EVENT",
        title: "HACKATHON RESULTS AND ANNOUNCEMENTS",
        description: "Winners announced within 24 hours of submission + spotlighted across all our official socials!"
      }
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
    title: "Hackathon",
    description: "A 24-hour creative virtual sprint building innovative quantum projects and error-resilient applications.",
  },
  {
    title: "Expert Talks",
    description: "Insightful talks from quantum researchers and industry pioneers bridging physical hardware and logical algorithms.",
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