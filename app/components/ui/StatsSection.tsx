"use client";

import { motion } from "framer-motion";
import { Code, Users, Palette, Coffee, Gamepad2, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  {
    icon: Code,
    value: "15+",
    label: "Projects Built",
    gradient: "from-blue-500 to-cyan-500",
    description: "Web apps & learning projects",
  },
  {
    icon: Users,
    value: "100%",
    label: "Client Satisfaction",
    gradient: "from-green-500 to-emerald-500",
    description: "On personal projects",
  },
  {
    icon: Palette,
    value: "Always",
    label: "Pixel Perfect",
    gradient: "from-purple-500 to-pink-500",
    description: "Attention to design details",
  },
  {
    icon: Coffee,
    value: "∞",
    label: "Coffee Cups",
    gradient: "from-amber-500 to-orange-500",
    description: "Fuel for coding sessions",
  },
  {
    icon: Gamepad2,
    value: "100+",
    label: "Games Played",
    gradient: "from-red-500 to-rose-500",
    description: "For inspiration & fun",
  },
  {
    icon: BookOpen,
    value: "Always",
    label: "Learning",
    gradient: "from-indigo-500 to-violet-500",
    description: "New tech every day",
  },
];

export default function StatsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            By The <span className="text-gradient">Numbers</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real metrics from my journey — no exaggeration, just honest progress
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 text-center transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                <div
                  className={cn(
                    "w-12 h-12 rounded-full bg-gradient-to-br mx-auto mb-3 flex items-center justify-center",
                    stat.gradient
                  )}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-400">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Humble footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-block glass rounded-full px-6 py-3">
            <p className="text-sm text-gray-300">
              <span className="text-cyan-400">Note:</span> These are real
              numbers from my journey. I believe in{" "}
              <span className="font-medium text-white">honest progress</span>{" "}
              over exaggerated claims.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
