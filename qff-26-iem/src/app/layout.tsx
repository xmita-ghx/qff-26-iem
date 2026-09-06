import type { Metadata } from "next";
import { Anton, Urbanist } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Qiskit Fall Fest 2026 at IEM",
  description: "Century of Quantum - Join us for Qiskit Fall Fest 2026 at IEM.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${anton.variable} ${urbanist.variable} antialiased bg-deep-base text-pure-white`}
      >
        {children}
      </body>
    </html>
  );
}
