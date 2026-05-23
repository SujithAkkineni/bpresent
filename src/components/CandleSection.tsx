"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { RefreshCcw, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const TOTAL_CANDLES = 23;

export const CandleSection = () => {
  const [litCandles, setLitCandles] = useState<number[]>([]);
  const [celebrated, setCelebrated] = useState(false);
  const [clickCount13, setClickCount13] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const hasTriggeredCelebration = useRef(false);

  const toggleCandle = (index: number) => {
    if (index === 12) { // 13th candle (0-indexed)
      setClickCount13(prev => prev + 1);
      if (clickCount13 + 1 >= 13) {
        setShowEasterEgg(true);
        setTimeout(() => setShowEasterEgg(false), 5000);
      }
    }

    if (litCandles.includes(index)) return;
    setLitCandles((prev) => [...prev, index]);
  };

  const lightAll = () => {
    setLitCandles([...Array(TOTAL_CANDLES).keys()]);
  };

  const reset = () => {
    setLitCandles([]);
    setCelebrated(false);
    setClickCount13(0);
    hasTriggeredCelebration.current = false;
  };

  useEffect(() => {
    if (litCandles.length === TOTAL_CANDLES && !hasTriggeredCelebration.current) {
      hasTriggeredCelebration.current = true;
      setCelebrated(true);
      const duration = 5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      const randomInRange = (min: number, max: number) =>
        Math.random() * (max - min) + min;

      const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          clearInterval(interval);
          return;
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
      }, 250);

      // Auto-dismiss the big message after 8 seconds
      setTimeout(() => setCelebrated(false), 8000);
    }
  }, [litCandles, setCelebrated]);

  return (
    <section className="relative min-h-screen py-24 px-4 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-glow">
          Light The Magic
        </h2>
        <p className="text-gray-400 max-w-lg mx-auto">
          Light each of the 23 candles to unlock a special birthday surprise.
          <br />
          <span className="text-[10px] opacity-20">Hint: Try clicking the 13th candle a few extra times...</span>
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="px-6 py-2 glass rounded-full text-pink-400 font-bold text-xl">
            {litCandles.length} / {TOTAL_CANDLES}
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-5 md:grid-cols-8 gap-4 md:gap-8 max-w-4xl w-full mb-16">
        {[...Array(TOTAL_CANDLES)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.03 }}
            onClick={() => toggleCandle(i)}
            className="flex flex-col items-center cursor-pointer group"
          >
            <div className="relative h-24 w-6 rounded-full bg-white/10 glass flex items-end overflow-visible group-hover:border-pink-500/50 transition-colors">
              {/* Candle Body */}
              <div className={cn(
                "w-full h-full bg-gradient-to-t rounded-full transition-colors duration-500",
                litCandles.includes(i) ? "from-pink-500/40 to-pink-200/20" : "from-pink-300/10 to-white/5"
              )} />
              
              {/* Flame */}
              <AnimatePresence mode="wait">
                {litCandles.includes(i) && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0, y: 0 }}
                    animate={{ 
                      opacity: 1, 
                      scale: [1, 1.2, 1],
                      y: -15 
                    }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{
                      scale: { repeat: Infinity, duration: 1.5 },
                      opacity: { duration: 0.3 }
                    }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-8 bg-gradient-to-t from-orange-500 via-yellow-400 to-transparent rounded-full blur-[1px] shadow-[0_-10px_20px_rgba(251,146,60,0.5)]"
                  >
                    <motion.div
                      animate={{ height: ["80%", "100%", "80%"] }}
                      transition={{ repeat: Infinity, duration: 0.8 }}
                      className="w-full bg-white/40 rounded-full blur-[2px]"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <span className="mt-2 text-[10px] text-gray-500 font-mono">{i + 1}</span>
          </motion.div>
        ))}
      </div>

      <div className="flex gap-4">
        <button
          onClick={lightAll}
          className="flex items-center gap-2 px-6 py-3 glass hover:bg-white/10 transition-colors rounded-full text-sm font-medium"
        >
          <Zap className="w-4 h-4 text-yellow-400" /> Light All
        </button>
        <button
          onClick={reset}
          className="flex items-center gap-2 px-6 py-3 glass hover:bg-white/10 transition-colors rounded-full text-sm font-medium"
        >
          <RefreshCcw className="w-4 h-4 text-pink-400" /> Reset
        </button>
      </div>

      {/* Celebration Modal */}
      <AnimatePresence>
        {celebrated && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md px-4 pointer-events-auto"
          >
            <motion.div
              initial={{ scale: 0.5, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="text-center"
            >
              <motion.h3
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-4xl md:text-7xl font-black text-white text-glow mb-8 leading-tight"
              >
                THE WORLD IS BRIGHTER<br />WITH YOU IN IT 💖
              </motion.h3>
              <button 
                onClick={() => setCelebrated(false)}
                className="px-8 py-3 bg-pink-500 text-white rounded-full font-bold hover:bg-pink-600 transition-colors pointer-events-auto"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Easter Egg Modal */}
      <AnimatePresence>
        {showEasterEgg && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center pointer-events-none"
          >
            <div className="glass p-12 rounded-full animate-bounce">
              <span className="text-6xl">🐣</span>
              <h4 className="text-2xl font-bold mt-4 text-pink-400">You found it!</h4>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
