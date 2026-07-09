"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Directly bind motion values for 100% INSTANT tracking (No Spring)
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
      {/* 
        Injecting a global style block ensures the default cursor is ALWAYS hidden 
        everywhere (including html, body, and all children) ONLY when this component 
        is rendered and only on screens where the custom cursor is visible (md: >= 768px).
      */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (pointer: fine) and (min-width: 768px) {
          html, body, * {
            cursor: none !important;
          }
        }
      `}} />

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[10000] hidden md:block"
        style={{
          x: mouseX,
          y: mouseY,
        }}
      >
      <motion.div
        className="relative flex items-start justify-start origin-top-left"
        initial={false}
        animate={{
          scale: isHovering ? 1.1 : 1,
          rotate: isHovering ? -8 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="#E2FF3E"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            overflow: "visible",
            filter: isHovering 
              ? "drop-shadow(6px 6px 0px rgba(0,0,0,1))" 
              : "drop-shadow(4px 4px 0px rgba(0,0,0,1))",
            transition: "all 0.2s ease-out"
          }}
        >
          {/* Custom chunky pointer starting exactly at 0,0 for accurate clicking */}
          <path d="M0 0 L16 7 L9 10 L13 18 L9 19 L5 11 L0 16 Z" />
        </svg>

        {/* Hover Pop-up Tooltip */}
        <AnimatePresence>
          {isHovering && (
            <motion.div
              initial={{ opacity: 0, x: 0, scale: 0.8 }}
              animate={{ opacity: 1, x: 32, scale: 1 }}
              exit={{ opacity: 0, x: 0, scale: 0.8 }}
              className="absolute left-6 top-3 bg-white px-3 py-1 rounded-[12px] border-[3px] border-black font-body font-bold text-black text-sm whitespace-nowrap shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              Click me!
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
    </>
  );
}
