import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom"; // If using React Router
// OR use next/link if using Next.js

// Import your local images
import anojPortfolio from "../images/Anoj_portfolio.png";
import sonvitriFoundation from "../images/Sonvitri_Foundation-Template.png";
import videoEditorTemplate from "../images/Video_Editor-Template.png";

const projects = [
  { 
    id: "01", 
    title: "ANOJ", 
    cat: "Portfolio Design", 
    img: anojPortfolio,
    liveLink: "https://travel-portfolio-peach.vercel.app/",
    caseStudy: "#"
  },
  { 
    id: "02", 
    title: "NGO", 
    cat: "Foundation Template", 
    img: sonvitriFoundation,
    liveLink: "https://ngo-virid-xi.vercel.app/",
    caseStudy: "#"
  },
  { 
    id: "03", 
    title: "VIDEO ED.", 
    cat: "Creative Portfolio", 
    img: videoEditorTemplate,
    liveLink: "https://video-editor-portfolio-vert.vercel.app/",
    caseStudy: "#"
  },
];

export default function Projects() {
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const xRaw = useTransform(scrollYProgress, [0, 1], ["0vw", "-170vw"]); 
  const x = useSpring(xRaw, { stiffness: 60, damping: 25, mass: 0.5 });

  const bgTextX = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section id="projects" ref={targetRef} className="relative h-[300vh] bg-[#e3e3e3] cursor-none">
      
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Massive Dynamic Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0">
          <motion.h2 
            style={{ x: bgTextX }}
            className="text-[30vw] font-black text-[#1a1a1a]/5 leading-none uppercase select-none whitespace-nowrap"
          >
            Archive Archive
          </motion.h2>
        </div>

        {/* Horizontal Moving List */}
        <motion.div style={{ x }} className="flex gap-16 md:gap-32 px-[10vw] relative z-10 w-max">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} progress={scrollYProgress} index={index} />
          ))}
          
          {/* View All Projects Card */}
          <div className="group relative flex flex-col justify-center w-[85vw] md:w-[60vw] lg:w-[50vw] h-screen flex-shrink-0">
            <div className="absolute top-[15%] md:top-[20%] left-0 md:-left-12 z-20 pointer-events-none">
              <div className="flex items-center gap-4 mb-2 md:mb-4">
                <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.4em] text-[#1a1a1a] uppercase">
                  04
                </span>
                <div className="h-[1px] w-8 bg-[#1a1a1a]"></div>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#1a1a1a]">
                  Explore More
                </span>
              </div>

              <h3 className="text-6xl md:text-8xl lg:text-[8vw] font-black tracking-tighter uppercase leading-[0.85] text-[#1a1a1a] drop-shadow-2xl mix-blend-difference text-white">
                VIEW
                <span className="block">ALL</span>
                <span className="block text-[#1a1a1a]/50">WORK</span>
              </h3>
            </div>

            {/* Image Frame */}
            <Link to="/portfolio">
              <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-sm bg-[#dcdcdc] border border-[#1a1a1a]/5 shadow-2xl z-10 mt-12 md:mt-0 group cursor-none">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#4a4a4a] flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-8xl font-black text-[#e3e3e3]/20">✦</span>
                    <div className="grid grid-cols-3 gap-2 mt-4 opacity-20">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-[#e3e3e3] rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-[#1a1a1a]/80 backdrop-blur-sm flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col items-center gap-4">
                    <span className="px-6 py-3 bg-white text-[#1a1a1a] text-sm font-bold uppercase tracking-widest rounded-full">
                      View Full Portfolio →
                    </span>
                    <span className="text-white text-xs uppercase tracking-widest">
                      {projects.length}+ Projects
                    </span>
                  </div>
                </motion.div>
              </div>
            </Link>

            {/* Bottom Link */}
            <div className="relative z-20 flex justify-end w-full mt-6 md:mt-8">
              <Link 
                to="/portfolio"
                className="group/btn flex items-center gap-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#1a1a1a] transition-all duration-300 pointer-events-auto"
              >
                Explore All Work
                <div className="w-8 md:w-12 h-[1px] bg-[#1a1a1a] group-hover/btn:w-16 transition-all duration-300"></div>
                <span className="text-xs opacity-50 group-hover/btn:translate-x-2 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Progress Indicator */}
        <div className="absolute bottom-12 left-6 right-6 md:left-12 md:right-12 flex justify-between items-end z-30 pointer-events-none">
          <div className="flex flex-col text-[#1a1a1a]">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-50 mb-2">
              Scroll / Explore
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono font-bold">01</span>
            <div className="w-32 md:w-64 h-[2px] bg-[#1a1a1a]/10 relative overflow-hidden pointer-events-auto">
              <motion.div 
                style={{ scaleX: scrollYProgress }} 
                className="absolute inset-0 bg-[#1a1a1a] origin-left"
              />
            </div>
            <span className="text-xs font-mono font-bold">0{projects.length + 1}</span>
          </div>
        </div>

        {/* Floating Portfolio Link - Alternative Option */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute top-32 right-12 z-40 hidden lg:block"
        >
          <Link 
            to="/portfolio"
            className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest hover:opacity-50 transition-opacity cursor-none"
          >
            <span>Full Portfolio</span>
            <div className="w-8 h-[1px] bg-[#1a1a1a]"></div>
            <span className="text-lg">→</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

function ProjectCard({ project, progress }) {
  const [isHovered, setIsHovered] = useState(false);
  
  const imageX = useTransform(progress, [0, 1], ["-15%", "15%"]);

  return (
    <div 
      className="group relative flex flex-col justify-center w-[85vw] md:w-[60vw] lg:w-[50vw] h-screen flex-shrink-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* Grid-Breaking Typography */}
      <div className="absolute top-[15%] md:top-[20%] left-0 md:-left-12 z-20 pointer-events-none">
        <div className="flex items-center gap-4 mb-2 md:mb-4">
          <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.4em] text-[#1a1a1a] uppercase">
             {project.id}
          </span>
          <div className="h-[1px] w-8 bg-[#1a1a1a]"></div>
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#1a1a1a]">
             {project.cat}
          </span>
        </div>

        <h3 className="text-6xl md:text-8xl lg:text-[8vw] font-black tracking-tighter uppercase leading-[0.85] text-[#1a1a1a] drop-shadow-2xl mix-blend-difference text-white">
          {project.title}
        </h3>
      </div>

      {/* The Image Frame */}
      <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-sm bg-[#dcdcdc] border border-[#1a1a1a]/5 shadow-2xl z-10 mt-12 md:mt-0">
        <motion.img
          style={{ x: imageX, scale: 1.15 }}
          src={project.img}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover grayscale-[40%] brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 ease-[0.25,1,0.5,1]"
        />
        <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.1)] pointer-events-none"></div>
        
        {/* Live Link Overlay */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-[#1a1a1a]/80 backdrop-blur-sm flex items-center justify-center z-30"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="px-6 py-3 bg-white text-[#1a1a1a] text-sm font-bold uppercase tracking-widest rounded-full hover:bg-[#e3e3e3] transition-colors duration-300 cursor-none"
              onClick={(e) => e.stopPropagation()}
            >
              Live Preview
            </motion.a>
            
            <motion.a
              href={project.caseStudy || "#"}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="text-white text-xs uppercase tracking-widest hover:underline cursor-none"
              onClick={(e) => e.stopPropagation()}
            >
              Case Study
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Action Buttons */}
      <div className="relative z-20 flex justify-between items-center w-full mt-6 md:mt-8">
        <motion.a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group/live flex items-center gap-3 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#1a1a1a] transition-all duration-300 pointer-events-auto md:hidden"
        >
          <span>Live Demo</span>
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
          </svg>
        </motion.a>

        <motion.a 
          href={project.caseStudy || "#"}
          className="group/btn flex items-center gap-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#1a1a1a] transition-all duration-300 pointer-events-auto ml-auto"
        >
           View Case Study 
           <div className="w-8 md:w-12 h-[1px] bg-[#1a1a1a] group-hover/btn:w-16 transition-all duration-300"></div>
        </motion.a>
      </div>

      {/* Tooltip */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
        transition={{ duration: 0.2 }}
        className="absolute bottom-[15%] left-[5%] z-40 hidden md:block pointer-events-none"
      >
        <div className="bg-[#1a1a1a] text-white text-[8px] px-2 py-1 rounded-full uppercase tracking-widest">
          Hover image for live preview
        </div>
      </motion.div>
    </div>
  );
} 