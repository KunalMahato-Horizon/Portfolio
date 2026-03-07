import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Import your project images
import anojPortfolio from "../images/Anoj_portfolio.png";
import sonvitriFoundation from "../images/Sonvitri_Foundation-Template.png";
import videoEditorTemplate from "../images/Video_Editor-Template.png";

const projects = [
  {
    id: 1,
    title: "ANOJ PORTFOLIO",
    category: "Personal Portfolio",
    year: "2024",
    img: anojPortfolio,
    description: "Minimal portfolio website for a designer.",
    focus: "Mastering layout shifts & typography",
    stack: ["React", "Tailwind", "Framer Motion"],
    accent: "bg-blue-600",
    liveLink: "#",
    codeLink: "#"
  },
  {
    id: 2,
    title: "SONVITRI FOUNDATION",
    category: "NGO Template",
    year: "2024",
    img: sonvitriFoundation,
    description: "Clean template for non-profit organizations.",
    focus: "Accessibility & semantic HTML",
    stack: ["HTML", "CSS", "JavaScript"],
    accent: "bg-emerald-600",
    liveLink: "#",
    codeLink: "#"
  },
  {
    id: 3,
    title: "VIDEO EDITOR",
    category: "Creative Template",
    year: "2024",
    img: videoEditorTemplate,
    description: "Portfolio template for video editors.",
    focus: "Component-based styling",
    stack: ["React", "CSS Modules"],
    accent: "bg-purple-600",
    liveLink: "#",
    codeLink: "#"
  },
];

const categories = ["All", ...new Set(projects.map(p => p.category))];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-[#e3e3e3] text-[#1a1a1a] pt-32 pb-20 px-6 md:px-12 selection:bg-[#1a1a1a] selection:text-[#e3e3e3]">
      
      {/* 1. HEADER */}
      <div className="max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.5em] opacity-40 mb-4 block">
            The Build Log — 01
          </span>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none">
            Selected<br />Works<span className="opacity-20">.</span>
          </h1>
        </motion.div>
      </div>

      {/* 2. FILTER BAR */}
      <div className="max-w-7xl mx-auto mb-16 flex flex-wrap gap-8 border-b border-[#1a1a1a]/10 pb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`text-[10px] font-mono uppercase tracking-[0.3em] transition-all
              ${filter === cat 
                ? "opacity-100 font-bold" 
                : "opacity-30 hover:opacity-100"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 3. GRID */}
      <motion.div layout className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-white rounded-2xl shadow-sm border border-[#1a1a1a]/5 group">
                <img 
                  src={project.img} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Floating Category Tag */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[8px] font-mono uppercase text-white shadow-lg ${project.accent}`}>
                  {project.category}
                </div>
              </div>

              {/* Project Info & Highlighted Links */}
              <div className="mt-8 space-y-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <h3 className="text-3xl font-black uppercase tracking-tighter">{project.title}</h3>
                  
                  {/* Highlighted Link Buttons */}
                  <div className="flex gap-3">
                     <motion.a 
                        href={project.liveLink} 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-5 py-2.5 bg-[#1a1a1a] text-[#e3e3e3] text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg hover:bg-black transition-colors"
                     >
                        Live Demo
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                     </motion.a>
                     
                     <motion.a 
                        href={project.codeLink} 
                        whileHover={{ scale: 1.05, borderColor: "#1a1a1a" }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-5 py-2.5 bg-white border border-[#1a1a1a]/20 text-[#1a1a1a] text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm hover:shadow-md transition-all"
                     >
                        Source Code
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>
                     </motion.a>
                  </div>
                </div>

                <p className="text-sm opacity-60 leading-relaxed max-w-md">
                   {project.description}
                </p>

                <div className="pt-4 border-t border-[#1a1a1a]/5 flex justify-between items-center">
                  <div className="flex gap-4">
                    {project.stack.map(tech => (
                      <span key={tech} className="text-[9px] font-mono opacity-40 uppercase tracking-widest">{tech}</span>
                    ))}
                  </div>
                  <span className="hidden sm:block text-[9px] font-mono italic opacity-30">
                    Goal: {project.focus}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* FOOTER */}
      <footer className="mt-40 text-center py-10 border-t border-[#1a1a1a]/5">
         <p className="text-[10px] font-mono opacity-20 uppercase tracking-[0.5em]">
            Build Log — Kunal Mahato
         </p>
      </footer>
    </div>
  );
}