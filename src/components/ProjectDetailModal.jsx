import React from "react";
import { motion } from "framer-motion";
import { FiX, FiArrowUpRight } from "react-icons/fi";

const ProjectDetailModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-black/70 backdrop-blur flex items-center justify-center px-3 sm:px-4">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95 }}
        className="max-w-3xl w-full bg-gradient-to-br from-gray-800/90 via-blue-900/30 to-indigo-900/40 border border-white/20 rounded-2xl p-5 sm:p-6 relative shadow-[0_22px_60px_rgba(15,23,42,0.95)]"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <FiX className="text-xl" />
        </button>

        <h3 className="text-xl sm:text-2xl font-semibold text-sky-300 mb-2">
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

        <div className="grid sm:grid-cols-2 gap-3 mb-4">
          {[...Array(2)].map((_, idx) => (
            <div
              key={idx}
              className="h-32 sm:h-40 rounded-xl bg-gradient-to-br from-gray-700/50 to-blue-900/30 border border-white/15 flex items-center justify-center text-[11px] text-gray-300"
            >
              Screenshot {idx + 1}
            </div>
          ))}
        </div>

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