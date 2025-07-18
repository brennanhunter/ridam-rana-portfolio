import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Ridam Rana - Game Designer Portfolio",
  description: "Creative game designer specializing in systems design, level design, and player experience. Proven track record with live games and innovative mechanics.",
  keywords: ["game designer", "level design", "systems design", "game development", "Unity", "Unreal"],
  authors: [{ name: "Ridam Rana" }],
  creator: "Ridam Rana",
  openGraph: {
    title: "Ridam Rana - Game Designer Portfolio",
    description: "Creative game designer specializing in systems design, level design, and player experience.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ridam Rana - Game Designer Portfolio",
    description: "Creative game designer specializing in systems design, level design, and player experience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
