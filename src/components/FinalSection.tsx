"use client";

import { motion } from "framer-motion";
import { Heart, Stars } from "lucide-react";

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
          May this year bring you peace, love, unforgettable memories, success, and endless happiness. 
          You are a constellation of everything beautiful.
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
            Made With Love 💫
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
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          className="absolute w-1 h-1 bg-white rounded-full bg-glow"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </section>
  );
};
