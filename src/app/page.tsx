"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AmbientBackground } from "@/components/AmbientBackground";
import { HeroSection } from "@/components/HeroSection";
import { MemorySection } from "@/components/MemorySection";
import { CandleSection } from "@/components/CandleSection";
import { FinalSection } from "@/components/FinalSection";

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);

  // Smooth scroll to next section on enter
  const handleEnter = () => {
    setHasEntered(true);
    setTimeout(() => {
      const memorySection = document.getElementById("memory-section");
      memorySection?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <main className="relative min-h-screen">
      <AmbientBackground />
      
      <HeroSection onEnter={handleEnter} />

      <motion.div
        id="memory-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: hasEntered ? 1 : 0 }}
        transition={{ duration: 1 }}
        style={{ pointerEvents: hasEntered ? "auto" : "none" }}
      >
        <MemorySection />
        <CandleSection />
        <FinalSection />
      </motion.div>

      {/* Custom Cursor / Mouse Follow effect can be added here if desired */}
      <MouseFollower />
    </main>
  );
}

function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      animate={{ x: position.x - 20, y: position.y - 20 }}
      transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
      className="fixed top-0 left-0 w-10 h-10 border border-pink-500/30 rounded-full pointer-events-none z-[9999] hidden md:block"
    />
  );
}
