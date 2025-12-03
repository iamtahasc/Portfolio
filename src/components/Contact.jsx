import React from "react";
import { 
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-6 md:py-8 bg-gradient-to-br from-gray-900/90 via-indigo-900/20 to-purple-900/30 relative overflow-hidden">
      <div className="pointer-events-none absolute left-[-5rem] top-10 h-72 w-72 rounded-full bg-sky-500/16 blur-3xl" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <p className="text-[11px] md:text-xs tracking-[0.3em] text-sky-400/90 uppercase mb-3">
          Contact
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Feel free to reach out for internships, collaborations or project discussions.</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Address Card */}
          <div 
            className="relative bg-gradient-to-br from-gray-800/70 to-blue-900/30 border border-white/15 rounded-2xl p-6 shadow-[0_18px_40px_rgba(15,23,42,0.9)] transform transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-sky-400/70 hover:shadow-[0_25px_60px_rgba(56,189,248,0.2)] backdrop-blur-sm block"
          >
            <div className="flex items-center gap-4">
              <div className="text-sky-400 text-3xl">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-sky-100 mb-1">Address</h3>
                <p className="text-slate-300 leading-relaxed">
                  Mumbai, Maharashtra
                </p>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <a 
            href="tel:+918850106286" 
            className="relative bg-gradient-to-br from-gray-800/70 to-blue-900/30 border border-white/15 rounded-2xl p-6 shadow-[0_18px_40px_rgba(15,23,42,0.9)] transform transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-sky-400/70 hover:shadow-[0_25px_60px_rgba(56,189,248,0.2)] backdrop-blur-sm block"
          >
            <div className="flex items-center gap-4">
              <div className="text-yellow-400 text-3xl">
                <FaPhoneAlt />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-sky-100 mb-1">Call Me</h3>
                <p className="text-slate-300 leading-relaxed">
                  +91 88501 06286
                </p>
              </div>
            </div>
          </a>

          {/* Email Card */}
          <a 
            href="mailto:tasaif265@gmail.com" 
            className="relative bg-gradient-to-br from-gray-800/70 to-blue-900/30 border border-white/15 rounded-2xl p-6 shadow-[0_18px_40px_rgba(15,23,42,0.9)] transform transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-sky-400/70 hover:shadow-[0_25px_60px_rgba(56,189,248,0.2)] backdrop-blur-sm block"
          >
            <div className="flex items-center gap-4">
              <div className="text-red-400 text-3xl">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-sky-100 mb-1">Email Me</h3>
                <p className="text-slate-300 leading-relaxed">
                  tasaif265@gmail.com
                </p>
              </div>
            </div>
          </a>

          {/* WhatsApp Card */}
          <a 
            href="https://wa.me/918850106286" target="_blank" rel="noopener noreferrer"
            className="relative bg-gradient-to-br from-gray-800/70 to-blue-900/30 border border-white/15 rounded-2xl p-6 shadow-[0_18px_40px_rgba(15,23,42,0.9)] transform transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-sky-400/70 hover:shadow-[0_25px_60px_rgba(56,189,248,0.2)] backdrop-blur-sm block"
          >
            <div className="flex items-center gap-4">
              <div className="text-green-500 text-3xl">
                <FaWhatsapp />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-sky-100 mb-1">WhatsApp</h3>
                <p className="text-slate-300 leading-relaxed">
                  Chat on WhatsApp
                </p>
              </div>
            </div>
          </a>

          {/* Instagram Card */}
          <a 
            href="https://instagram.com/iamtahasc" target="_blank" rel="noopener noreferrer"
            className="relative bg-gradient-to-br from-gray-800/70 to-blue-900/30 border border-white/15 rounded-2xl p-6 shadow-[0_18px_40px_rgba(15,23,42,0.9)] transform transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-sky-400/70 hover:shadow-[0_25px_60px_rgba(56,189,248,0.2)] backdrop-blur-sm block"
          >
            <div className="flex items-center gap-4">
              <div className="text-pink-400 text-3xl">
                <FaInstagram />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-sky-100 mb-1">Instagram</h3>
                <p className="text-slate-300 leading-relaxed">
                  Follow Me @iamtahasc
                </p>
              </div>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a 
            href="https://linkedin.com/in/iamtahasc" target="_blank" rel="noopener noreferrer"
            className="relative bg-gradient-to-br from-gray-800/70 to-blue-900/30 border border-white/15 rounded-2xl p-6 shadow-[0_18px_40px_rgba(15,23,42,0.9)] transform transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-sky-400/70 hover:shadow-[0_25px_60px_rgba(56,189,248,0.2)] backdrop-blur-sm block"
          >
            <div className="flex items-center gap-4">
              <div className="text-blue-400 text-3xl">
                <FaLinkedin />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-sky-100 mb-1">LinkedIn</h3>
                <p className="text-slate-300 leading-relaxed">
                  Connect with Me @iamtahasc
                </p>
              </div>
            </div>
          </a>

          {/* GitHub Card */}
          <a 
            href="https://github.com/iamtahasc" target="_blank" rel="noopener noreferrer"
            className="relative bg-gradient-to-br from-gray-800/70 to-blue-900/30 border border-white/15 rounded-2xl p-6 shadow-[0_18px_40px_rgba(15,23,42,0.9)] transform transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-sky-400/70 hover:shadow-[0_25px_60px_rgba(56,189,248,0.2)] backdrop-blur-sm block"
          >
            <div className="flex items-center gap-4">
              <div className="text-white text-3xl">
                <FaGithub />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-sky-100 mb-1">GitHub</h3>
                <p className="text-slate-300 leading-relaxed">
                  Follow Me @iamtahasc
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;