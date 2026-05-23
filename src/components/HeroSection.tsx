"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";
import { seeded, seededRange } from "@/lib/utils";

interface HeroSectionProps {
  onEnter: () => void;
}

export const HeroSection = ({ onEnter }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-radial-gradient opacity-30 pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-10 relative px-4 md:px-8 w-full max-w-5xl"
      >
        {/* Top accent */}
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="inline-flex items-center justify-center mb-10 md:mb-12"
        >
          <div className="relative">
            <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-pink-400" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 opacity-20"
            >
              <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-pink-300" />
            </motion.div>
          </div>
        </motion.div>
        
        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h2 className="text-pink-300/70 tracking-[0.25em] uppercase text-xs md:text-sm font-medium mb-6 md:mb-8">
            Happy 23rd Birthday
          </h2>
        </motion.div>
        
        {/* Main heading with gradient background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="mb-8 md:mb-12"
        >
          <div className="relative inline-block">
            {/* Gradient background for name */}
            <div className="absolute -inset-8 md:-inset-12 bg-gradient-to-r from-pink-600/40 via-purple-600/30 to-pink-600/40 rounded-3xl blur-3xl opacity-60" />
            <h1 className="relative text-6xl md:text-8xl lg:text-9xl font-black mb-2 md:mb-4 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-200 to-white">
              Sanjana
            </h1>
            <div className="absolute -top-4 -right-8 md:-right-12 text-4xl md:text-5xl animate-bounce" style={{ animationDelay: "0.2s" }}>
              ✨
            </div>
            <div className="absolute -bottom-2 -right-4 md:-right-6 text-2xl md:text-3xl animate-bounce" style={{ animationDelay: "0.6s" }}>
              ⭐
            </div>
          </div>
        </motion.div>
        
        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-gray-300 text-base md:text-lg lg:text-xl max-w-3xl mx-auto font-light leading-relaxed mb-12 md:mb-16"
        >
          <span className="block mb-3"> ah brooooooo appudey 23 ah.</span>
          <span className="text-gray-400">Let's celebrate the magic of being you.</span>
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col items-center gap-6 md:gap-8"
        >
          <button
            onClick={onEnter}
            className="group relative px-10 md:px-12 py-4 md:py-5 bg-white text-black font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-110 active:scale-95 shadow-2xl hover:shadow-pink-500/50"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 text-base md:text-lg">
              e button nokku <Heart className="w-5 h-5" />
            </span>
          </button>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="h-px w-32 bg-gradient-to-r from-transparent via-pink-500/50 to-transparent"
          />
        </motion.div>
      </motion.div>

      {/* Animated floating elements */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -150, 0],
            opacity: [0, 0.6, 0],
            scale: [0.3, 1, 0.3],
            x: seeded(i, 0) > 0.5 ? 50 : -50,
          }}
          transition={{
            duration: seededRange(i, 1, 6, 12),
            repeat: Infinity,
            delay: seededRange(i, 2, 0, 5),
            ease: "easeInOut",
          }}
          className="absolute pointer-events-none"
          style={{
            left: `${seededRange(i, 3, 0, 100)}%`,
            top: `${seededRange(i, 4, 0, 100)}%`,
          }}
        >
          {i % 3 === 0 ? (
            <div className="text-pink-400/40 text-2xl">✨</div>
          ) : i % 3 === 1 ? (
            <div className="text-purple-400/30 text-xl">⭐</div>
          ) : (
            <div className="text-pink-300/20 text-lg">💫</div>
          )}
        </motion.div>
      ))}

      {/* Decorative corner elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-pink-500/5 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl opacity-40" />
    </section>
  );
};
