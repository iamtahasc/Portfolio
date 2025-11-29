import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import { fadeUp } from "./animationHelpers";

const Projects = ({ onOpenProject }) => {
  const projects = [
    {
      id: "digital-menu",
      title: "Digital Menu Ordering System",
      shortDesc:
        "QR-based digital food ordering system with an interactive layout.",
      longDesc:
        "A full digital menu system where customers can scan a QR code, browse categories, view item details and add items to cart. It reduces manual work, speeds up ordering and provides a modern experience.",
      role:
        "Designed the UI flow, implemented menu browsing, cart logic and basic order submission.",
      tech: ["HTML", "CSS", "JavaScript"],
      code: "https://github.com/iamtahasc/Digital-Menu-Ordering-System",
      screenshots: [
        "/screenshots/digital-menu-1.png",
        "/screenshots/digital-menu-2.png",
      ],
    },
    {
      id: "airline-ticketing",
      title: "Airline Ticketing System",
      shortDesc:
        "Java-based system for flight booking, passenger records and ticketing.",
      longDesc:
        "A desktop application to manage airline ticket bookings, passenger information and ticket generation. Uses MySQL for persistent storage and showcases OOP concepts and Swing-based UI.",
      role:
        "Worked on module design, database schema and core booking/cancellation workflows.",
      tech: ["Java", "Swing", "MySQL"],
      code: "https://github.com/iamtahasc/Airline-Ticketing-System",
      screenshots: [
        "/screenshots/airline-1.png",
        "/screenshots/airline-2.png",
      ],
    },
    {
      id: "car-racing",
      title: "Collision Detection Car Racing Game",
      shortDesc:
        "2D racing game with obstacles, collision detection and scoring.",
      longDesc:
        "A Python-based 2D car racing game created using Pygame. The player avoids incoming obstacles, and collision detection ends the game. Includes scoring, increasing difficulty and simple game UI.",
      role:
        "Developed the main game loop, collision logic, scoring mechanism and game screens.",
      tech: ["Python", "Pygame"],
      code: "https://github.com/iamtahasc/Collision-Detection-Car-Racing-Game",
      screenshots: [
        "/screenshots/car-race-1.png",
        "/screenshots/car-race-2.png",
      ],
    },
    {
      id: "image-finder",
      title: "Image Finder App",
      shortDesc:
        "Responsive image search & viewing experience using public APIs.",
      longDesc:
        "An image search web application that fetches pictures based on search queries. Includes responsive grid layout, basic pagination/scrolling and a simple, clean interface for browsing images.",
      role:
        "Designed the layout, integrated image API and handled search and render logic.",
      tech: ["HTML", "CSS", "JavaScript"],
      code: "https://github.com/iamtahasc/Image-Finder-App",
      screenshots: [
        "/screenshots/image-finder-1.png",
        "/screenshots/image-finder-2.png",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-24 bg-gradient-to-br from-gray-900/80 via-blue-900/10 to-indigo-900/20 relative overflow-hidden">
      <div className="pointer-events-none absolute left-[-5rem] bottom-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <p className="text-[11px] md:text-xs tracking-[0.3em] text-sky-400/90 uppercase mb-3">
          Projects
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              variants={fadeUp(i * 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="group bg-gradient-to-br from-gray-800/80 to-blue-900/40 border border-white/15 rounded-2xl p-5 flex flex-col justify-between shadow-[0_18px_40px_rgba(15,23,42,0.95)] hover:border-sky-400/70 hover:-translate-y-1.5 transition-all"
            >
              <div>
                <p className="text-[11px] md:text-xs tracking-[0.3em] text-sky-400/90 uppercase mb-3">
                  Featured Project
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-sky-100 group-hover:text-sky-300">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-slate-300 leading-relaxed mt-3">
                  {project.shortDesc}
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <button
                  onClick={() => onOpenProject(project)}
                  className="text-[11px] sm:text-sm text-sky-300 flex items-center gap-1 hover:underline"
                >
                  Know More
                  <FiExternalLink />
                </button>

                <a
                  href={project.code}
                  target="_blank"
                  className="flex items-center gap-1 text-[11px] sm:text-sm text-gray-400 hover:text-sky-300"
                >
                  View Code <FiArrowUpRight />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;