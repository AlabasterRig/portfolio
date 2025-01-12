"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-5 md:px-20 mt-20 md:mt-40 w-full z-[20]"
    >
      {/* Left Content */}
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start items-center md:items-start">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-1 mt-3 text-4xl md:text-6xl font-bold text-[#1E2022] max-w-[600px] w-auto h-auto text-center md:text-left"
        >
          <span>
            Creating with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#52616B] to-[#1E2022]">
              {" "}
              magic{" "}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-[#1E2022] my-5 max-w-[600px] text-center md:text-left"
        >
          I&apos;m a game developer who is passionate about creating games and
          interactive experiences that are fun, engaging, and memorable. I have
          experience working with Unreal Engine, and other game development
          tools.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-[#1E2022] cursor-pointer rounded-lg max-w-[150px]"
        >
          Contact Me!
        </motion.a>
      </div>

      {/* Right Image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-10 md:mt-0"
      >
        <Image
          src="/MainIconPack.svg"
          alt="Work Icons"
          height={600}
          width={500}
          priority
          className="w-auto h-auto"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
