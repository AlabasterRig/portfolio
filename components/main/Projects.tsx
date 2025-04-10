"use client";
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '@/utils/motion';
import ProjectCard from '../sub/ProjectCard';
import { useState, useMemo } from "react";

// Updated the 'Project' type to include the 'category' property.
type Project = {
  title: string;
  description: string;
  images: string[];
  techStack: string[];
  githubLink: string;
  category: string;
};

const projects: Project[] = [
  {
    title: "Fall Guy Survival",
    description: "This survival game, developed using Unreal Engine 5, demonstrates the core game logic and advanced coding techniques. The project emphasizes seamless integration of C++ and Blueprints, showcasing the versatility of both programming approaches in game development. Key features include a dynamic game world with interactive mechanics and player challenges, all carefully crafted to enhance gameplay experience. The project provides detailed explanations of the systems implemented, covering gameplay mechanics, AI behavior, and environmental interaction. It serves as a comprehensive example of my ability to create complex game logic and integrate various development tools to bring a game concept to life.",
    images: [
      "/Pic1.jpg",
      "/Pic2.jpg",
      "/Pic3.jpg"
    ],
    techStack: ["Unreal", "C++", "Blueprints"],
    githubLink: "https://github.com/AlabasterRig/FallGuySurvival",
    category: "game"
  },
  {
    title: "Pokemon",
    description: "Pokemon game clone",
    images: [
      "/Pic1.jpg",],
    techStack: ["C++", "Windows Console"],
    githubLink: "https://github.com/AlabasterRig/Pokemon/tree/Feature_10_Interfaces",
    category: "game"
  },
  {
    title: "3D Engine",
    description: "Custom 3D rendering engine",
    images: [
      "/Pic2.jpg",
      "/Pic3.jpg",
      "/Pic1.jpg"
    ],
    techStack: ["C++", "Windows Console"],
    githubLink: "https://github.com/AlabasterRig/3D-Engine",
    category: "game"
  },
  {
    title: "Subscription Tracker API",
    description: "Subscription Tracker",
    images: [
      "/Pic1.jpg",
    ],
    techStack: ["Node.js", "Express", "Javascript", "MongoDB"],
    githubLink: "https://github.com/AlabasterRig/Subscription-Tracker",
    category: "web"
  },
  {
    title: "Heart Disease Prediction",
    description: "Heart Disease Prediction",
    images: [
      "/Pic1.jpg",
    ],
    techStack: ["Python", "Machine Learning", "Ensemble"],
    githubLink: "https://github.com/AlabasterRig/Heart-Disease-Prediction",
    category: "ml"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    if (filter === "all") {
      return projects; // Directly return the original projects array
    }
    return projects.filter((project) => project.category === filter);
  }, [filter]);

  return (
    <section 
      id="projects" 
      className="relative w-full py-20 px-4 sm:px-8 bg-[var(--background)]"
      aria-label="Projects section"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 to-transparent animate-pulse-slow opacity-20" />
      
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        className="max-w-7xl mx-auto"
      >
        <motion.h1
          variants={fadeIn('down', 'spring', 0.2, 1)}
          className="text-4xl sm:text-5xl font-bold text-center mb-16 text-[var(--text-primary)]"
        >
          Featured Projects
        </motion.h1>

        {/* Filter Buttons */}
        <div className="relative z-10 flex justify-center gap-4 mb-8">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full ${
              filter === "all" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("web")}
            className={`px-4 py-2 rounded-full ${
              filter === "web" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Web
          </button>
          <button
            onClick={() => setFilter("game")}
            className={`px-4 py-2 rounded-full ${
              filter === "game" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Game
          </button>
        </div>

        <motion.div
          key={filter} // Ensure a unique key for each filter to re-render the component
          variants={fadeIn('up', 'spring', 0.3, 1)}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              images={project.images}
              techStack={project.techStack}
              githubLink={project.githubLink}
              index={index}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;