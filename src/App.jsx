import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
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
      "experience",
      "education",
      "skills",
      "projects",
      "achievements",
      "contact",
    ];

    // Enhanced scroll spy with more accurate section detection
    const handleScrollSpy = () => {
      // Find the section that is most visible in the viewport
      let mostVisibleSection = "home";
      let highestVisibility = 0;
      
      // Track sections that are actually in view
      let sectionsInViewport = [];
      
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight || document.documentElement.clientHeight;
          
          // Adjust for navbar height (approximately 80px)
          const navbarHeight = 80;
          
          // Check if section is in viewport (at least partially)
          const isInViewport = rect.top < windowHeight && rect.bottom > navbarHeight;
          
          if (isInViewport) {
            // Calculate visibility percentage
            const elementHeight = rect.bottom - rect.top;
            const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, navbarHeight);
            const visibilityPercentage = elementHeight > 0 ? visibleHeight / elementHeight : 0;
            
            if (visibilityPercentage > highestVisibility) {
              highestVisibility = visibilityPercentage;
              mostVisibleSection = id;
            }
            
            // Add to viewport sections if visibility is significant
            if (visibilityPercentage > 0.05) {
              sectionsInViewport.push({ id, visibility: visibilityPercentage });
            }
          }
        }
      });
      
      // Sort sections by visibility
      sectionsInViewport.sort((a, b) => b.visibility - a.visibility);
      
      // Special case: If we're near the top of the page, always show home
      let activeSection = "home";
      if (window.scrollY >= 100) {
        if (sectionsInViewport.length > 0) {
          // Use the most visible section
          activeSection = sectionsInViewport[0].id;
        } else {
          // Fallback: find the section whose top is closest to navbar
          let closestSection = "home";
          let smallestDistance = Infinity;
          
          sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
              const rect = element.getBoundingClientRect();
              const navbarHeight = 80;
              const distanceFromTop = Math.abs(rect.top - navbarHeight);
              if (distanceFromTop < smallestDistance) {
                smallestDistance = distanceFromTop;
                closestSection = id;
              }
            }
          });
          
          activeSection = closestSection;
        }
      }
      
      // Debug logging - remove in production
      // console.log('Active section:', activeSection, 'Sections in viewport:', sectionsInViewport);
      
      setActiveSection(activeSection);
      setShowScrollTop(window.scrollY > 300);
    };

    // Throttle the scroll handler for better performance
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScrollSpy();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    // Initial check
    handleScrollSpy();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      // Custom smooth scroll with easing
      const startY = window.pageYOffset;
      const targetY = el.getBoundingClientRect().top + startY - 80; // Offset for navbar
      const distance = targetY - startY;
      const duration = 800; // ms
      let startTime = null;
      
      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Ease-out cubic function for smooth deceleration
        const ease = 1 - Math.pow(1 - progress, 3);
        
        window.scrollTo(0, startY + distance * ease);
        
        if (progress < 1) {
          window.requestAnimationFrame(animation);
        }
      };
      
      window.requestAnimationFrame(animation);
    }
    setActiveSection(id);
  };

  const handleScrollTop = () => {
    // Custom smooth scroll to top with easing
    const startY = window.pageYOffset;
    const distance = -startY;
    const duration = 800; // ms
    let startTime = null;
    
    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Ease-out cubic function for smooth deceleration
      const ease = 1 - Math.pow(1 - progress, 3);
      
      window.scrollTo(0, startY + distance * ease);
      
      if (progress < 1) {
        window.requestAnimationFrame(animation);
      }
    };
    
    window.requestAnimationFrame(animation);
  };

  return (
    <div className="min-h-screen bg-black text-slate-50 font-sans">
      <Navbar activeSection={activeSection} onNavClick={handleNavClick} />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects onOpenProject={setActiveProject} />
      <Achievements />
      <Contact />
      <footer className="w-full backdrop-blur-sm bg-white/5">
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-sky-900/10 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center">
          <p className="text-sm text-slate-400 hover:text-slate-300 transition duration-300 text-center">
            © {new Date().getFullYear()} Taha Contractor. All rights reserved.
          </p>
        </div>
      </footer>
      <ProjectDetailModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />

      {showScrollTop && (
        <motion.button
          onClick={handleScrollTop}
          className="fixed bottom-6 right-6 z-[70] rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 p-3 shadow-[0_18px_40px_rgba(56,189,248,0.7)] hover:scale-110 active:scale-95 transition-transform"
          aria-label="Scroll to top"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <FiArrowUp />
        </motion.button>
      )}
    </div>
  );
}