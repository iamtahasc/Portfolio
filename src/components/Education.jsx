import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBook, FaSchool } from "react-icons/fa";
import { fadeUp } from "./animationHelpers";

const Education = () => {
  const education = [
    {
      title: "Bachelor of Engineering – Information Technology",
      place: "Konkan Gyanpeeth College of Engineering (KGCE - Karjat), Mumbai University",
      year: "2023 – 2027",
      icon: <FaGraduationCap />,
    },
    {
      title: "Higher Secondary Education (HSC)",
      place: "St. Xavier's College, Mumbai",
      year: "2022 – 2023",
      icon: <FaBook />,
    },
    {
      title: "Secondary School Education (SSC)",
      place: "GSG High School, Karjat",
      year: "2020 – 2021",
      icon: <FaSchool />,
    },
  ];

  return (
    <section id="education" className="py-16 md:py-20 bg-gradient-to-br from-gray-900/90 via-indigo-900/20 to-purple-900/30 relative overflow-hidden">
      <div className="pointer-events-none absolute left-[-6rem] top-20 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <p className="text-[11px] md:text-xs tracking-[0.3em] text-sky-400/90 uppercase mb-6">
          Education
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.title}
              variants={fadeUp(i * 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="relative bg-gradient-to-br from-gray-800/70 to-indigo-900/30 border border-white/15 rounded-2xl p-5 shadow-[0_18px_40px_rgba(15,23,42,0.9)] transform transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-sky-400/70 hover:shadow-[0_25px_60px_rgba(56,189,248,0.2)]"
            >
              <div className="absolute top-4 right-4 text-sky-400/60 text-xl">
                {edu.icon}
              </div>
              <p className="text-[11px] md:text-xs tracking-[0.3em] text-sky-400/90 uppercase mb-3">
                {edu.year}
              </p>
              <h3 className="text-sm sm:text-base font-semibold text-sky-100">
                {edu.title}
              </h3>
              <p className="mt-3 text-sm md:text-base text-slate-300 leading-relaxed">
                {edu.place}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;