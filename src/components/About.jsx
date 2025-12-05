import React from "react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { fadeUp } from "./animationHelpers";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-24 bg-gradient-to-br from-gray-900/80 via-blue-900/10 to-indigo-900/20 relative overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-10 h-64 w-64 rounded-full bg-sky-500/15 blur-3xl" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="text-[11px] md:text-xs tracking-[0.3em] text-sky-400/90 uppercase mb-3">
            About Me
          </p>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            A learner who loves turning concepts into working products.
          </h2>
          
          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
            I am currently pursuing my Bachelor's in Information Technology from Konkan Gyanpeeth College of Engineering (Mumbai University). I enjoy understanding systems end-to-end — from designing intuitive user interfaces to building efficient backend logic, managing databases, and handling basic deployment.
          </p>
          
          <p className="text-sm md:text-base text-slate-300 leading-relaxed mt-3">
            My core interests include <span className="text-sky-400 font-medium">web development</span>, <span className="text-sky-400 font-medium">AI/ML</span>, <span className="text-sky-400 font-medium">cybersecurity</span>, and <span className="text-sky-400 font-medium">cloud technologies</span>. I enjoy experimenting, building purposeful <span className="text-sky-400 font-medium">side projects</span>, and participating in <span className="text-sky-400 font-medium">hackathons</span> or technical challenges that push me beyond my comfort zone.
          </p>
          
          <p className="text-sm md:text-base text-slate-300 leading-relaxed mt-3">
            I am currently seeking opportunities where I can contribute meaningfully, learn from experienced engineers, and grow into a well-rounded, impactful software developer.
          </p>

          <a
            href="/Taha_Contractor_Resume.pdf"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_18px_40px_rgba(56,189,248,0.6)] hover:scale-[1.03] active:scale-[0.98] transition-transform"
          >
            <FiDownload /> Download Resume
          </a>
          
          <div className="mt-6 flex flex-wrap gap-3 text-[11px] md:text-xs text-slate-200">
            <span className="px-4 py-1 rounded-full bg-white/5 border border-white/15">
              Problem Solver
            </span>
            <span className="px-4 py-1 rounded-full bg-white/5 border border-white/15">
              Quick Learner
            </span>
            <span className="px-4 py-1 rounded-full bg-white/5 border border-white/15">
              Team Player
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;