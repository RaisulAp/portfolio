import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteUrl } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Raisul Agung Prabankoro — Software Engineer | Mobile & Backend Architecture",
    template: "%s | Raisul Agung Prabankoro",
  },
  description:
    "Software Engineer specializing in high-performance Flutter mobile applications and scalable backend architecture (Golang, Node.js, PostgreSQL, telemetry, biometric AI).",
  keywords: [
    "Raisul Agung Prabankoro",
    "Software Engineer",
    "Mobile & Backend Architecture",
    "Flutter Developer",
    "Golang Developer",
    "Node.js Developer",
    "Fullstack Developer Indonesia",
    "IoT Telemetry",
    "SIMRS VitaCore",
    "Astacala Mount Elbrus",
  ],
  authors: [{ name: "Raisul Agung Prabankoro" }],
  creator: "Raisul Agung Prabankoro",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Raisul Agung Prabankoro",
    title: "Raisul Agung Prabankoro — Software Engineer | Mobile & Backend Architecture",
    description:
      "Fullstack Software Engineer architecting high-performance Flutter mobile apps and scalable backend infrastructure with Golang, Node.js, and PostgreSQL.",
    images: [
      {
        url: "/images/profile/profile-photo.jpg",
        width: 800,
        height: 800,
        alt: "Raisul Agung Prabankoro — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raisul Agung Prabankoro — Software Engineer",
    description:
      "Software Engineer specializing in mobile and web development.",
    images: ["/images/profile/profile-photo.jpg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
    >
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
