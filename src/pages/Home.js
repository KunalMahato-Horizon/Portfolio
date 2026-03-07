import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

import GlobalCursor from "../components/GlobalCursor";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-[#e3e3e3]">
    <div className="w-12 h-12 border-4 border-[#1a1a1a] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Lenis Configuration
const LENIS_CONFIG = {
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: "vertical",
  gestureDirection: "vertical",
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
};

function Home({ initialLoad = false }) {
  const [isLoading, setIsLoading] = useState(initialLoad);

  // Initialize Buttery Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis(LENIS_CONFIG);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Simulate initial loading if needed
  useEffect(() => {
    if (initialLoad) {
      const timer = setTimeout(() => setIsLoading(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [initialLoad]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <Helmet>
        <title>Kunal Mahato - Portfolio</title>
        <meta name="description" content="Welcome to my portfolio. I'm a creative developer specializing in building exceptional digital experiences." />
        <meta name="keywords" content="portfolio, developer, react, javascript, frontend" />
        <meta property="og:title" content="Kunal Mahato - Portfolio" />
        <meta property="og:description" content="Welcome to my portfolio. I'm a creative developer specializing in building exceptional digital experiences." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Page Transition Wrapper */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ 
          duration: 0.8, 
          ease: [0.76, 0, 0.24, 1] 
        }}
        className="min-h-screen bg-[#e3e3e3] text-[#1a1a1a] cursor-none selection:bg-[#1a1a1a] selection:text-[#e3e3e3]"
      >
        <GlobalCursor />
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        
        <Footer />
      </motion.div>
    </>
  );
}

// PropTypes for better type checking
Home.propTypes = {
  initialLoad: PropTypes.bool
};

// Default props
Home.defaultProps = {
  initialLoad: false
};

export default Home;