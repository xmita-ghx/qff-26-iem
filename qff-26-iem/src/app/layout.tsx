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
  metadataBase: new URL("https://qff-26-iem.vercel.app"),
  title: "Qiskit Fall Fest 2026 at IEM",
  description:
    "Unleashing Chi(r)ps. A Decade of Harmony on the Cloud. Hosted at Institute of Engineering and Management, Kolkata in collaboration with IBM Quantum.",
  icons: {
    icon: "/logos/navbar-logo.png",
    apple: "/logos/navbar-logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Qiskit Fall Fest 2026 at IEM",
    description:
      "Unleashing Chi(r)ps. A Decade of Harmony on the Cloud. Hosted at Institute of Engineering and Management, Kolkata in collaboration with IBM Quantum.",
    url: "https://qff-26-iem.vercel.app",
    siteName: "Qiskit Fall Fest 2026",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qiskit Fall Fest 2026 at IEM",
    description:
      "Unleashing Chi(r)ps. A Decade of Harmony on the Cloud. Hosted at Institute of Engineering and Management, Kolkata in collaboration with IBM Quantum.",
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