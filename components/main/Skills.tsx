"use client";
import { motion } from "framer-motion";
import {
  GameDevelopment_Skill,
  Other_skill,
  Backend_skill,
  Skill_data,
} from "@/constants";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
import { staggerContainer, fadeIn } from "@/utils/motion";

const Skills = () => {
  return (
    <motion.section
      id="skills"
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col items-center bg-[var(--skill-background)] justify-center w-full h-full relative overflow-hidden py-16 px-4 sm:px-8"
    >
      <motion.div
        variants={fadeIn("down", "spring", 0.2, 1)}
        className="w-full max-w-7xl mx-auto text-center"
      >
        <SkillText />
      </motion.div>

      {/* All Skills Container */}
      <motion.div
        variants={staggerContainer()}
        className="w-full max-w-7xl mx-auto mt-12"
      >
        {/* Game Development Skills */}
        <motion.div
          variants={fadeIn("right", "spring", 0.3, 1)}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8"
        >
          {GameDevelopment_Skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </motion.div>

        {/* General Skill Data */}
        <motion.div
          variants={fadeIn("left", "spring", 0.4, 1)}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-8"
        >
          {Skill_data.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </motion.div>

        {/* Backend Skills */}
        <motion.div
          variants={fadeIn("right", "spring", 0.5, 1)}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-8"
        >
          {Backend_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </motion.div>

        {/* Other Skills */}
        <motion.div
          variants={fadeIn("left", "spring", 0.6, 1)}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-8"
        >
          {Other_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-purple-500/10 rounded-full mix-blend-screen blur-3xl animate-pulse-slow" />
        <div className="absolute top-2/3 right-1/4 w-[250px] h-[250px] bg-blue-500/10 rounded-full mix-blend-screen blur-3xl animate-pulse-slow delay-1000" />
      </div>
    </motion.section>
  );
};

export default Skills;