import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <section id="about-me" className="w-full min-h-screen overflow-hidden">
      <div className="relative w-full min-h-screen flex flex-col">
        {/* Background Layer */}
        <div className="fixed inset-0 z-[-1] bg-[var(--background)] transition-colors duration-300"></div>

        {/* Optional Video Background */}
        {/* 
        <video
          autoPlay
          loop
          muted
          className="fixed inset-0 z-[-1] object-cover"
        >
          <source src="/code.webm" type="video/webm" />
        </video> 
        */}

        {/* Hero Content */}
        <div className="flex-1 flex flex-col items-center justify-center p-5 sm:p-10 text-[var(--text-primary)]">
          <HeroContent />
        </div>
      </div>
    </section>
  );
};

export default Hero;
