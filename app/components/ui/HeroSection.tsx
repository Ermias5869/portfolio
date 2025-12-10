"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Mouse,
  ChevronDown,
  Users,
  Code2,
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 " />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
              Full-stack Developer
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            <span className="block text-gradient animate-gradient">
              <TypeAnimation
                sequence={[
                  "Innovative",
                  1500,
                  "Creative",
                  1500,
                  "Passionate",
                  1500,
                  "Exceptional",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
            <span className="block text-white mt-2">Developer</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Building the future with{" "}
            <span className=" font-semibold">cutting-edge technology</span>,
            <span className=" font-semibold"> immersive experiences</span>, and
            <span className="text-cyan-400 font-semibold">
              {" "}
              pixel-perfect design
            </span>
            .
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("projects")}
              className="group px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500  text-white font-semibold text-lg flex items-center gap-3 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300"
            >
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf" // ← This points to /public/resume.pdf
              download="ermias_amare_cv.pdf" // ← File name when downloaded
              className="px-8 py-4 rounded-full glass text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Download CV
            </motion.a>
          </motion.div>

          {/* free time */}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection("about")}
      >
        <div className="flex flex-col items-center gap-2">
          <Mouse className="w-6 h-6 text-gray-400" />
          <ChevronDown className="w-5 h-5 text-gray-400 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
