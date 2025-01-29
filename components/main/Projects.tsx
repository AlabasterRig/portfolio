import React from 'react';
import ProjectCard from '../sub/ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="w-full py-10 sm:py-20 my-5 px-5 sm:px-10 bg-[var(--background)] transition-colors duration-300">
      <div className="flex flex-col items-center justify-center w-full">
        {/* Section Header */}
        <h1 className="relative text-2xl sm:text-3xl font-semibold text-[var(--text-primary)] pb-10 transition-colors duration-300">
          My Projects
        </h1>

        {/* Project Cards Container */}
        <div className="flex flex-col sm:flex-row gap-10 w-full max-w-[90rem] sm:max-w-[70rem] md:max-w-[120rem] justify-center">
          <ProjectCard
            src="/Pic1.jpg"
            title="Fall Guy Survival"
            description="A thrilling multiplayer game where players compete in various obstacle courses."
          />

          <ProjectCard
            src="/Pic2.jpg"
            title="3D Engine"
            description="A custom-built 3D engine with real-time rendering and physics simulations."
          />

          <ProjectCard
            src="/Pic3.jpg"
            title="Dungeon Traveller"
            description="An adventure game where players explore dungeons and solve puzzles."
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
