"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Server,
  Database,
  Smartphone,
  Cloud,
  Zap,
  Cpu,
  Globe,
  Shield,
  ArrowRight,
  Terminal,
  Cpu as Chip,
  GitBranch,
  Layout,
  Code2,
} from "lucide-react";
import SkillsBackground from "@/app/components/threejs/SkillsBackground";

const skills = [
  {
    category: "Frontend",
    icon: Layout,
    color: "from-cyan-500 to-blue-500",
    description: "Modern UI/UX development",
    technologies: [
      { name: "React", level: 98, color: "#61dafb", symbol: "⚛️" },
      { name: "Next.js", level: 95, color: "#000000", symbol: "▲" },
      { name: "TypeScript", level: 92, color: "#3178c6", symbol: "TS" },
      { name: "Tailwind", level: 96, color: "#06b6d4", symbol: "🌀" },
      { name: "Three.js", level: 85, color: "#049ef4", symbol: "3D" },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    description: "Server-side & API development",
    technologies: [
      { name: "Node.js", level: 92, color: "#339933", symbol: "🟢" },
      { name: "Python", level: 85, color: "#3776ab", symbol: "🐍" },
      { name: "Go", level: 75, color: "#00add8", symbol: "🐹" },
      { name: "Java", level: 80, color: "#f89820", symbol: "☕" },
      { name: "Rust", level: 70, color: "#f74c00", symbol: "🦀" },
    ],
  },
  {
    category: "Database",
    icon: Database,
    color: "from-orange-500 to-red-500",
    description: "Data storage & management",
    technologies: [
      { name: "PostgreSQL", level: 90, color: "#336791", symbol: "🐘" },
      { name: "MongoDB", level: 88, color: "#47a248", symbol: "🍃" },
      { name: "Redis", level: 85, color: "#dc382d", symbol: "🔴" },
      { name: "MySQL", level: 87, color: "#00758f", symbol: "🐬" },
      { name: "Elasticsearch", level: 78, color: "#005571", symbol: "🔍" },
    ],
  },
  {
    category: "DevOps",
    icon: Cloud,
    color: "from-indigo-500 to-violet-500",
    description: "Infrastructure & deployment",
    technologies: [
      { name: "Docker", level: 88, color: "#2496ed", symbol: "🐳" },
      { name: "Kubernetes", level: 80, color: "#326ce5", symbol: "☸️" },
      { name: "AWS", level: 85, color: "#ff9900", symbol: "☁️" },
      { name: "Git", level: 95, color: "#f1502f", symbol: "📝" },
      { name: "Terraform", level: 75, color: "#7b42bc", symbol: "🏗️" },
    ],
  },
  {
    category: "Mobile",
    icon: Smartphone,
    color: "from-purple-500 to-pink-500",
    description: "Cross-platform apps",
    technologies: [
      { name: "React Native", level: 88, color: "#61dafb", symbol: "📱" },
      { name: "Flutter", level: 75, color: "#02569b", symbol: "🎯" },
      { name: "Swift", level: 70, color: "#f05138", symbol: "" },
      { name: "Kotlin", level: 72, color: "#7f52ff", symbol: "🤖" },
      { name: "PWA", level: 90, color: "#5a0fc8", symbol: "🌐" },
    ],
  },
  {
    category: "Tools",
    icon: Code2,
    color: "from-yellow-500 to-amber-500",
    description: "Development ecosystem",
    technologies: [
      { name: "VS Code", level: 95, color: "#007acc", symbol: "💻" },
      { name: "Figma", level: 90, color: "#f24e1e", symbol: "🎨" },
      { name: "GitHub", level: 94, color: "#181717", symbol: "🐙" },
      { name: "Webpack", level: 85, color: "#8dd6f9", symbol: "📦" },
      { name: "Jest", level: 88, color: "#c21325", symbol: "✅" },
    ],
  },
];

const capabilities = [
  {
    icon: Zap,
    title: "High Performance",
    description: "Optimized applications with fast load times",
    color: "text-cyan-400",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Cpu,
    title: "Scalability",
    description: "Architected for millions of users",
    color: "text-purple-400",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Worldwide deployment expertise",
    color: "text-green-400",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Enterprise-grade security practices",
    color: "text-red-400",
    gradient: "from-orange-500 to-red-500",
  },
];

export default function SkillsSection() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Calculate parallax effect
  const parallaxX = mousePosition.x / window.innerWidth;
  const parallaxY = mousePosition.y / window.innerHeight;

  return (
    <section className="py-20 relative overflow-hidden min-h-screen">
      {/* Three.js Code Background */}
      <SkillsBackground />

      {/* Parallax overlay elements */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${parallaxX * 100}% ${
            parallaxY * 100
          }%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)`,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header with typing effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 1 }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6"
          />

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-gradient">
              Tech Stack & Skills
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Developer</span> Arsenal
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Expertise across the full technology spectrum. From frontend magic
            to backend architecture, I build scalable solutions with modern
            tools.
          </p>
        </motion.div>

        {/* Interactive floating tech indicators */}
        <div className="absolute top-1/4 left-1/4 pointer-events-none">
          <div className="flex flex-col items-center gap-2 glass p-4 rounded-2xl opacity-80">
            <Code className="w-6 h-6 text-cyan-400" />
            <span className="text-sm text-gray-300">Frontend</span>
          </div>
        </div>

        <div className="absolute top-1/4 right-1/4 pointer-events-none">
          <div className="flex flex-col items-center gap-2 glass p-4 rounded-2xl opacity-80">
            <Server className="w-6 h-6 text-green-400" />
            <span className="text-sm text-gray-300">Backend</span>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 h-full hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 backdrop-blur-lg border border-white/10">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {category.category}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: categoryIndex * 0.1 + techIndex * 0.05,
                      }}
                      className="group/tech"
                      onMouseEnter={() => setHoveredTech(tech.name)}
                      onMouseLeave={() => setHoveredTech(null)}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg transition-all duration-300 group-hover/tech:scale-110"
                            style={{ backgroundColor: tech.color }}
                          >
                            {tech.symbol}
                          </div>
                          <div>
                            <span className="text-gray-300 group-hover/tech:text-white transition-colors block">
                              {tech.name}
                            </span>
                            <span className="text-xs text-gray-500">
                              {hoveredTech === tech.name
                                ? "Hovering"
                                : "Expertise"}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-cyan-400 font-bold text-lg block">
                            {tech.level}%
                          </span>
                          <span className="text-xs text-gray-500">
                            Proficiency
                          </span>
                        </div>
                      </div>
                      <div className="h-2 rounded-full bg-gray-800/50 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            delay: categoryIndex * 0.1 + techIndex * 0.05 + 0.2,
                            type: "spring",
                            stiffness: 100,
                          }}
                          className="h-full rounded-full transition-all duration-300 group-hover/tech:shadow-lg"
                          style={{
                            background: `linear-gradient(90deg, ${tech.color}80, ${tech.color})`,
                            boxShadow: `0 0 20px ${tech.color}40`,
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Development <span className="text-gradient">Superpowers</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`glass p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:translate-y-[-5px]`}
                style={{
                  background: `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.1) 100%)`,
                }}
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cap.gradient} mb-4 flex items-center justify-center`}
                >
                  <cap.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {cap.title}
                </h4>
                <p className="text-gray-400">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats with animated counters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { value: 30, label: "Technologies", suffix: "+" },
            { value: 150, label: "Projects", suffix: "+" },
            { value: 5, label: "Years Experience", suffix: "+" },
            { value: 99, label: "Success Rate", suffix: "%" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 rounded-2xl text-center hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
            >
              <div className="text-4xl font-bold text-gradient mb-2">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto backdrop-blur-lg border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's combine these technologies to create your next
              groundbreaking project. From concept to deployment, I deliver
              exceptional results.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 group"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
