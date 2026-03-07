import { motion } from "framer-motion";

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/kunal-mahato-bb7551384?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", id: "01" },
  { name: "GitHub", href: "https://github.com/KunalMahato-Horizon", id: "02" },
  { name: "Instagram", href: "https://www.instagram.com/code_with_horizon?igsh=MTUzYTdxajJtNDJ2Nw==", id: "03" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-screen bg-[#e3e3e3] text-[#1a1a1a] flex flex-col cursor-none">
      
      {/* 1. STRUCTURAL DIVIDERS */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Vertical Center Line */}
        <div className="absolute left-1/2 top-0 w-[1px] h-full bg-[#1a1a1a]/5 hidden lg:block"></div>
        {/* Horizontal Center Line */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#1a1a1a]/5 hidden lg:block"></div>
      </div>

      {/* 2. THE HEADER: HIGH-IMPACT TYPOGRAPHY */}
      <div className="flex-[1.2] flex flex-col items-center justify-center p-6 md:p-20 border-b border-[#1a1a1a]/10">
        <div className="overflow-hidden">
          <motion.h2 
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[16vw] lg:text-[13vw] font-black tracking-tighter uppercase leading-[0.75]"
          >
            Connect
          </motion.h2>
        </div>
        <div className="overflow-hidden mt-2">
          <motion.h2 
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[16vw] lg:text-[13vw] font-black tracking-tighter uppercase leading-[0.75] italic opacity-20"
          >
            Studio
          </motion.h2>
        </div>
      </div>

      {/* 3. THE INTERACTION GRID */}
      <div className="flex-1 flex flex-col lg:flex-row">
        
        {/* LEFT: INQUIRY BOX */}
        <div className="flex-1 p-8 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#1a1a1a]/10 group">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-gray-400 block mb-12">
              ( Inquiry_Portal )
            </span>
            <h3 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-6 leading-none">
              Have an Idea?
            </h3>
            <p className="text-gray-500 max-w-sm text-sm lg:text-base leading-relaxed mb-10">
              I am currently available for selective freelance partnerships and creative collaborations for the 2026 season.
            </p>
          </div>
          
          <a 
            href="mailto:Horizonhub666@gmail.com"
            className="relative inline-block text-xl lg:text-2xl font-bold tracking-tight w-fit group"
          >
            Horizonhub666@gmail.com
            <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#1a1a1a] origin-left scale-x-100 group-hover:scale-x-50 transition-transform duration-500" />
          </a>
        </div>

        {/* RIGHT: SOCIAL LINKS */}
        <div className="flex-1 p-8 lg:p-16 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-gray-400 block mb-12">
              ( Global_Network )
            </span>
            <div className="flex flex-col">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  whileHover={{ x: 15 }}
                  className="flex items-center justify-between py-4 border-b border-[#1a1a1a]/5 last:border-0 group cursor-none"
                >
                  <span className="text-2xl lg:text-3xl font-black uppercase tracking-tighter">
                    {link.name}
                  </span>
                  <span className="text-xs font-mono opacity-20 group-hover:opacity-100 transition-opacity">
                    LINK_{link.id} ↗
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* FINAL METADATA */}
          <div className="mt-16 pt-8 border-t border-[#1a1a1a]/5 flex justify-between items-end">
             <div className="flex flex-col gap-1">
                <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">© 2026 Helios Portfolio</span>
                <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest italic">Designed for Motion</span>
             </div>
             <div className="w-10 h-10 rounded-full border border-[#1a1a1a]/10 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-[#1a1a1a] rounded-full animate-pulse" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}