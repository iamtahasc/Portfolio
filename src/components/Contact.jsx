import React from "react";
import { 
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-24 bg-gradient-to-br from-gray-900/90 via-indigo-900/20 to-purple-900/30 relative overflow-hidden">
      <div className="pointer-events-none absolute left-[-5rem] top-10 h-72 w-72 rounded-full bg-sky-500/16 blur-3xl" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative">
        <p className="text-[11px] md:text-xs tracking-[0.3em] text-sky-400/90 uppercase mb-3">
          Contact
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Contact Me
        </h2>
        <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-10 max-w-xl mx-auto">
          Feel free to reach out for internships, collaborations or project discussions.
        </p>

        <div className="flex flex-wrap justify-center gap-8 sm:gap-10 text-3xl sm:text-4xl">
          {/* CALL → EMAIL → WHATSAPP → INSTA → LINKEDIN → GITHUB */}
          <a
            href="tel:+918850106286"
            className="text-yellow-400 hover:scale-110 transition-transform"
            title="Call"
          >
            <FaPhoneAlt />
          </a>

          <a
            href="mailto:tasaif265@gmail.com"
            className="text-red-400 hover:scale-110 transition-transform"
            title="Email"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://wa.me/918850106286"
            target="_blank"
            className="text-green-500 hover:scale-110 transition-transform"
            title="Whatsapp"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            className="text-pink-400 hover:scale-110 transition-transform"
            title="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="text-blue-400 hover:scale-110 transition-transform"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/iamtahasc"
            target="_blank"
            className="text-white hover:scale-110 transition-transform"
            title="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;