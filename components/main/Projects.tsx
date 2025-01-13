import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="w-full py-10 sm:py-20 my-5 px-5 sm:px-10">
      <div className="flex flex-col items-center justify-center w-full">
        {/* Section Header */}
        <h1 className="relative text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#1E2022] to-[#52616B] pb-10">
          My Projects
        </h1>

        {/* Project Cards Container */}
        <div className="flex flex-col sm:flex-row gap-10 w-full max-w-[90rem] sm:max-w-[70rem] md:max-w-[120rem] justify-center">
          <ProjectCard
            src="/Pic1.jpg"
            title="Fall Guy Survival"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
          />

          <ProjectCard
            src="/Pic2.jpg"
            title="3D Engine"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
          />

          <ProjectCard
            src="/Pic3.jpg"
            title="Dungeon Traveller"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
