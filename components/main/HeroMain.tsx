import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <section id="about-me">
    <div className="relative flex flex-col min-h-screen w-full">
      {/* <video
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 z-0 w-full h-full object-cover"
      >
        <source src="/code.webm" type="video/webm" />
      </video> */}
      <div className="fixed top-0 left-0 z-0 w-full h-full bg-[#F0F5F9]"></div>
      <HeroContent />
    </div>
    </section>
  );
};

export default Hero;
