"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const memories = [
  {
    title: "Radiance",
    text: "You make every room brighter just by being in it.",
    gradient: "from-pink-500/20 to-purple-500/20",
  },
  {
    title: "Rarity",
    text: "Some souls are genuinely rare, and yours is the rarest of them all.",
    gradient: "from-purple-500/20 to-blue-500/20",
  },
  {
    title: "Magic",
    text: "23 looks magical on you. May this year be your most enchanting yet.",
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  {
    title: "Kindness",
    text: "Your heart is a masterpiece of kindness and strength.",
    gradient: "from-amber-500/10 to-pink-500/20",
  }
];

export const MemorySection = () => {
  return (
    <section className="relative min-h-screen py-32 px-4 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center mb-24"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-glow">Memory Lane</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {memories.map((memory, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className={cn(
              "glass p-10 rounded-3xl relative overflow-hidden group",
              "hover:border-pink-500/30 transition-colors duration-500"
            )}
          >
            <div className={cn(
              "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10",
              memory.gradient
            )} />
            
            <h3 className="text-2xl font-bold mb-4 text-pink-300 group-hover:text-white transition-colors">
              {memory.title}
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-100 transition-colors">
              "{memory.text}"
            </p>
            
            <div className="absolute top-4 right-4 text-4xl opacity-5 group-hover:opacity-20 transition-opacity font-serif">
              0{i + 1}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
