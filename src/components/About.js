import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function AboutSection() {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#e3e3e3] text-[#1a1a1a] px-6 py-24 md:py-40 overflow-hidden"
    >
      {/* Large Background Number - Keeps the 'Editorial' feel */}
      <div className="absolute right-0 top-10 text-[30vw] font-black text-[#1a1a1a]/5 select-none leading-none">
        01
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Header - Staggered & Bold */}
        <motion.div style={{ opacity }} className="mb-24">
          <span className="text-[10px] font-mono opacity-40 uppercase tracking-[0.5em] mb-6 block">
            Inside the Mind
          </span>
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] uppercase">
            CREATIVE<br />
            <span className="opacity-40 italic font-light">DEVELOPER</span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-[#1a1a1a]/10 pt-16">
          
          {/* Left Side: Shortened Bio */}
          <div className="md:col-span-7 space-y-8">
            <p className="text-2xl md:text-3xl font-medium leading-tight tracking-tight">
              I’m Kunal — a frontend developer focused on turning ideas into 
              <span className="opacity-40"> clean, interactive interfaces.</span>
            </p>
            <p className="text-lg opacity-60 max-w-xl leading-relaxed">
              I balance logic and aesthetics to build websites that don't just work, but feel right. 
              Currently, I'm deep-diving into React and exploring how motion can tell a better story.
            </p>
            
            {/* The Big Link to About Page */}
            <div className="pt-8">
              <Link to="/about" className="group inline-flex items-center gap-6">
                <div className="w-16 h-16 rounded-full border border-[#1a1a1a] flex items-center justify-center group-hover:bg-[#1a1a1a] group-hover:text-[#e3e3e3] transition-all duration-500">
                  <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.3em] block opacity-40 group-hover:opacity-100 transition-opacity">
                    Curious?
                  </span>
                  <span className="text-xl font-black uppercase tracking-tighter">
                    Read Full Story
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* Right Side: Quick Journey Snapshot */}
          <div className="md:col-span-5 space-y-12 md:pl-12 md:border-l border-[#1a1a1a]/5">
            <div>
              <h4 className="text-[10px] font-mono opacity-30 uppercase tracking-[0.4em] mb-6">Process</h4>
              <ul className="space-y-4 text-sm font-bold uppercase tracking-tight">
                <li className="flex justify-between items-center border-b border-[#1a1a1a]/5 pb-2">
                  <span>Learning</span> <span className="opacity-30">React & UI</span>
                </li>
                <li className="flex justify-between items-center border-b border-[#1a1a1a]/5 pb-2">
                  <span>Building</span> <span className="opacity-30">Responsive Sites</span>
                </li>
                <li className="flex justify-between items-center border-b border-[#1a1a1a]/5 pb-2">
                  <span>Exploring</span> <span className="opacity-30">3D & Motion</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-[#1a1a1a] text-[#e3e3e3] rounded-2xl">
              <span className="text-[9px] font-mono opacity-40 uppercase block mb-3 underline">Latest Status</span>
              <p className="text-sm font-medium leading-relaxed">
                Open for freelance projects and collaborations that push creative boundaries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}