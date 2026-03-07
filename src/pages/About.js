import { motion } from "framer-motion";
import profileImage from "../images/hero.JPG";

export default function About() {
  return (
    <div className="relative bg-[#e3e3e3] text-[#1a1a1a] font-sans selection:bg-[#1a1a1a] selection:text-[#e3e3e3]">
      
      {/* 1. AUTHENTIC HERO */}
      <section className="relative min-h-[70vh] flex items-center px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8] mb-8">
              KUNAL<br />
              <span className="opacity-20">MAHATO</span>
            </h1>
            <div className="flex gap-4 items-center">
              <span className="w-12 h-[1px] bg-[#1a1a1a]"></span>
              <p className="text-sm font-mono uppercase tracking-widest opacity-60">
                Frontend Developer — Learning & Building
              </p>
            </div>
          </motion.div>

          {/* Honest "Currently" Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden md:flex justify-end"
          >
            <div className="p-6 bg-white/40 backdrop-blur-md rounded-2xl border border-white/20 shadow-sm max-w-xs">
              <p className="text-[10px] font-mono uppercase opacity-40 mb-3 tracking-widest">/ Progress Report</p>
              <p className="text-base font-medium leading-relaxed opacity-80">
                Currently improving my React skills and exploring modern frontend tools to build better user experiences.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. CALM & HONEST BIO */}
      <section className="py-24 px-6 md:px-12 border-t border-[#1a1a1a]/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          
          <div className="md:col-span-5">
            <motion.div 
              className="aspect-square bg-neutral-200 overflow-hidden rounded-3xl"
              whileInView={{ opacity: [0, 1], scale: [0.98, 1] }}
            >
              <img 
                src={profileImage} 
                alt="Kunal Mahato" 
                className="w-full h-full object-cover grayscale brightness-110 contrast-110 hover:grayscale-0 transition-all duration-700" 
              />
            </motion.div>
          </div>

          <div className="md:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                I’m a frontend developer who enjoys turning ideas into <span className="opacity-40 italic font-light text-4xl">interactive interfaces.</span>
              </h2>
              
              <div className="space-y-6 text-lg text-[#1a1a1a]/70 leading-relaxed max-w-xl">
                <p>
                  My journey in web development started with a curiosity for how things work on the screen. Today, I focus on <strong>clean layouts</strong> and <strong>attention to detail</strong>, ensuring that the code I write is as organized as the design it represents.
                </p>
                <p>
                  I’m currently deepening my understanding of React and exploring how subtle animations with Framer Motion can improve the way people interact with websites.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. HONEST STACK SECTION */}
      <section className="py-24 px-6 md:px-12 bg-[#1a1a1a] text-[#e3e3e3] rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="font-mono text-[10px] opacity-40 uppercase tracking-[0.3em] block mb-2">Technical</span>
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic">The Toolkit</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "React", level: "Learning & Building" },
              { name: "Tailwind CSS", level: "Comfortable" },
              { name: "JavaScript", level: "Building Fundamentals" },
              { name: "Framer Motion", level: "Exploring" },
              { name: "Git / GitHub", level: "Comfortable" },
              { name: "Figma", level: "Basic Layouts" },
              { name: "Responsive Design", level: "Focused" },
              { name: "Problem Solving", level: "Always Learning" }
            ].map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="p-6 border border-white/10 rounded-2xl flex flex-col justify-between hover:bg-white/5 transition-colors group"
              >
                <span className="text-xl font-bold tracking-tight mb-4">{skill.name}</span>
                <span className="font-mono text-[9px] uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">
                   {skill.level}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SIMPLE CONTACT FOOTER */}
      <section className="py-32 px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-sm font-medium opacity-50 mb-6">Want to talk about a project or just say hi?</p>
          <a
            href="mailto:horizonhub666@gmail.com"
            className="text-4xl md:text-7xl font-black uppercase tracking-tighter hover:opacity-70 transition-opacity inline-block border-b-4 border-[#1a1a1a]"
          >
            Let's connect
          </a>
          <div className="mt-20 flex flex-wrap justify-center gap-8 text-[10px] font-mono uppercase tracking-widest opacity-30">
            <span>Based in India</span>
            <span>{new Date().getFullYear()} — Portfolio v1</span>
          </div>
        </motion.div>
      </section>
    </div>
  );
}