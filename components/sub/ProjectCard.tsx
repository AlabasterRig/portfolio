"use client"

import Image from 'next/image';
import React, { useState } from 'react';

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle modal visibility
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Main Card */}
      <div
        onClick={toggleModal}
        className="relative overflow-hidden rounded-lg shadow-lg border border-[var(--background)] w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[var(--box-shadow)] cursor-pointer"
      >
        {/* Image Section */}
        <Image
          src={src}
          alt={title}
          width={800}
          height={600}
          className="w-full object-cover rounded-t-lg"
        />

        {/* Card Content (Glassmorphic Effect) */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-[var(--button-bg)]/80 backdrop-blur-lg rounded-b-lg transition-colors duration-300">
          <h1 className="text-xl sm:text-2xl font-semibold text-[var(--text-skill-title)] transition-colors duration-300">
            {title}
          </h1>
          {/* Fixed height for description area with scrollable overflow */}
          <div className="mt-2 h-[50px] sm:h-[50px] overflow-y-auto text-sm sm:text-base text-[var(--text-skill-des)]">
            {description}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50"
          onClick={toggleModal}
        >
          <div
            className="relative bg-[var(--background)] w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] max-h-[80%] rounded-lg overflow-y-auto shadow-lg p-6"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="absolute top-3 right-3 text-[var(--text-project)] hover:text-[var(--text-primary)]"
            >
              &times;
            </button>

            {/* Modal Content */}
            <Image
              src={src}
              alt={title}
              width={800}
              height={600}
              className="w-full object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">{title}</h2>
            <p className="text-[var(--text-project)]">{description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
