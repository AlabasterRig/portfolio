"use client";

import React, { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF, Html } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";

// // 3D Model Component with hover interaction
// const Model = ({ modelPath }: { modelPath: string }) => {
//   const { scene } = useGLTF(modelPath);
//   const [hovered, setHovered] = useState(false);

//   return (
//     <primitive 
//       object={scene} 
//       scale={hovered ? 1.05 : 1}
//       onPointerOver={() => setHovered(true)}
//       onPointerOut={() => setHovered(false)}
//     />
//   );
// };

// // 3D Viewer Component with loading state
// const ThreeDViewer = () => (
//   <Canvas
//     camera={{ position: [0, 1, 3], fov: 50 }}
//     style={{ width: '100%', height: '100%' }}
//     shadows
//   >
//     <ambientLight intensity={0.5} />
//     <directionalLight
//       position={[5, 5, 5]}
//       intensity={1}
//       color="#ffffff"
//       castShadow
//     />
//     <Suspense fallback={
//       <Html center>
//         <div className="text-lg text-[var(--text-primary)] animate-pulse">
//           Loading Model...
//         </div>
//       </Html>
//     }>
//       <Model modelPath="/models/character.glb" />
//       <Environment preset="sunset" />
//     </Suspense>
//     <OrbitControls
//       enableZoom={false}
//       autoRotate
//       autoRotateSpeed={1.5}
//       maxPolarAngle={Math.PI / 1.8}
//       minPolarAngle={Math.PI / 3}
//     />
//   </Canvas>
// );

const HeroContent = () => {
  const [showScrollDown, setShowScrollDown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollDown(window.pageYOffset < 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("skills");
    nextSection?.scrollIntoView({ behavior: "smooth" });
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
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)]"
        >
          <span>
            Bringing ideas to life with a touch of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-hero-magic-start)] to-[var(--text-hero-magic-end)]">
              magic
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg md:text-xl text-[var(--text-primary)] my-5 max-w-3xl"
        >
          I&apos;m a game developer driven by a passion for crafting immersive games and 
          interactive experiences that are fun, engaging, and unforgettable. With expertise 
          in Unreal Engine and a diverse range of development tools, I combine technical 
          skills with creative vision to transform concepts into captivating realities.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          href="mailto:contact@utkri.st"
          className="py-3 px-6 inline-block bg-blue-600 text-white font-medium rounded-lg max-w-xs text-center cursor-pointer 
            hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
          aria-label="Contact me via email"
        >
          Contact Me!
        </motion.a>
      </div>

      {/* 3D Viewer Section */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full flex justify-center items-center mt-10 md:mt-0 h-[500px] md:h-[600px]"
      >
        <div className="w-full max-w-md sm:max-w-lg h-full bg-[var(--navbar-button-bg)] rounded-xl overflow-hidden 
          shadow-2xl border-2 border-[var(--border-bg)]">
          {/* <ThreeDViewer /> */}
        </div>
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
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
            aria-label="Scroll down to next section"
          >
            <span className="text-sm text-[var(--text-primary)] mb-1 animate-bounce">
              Scroll Down
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[var(--text-primary)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
