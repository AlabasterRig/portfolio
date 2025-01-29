"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-[1.25rem] md:px-[1rem] mt-[5rem] md:mt-[6rem] w-full z-[20]"
    >
      {/* Left Content */}
      <div className="h-full w-full flex flex-col gap-[1.25rem] justify-center m-auto text-start items-center md:items-start">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-1 mt-3 text-[2rem] sm:text-[2.5rem] md:text-[3.75rem] font-bold text-[var(--text-primary)] max-w-[37.5rem] w-auto h-auto text-center md:text-left transition-colors duration-300 shadow-[2px_2px_5px_#a5a5a5, -2px_-2px_5px_#ffffff]"
        >
          <span>
            Creating with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-hero-magic-start)] to-[var(--text-hero-magic-end)] transition-colors duration-300">
              {" "}
              magic{" "}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] text-[var(--text-primary)] my-[1.25rem] max-w-[37.5rem] text-center md:text-left transition-colors duration-300 shadow-[2px_2px_5px_#a5a5a5, -2px_-2px_5px_#ffffff]"
        >
          I&apos;m a game developer who is passionate about creating games and
          interactive experiences that are fun, engaging, and memorable. I have
          experience working with Unreal Engine, and other game development
          tools.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          href="mailto:contact@utkri.st"
          className="py-[0.625rem] px-[1.25rem] button-primary text-center text-white cursor-pointer rounded-lg max-w-[12.5rem] mt-[1.25rem] shadow-[2px_2px_5px_#a5a5a5, -2px_-2px_5px_#ffffff] hover:shadow-lg transition-all"
        >
          Contact Me!
        </motion.a>
      </div>

      {/* Right Image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-[2rem] md:mt-0 shadow-[2px_2px_5px_var(--text-primary), -2px_-2px_5px_var(--text-primary)] hover:shadow-xl transition-all"
      >
        <Image
          src="/MainIconPack.svg"
          alt="Work Icons"
          height={600} // 23.4375rem
          width={600} // 23.4375rem
          priority
          className="w-auto h-auto max-w-[31.25rem] sm:max-w-[37.5rem]"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
