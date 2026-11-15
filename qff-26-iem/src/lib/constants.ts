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
  discord: "https://discord.gg/2Z535c8UNv",
  linkedin: "https://www.linkedin.com/company/qiskit-fall-fest-2026-iem",
  mentorForm: "https://forms.gle/xak22KHJq5ijn1D68",
  registrationForm: "https://forms.gle/LuS4ryGyBtPfTfBx5",
  devpost: "https://atomiq-hackathon-qff-26-iem.devpost.com",
  instagram: "https://www.instagram.com/qiskitfallfestiem?stkn=MWs5bm5vMXk2aDViZw",
};

export const ROUTES = [
  { name: "Register Now", href: "#registrations" },
  { name: "View Schedule", href: "#schedule" },
  { name: "Hackathon", href: "https://atomiq-hackathon-qff-26-iem.devpost.com" },
  { name: "Apply as Mentor", href: "#mentor" },
  { name: "Join Discord", href: "#discord" },
  { name: "Team", href: "#team" },
];

export const SCHEDULE = [
  {
    date: "NOV 9",
    events: [
      {
        time: "10:30 AM - 11:00 AM",
        title: "INAUGURATION",
        description: "Opening ceremony kicking off Qiskit Fall Fest 2026 at IEM with welcomes from our organizers and partners. Please note that the reporting time for participants is 10:00 AM strictly."
      },
      { 
        time: "11:00 AM - 1:00 PM", 
        title: "QUANTUM INTRODUCTION + QISKIT 101",
        speakerLabel: "SPEAKER:",
        speaker: "DR. KAVITHA YOGARAJ",
        description: "Session 1: Expert Talk + Workshop (Quantum Computing Introduction + Qiskit 101)" 
      },
      { 
        time: "1:00 PM - 2:00 PM", 
        title: "CHI(R)PS—NETWORKING BREAK", 
        description: "Light Lunch + Networking (1-hour light lunch + networking break)" 
      },
      { 
        time: "2:00 PM - 3:00 PM", 
        title: "TRANSPILATION",
        speakerLabel: "SPEAKER:",
        speaker: "DR. RITAJIT MAJUMDAR",
        description: "Session 2: Expert Talk — Deep dive into Qiskit transpilation passes, circuit optimization, layout selection, basis gate mapping, and reducing swap overhead for noisy quantum architectures."
      },
      { 
        time: "3:30 PM - 4:30 PM", 
        title: "QUANTUM MACHINE LEARNING",
        speakerLabel: "SPEAKER:",
        speaker: "AMITAVA CHAKRABORTY",
        description: "Session 3: Expert Talk + Hands-On Workshop — Exploring parameterized quantum circuits (PQCs), quantum kernels, feature maps, and hybrid quantum-classical training routines using Qiskit Machine Learning."
      },
      {
        time: "4:30 PM - 5:00 PM",
        title: "HAPPY HOUR + QUIZ!",
        speaker: "Top 3 receive exclusive swag!",
        description: "Unwind after an intense session of power-packed learning! Grab a #quantum drink, connect with fellow builders, creators and enthusiasts, and face off in a high-speed trivia showdown. Bring your sharpest mind—the top 3 brainiacs walk away with exclusive QFF26 swag! Includes an event photography session right after!"
      },
    ],
  },
  {
    date: "NOV 10",
    events: [
      { 
        time: "7:00 PM - 9:00 PM", 
        title: "HARDWARE-SOFTWARE INTERFACE",
        speakerLabel: "SPEAKER:",
        speaker: "Dr. Subrata Chakraborty", 
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
        title: "THE ATOMIQ HACKATHON: KICKOFF", 
        description: "Hackathon Kickoff (Challenge guidelines, rules, and problem statement release)",
        highlight: "The Atomiq Hackathon begins at 10:00 PM!"
      },
    ],
  },
  {
    date: "NOV 11",
    events: [
      { 
        time: "(Previous Day 10:00 PM) - 10:00 PM", 
        title: "THE ATOMIQ HACKATHON", 
        description: "24-Hour Virtual Hackathon: Participants build and submit creative quantum solutions; projects judged across innovation and technical execution.",
        highlight: "The submissions for the Atomiq Hackathon closes at 10:00 PM!"
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
        description: "The top 3 winners will be announced on November 15, 2026, and the top 10 will be spotlighted across all our official socials + leaderboard released for top 10!"
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