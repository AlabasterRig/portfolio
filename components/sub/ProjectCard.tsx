"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '@/utils/motion';

interface Props {
  src: string;
  title: string;
  description: string;
  index: number;
}

const ProjectCard = ({ src, title, description, index }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Main Card */}
      <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className="relative overflow-hidden rounded-lg shadow-lg border border-[var(--background)] w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] cursor-pointer group"
        onClick={toggleModal}
      >
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
        
        {/* Image Section */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="relative h-64 sm:h-72 md:h-80" // Fixed height container
        >
          <Image
            src={src}
            alt={`${title} project screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-t-lg"
          />
        </motion.div>

        {/* Card Content */}
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="absolute bottom-0 left-0 right-0 p-4 bg-[var(--button-bg)]/80 backdrop-blur-lg rounded-b-lg transition-colors duration-300 z-20"
        >
          <h1 className="text-xl sm:text-2xl font-semibold text-[var(--text-skill-title)]">
            {title}
          </h1>
          <div className="mt-2 h-[50px] sm:h-[50px] overflow-y-auto text-sm sm:text-base text-[var(--text-skill-des)]">
            {description}
          </div>
        </motion.div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="project-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50"
            onClick={toggleModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative bg-[var(--background)] w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] max-h-[80%] rounded-lg overflow-y-auto shadow-lg p-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleModal}
                className="absolute top-3 right-3 text-[var(--text-project)] hover:text-[var(--text-primary)] text-3xl"
                aria-label="Close modal"
              >
                &times;
              </motion.button>

              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="relative h-64 sm:h-72 md:h-96 mb-4">
                  <Image
                    src={src}
                    alt={`${title} project screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, 70vw"
                    className="object-cover rounded-lg"
                  />
                </div>
                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">{title}</h2>
                <p className="text-[var(--text-project)]">{description}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;