// components/SkillsSection.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SkillsBackground from "@/app/components/threejs/SkillsBackground";

const skills = [
  {
    id: "nextjs",
    name: "Next.js",
    logo: "/logos/nextjs.svg",
    color: "#000000",
  },
  { id: "react", name: "React", logo: "/logos/react.svg", color: "#61DAFB" },
  {
    id: "typescript",
    name: "TypeScript",
    logo: "/logos/typescript.svg",
    color: "#3178C6",
  },
  {
    id: "javascript",
    name: "JavaScript",
    logo: "/logos/javascript.svg",
    color: "#F7DF1E",
  },
  {
    id: "nodejs",
    name: "Node.js",
    logo: "/logos/nodejs.svg",
    color: "#339933",
  },
  {
    id: "Nestjs",
    name: "Nestjs",
    logo: "/logos/oip.webp",
    color: "#fb4649",
  },
  { id: "git", name: "Git", logo: "/logos/git.svg", color: "#F05032" },
  { id: "github", name: "GitHub", logo: "/logos/github.svg", color: "#181717" },
  { id: "html", name: "HTML5", logo: "/logos/html.svg", color: "#E34F26" },
  { id: "css", name: "CSS3", logo: "/logos/css.svg", color: "#1572B6" },
  {
    id: "vscode",
    name: "VS Code",
    logo: "/logos/vs-studio.svg",
    color: "#007ACC",
  },
  {
    id: "Postgresql",
    name: "Postgresql",
    logo: "/logos/Postgresql.svg",
    color: "#007ACC",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    logo: "/logos/mongodb.svg",
    color: "#47A248",
  },
  { id: "docker", name: "Docker", logo: "/logos/docker.svg", color: "#2496ED" },
  { id: "python", name: "Python", logo: "/logos/python.svg", color: "#3776AB" },
  { id: "redux", name: "Redux", logo: "/logos/redux.svg", color: "#764ABC" },
  { id: "npm", name: "npm", logo: "/logos/npm.svg", color: "#CB3837" },
  { id: "redis", name: "redis", logo: "/logos/redis.svg", color: "#CB3837" },
];

export default function SkillsSection() {
  const [isClient, setIsClient] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsClient(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden py-20">
      {/* Three.js Background */}
      {isClient && <SkillsBackground />}

      {/* Mouse-following gradient */}
      {isClient && (
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
              rgba(6, 182, 212, 0.3) 0%, 
              rgba(97, 218, 251, 0.15) 15%, 
              transparent 40%)`,
          }}
        />
      )}

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Minimal header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6 rounded-full"
          />

          <h1 className="text-5xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h1>
          <p className="text-gray-400 max-w-md mx-auto text-lg">
            Technologies I build with daily
          </p>
        </motion.div>

        {/* Straight Grid Container */}
        <div className="relative">
          {/* Grid of skills */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{
                  scale: 1.15,
                  y: -8,
                  transition: { type: "spring", stiffness: 400, damping: 25 },
                }}
                className="relative group"
              >
                <motion.div
                  className="relative aspect-square rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-4 cursor-pointer"
                  whileHover={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderColor: `${skill.color}80`,
                    boxShadow: `0 10px 30px ${skill.color}30, 0 0 60px ${skill.color}15`,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={skill.logo}
                      alt={skill.name}
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 64px, 80px"
                    />
                  </div>

                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl -z-10"
                    initial={{ opacity: 0 }}
                    whileHover={{
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    style={{ backgroundColor: skill.color }}
                  />
                </motion.div>

                {/* Tooltip */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 pointer-events-none"
                >
                  <div className="px-3 py-2 rounded-lg bg-gray-900/95 backdrop-blur-md border border-white/20 shadow-xl">
                    <span className="text-sm font-semibold text-white whitespace-nowrap">
                      {skill.name}
                    </span>
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 bg-gray-900 border-l border-t border-white/20" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Decorative elements */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center gap-6 mt-16"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-sm text-gray-400">Hover to interact</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-sm text-gray-400">Responsive grid</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-gray-400">16+ technologies</span>
            </div>
          </motion.div>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              {
                value: skills.length,
                label: "Technologies",
                gradient: "from-cyan-400 to-blue-500",
              },
              {
                value: "∞",
                label: "Combinations",
                gradient: "from-purple-400 to-pink-500",
              },
              {
                value: "100%",
                label: "Daily Use",
                gradient: "from-green-400 to-emerald-500",
              },
              {
                value: "Modern",
                label: "Stack",
                gradient: "from-orange-400 to-red-500",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300"
              >
                <div
                  className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 text-sm">
            Continuously expanding my toolkit with modern technologies
          </p>
        </motion.div>
      </div>
    </section>
  );
}
