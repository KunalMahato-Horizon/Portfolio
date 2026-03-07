import { motion, useSpring } from "framer-motion";
import { useState, useEffect } from "react";

export default function GlobalCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.4 };
  const springX = useSpring(-100, springConfig);
  const springY = useSpring(-100, springConfig);

  useEffect(() => {
    // 1. Detect if it's a touch device (phones/tablets)
    const touchCheck = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(touchCheck);

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      springX.set(e.clientX);
      springY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable =
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button');

      setIsHovering(isClickable);
    };

    if (!touchCheck) {
      window.addEventListener("mousemove", updateMousePosition);
      window.addEventListener("mouseover", handleMouseOver);
    }

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [springX, springY]);

  // If it's a touch device, we return null to avoid a frozen cursor dot on the screen
  if (isTouchDevice) return null;

  return (
    <>
      {/* LAYER 1: THE CORE DOT */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[99999] mix-blend-difference"
        style={{
          transform: `translate3d(${mousePosition.x - 4}px, ${mousePosition.y - 4}px, 0) scale(${isHovering ? 0 : 1})`,
          transition: "transform 0.15s ease-out",
          willChange: "transform"
        }}
      />

      {/* LAYER 2: THE TRAILING RING */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-white rounded-full pointer-events-none z-[99998] mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          willChange: "transform"
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          // We make it slightly smaller on smaller non-touch windows
          width: window.innerWidth < 1024 ? 30 : 40,
          height: window.innerWidth < 1024 ? 30 : 40,
          backgroundColor: isHovering ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
        }}
        transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
      />
    </>
  );
}