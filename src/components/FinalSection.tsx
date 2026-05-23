"use client";

import { motion } from "framer-motion";
import { Heart, Stars } from "lucide-react";
import { seededRange } from "@/lib/utils";

export const FinalSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="z-10"
      >
        <Stars className="w-12 h-12 text-pink-400 mx-auto mb-8 animate-pulse" />
        
        <h2 className="text-5xl md:text-7xl font-bold mb-6 text-glow">
          Happy Birthday,<br />Ehsaas (Sanju)
        </h2>
        
        <p className="text-gray-400 text-xl md:text-2xl max-w-2xl mx-auto font-light leading-relaxed mb-12">
        Happy 23rd birthday to the human embodiment of “bro trust me.”
        I was planning to continue our Cold War peacefully, but unfortunately your birthday interrupted the schedule. Anyway… happy 23rd to the most dramatic human I know.
        Hope your day is filled with happiness and fewer imaginary arguments 😭🎂
        </p>

        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="inline-block"
        >
          <Heart className="w-16 h-16 text-pink-500 fill-pink-500/20" />
        </motion.div>

        <div className="mt-20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-8 py-4 glass rounded-full text-sm tracking-widest uppercase hover:bg-white/5 transition-all"
          >
            from SUJITH  💫
          </button>
        </div>
      </motion.div>

      {/* Galaxy Stars Background Effect */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: seededRange(i, 0, 2, 5),
            repeat: Infinity,
            delay: seededRange(i, 1, 0, 5),
          }}
          className="absolute w-1 h-1 bg-white rounded-full bg-glow"
          style={{
            top: `${seededRange(i, 2, 0, 100)}%`,
            left: `${seededRange(i, 3, 0, 100)}%`,
          }}
        />
      ))}
    </section>
  );
};
