// components/CertificatesSection.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import {
  Award,
  Calendar,
  ExternalLink,
  X,
  Sparkles,
  Maximize2,
  University,
  Trophy,
  GraduationCap,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import SkillsBackground from "@/app/components/threejs/SkillsBackground";

const certificates = [
  {
    id: 1,
    title: "Next.js Certificate",
    provider: "Udemy",
    date: "2024",
    skills: ["Next.js", "App Router", "SSR", "SSG"],
    logo: "/certificate/nextjs.jpg",
    color: "from-black to-gray-800",
    badge: "Frontend",
    stats: "Modern Framework",
  },
  {
    id: 2,
    title: "Frontend Web Developer Bootcamp",
    provider: "Udemy",
    date: "2024",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    logo: "/certificate/frontend.jpg",
    color: "from-blue-600 to-cyan-400",
    badge: "Bootcamp",
    stats: "Full Course",
  },
  {
    id: 3,
    title: "JavaScript Mastery",
    provider: "Udemy",
    date: "2025",
    skills: ["ES6+", "Async JS", "OOP", "Design Patterns"],
    logo: "/certificate/javascript.jpg",
    color: "from-yellow-400 to-orange-400",
    badge: "Language",
    stats: "Advanced",
  },
  {
    id: 4,
    title: "React Development",
    provider: "Udemy",
    date: "2025",
    skills: ["React.js", "Hooks", "Context API", "Performance"],
    logo: "/certificate/react.jpg",
    color: "from-cyan-500 to-blue-400",
    badge: "Library",
    stats: "Latest Features",
  },
  {
    id: 5,
    title: "Project Recognition",
    provider: "Bahirdar University",
    date: "2025",
    skills: ["Project Management", "Innovation", "Leadership"],
    logo: "/certificate/project.jpg",
    color: "from-green-500 to-emerald-400",
    badge: "Award",
    stats: "University",
  },
];

export default function CertificatesSection() {
  const [isClient, setIsClient] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<
    (typeof certificates)[0] | null
  >(null);

  // Check if we're on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Animation variants with proper TypeScript typing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const badgeVariants: Variants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        delay: 0.3,
      },
    },
  };

  const openCertificate = (cert: (typeof certificates)[0]) => {
    setSelectedCertificate(cert);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  return (
    <>
      {/* Fullscreen Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeCertificate}
              className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden border-2 border-white/20">
              <Image
                src={selectedCertificate.logo}
                alt={selectedCertificate.title}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                {selectedCertificate.title}
              </h3>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {selectedCertificate.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-2">
                  <University className="w-4 h-4" />
                  {selectedCertificate.provider}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Section */}
      <section id="certificates" className="py-20 relative overflow-hidden">
        {/* Three.js Background */}
        {isClient && <SkillsBackground />}

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-center mb-16"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass mb-6"
            >
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Certificates & Awards
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-white to-blue-400 bg-clip-text text-transparent"
            >
              My Achievements
            </motion.h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Recognized certifications and awards that validate my expertise in
              modern web technologies
            </p>
          </motion.div>

          {/* Certificates Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {certificates.map((cert) => (
              <motion.div
                key={cert.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                onMouseEnter={() => setHoveredCard(cert.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative group"
              >
                {/* Glow effect */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-3xl blur-xl transition-all duration-500",
                    hoveredCard === cert.id
                      ? `opacity-50 bg-gradient-to-br ${cert.color}`
                      : "opacity-0"
                  )}
                />

                {/* Main Card */}
                <div className="relative overflow-hidden rounded-2xl glass border border-white/10 backdrop-blur-lg transition-all duration-500 h-full flex flex-col">
                  {/* Certificate Image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={cert.logo}
                      alt={cert.title}
                      fill
                      className="object-contain p-6 bg-black/30 transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    {/* Floating Badge */}
                    <motion.div
                      variants={badgeVariants}
                      className="absolute top-4 right-4 z-20"
                    >
                      <div
                        className={cn(
                          "px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg",
                          `bg-gradient-to-r ${cert.color}`
                        )}
                      >
                        {cert.badge}
                      </div>
                    </motion.div>

                    {/* View Button */}
                    <button
                      onClick={() => openCertificate(cert)}
                      className="absolute bottom-3 right-3 p-2 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                    >
                      <Maximize2 className="w-4 h-4 text-white" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300 mb-3">
                        {cert.title}
                      </h3>

                      {/* Provider & Date */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          {cert.provider === "Bahirdar University" ? (
                            <University className="w-4 h-4" />
                          ) : (
                            <GraduationCap className="w-4 h-4" />
                          )}
                          <span>{cert.provider}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{cert.date}</span>
                        </div>
                      </div>

                      {/* Stats Badge */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 mb-4"
                      >
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span className="text-sm text-gray-300">
                          {cert.stats}
                        </span>
                      </motion.div>

                      {/* Skills Tags */}
                      {cert.skills.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {cert.skills.slice(0, 3).map((skill) => (
                            <motion.span
                              key={skill}
                              whileHover={{ scale: 1.1, y: -2 }}
                              className="px-3 py-1 rounded-full text-xs bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white transition-all duration-300"
                            >
                              {skill}
                            </motion.span>
                          ))}
                          {cert.skills.length > 3 && (
                            <span className="px-3 py-1 rounded-full text-xs bg-white/10 text-gray-300">
                              +{cert.skills.length - 3}
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => openCertificate(cert)}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>View</span>
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => openCertificate(cert)}
                        className="flex items-center gap-2 text-sm font-medium bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent hover:gap-3 transition-all duration-300"
                      >
                        View Full
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
