"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { CodeBracketIcon } from "@heroicons/react/24/outline";

interface ProjectCardProps {
  title: string;
  description: string;
  images: string[];
  techStack: string[];
  githubLink: string;
  index: number;
}

const ProjectCard = ({
  title,
  description,
  images,
  techStack,
  githubLink,
  index,
}: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);

  // Parallax effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  useEffect(() => {
    if (isOpen) {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          setIsOpen(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "unset";
      };
    }
  }, [isOpen]);

  // Added functionality to close the modal when clicking outside the modal content.
  const handleOutsideClick = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("mousedown", handleOutsideClick);
      return () => {
        window.removeEventListener("mousedown", handleOutsideClick);
      };
    }
  }, [isOpen]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <>
      {/* Main Card */}
      <motion.div
        variants={fadeIn("right", "spring", index * 0.2, 0.75)}
        className="relative group h-[400px] w-full"
        style={{ perspective: 1000 }}
      >
        <motion.div
          className="h-full w-full rounded-xl shadow-xl overflow-hidden cursor-pointer bg-gradient-to-br from-purple-500/10 to-transparent"
          style={{ rotateX, rotateY }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            x.set(e.clientX - rect.left - rect.width / 2);
            y.set(e.clientY - rect.top - rect.height / 2);
          }}
          onMouseLeave={() => {
            x.set(0);
            y.set(0);
          }}
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="relative h-2/3 w-full">
            <Image
              src={images[currentImageIndex]}
              alt={`${title} screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="p-6 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-between h-full">
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
              {title}
            </h3>

            <p className="text-[var(--text-primary)] mb-4 overflow-hidden overflow-ellipsis line-clamp-3">
              {description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm bg-blue-600 text-white rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-xl z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative bg-[var(--background)] max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              tabIndex={-1}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Close modal"
              >
                <span className="text-2xl text-black">&times;</span>
              </motion.button>

              <div className="p-8">
                <div className="relative h-64 w-full mb-6 rounded-xl overflow-hidden">
                  <Image
                    src={images[currentImageIndex]}
                    alt={`${title} screenshot`}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex justify-between items-center mb-6">
                  <button
                    className="text-white bg-black/50 p-2 rounded-full hover:bg-black/80 transition-colors"
                    onClick={prevImage}
                  >
                    &#10094;
                  </button>
                  <button
                    className="text-white bg-black/50 p-2 rounded-full hover:bg-black/80 transition-colors"
                    onClick={nextImage}
                  >
                    &#10095;
                  </button>
                </div>

                <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
                  {title}
                </h2>

                <p className="text-[var(--text-primary)] mb-6">{description}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-600 text-white rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <CodeBracketIcon className="w-5 h-5" />
                    View Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
