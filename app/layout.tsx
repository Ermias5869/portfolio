// app/layout.tsx
"use client"; // Add this because we're using client-side state

import { useState, useEffect } from "react";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import ThreeBackground from "@/app/components/threejs/ThreeBackground";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased overflow-x-hidden">
        {/* Three.js Background */}
        <ThreeBackground />

        {/* Main Content (hidden during splash) */}
        <div className={`transition-opacity duration-500`}>
          <Header />
          <main className="relative z-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
