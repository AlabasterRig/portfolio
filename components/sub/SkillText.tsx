"use client";

import React from "react";
import {motion} from "framer-motion";
import { slideInFromTop, slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const SkillText = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <motion.div
      variants={slideInFromLeft(0.5)}
      className="text-[30px] text-[#F0F5F9] font-medium mt-[10px] text-center mb-[10px]"
      >
        Using mordern skills to build stuff
      </motion.div>

      <motion.div
      variants={slideInFromRight(0.5)}
      className="cursive text-[20px] text-[#F0F5F9] mb-5 mt-[10px] text-center"
      >
        Never back down from a challenge
      </motion.div>
    </div>
  );
};

export default SkillText;
