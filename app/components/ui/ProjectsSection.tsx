"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "3D E-commerce Platform",
    description:
      "Immersive shopping experience with WebGL product visualization",
    tags: ["Next.js", "Three.js", "Stripe", "Tailwind"],
    image: "/projects/ecommerce.jpg",
    github: "https://github.com",
    live: "https://demo.com",
    featured: true,
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: 2,
    title: "AI Dashboard",
    description:
      "Real-time analytics dashboard with machine learning predictions",
    tags: ["React", "D3.js", "Python", "FastAPI"],
    image: "/projects/ai-dashboard.jpg",
    github: "https://github.com",
    live: "https://demo.com",
    featured: true,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Crypto Trading Platform",
    description:
      "High-frequency trading platform with real-time data visualization",
    tags: ["TypeScript", "WebSockets", "Node.js", "Redis"],
    image: "/projects/crypto.jpg",
    github: "https://github.com",
    live: "https://demo.com",
    featured: true,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "AR Interior Design",
    description: "Augmented reality app for virtual furniture placement",
    tags: ["React Native", "ARKit", "Three.js", "Firebase"],
    image: "/projects/ar-design.jpg",
    github: "https://github.com",
    live: "https://demo.com",
    featured: false,
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "Health & Fitness App",
    description:
      "Comprehensive fitness tracking with AI workout recommendations",
    tags: ["React Native", "GraphQL", "MongoDB", "TensorFlow"],
    image: "/projects/fitness.jpg",
    github: "https://github.com",
    live: "https://demo.com",
    featured: false,
    color: "from-indigo-500 to-violet-500",
  },
  {
    id: 6,
    title: "Real-time Collaboration",
    description:
      "Multi-user collaborative editor with live cursors and updates",
    tags: ["Next.js", "WebRTC", "PostgreSQL", "Liveblocks"],
    image: "/projects/collab.jpg",
    github: "https://github.com",
    live: "https://demo.com",
    featured: false,
    color: "from-yellow-500 to-amber-500",
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : filter === "featured"
      ? projects.filter((p) => p.featured)
      : projects.filter((p) => p.tags.includes(filter));

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <span className="text-sm font-medium text-gradient">My Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore my portfolio of cutting-edge applications built with modern
            technologies and best practices.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {[
            "all",
            "featured",
            "Next.js",
            "Three.js",
            "React Native",
            "TypeScript",
          ].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={cn(
                "px-4 py-2 rounded-full transition-all duration-300",
                filter === item
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                  : "glass text-gray-300 hover:text-white"
              )}
            >
              {item}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl glass p-6 h-full transition-all duration-300 hover:scale-[1.02]">
                  {/* Color Accent */}
                  <div
                    className={cn(
                      "absolute top-0 left-0 w-full h-1 bg-gradient-to-r",
                      project.color
                    )}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={cn(
                          "w-12 h-12 rounded-lg bg-gradient-to-br flex items-center justify-center",
                          project.color
                        )}
                      >
                        <div className="text-white font-bold text-lg">
                          P{project.id}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs bg-white/10 text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 rounded-full glass text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300">
            View All Projects
          </button>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl glass rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div
                className={cn("p-6 bg-gradient-to-r", selectedProject.color)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-lg text-gray-300 mb-6">
                  {selectedProject.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-white font-semibold mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-sm bg-white/10 text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-3">Links</h4>
                    <div className="flex gap-4">
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-white/10 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                        <span>GitHub</span>
                      </a>
                      <a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-white/10 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-4">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-2 rounded-full glass text-white hover:bg-white/10 transition-colors"
                  >
                    Close
                  </button>
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:opacity-90 transition-opacity"
                  >
                    Visit Project
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
