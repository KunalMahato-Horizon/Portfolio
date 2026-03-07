import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="relative h-[600px] w-full bg-[#1a1a1a] text-[#e3e3e3] flex flex-col justify-between p-8 md:p-20"
      style={{ clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      {/* 1. TOP ROW: The Call to Action */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-2xl">
          <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-gray-500 mb-6 block">
            End_of_Transmission
          </span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
            Let's create something <br /> 
            <span className="text-white/20 italic">unforgettable.</span>
          </h2>
        </div>

        {/* Back to Top - Vertical Line Style */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex flex-col items-center gap-4 cursor-none self-end md:self-auto"
        >
          <div className="w-[1px] h-20 bg-white/10 relative overflow-hidden">
            <motion.div 
              animate={{ y: [-80, 80] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-white/40"
            />
          </div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">
            Top
          </span>
        </button>
      </div>

      {/* 2. MIDDLE ROW: Big Branding */}
      <div className="py-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-end gap-10">
        <h3 className="text-[15vw] md:text-[10vw] font-black tracking-tighter uppercase leading-[0.7] opacity-5 select-none">
          HELIOS.
        </h3>
        
        {/* Social Links as a Technical List */}
        <div className="flex flex-col items-start md:items-end gap-4">
          <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-2">Connect_Channels</p>
          <div className="flex gap-8">
            {[
              { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/kunal-mahato-bb7551384?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LN" },
              { icon: <FaGithub />, href: "https://github.com/KunalMahato-Horizon", label: "GH" },
              { icon: <FaInstagram />, href: "https://www.instagram.com/code_with_horizon?igsh=MTUzYTdxajJtNDJ2Nw==", label: "IG" }
            ].map((link, i) => (
              <a 
                key={i} 
                href={link.href} 
                className="text-xl text-white/40 hover:text-white transition-all duration-500 flex items-center gap-2 group cursor-none"
              >
                {link.icon}
                <span className="text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 3. BOTTOM ROW: Metadata */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[9px] font-mono text-gray-600 uppercase tracking-[0.4em]">
        <div className="flex gap-8">
          <span>Design: Helios Studio</span>
          <span className="hidden md:block">Dev: React + Framer</span>
        </div>
        <p>© {currentYear} Kunal Mahato. All rights reserved.</p>
        <div className="hidden md:block">
           Available for worldwide sync // 2026
        </div>
      </div>
    </footer>
  );
}