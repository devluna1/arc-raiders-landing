import type { Metadata } from "next";
import { Orbitron, Inter } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ARC Raiders — Enlist. Resist.",
  description: "A devastated world. Lethal machines. One option: survive. ARC Raiders is a multiplayer extraction adventure set on a lethal future Earth.",
  keywords: ["ARC Raiders", "extraction shooter", "multiplayer", "Embark Studios", "free to play"],
  openGraph: {
    title: "ARC Raiders — Enlist. Resist.",
    description: "A devastated world. Lethal machines. One option: survive.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ARC Raiders — Enlist. Resist.",
    description: "A devastated world. Lethal machines. One option: survive.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${orbitron.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
