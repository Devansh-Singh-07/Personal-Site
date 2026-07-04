import type { Metadata } from "next";
import { Black_Han_Sans, Acme, Inter } from "next/font/google";
import "./globals.css";

/**
 * Font setup — importing the 3 primary fonts from the Figma design.
 *
 * - Black Han Sans: Used for large section headings (96px+)
 * - Acme: Used for nav links, buttons, subtitles (32–36px)
 * - Inter: Used for card content in the Kanban board (20–40px)
 *
 * Each font is assigned a CSS variable so Tailwind can reference them.
 */
const blackHanSans = Black_Han_Sans({
  weight: "400",
  variable: "--font-black-han-sans",
  subsets: ["latin"],
  display: "swap",
});

const acme = Acme({
  weight: "400",
  variable: "--font-acme",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Devansh Singh | FullStack Web & iOS Developer",
  description:
    "I build solutions and experiences that solve real-world problems. FullStack Web & iOS Developer with 10+ projects, 300+ DSA problems, and 4+ years of learning.",
  openGraph: {
    title: "Devansh Singh | FullStack Web & iOS Developer",
    description:
      "I build solutions and experiences that solve real-world problems.",
    type: "website",
  },
  icons: {
    icon: '/icon.png',
  },
  twitter: {
    card: "summary_large_image",
    title: "Devansh Singh | FullStack Web & iOS Developer",
    description:
      "I build solutions and experiences that solve real-world problems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${blackHanSans.variable} ${acme.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
