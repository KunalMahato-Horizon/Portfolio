import { motion, useMotionValue, useSpring, } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import heroImage from '../images/hero.JPG';

export default function Hero() {
  const [hoverState, setHoverState] = useState("default");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  // Check for mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // // Parallax effect for image (desktop only)
  // const imageX = useTransform(smoothX, [0, window.innerWidth], [-20, 20]);
  // const imageY = useTransform(smoothY, [0, window.innerHeight], [-20, 20]);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      if (containerRef.current && !isMobile) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePosition({ x, y });
      }
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY, isMobile]);

  const cursorVariants = {
    default: { 
      width: 16, 
      height: 16, 
      backgroundColor: "#ffffff", 
      mixBlendMode: "difference" 
    },
    image: { 
      width: isMobile ? 16 : 120, 
      height: isMobile ? 16 : 120, 
      backgroundColor: "#ffffff", 
      mixBlendMode: "difference" 
    },
    link: { 
      width: isMobile ? 16 : 50, 
      height: isMobile ? 16 : 50, 
      backgroundColor: "#ffffff", 
      mixBlendMode: "difference" 
    }
  };

  return (
    <section 
      id="home"
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#e3e3e3] overflow-x-hidden md:overflow-hidden cursor-none"
    >
      {/* Custom Cursor - hidden on mobile */}
      {!isMobile && (
        <motion.div
          variants={cursorVariants}
          animate={hoverState}
          style={{ 
            left: smoothX, 
            top: smoothY, 
            x: "-50%", 
            y: "-50%" 
          }}
          className="fixed z-[9999] pointer-events-none rounded-full flex items-center justify-center overflow-hidden hidden md:flex backdrop-blur-sm bg-white/10"
        >
          <motion.span 
            animate={{ 
              opacity: hoverState === "image" ? 1 : 0,
              scale: hoverState === "image" ? 1 : 0.5
            }}
            className="text-black font-bold text-sm tracking-widest uppercase"
          >
            Explore
          </motion.span>
        </motion.div>
      )}

      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, #1a1a1a 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Main content container */}
      <div className="relative min-h-screen md:h-screen flex flex-col md:block max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-0">
        
        {/* Typography - responsive positioning */}
        <div className="relative md:absolute z-10 left-0 md:left-[4%] lg:left-[6%] top-0 md:top-[18%] lg:top-[15%] w-full md:w-auto pt-8 md:pt-0">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[18vw] md:text-[15vw] lg:text-[11vw] font-black leading-[0.8] tracking-[-0.03em] text-[#1a1a1a] md:text-white md:mix-blend-difference"
          >
            KUNAL
          </motion.h1>
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[18vw] md:text-[15vw] lg:text-[11vw] font-black leading-[0.8] tracking-[-0.03em] text-[#1a1a1a] md:text-white md:mix-blend-difference md:pl-[4vw] lg:pl-[5vw]"
          >
            MAHATO
          </motion.h1>
          
          {/* Small descriptor - hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hidden md:flex absolute -bottom-12 left-1 items-center gap-3"
          >
            <div className="w-12 h-px bg-current opacity-30"></div>
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-current opacity-60">
              Frontend Developer
            </span>
          </motion.div>
        </div>

        {/* Image - responsive positioning */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          onMouseEnter={() => setHoverState("image")}
          onMouseLeave={() => setHoverState("default")}
          className="relative md:absolute z-0 w-full md:w-[45vw] lg:w-[32vw] mx-auto md:mx-0 md:right-[5%] lg:right-[8%] mt-8 md:mt-0 md:top-[12%] lg:top-[10%]"
        >
          {/* Frame */}
          <div className="relative">
            {/* Outer frame lines - hidden on mobile */}
            <div className="absolute -inset-4 border border-white/10 rounded-sm hidden md:block"></div>
            <div className="absolute -inset-2 border border-white/5 rounded-sm hidden md:block"></div>
            
            {/* Image container */}
            <motion.div 
              className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-lg md:rounded-sm"
              animate={!isMobile ? {
                x: mousePosition.x * 10,
                y: mousePosition.y * 10,
              } : {}}
              transition={{ type: "spring", stiffness: 50, damping: 30 }}
            >
              <img 
                src={heroImage} 
                alt="Kunal Mahato"
                className="w-full h-full object-cover grayscale brightness-90 hover:scale-105 transition-transform duration-700"
              />
              
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </motion.div>

            {/* Minimal caption - hidden on mobile */}
            <div className="absolute -bottom-8 right-0 items-center gap-3 text-white/40 text-xs hidden md:flex">
              <span>—</span>
              <span>2024</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom section with description and CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative md:absolute z-20 w-full md:w-auto left-0 md:left-[4%] lg:left-[6%] right-0 md:right-[4%] lg:right-[6%] bottom-0 md:bottom-12 mt-12 md:mt-0"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-0">
            {/* Description */}
            <div className="max-w-md">
              <p className="text-sm md:text-base text-[#1a1a1a]/70 leading-relaxed">
                Building modern, high-performing websites that help businesses grow.
                <span className="block mt-1 font-medium text-[#1a1a1a]/90">that help brands lead.
                <div>React • Node.js • Tailwind • MongoDB</div></span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a 
                href="#contact"
                onMouseEnter={() => setHoverState("link")}
                onMouseLeave={() => setHoverState("default")}
                className="group relative px-6 py-3 bg-[#1a1a1a] text-[#e3e3e3] rounded-full overflow-hidden w-full sm:w-auto text-center cursor-none"
              >
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10 font-medium text-sm mix-blend-difference group-hover:text-black transition-colors duration-500">
                  Start Project
                </span>
              </a>
              
              <a 
                href="#work" 
                onMouseEnter={() => setHoverState("link")}
                onMouseLeave={() => setHoverState("default")}
                className="px-6 py-3 border border-[#1a1a1a]/20 text-[#1a1a1a] rounded-full text-sm font-medium hover:border-[#1a1a1a]/40 transition-all duration-300 w-full sm:w-auto text-center cursor-none"
              >
                View Work
              </a>
            </div>
          </div>
        </motion.div>

        {/* Decorative vertical line - hidden on mobile */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "30%" }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute left-[2%] top-[15%] w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block"
        />

        {/* Scroll indicator - hidden on mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 hidden md:flex"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#1a1a1a]/30">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-[#1a1a1a]/20 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
}