// Global variable to track lightbox state
let isLightboxOpen = false;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiX, FiArrowUpRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaUtensils, FaPlane, FaCar, FaImage } from "react-icons/fa";

// Project Image Carousel Component
const ProjectImageCarousel = ({ images }) => {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = () => {
    setLightboxOpen(true);
    isLightboxOpen = true;
  };
  
  const closeLightbox = () => {
    isLightboxOpen = false;
    // Small delay to ensure proper state update
    setTimeout(() => {
      setLightboxOpen(false);
    }, 10);
  };

  const nextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      
      if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, images.length]);

  if (!images || images.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        {images.map((image, idx) => (
          <div 
            key={idx}
            onClick={() => {
              setIndex(idx);
              openLightbox();
            }}
            className="h-32 sm:h-40 rounded-xl overflow-hidden bg-white/3 border border-white/8 flex items-center justify-center text-[11px] text-gray-300 overflow-hidden hover:scale-[1.02] transition-transform duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)] cursor-pointer"
          >
            <img 
              src={image} 
              alt={`Screenshot ${idx + 1}`} 
              className="w-full h-full object-cover rounded-xl"
              loading="lazy"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentNode.querySelector('div').style.display = 'flex';
              }}
            />
            <div className="text-center hidden">
              <span className="block mb-1">📸</span>
              <span>Screenshot {idx + 1}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Viewer */}
      {lightboxOpen && (
        <LightboxViewer 
          images={images} 
          index={index} 
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </>
  );
};

// Lightbox Viewer Component
const LightboxViewer = ({ images, index, onClose, onNext, onPrev }) => {
  const [currentIndex, setCurrentIndex] = useState(index);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Update currentIndex when index prop changes
  useEffect(() => {
    setCurrentIndex(index);
  }, [index]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'Escape') {
        e.stopPropagation();
        isLightboxOpen = false;
        // Small delay to ensure proper state update
        setTimeout(() => {
          onClose();
        }, 10);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    onNext && onNext();
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    onPrev && onPrev();
  };

  // Touch handlers for swipe
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
      className="fixed inset-0 z-[80] bg-black/90 backdrop-blur-xl flex items-center justify-center"
      onClick={(e) => {
        e.stopPropagation();
        isLightboxOpen = false;
        // Small delay to ensure proper state update
        setTimeout(() => {
          onClose();
        }, 10);
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Centered image with enhanced styling */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.1, type: "spring", damping: 25, stiffness: 300 }}
        className="max-w-5xl max-h-[85vh] flex items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative group">
          <img 
            src={images[currentIndex]} 
            alt={`Screenshot ${currentIndex + 1}`} 
            className="object-contain max-h-[85vh] rounded-xl shadow-2xl border border-white/10"
            loading="lazy"
          />
          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-xl shadow-[0_0_30px_rgba(56,189,248,0.3)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </motion.div>
      
      {/* Enhanced Navigation buttons with glow effect - responsive design */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ delay: 0.2 }}
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        className="absolute left-4 sm:left-6 bg-black/20 hover:bg-black/40 sm:bg-black/40 sm:hover:bg-black/60 rounded-full p-2 sm:p-4 text-white focus:outline-none focus:ring-2 focus:ring-sky-400 hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all duration-300"
        aria-label="Previous image"
      >
        <FiChevronLeft size={20} className="sm:w-7 sm:h-7" />
      </motion.button>
      
      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ delay: 0.2 }}
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        className="absolute right-4 sm:right-6 bg-black/20 hover:bg-black/40 sm:bg-black/40 sm:hover:bg-black/60 rounded-full p-2 sm:p-4 text-white focus:outline-none focus:ring-2 focus:ring-sky-400 hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all duration-300"
        aria-label="Next image"
      >
        <FiChevronRight size={20} className="sm:w-7 sm:h-7" />
      </motion.button>
      
      {/* Enhanced Close button with glow effect */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ delay: 0.2 }}
        onClick={(e) => {
          e.stopPropagation();
          isLightboxOpen = false;
          // Small delay to ensure proper state update
          setTimeout(() => {
            onClose();
          }, 10);
        }}
        className="absolute top-6 right-6 bg-black/40 hover:bg-black/60 rounded-full p-4 text-white focus:outline-none focus:ring-2 focus:ring-sky-400 hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all duration-300"
        aria-label="Close lightbox"
      >
        <FiX size={28} />
      </motion.button>
    </motion.div>
  );
};

const ProjectDetailModal = ({ project, onClose }) => {
  if (!project) return null;

  // Map project IDs to icons
  const getProjectIcon = (projectId) => {
    switch (projectId) {
      case "digital-menu":
        return <FaUtensils />;
      case "airline-ticketing":
        return <FaPlane />;
      case "car-racing":
        return <FaCar />;
      case "image-finder":
        return <FaImage />;
      default:
        return null;
    }
  };

  const projectIcon = getProjectIcon(project.id);

  // Handle Escape key press - check global lightbox state
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        // Only close main modal if lightbox is not open
        if (!isLightboxOpen) {
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] bg-black/70 backdrop-blur flex items-center justify-center px-3 sm:px-4 overflow-y-auto py-8">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95 }}
        className="max-w-3xl w-full bg-gradient-to-br from-gray-800/90 via-blue-900/30 to-indigo-900/40 border border-white/20 rounded-2xl p-5 sm:p-6 relative shadow-[0_22px_60px_rgba(15,23,42,0.95)] my-auto"
      >
        <div className="absolute top-6 left-6 text-sky-300/95 text-2xl">
          {projectIcon}
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <FiX className="text-xl" />
        </button>

        <h3 className="text-xl sm:text-2xl font-semibold text-sky-300 mb-2 pl-10">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base text-gray-300 mb-4">
          {project.longDesc}
        </p>

        <p className="text-xs sm:text-sm text-gray-400 mb-4">
          <span className="font-semibold text-gray-200">My Role:</span>{" "}
          {project.role}
        </p>

        <div className="mb-4 flex flex-wrap gap-2 text-[11px] sm:text-xs">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sky-200"
            >
              {t}
            </span>
          ))}
        </div>

        {project.screenshots && project.screenshots.length > 0 && (
          <ProjectImageCarousel images={project.screenshots} />
        )}

        <div className="flex justify-end gap-3 mt-2">
          <a
            href={project.code}
            target="_blank"
            className="px-4 py-2 rounded-xl border border-sky-500/60 text-sky-300 flex items-center gap-2 text-xs sm:text-sm"
          >
            View Code <FiArrowUpRight />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetailModal;