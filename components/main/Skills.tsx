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
      className="flex flex-col items-center bg-[var(--skill-background)] justify-center w-full h-full relative overflow-hidden my-5 py-10 px-0 sm:px-10 transition-colors duration-300"
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
    </section>
  );
};

export default Skills;
