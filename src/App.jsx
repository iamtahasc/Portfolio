import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import ProjectDetailModal from "./components/ProjectDetailModal";
import { FiArrowUp } from "react-icons/fi";

// ========= APP ROOT WITH SCROLL SPY & SCROLL-TO-TOP =========
export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "education",
      "skills",
      "projects",
      "achievements",
      "contact",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const onScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActiveSection(id);
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-slate-50 font-sans">
      <Navbar activeSection={activeSection} onNavClick={handleNavClick} />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects onOpenProject={setActiveProject} />
      <Achievements />
      <Contact />
      <ProjectDetailModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />

      {showScrollTop && (
        <button
          onClick={handleScrollTop}
          className="fixed bottom-6 right-6 z-[70] rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 p-3 shadow-[0_18px_40px_rgba(56,189,248,0.7)] hover:scale-110 active:scale-95 transition-transform"
          aria-label="Scroll to top"
        >
          <FiArrowUp />
        </button>
      )}
    </div>
  );
}