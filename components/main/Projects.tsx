import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <section id="projects">
      <div className="flex flex-col items-center justify-center py-20">
        <h1 className="relative text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#1E2022] to-[#52616B] pb-20">
          My Projects
        </h1>

        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-20">
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
