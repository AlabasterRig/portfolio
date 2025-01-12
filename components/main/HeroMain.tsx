import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <section id="about-me" className="relative w-full min-h-screen">
      <div className="flex flex-col min-h-screen w-full">
        {/* Background Layer */}
        <div className="fixed top-0 left-0 z-0 w-full h-full bg-[#F0F5F9]"></div>

        {/* Optional Video Background */}
        {/* 
        <video
          autoPlay
          loop
          muted
          className="fixed top-0 left-0 z-0 w-full h-full object-cover"
        >
          <source src="/code.webm" type="video/webm" />
        </video> 
        */}

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-5 sm:px-10">
          <HeroContent />
        </div>
      </div>
    </section>
  );
};

export default Hero;
