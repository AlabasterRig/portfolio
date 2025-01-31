"use client"

import { motion } from 'framer-motion'; // Removed unused React import
import ProjectCard from '../sub/ProjectCard';
import { staggerContainer, fadeIn } from '@/utils/motion';

// Add proper project data
const projects = [
  {
    src: "/Pic1.jpg",
    title: "Fall Guy Survival",
    description: "A thrilling multiplayer game where players compete in various obstacle courses.",
  },
  {
    src: "/Pic2.jpg",
    title: "3D Engine",
    description: "A custom-built 3D engine with real-time rendering and physics simulations.",
  },
  {
    src: "/Pic3.jpg",
    title: "Dungeon Traveller",
    description: "An adventure game where players explore dungeons and solve puzzles.",
  },
];

const Projects = () => {
  return (
    <section 
      id="projects" 
      className="w-full py-10 sm:py-20 my-5 px-5 sm:px-10 bg-[var(--background)] transition-colors duration-300"
      role="region" 
      aria-label="Projects section"
    >
      <motion.div
        variants={staggerContainer(0.1, 0.2)} // Added proper parameters
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }} // Adjusted viewport amount
        className="flex flex-col items-center justify-center w-full"
      >
        {/* Section Header */}
        <motion.h1
          variants={fadeIn('down', 'spring', 0.1, 1)}
          className="relative text-2xl sm:text-3xl font-semibold text-[var(--text-primary)] pb-10"
        >
          My Projects
        </motion.h1>

        {/* Project Cards Container */}
        <motion.div
          variants={fadeIn('up', 'spring', 0.2, 1)} // Adjusted animation timing
          className="flex flex-col sm:flex-row gap-10 w-full max-w-screen-xl justify-center"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title} // Better key using unique identifier
              src={project.src}
              title={project.title}
              description={project.description}
              index={index}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;