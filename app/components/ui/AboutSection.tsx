"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Target,
  Rocket,
  Heart,
  Zap,
  Users,
  Code2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function AboutSection() {
  const qualities = [
    {
      icon: Target,
      title: "Strategic Problem-Solver",
      description:
        "Designing systematic solutions to complex technical challenges with clear business impact.",
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
    },
    {
      icon: Rocket,
      title: "Performance-Optimized",
      description:
        "Delivering high-performance applications with optimized architecture and efficient code.",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Heart,
      title: "User-Centric Design",
      description:
        "Creating intuitive, accessible experiences that prioritize end-user needs and satisfaction.",
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
    },
    {
      icon: Code2,
      title: "Clean Architecture",
      description:
        "Implementing scalable, maintainable systems with separation of concerns and clear patterns.",
      color: "text-amber-400",
      bgColor: "bg-amber-500/10",
    },
    {
      icon: Users,
      title: "Collaborative Leadership",
      description:
        "Leading cross-functional teams with clear communication and shared technical vision.",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Zap,
      title: "Agile Execution",
      description:
        "Rapid iteration and delivery while maintaining high standards of quality and reliability.",
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
    },
  ];

  // === ONLY ADDED THIS CAROUSEL LOGIC ===
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const itemsPerView = 3;
  const maxIndex = Math.max(0, qualities.length - itemsPerView);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const visibleItems = qualities.slice(
    currentIndex,
    currentIndex + itemsPerView
  );
  if (visibleItems.length < itemsPerView) {
    const remaining = itemsPerView - visibleItems.length;
    visibleItems.push(...qualities.slice(0, remaining));
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -80 : 80,
      opacity: 0,
    }),
  };
  // === END OF ADDED CAROUSEL LOGIC ===

  return (
    <section className="py-20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative">
              {/* Profile Image Container */}
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 mx-auto">
                {/* Gradient border ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 p-1">
                  <div className="w-full h-full rounded-full bg-gray-900"></div>
                </div>

                {/* Image with proper face positioning */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-900">
                  <Image
                    src="/user.jpg"
                    alt="Ermias Amare"
                    fill
                    sizes="(max-width: 768px) 256px, 320px"
                    className="object-cover"
                    priority
                    style={{
                      objectPosition: "center 25%",
                      transform: "scale(1.1)",
                    }}
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500  flex items-center justify-center shadow-lg"
              >
                <div className="text-center p-2">
                  <div className="text-sm  text-white">always</div>
                  <div className="text-xs text-white/80">Learning</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
                className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-br from-purple-500  flex items-center justify-center shadow-lg"
              >
                <div className="text-center p-2">
                  <div className="text-sm  text-white">always</div>
                  <div className="text-xs text-white/80">Building</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
                <span className="text-sm font-medium text-gradient">
                  About Me
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">Building Scalable</span>
                <br />
                <span className="text-white">Software Systems</span>
              </h2>

              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I am a software engineer specializing in full-stack and mobile
                application development. I focus on building reliable,
                maintainable systems using modern frameworks and well-structured
                architectures.
              </p>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                My work spans web and mobile applications with React, Next.js,
                and React Native, backend services using Express and NestJS, and
                data management with PostgreSQL and MongoDB. I actively work
                with cloud and container technologies and continue expanding my
                skills in system design.
              </p>
            </div>

            {/* === ONLY CHANGED THIS PART === */}
            <div className="relative">
              {/* Navigation buttons */}
              <div className="flex justify-end gap-2 mb-4">
                <button
                  onClick={handlePrev}
                  className="w-8 h-8 rounded-full bg-gray-900/80 border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 text-white" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-8 h-8 rounded-full bg-gray-900/80 border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <ChevronRight className="w-4 h-4 text-white" />
                </button>
              </div>

              {/* Carousel */}
              <div className="relative overflow-hidden">
                <AnimatePresence mode="wait" custom={direction} initial={false}>
                  <div className="grid grid-cols-3 gap-4">
                    {visibleItems.map((quality, index) => (
                      <motion.div
                        key={`${quality.title}-${currentIndex}-${index}`}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                          x: { type: "spring", stiffness: 400, damping: 25 },
                          opacity: { duration: 0.15 },
                        }}
                      >
                        <div className="glass p-6 rounded-xl h-full">
                          <quality.icon
                            className={cn("w-8 h-8 mb-4", quality.color)}
                          />
                          <h3 className="text-xl font-semibold text-white mb-2">
                            {quality.title}
                          </h3>
                          <p className="text-gray-400 text-sm">
                            {quality.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </AnimatePresence>
              </div>

              {/* Dots indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {Array.from({ length: qualities.length }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(Math.min(index, maxIndex));
                    }}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-200",
                      index >= currentIndex &&
                        index < currentIndex + itemsPerView
                        ? "bg-cyan-500 w-6"
                        : "bg-gray-700 hover:bg-gray-600"
                    )}
                  />
                ))}
              </div>
            </div>
            {/* === END OF CHANGED PART === */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
