"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
}

const SkillDataProvider = ({ src, width, height, index }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animationVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={animationVariants}
      animate={inView ? "visible" : "hidden"}
      whileHover={{ 
        y: -5,
        scale: 1.05,
        transition: { duration: 0.2 } 
      }}
      className="p-2 bg-white/5 rounded-xl backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow"
    >
      <Image 
        src={src}
        width={width}
        height={height}
        alt="Skill icon"
        className="object-contain"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
        quality={100}
        priority={index < 6}
      />
    </motion.div>
  );
};

export default SkillDataProvider;