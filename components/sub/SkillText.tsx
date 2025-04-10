"use client";
import { motion } from "framer-motion";
import { 
  slideInFromLeft, 
  slideInFromRight 
} from "@/utils/motion";

const SkillText = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-5 sm:px-8 md:px-12">
      {/* Main Title */}
      <motion.h1
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        animate="visible"
        className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--text-skill-title)] mb-4 text-center"
      >
        <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
          Modern Tech Stack
        </span>
        <motion.span
          variants={slideInFromRight(0.8)}
          className="block mt-2 text-xl sm:text-2xl md:text-3xl font-normal"
        >
          Building Tomorrow&apos;s Solutions Today
        </motion.span>
      </motion.h1>

      {/* Subtitle */}
      <motion.h2
        variants={slideInFromRight(0.7)}
        initial="hidden"
        animate="visible"
        className="text-lg sm:text-xl md:text-2xl text-[var(--text-skill-des)] text-center mt-4 max-w-2xl mx-auto"
      >
        <span className="cursive font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Embracing Challenges,
        </span>{" "}
        <span className="italic">Delivering Excellence</span>
      </motion.h2>

      {/* Animated Decoration */}
      <motion.div
        variants={slideInFromRight(1)}
        className="w-[200px] h-[2px] bg-gradient-to-r from-purple-500 to-cyan-400 mt-8 rounded-full"
      />
    </div>
  );
};

export default SkillText;