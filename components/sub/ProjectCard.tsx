import Image from 'next/image';
import React from 'react';

interface Props {
    src: string;
    title: string;
    description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[var(--background)] w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[var(--box-shadow)]">
        {/* Image Section */}
        <Image 
            src={src}
            alt={title}
            width={800} 
            height={600} 
            className="w-full object-cover rounded-t-lg"
        />

        {/* Card Content with Glassmorphism */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-[var(--button-bg)]/80 backdrop-blur-lg rounded-b-lg transition-colors duration-300">
            <h1 className="text-xl sm:text-2xl font-semibold text-[var(--text-project)] transition-colors duration-300">{title}</h1>
            <p className="mt-2 text-[var(--text-project)] transition-colors duration-300 text-sm sm:text-base">{description}</p>
        </div>
    </div>
  );
}

export default ProjectCard;
