"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";

const HeroContent = () => {
  // State to control the visibility of the scroll down button.
  const [showScrollDown, setShowScrollDown] = useState(true);

  // Scroll listener to hide the scroll down button once the user scrolls down.
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setShowScrollDown(false);
      } else {
        setShowScrollDown(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handler for the scroll down action.
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
      setShowScrollDown(false);
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-5 md:px-10 mt-20 md:mt-24 w-full relative z-20"
    >
      {/* Left Content */}
      <div className="flex flex-col gap-5 md:gap-8 justify-center w-full max-w-3xl text-center md:text-left">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] transition-colors duration-300 
            shadow-[2px_2px_5px_#a5a5a5, -2px_-2px_5px_#ffffff]"
        >
          <span>
          Bringing ideas to life with a touch of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-hero-magic-start)] to-[var(--text-hero-magic-end)] transition-colors duration-300">
              magic
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg md:text-xl text-[var(--text-primary)] my-5 max-w-3xl transition-colors duration-300 
            shadow-[2px_2px_5px_#a5a5a5, -2px_-2px_5px_#ffffff]"
        >
          I&apos;m a game developer driven by a passion for crafting immersive games and interactive experiences that are fun, engaging, and unforgettable. With expertise in Unreal Engine and a diverse range of development tools, I combine technical skills with creative vision to transform concepts into captivating realities.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          href="mailto:contact@utkri.st"
          className="py-3 px-6 inline-block bg-blue-600 text-white font-medium rounded-lg max-w-xs text-center cursor-pointer 
            shadow-[2px_2px_5px_#a5a5a5, -2px_-2px_5px_#ffffff] hover:bg-blue-700 transition-all"
          aria-label="Contact me via email"
        >
          Contact Me!
        </motion.a>
      </div>

      {/* Right Image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full flex justify-center items-center mt-10 md:mt-0"
      >
        <Image
          src="/MainIconPack.svg"
          alt="Creative work illustration"
          width={600}
          height={600}
          priority
          className="w-auto h-auto max-w-md sm:max-w-lg"
        />
      </motion.div>

      {/* Scroll Down Button */}
      <AnimatePresence>
        {showScrollDown && (
          <motion.button
            key="scrollDown"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            whileHover={{ y: 5 }}
            onClick={scrollToNextSection}
            className="fixed bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
            aria-label="Scroll down to next section"
          >
            <span className="text-sm text-[var(--text-primary)]">Scroll Down</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[var(--text-primary)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default HeroContent;
