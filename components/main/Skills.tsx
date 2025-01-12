import {
  GameDevelopment_Skill,
  Other_skill,
  Backend_skill,
  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center bg-[#52616B] justify-center w-full h-auto relative overflow-hidden my-5 py-20 px-5 sm:px-10"
      style={{ transform: "scale(1)" }}
    >
      <SkillText />

      {/* Game Development Skills */}
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-4 sm:gap-5 items-center">
        {GameDevelopment_Skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      {/* General Skill Data */}
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-4 sm:gap-5 items-center">
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      {/* Backend Skills */}
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-4 sm:gap-5 items-center">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      {/* Other Skills */}
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-4 sm:gap-5 items-center">
        {Other_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      {/* Optional Video Background */}
      {/* 
      <div className="w-full h-full relative">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-hover object">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/code-bottom.webm"
          />
        </div>
      </div> 
      */}
    </section>
  );
};

export default Skills;
