import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Top 1% Developer | Next.js + Three.js Portfolio",
  description:
    "Cutting-edge developer portfolio with immersive WebGL animations and modern stack",
  keywords: [
    "developer",
    "portfolio",
    "nextjs",
    "threejs",
    "react",
    "typescript",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    title: "Top 1% Developer Portfolio",
    description: "Immersive developer portfolio with Three.js animations",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased overflow-x-hidden">
        <ThreeBackground />
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
