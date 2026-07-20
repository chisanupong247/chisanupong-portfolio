import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thanawat-portfolio.example.com"),
  title: {
    default: "Thanawat | Business & Data Analyst Portfolio",
    template: "%s | Thanawat Portfolio",
  },
  description:
    "Portfolio of an Information Technology student focused on business analysis, system analysis, data analytics, AI, and connected systems.",
  keywords: [
    "Business Analyst",
    "System Analyst",
    "Data Analyst",
    "Portfolio",
    "Information Technology",
  ],
  openGraph: {
    title: "Thanawat — Turning complex problems into clear solutions",
    description:
      "Business analysis, system design, data analytics, AI, and IoT projects.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/images/profile.png", width: 1024, height: 1365 }],
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
