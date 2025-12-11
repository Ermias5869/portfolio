// app/layout.tsx
"use client"; // Add this because we're using client-side state

import { useState, useEffect } from "react";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import ThreeBackground from "@/app/components/threejs/ThreeBackground";
import SplashScreen from "@/app/components/ui/SplashScreen";
import GTASplashScreen from "./components/ui/GTASplashScreen";

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
  const [showSplash, setShowSplash] = useState(true);
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  useEffect(() => {
    // Check if user has seen splash before in this session
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");

    if (hasSeenSplash === "true") {
      setShowSplash(false);
      setIsContentLoaded(true);
    } else {
      // Simulate loading time
      const timer = setTimeout(() => {
        setShowSplash(false);
        sessionStorage.setItem("hasSeenSplash", "true");
        setIsContentLoaded(true);
      }, 5000); // 5 seconds splash screen

      return () => clearTimeout(timer);
    }
  }, []);

  const handleSkipSplash = () => {
    setShowSplash(false);
    sessionStorage.setItem("hasSeenSplash", "true");
    setIsContentLoaded(true);
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased overflow-x-hidden">
        {/* Three.js Background */}
        <ThreeBackground />

        {/* Main Content (hidden during splash) */}
        <div
          className={`transition-opacity duration-500 ${
            showSplash ? "opacity-0" : "opacity-100"
          }`}
        >
          <Header />
          <main className="relative z-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
