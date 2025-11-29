import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "./animationHelpers";

const Achievements = () => {
  const certifications = [
    "Oracle Cloud Infrastructure (OCI) Generative AI Professional – Oracle University.",
    "Software Engineering Virtual Experience – JPMorgan Chase & Co. (Forage).",
    "GenAI Model Building Hands-on Project – NxtWave Platform.",
  ];

  const responsibilities = [
    "Participated in Smart India Hackathon college rounds and coding events.",
    "Collaborated on team-based projects, taking ownership of core modules.",
    "Proactively explored new tools and technologies beyond academics.",
  ];

  return (
    <section
      id="achievements"
      className="py-20 md:py-24 bg-gradient-to-br from-gray-900/80 via-blue-900/10 to-indigo-900/20 relative overflow-hidden"
    >
      <div className="pointer-events-none absolute right-[-5rem] top-10 h-72 w-72 rounded-full bg-emerald-500/12 blur-3xl" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <p className="text-[11px] md:text-xs tracking-[0.3em] text-sky-400/90 uppercase mb-3">
          Achievements
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Achievements, Certifications & Responsibilities
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="bg-gradient-to-br from-gray-800/70 to-blue-900/30 border border-white/15 rounded-2xl p-5 shadow-[0_18px_40px_rgba(15,23,42,0.9)]"
          >
            <h3 className="text-sm sm:text-base font-semibold text-sky-200 mb-4">
              Certifications
            </h3>
            <ul className="space-y-3 text-sm md:text-base text-slate-300 leading-relaxed">
              {certifications.map((c) => (
                <li key={c} className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="bg-gradient-to-br from-gray-800/70 to-blue-900/30 border border-white/15 rounded-2xl p-5 shadow-[0_18px_40px_rgba(15,23,42,0.9)]"
          >
            <h3 className="text-sm sm:text-base font-semibold text-sky-200 mb-4">
              Responsibilities & Participation
            </h3>
            <ul className="space-y-3 text-sm md:text-base text-slate-300 leading-relaxed">
              {responsibilities.map((r) => (
                <li key={r} className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;