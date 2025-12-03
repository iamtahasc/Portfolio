import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiHome, FiUser, FiBook, FiCode, FiAward, FiMail, FiStar } from "react-icons/fi";
import { smoothSlideIn } from "./animationHelpers";

const Navbar = ({ activeSection, onNavClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", icon: <FiHome /> },
    { id: "about", label: "About", icon: <FiUser /> },
    { id: "education", label: "Education", icon: <FiBook /> },
    { id: "skills", label: "Skills", icon: <FiCode /> },
    { id: "projects", label: "Projects", icon: <FiAward /> },
    { id: "achievements", label: "Achievements", icon: <FiStar /> },
    { id: "contact", label: "Contact", icon: <FiMail /> },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-2 bg-gray-900/90 backdrop-blur-3xl border-b border-cyan-500/20" : "py-3 bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              onNavClick("home");
            }}
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.5)]">
              <span className="text-white font-bold text-lg">TC</span>
            </div>
            <span className="text-xl font-bold text-white">
              Taha <span className="text-cyan-400">Contractor</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavClick(item.id);
                  setIsMenuOpen(false);
                }}
                className={`group relative flex items-center gap-2 px-4 py-2 transition-all ${
                  activeSection === item.id
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-white"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="relative z-10 text-sm font-medium">{item.label}</span>

                {/* Underline: base (invisible) */}
                <span
                  aria-hidden="true"
                  className={`
                    absolute left-0 -bottom-1 h-[3px] rounded-full transition-all duration-300
                    ${activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                  style={{
                    // gradient + subtle blur glow
                    background:
                      activeSection === item.id
                        ? "linear-gradient(90deg, rgba(14,165,233,1), rgba(56,189,248,1), rgba(99,102,241,1))"
                        : "linear-gradient(90deg, rgba(14,165,233,0.0), rgba(56,189,248,0.0), rgba(99,102,241,0.0))",
                    boxShadow:
                      activeSection === item.id
                        ? "0 6px 18px rgba(56,189,248,0.18), 0 2px 6px rgba(99,102,241,0.06)"
                        : "none",
                  }}
                />

                {/* Glow overlay (soft, blurred) */}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 -bottom-3 h-1 rounded-full pointer-events-none transition-opacity duration-300 ${
                    activeSection === item.id ? "opacity-80" : "opacity-0 group-hover:opacity-60"
                  }`}
                  style={{
                    width: activeSection === item.id ? "100%" : "100%",
                    background: "radial-gradient(ellipse at center, rgba(56,189,248,0.14), rgba(99,102,241,0.02))",
                    filter: "blur(10px)",
                  }}
                />
              </motion.a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50"
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={smoothSlideIn('down', 0)}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="md:hidden bg-gray-900/95 backdrop-blur-3xl border-t border-cyan-500/20"
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavClick(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`group relative flex items-center gap-3 px-4 py-3 transition-all ${
                      activeSection === item.id
                        ? "text-cyan-400"
                        : "text-gray-300 hover:text-white"
                    }`}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 500, damping: 20 }}
                    aria-current={activeSection === item.id ? "page" : undefined}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="relative z-10 text-sm font-medium">{item.label}</span>

                    {/* Underline: base (invisible) */}
                    <span
                      aria-hidden="true"
                      className={`
                        absolute left-0 -bottom-1 h-[3px] rounded-full transition-all duration-300
                        ${activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"}
                      `}
                      style={{
                        // gradient + subtle blur glow
                        background:
                          activeSection === item.id
                            ? "linear-gradient(90deg, rgba(14,165,233,1), rgba(56,189,248,1), rgba(99,102,241,1))"
                            : "linear-gradient(90deg, rgba(14,165,233,0.0), rgba(56,189,248,0.0), rgba(99,102,241,0.0))",
                        boxShadow:
                          activeSection === item.id
                            ? "0 6px 18px rgba(56,189,248,0.18), 0 2px 6px rgba(99,102,241,0.06)"
                            : "none",
                      }}
                    />

                    {/* Glow overlay (soft, blurred) */}
                    <span
                      aria-hidden="true"
                      className={`absolute left-0 -bottom-3 h-1 rounded-full pointer-events-none transition-opacity duration-300 ${
                        activeSection === item.id ? "opacity-80" : "opacity-0 group-hover:opacity-60"
                      }`}
                      style={{
                        width: activeSection === item.id ? "100%" : "100%",
                        background: "radial-gradient(ellipse at center, rgba(56,189,248,0.14), rgba(99,102,241,0.02))",
                        filter: "blur(10px)",
                      }}
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;