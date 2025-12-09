"use client";

import { motion } from "framer-motion";
import { User, Target, Rocket, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AboutSection() {
  const qualities = [
    {
      icon: Target,
      title: "Mission-Driven",
      description:
        "Building products that solve real-world problems with innovative solutions.",
      color: "text-cyan-400",
    },
    {
      icon: Rocket,
      title: "Fast & Efficient",
      description:
        "Optimized code and performance-focused development for blazing-fast applications.",
      color: "text-purple-400",
    },
    {
      icon: Heart,
      title: "Passionate",
      description:
        "Deep love for technology and creating exceptional user experiences.",
      color: "text-pink-400",
    },
  ];

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
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 p-1 mx-auto">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                  <User className="w-32 h-32 text-gray-400" />
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-xs">Years</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
                className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-xs">Projects</div>
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
                <span className="text-gradient">Crafting Digital</span>
                <br />
                <span className="text-white">Experiences</span>
              </h2>

              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I'm a passionate developer with over 5 years of experience
                building cutting-edge web applications. I specialize in creating
                immersive, high-performance solutions using modern technologies
                like Next.js, Three.js, and React.
              </p>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                My mission is to bridge the gap between stunning design and
                robust functionality, delivering products that not only look
                beautiful but perform exceptionally well at scale.
              </p>
            </div>

            {/* Qualities */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {qualities.map((quality, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass p-6 rounded-xl"
                >
                  <quality.icon className={cn("w-8 h-8 mb-4", quality.color)} />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {quality.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{quality.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
