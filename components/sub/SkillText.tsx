"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop, slideInFromLeft, slideInFromRight } from "@/utils/motion";

const SkillText = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-[1.25rem] sm:px-[2rem] md:px-[3rem]">
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[1.5rem] sm:text-[2rem] md:text-[2.2rem] text-[var(--text-skill-title)] font-medium mt-[1rem] mb-[1rem] text-center transition-colors duration-300"
      >
        Using modern skills to build stuff
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[1.25rem] sm:text-[1.75rem] md:text-[2rem] text-[var(--text-skill-des)] mb-[1.25rem] mt-[1rem] text-center transition-colors duration-300"
      >
        Never back down from a challenge
      </motion.div>
    </div>
  );
};

export default SkillText;
