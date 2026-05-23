"use client";

import { motion } from "framer-motion";
import { seededRange } from "@/lib/utils";

export const AmbientBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-[#050816] overflow-hidden">
      {/* Primary Aurora Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[20%] left-[10%] w-[80%] h-[80%] bg-pink-600/20 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-[20%] right-[10%] w-[70%] h-[70%] bg-purple-600/10 rounded-full blur-[100px]"
      />
      
      {/* Floating Orbs */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              x: [
                `${seededRange(i, 0, 0, 100)}%`,
                `${seededRange(i, 1, 0, 100)}%`,
              ],
              y: [
                `${seededRange(i, 2, 0, 100)}%`,
                `${seededRange(i, 3, 0, 100)}%`,
              ],
            }}
            transition={{
              duration: seededRange(i, 4, 20, 30),
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-64 h-64 bg-pink-500/5 rounded-full blur-[80px]"
          />
        ))}
      </div>
      
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none" />
    </div>
  );
};
