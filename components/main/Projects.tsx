"use client";
import { motion } from 'framer-motion';
import ProjectCard from '../sub/ProjectCard';
import { staggerContainer, fadeIn, Project } from '@/utils/motion';

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
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "3D Engine",
    description: "Custom 3D rendering engine",
    images: [
      "/Pic2.jpg",
      "/Pic3.jpg",
      "/Pic1.jpg"
    ],
    techStack: ["C++", "OpenGL", "GLSL"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Dungeon Traveller",
    description: "Procedural dungeon crawler",
    images: [
      "/Pic3.jpg",
      "/Pic1.jpg",
      "/Pic2.jpg"
    ],
    techStack: ["Unreal", "C++", "AI"],
    demoLink: "#",
    githubLink: "#"
  },
];

const Projects = () => {
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

        <motion.div
          variants={fadeIn('up', 'spring', 0.3, 1)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard
            key={project.title}
            index={index}
            title={project.title}
            description={project.description}
            images={project.images} // Passing the images array
            techStack={project.techStack}
            demoLink={project.demoLink}
            githubLink={project.githubLink}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;