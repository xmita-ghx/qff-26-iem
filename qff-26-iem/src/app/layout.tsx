import type { Metadata } from "next";
import { Anton, Urbanist, Montserrat } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Qiskit Fall Fest 2026 at IEM",
  description: "Century of Quantum - Join us for Qiskit Fall Fest 2026 at IEM.",
  icons: {
    icon: "/logos/navbar-logo.png",
    apple: "/logos/navbar-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${anton.variable} ${urbanist.variable} ${montserrat.variable} antialiased bg-deep-base text-pure-white`}
      >
        {children}
      </body>
    </html>
  );
}
