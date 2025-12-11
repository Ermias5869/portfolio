"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  ExternalLink,
  Github,
  ArrowRight,
  X,
  Sparkles,
  Zap,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "BDU Connect",
    description:
      "A university-focused social platform designed for Bahir Dar University students to share posts, images, videos, and communicate in real time through channels and private chat.",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "Tailwind CSS",
    ],
    image: "/projects/bduconnect.png",
    github: "https://github.com/Ermias5869/BDU-Connect",
    live: "https://bdu-connect-frontend.vercel.app/",
    color: "from-cyan-500 to-blue-500",
    badge: "Social",
    stats: "Real-time Chat",
    featured: [
      "Authentication and user profiles",
      "Real-time chat with channels",
      "Image and video uploads (Cloudinary)",
      "Post creation, editing, and deletion",
      "Emoji reactions and comments",
      "Responsive UI for mobile and desktop",
    ],
  },
  {
    id: 2,
    title: "Gitify",
    description:
      "Gitify.ai is an AI-powered full-stack SaaS platform that transforms your GitHub profile by generating realistic commit histories.",
    tags: [
      "Next.js",
      "NestJS",
      "Redis",
      "Docker",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "AI",
      "SaaS",
      "Git Automation",
    ],
    image: "/projects/gitify.png",
    github: "https://github.com/Ermias5869/git-frontend",
    live: "https://gitify-ai.vercel.app/",
    color: "from-purple-500 to-pink-500",
    badge: "AI-Powered",
    stats: "SaaS Platform",
    featured: [
      "AI-driven commit simulation",
      "Back-commit timeline",
      "Automated Git pushes",
      "Real-time analytics",
      "SaaS-ready platform",
    ],
  },
  {
    id: 3,
    title: "Boostgram Promo",
    description:
      "Boostgram Promo (@BOOM_EEEbot) is a Telegram bot that helps users efficiently manage and grow their social media presence.",
    tags: [
      "Next.js",
      "NestJS",
      "Node.js",
      "Chapa Payment Gateway",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
    ],
    image: "/projects/boost.png",
    github: "https://github.com/BoostifyTech",
    live: "https://t.me/BOOM_EEEbot",
    color: "from-green-500 to-emerald-500",
    badge: "Telegram Bot",
    stats: "Social Automation",
    featured: [
      "Telegram bot automation",
      "Social media scheduling",
      "Engagement tracking",
      "Cloud media storage",
    ],
  },
  {
    id: 4,
    title: "ABstore – Modern Electronics Marketplace",
    description:
      "ABstore is a high-performance full-stack eCommerce platform designed for seamless electronics shopping.",
    tags: [
      "React",
      "TailwindCSS",
      "Node.js",
      "Express",
      "MongoDB",
      "REST API",
      "Full Stack",
      "Ecommerce",
    ],
    image: "/projects/ABstore.png",
    github: "https://github.com/Ermias5869/ABStore-user",
    live: "https://abstore-user.onrender.com/",
    color: "from-orange-500 to-red-500",
    badge: "E-commerce",
    stats: "Full Stack",
    featured: [
      "Real-time cart updates",
      "Secure checkout",
      "Optimized backend API",
      "Modern UI/UX for electronics shopping",
    ],
  },
  {
    id: 5,
    title: "Washara – Real-Time Video Calling & Social Platform",
    description:
      "Washara is a real-time communication platform built for seamless video calls, voice calls, and instant messaging.",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "Socket.IO",
      "WebRTC",
      "TailwindCSS",
      "Stream API",
    ],
    image: "https://ik.imagekit.io/aluiwubwp/washara.png",
    github: "https://github.com/Ermias5869/WasheraVideoCall",
    live: "https://waasharaavideocall.onrender.com",
    color: "from-indigo-500 to-violet-500",
    badge: "Video Call",
    stats: "WebRTC",
    featured: [
      "Real-time video & voice calls",
      "WebRTC integration",
      "Socket-based messaging",
      "Optimized communication UI",
    ],
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header with floating animation */}
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
              My Projects
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-white">Real</span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Building practical solutions with{" "}
            <span className="text-cyan-400 font-semibold">
              modern technologies
            </span>{" "}
            and{" "}
            <span className="text-cyan-400 font-semibold">
              real-world impact
            </span>
          </motion.p>
        </motion.div>

        {/* Projects Grid with Image Display */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative group"
              >
                {/* Glow effect on hover */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-3xl blur-xl transition-all duration-500",
                    hoveredCard === project.id
                      ? `opacity-50 bg-gradient-to-br ${project.color}`
                      : "opacity-0"
                  )}
                />

                {/* Main Card */}
                <div className="relative overflow-hidden rounded-2xl glass border border-white/10 backdrop-blur-lg transition-all duration-500 h-full flex flex-col">
                  {/* Project Image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
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
                          `bg-gradient-to-r ${project.color}`
                        )}
                      >
                        {project.badge}
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 mb-3">
                        {project.title}
                      </h3>

                      <p className="text-gray-400 leading-relaxed text-sm mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Animated Stats */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 mb-4"
                      >
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-sm text-gray-300">
                          {project.stats}
                        </span>
                      </motion.div>

                      {/* Tags with hover effects */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag) => (
                          <motion.span
                            key={tag}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="px-3 py-1 rounded-full text-xs bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white transition-all duration-300"
                          >
                            {tag}
                          </motion.span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-3 py-1 rounded-full text-xs bg-white/10 text-gray-300">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                      <div className="flex gap-3">
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                        >
                          <Github className="w-5 h-5 text-gray-300 hover:text-white" />
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5 text-gray-300 hover:text-white" />
                        </motion.a>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center gap-2 text-sm font-medium bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent hover:gap-3 transition-all duration-300"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Enhanced Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-3xl h-[85vh] rounded-2xl overflow-hidden border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with gradient */}
              <div
                className={cn(
                  "p-6 bg-gradient-to-r relative",
                  selectedProject.color
                )}
              >
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {selectedProject.title}
                    </h3>
                    <div className="flex items-center gap-3">
                      {selectedProject.badge && (
                        <div className="px-2 py-1 rounded-full bg-white/20 text-white text-sm font-medium">
                          {selectedProject.badge}
                        </div>
                      )}
                      {selectedProject.stats && (
                        <div className="text-white/80">
                          {selectedProject.stats}
                        </div>
                      )}
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <X className="w-5 h-5 text-white" />
                  </motion.button>
                </div>
              </div>

              {/* Content */}
              <div className="bg-gray-900/80 backdrop-blur-lg p-6 h-[calc(85vh-72px)] overflow-y-auto">
                <div className="grid lg:grid-cols-2 gap-4">
                  <div>
                    {/* Project Image */}
                    <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4">
                      <div className="relative w-full h-full">
                        <Image
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          fill
                          className="object-cover"
                          sizes="100vw"
                        />
                      </div>
                    </div>

                    <h4 className="text-lg font-semibold text-white mb-2">
                      Project Overview
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* Features */}
                    {selectedProject.featured && (
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {selectedProject.featured.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-gray-300 text-sm"
                            >
                              <span className="w-2 h-2 rounded-full bg-cyan-500 mt-1 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full bg-white/10 text-gray-300 text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        Project Links
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl glass flex items-center gap-2 hover:bg-white/10 transition-colors text-sm text-white"
                        >
                          <Github className="w-4 h-4" /> GitHub
                        </a>
                        <a
                          href={selectedProject.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl glass flex items-center gap-2 hover:bg-white/10 transition-colors text-sm text-white"
                        >
                          <ExternalLink className="w-4 h-4" /> Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-2 mt-6 border-t border-white/10 pt-4">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2 rounded-full glass text-white hover:bg-white/10 transition-colors text-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
