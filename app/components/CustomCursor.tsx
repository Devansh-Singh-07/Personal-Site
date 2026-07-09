"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Directly bind motion values for 100% INSTANT tracking
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  useEffect(() => {
    setIsMounted(true);

    const manageMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const manageMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.getAttribute('role') === 'button' ||
        window.getComputedStyle(target).cursor === 'pointer';
        
      setIsHovering(isClickable);
    };

    window.addEventListener("mousemove", manageMouseMove);
    window.addEventListener("mouseover", manageMouseOver);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      window.removeEventListener("mouseover", manageMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!isMounted) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @media (pointer: fine) and (min-width: 768px) {
          html, body, * {
            cursor: none !important;
          }
        }
      `}} />

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[10000] hidden md:block rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
        style={{
          x: mouseX,
          y: mouseY,
          // Perfectly center the circle over the exact mouse coordinates
          translateX: "-50%",
          translateY: "-50%",
        }}
        initial={false}
        animate={{
          width: isHovering ? 48 : 16,
          height: isHovering ? 48 : 16,
          backgroundColor: isHovering ? "rgba(226, 255, 62, 0.4)" : "#E2FF3E", // Translucent Lime on hover, Solid Lime default
          border: isHovering ? "2px solid #52057E" : "2px solid #000000",     // Purple border on hover, Black border default
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />
    </>
  );
}
