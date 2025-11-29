import React from "react";
import { motion } from "framer-motion";
import { 
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { 
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
} from "react-icons/si";
import { fadeUp } from "./animationHelpers";

const Skills = () => {
  const skillGroups = [
    {
      title: "Programming Languages",
      skills: [
        { icon: <FaJava />, label: "Java" },
        { icon: <FaPython />, label: "Python" },
        { icon: <SiJavascript />, label: "JavaScript" },
      ],
    },
    {
      title: "Web Technologies",
      skills: [
        { icon: <FaHtml5 />, label: "HTML5" },
        { icon: <FaCss3Alt />, label: "CSS3" },
        { icon: <FaReact />, label: "React" },
        { icon: <SiTailwindcss />, label: "Tailwind CSS" },
      ],
    },
    {
      title: "Backend & Databases",
      skills: [
        { icon: <SiNodedotjs />, label: "Node.js (Basics)" },
        { icon: <SiMysql />, label: "MySQL" },
        { icon: <SiMongodb />, label: "MongoDB (Basics)" },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { icon: <FaGithub />, label: "Git & GitHub" },
        { icon: <FaLinkedin />, label: "Professional Networking" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-24 bg-gradient-to-br from-gray-900/80 via-blue-900/10 to-indigo-900/20 relative overflow-hidden">
      <div className="pointer-events-none absolute right-[-4rem] bottom-0 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <p className="text-[11px] md:text-xs tracking-[0.3em] text-sky-400/90 uppercase mb-3">
          Skills
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              variants={fadeUp(idx * 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="bg-gradient-to-br from-gray-800/70 to-blue-900/30 border border-white/15 rounded-2xl p-5 shadow-[0_18px_40px_rgba(15,23,42,0.9)]"
            >
              <h3 className="text-sm sm:text-base font-semibold text-sky-200 mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((s) => (
                  <motion.div
                    whileHover={{ y: -4, scale: 1.03 }}
                    key={s.label}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg:white/5 bg-white/5 border border-white/15 text-sm md:text-base text-slate-300 leading-relaxed"
                  >
                    <span className="text-lg sm:text-xl text-sky-400">
                      {s.icon}
                    </span>
                    <span>{s.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;