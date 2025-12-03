import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import { fadeUp } from "./animationHelpers";

const certificates = [
  {
    src: "/certificates/OCI_GenAI.png",
    title: "OCI Generative AI Professional",
    learn: "Deep understanding of Oracle Cloud Infrastructure and Generative AI services, including deploying, managing, and optimizing AI models in enterprise cloud environments.",
    issuer: "Oracle University",
    year: "2025"
  },
  {
    src: "/certificates/JPMorgan.png",
    title: "Software Engineering Job Simulation",
    learn: "Hands-on experience in setting up backend systems, integrating Kafka and H2 databases, and building REST APIs and controllers following real industry workflows.",
    issuer: "JPMorgan Chase & Co. (Forage)",
    year: "2025"
  },
  {
    src: "/certificates/NxtWave_Completion.png",
    title: "GenAI Model Building Hands-on Project",
    learn: "Practical skills in designing and building a simple generative AI model, understanding core AI concepts, and applying them through a guided hands-on workshop.",
    issuer: "NxtWave",
    year: "2025"
  },
  {
    src: "/certificates/PythonQuiz.jpg",
    title: "National Level Python Programming Quiz",
    learn: "Gained strong understanding of Python fundamentals and problem-solving concepts by successfully completing a national-level competitive quiz.",
    issuer: "Sigma Institute of Engineering, Vadodara",
    year: "2023"
  },
  {
    src: "/certificates/PasswordSecurity.png",
    title: "Password Security - National Cyber Security Awareness",
    learn: "Gained strong understanding of secure password practices, threats, and protection techniques essential for maintaining digital safety.",
    issuer: "Ministry of Electronics and Information Technology (Govt of India)",
    year: "2021"
  },
  {
    src: "/certificates/WhatsappSecurity.png",
    title: "WhatsApp Security - National Cyber Security Awareness",
    learn: "Learned key principles of WhatsApp privacy, message security, and how to prevent common cyber-attacks targeting social messaging platforms.",
    issuer: "Ministry of Electronics and Information Technology (Govt of India)",
    year: "2021"
  }
];

const Achievements = () => {
  const [certOpen, setCertOpen] = useState(false);
  const [activeCert, setActiveCert] = useState(null);

  const openCertLightbox = (cert) => {
    setActiveCert(cert);
    setCertOpen(true);
  };

  const closeCertLightbox = () => {
    setCertOpen(false);
    setActiveCert(null);
  };

  return (
    <>
      <section
      id="achievements"
      className="py-20 md:py-24 bg-gradient-to-br from-gray-900/80 via-blue-900/10 to-indigo-900/20 relative overflow-hidden"
    >
      <div className="pointer-events-none absolute right-[-5rem] top-10 h-72 w-72 rounded-full bg-emerald-500/12 blur-3xl" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <p className="text-[11px] md:text-xs tracking-[0.3em] text-sky-400/90 uppercase mb-3">
          Achievements
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          Certificates
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              variants={fadeUp(i * 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="relative bg-gradient-to-br from-gray-800/70 to-blue-900/30 border border-white/15 rounded-2xl p-5 shadow-[0_18px_40px_rgba(15,23,42,0.9)] transform transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-sky-400/70 hover:shadow-[0_25px_60px_rgba(56,189,248,0.2)] backdrop-blur-sm"
            >
              {/* Clickable Thumbnail */}
              <div
                onClick={() => openCertLightbox(cert)}
                className="cursor-pointer rounded-xl overflow-hidden border border-white/10 h-60 md:h-80 flex items-center justify-center"
              >
                <img
                  src={cert.src}
                  alt={cert.title}
                  className="max-h-full max-w-full object-contain rounded-xl transition-transform duration-300 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>

              {/* Certificate Title */}
              <h3 className="text-lg sm:text-xl font-semibold text-sky-100 mt-4 text-center">
                {cert.title}
              </h3>

              {/* What I Learned */}
              <p className="text-sm text-slate-300 mt-2 text-center">
                {cert.learn}
              </p>

              {/* Issuer + Year */}
              <p className="text-xs text-slate-400 mt-2 text-center">
                Issued by: {cert.issuer} {cert.year && `• ${cert.year}`}
              </p>
            </motion.div>
          ))}
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-6">
          Responsibilities
        </h2>

        <div className="bg-black/45 border border-white/10 rounded-2xl p-5 shadow-[0_18px_40px_rgba(15,23,42,0.9)]">
          <ul className="list-disc pl-5 space-y-3 text-sm text-slate-300">
            <li>Participated in Smart India Hackathon college rounds and coding events.</li>
            <li>Collaborated on team-based projects, taking ownership of core modules.</li>
            <li>Proactively explored new tools and technologies beyond academics.</li>
            <li>Contributed to project planning, testing and documentation.</li>
          </ul>
        </div>
      </div>
    </section>
    <CertificateLightbox
      image={activeCert?.src}
      title={activeCert?.title}
      isOpen={certOpen}
      onClose={closeCertLightbox}
    />
  </>);
};

function CertificateLightbox({ image, title, isOpen, onClose }) {
  const dialogRef = useRef(null);

  // ESC to close
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Click outside to close
  useEffect(() => {
    const handleClick = (e) => {
      if (dialogRef.current && !dialogRef.current.contains(e.target)) {
        onClose();
      }
    };
    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, [onClose]);

  if (!isOpen || !image) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
         role="dialog" aria-modal="true">

      <motion.div
        ref={dialogRef}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.22 }}
        className="relative max-w-[95vw] w-full flex flex-col items-center justify-center"
      >

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 bg-black/40 p-2 rounded-full text-white"
          aria-label="Close"
        >
          <FiX className="text-2xl" />
        </button>

        {/* Main Image */}
        <img
          src={image}
          alt={title}
          className="object-contain max-w-full max-h-[85vh] rounded-lg shadow-lg"
        />

        {/* Caption (optional) */}
        {title && (
          <p className="mt-4 text-sm text-slate-300 text-center">{title}</p>
        )}
      </motion.div>
    </div>
  );
}

export default Achievements;