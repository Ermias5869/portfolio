"use client";

import { motion } from "framer-motion";
import { Code, Users, Clock, Award, Zap, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  {
    icon: Code,
    value: "500K+",
    label: "Lines of Code",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Users,
    value: "100+",
    label: "Happy Clients",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Clock,
    value: "99.9%",
    label: "Uptime",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Award,
    value: "25+",
    label: "Awards",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Zap,
    value: "0.1s",
    label: "Load Time",
    gradient: "from-red-500 to-rose-500",
  },
  {
    icon: Globe,
    value: "50+",
    label: "Countries",
    gradient: "from-indigo-500 to-violet-500",
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
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
              <div className="glass p-6 rounded-2xl text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div
                  className={cn(
                    "w-16 h-16 rounded-full bg-gradient-to-br mx-auto mb-4 flex items-center justify-center",
                    stat.gradient
                  )}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
