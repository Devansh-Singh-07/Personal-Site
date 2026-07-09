"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Apple, Menu, X } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const links = [
    { name: "Home", href: "#" },
    { name: "Arsenal", href: "#skills" },
    { name: "iOS", href: "#apps" },
    { name: "Projects", href: "#projects" },
    { name: "Plans", href: "#progress" },
    { name: "Contact", href: "#contact" },
  ];

  const menuVariants: Variants = {
    closed: { y: "-100%", transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } },
    open: { y: 0, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } },
  };

  const linkVariants: Variants = {
    closed: { y: 50, opacity: 0 },
    open: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: 0.2 + i * 0.1, duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    }),
  };

  return (
    <>
      <nav className="fixed top-6 md:top-8 w-full z-[100] px-6 md:px-8 grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center max-w-[1728px] mx-auto animate-fade-in-up pointer-events-none">
        {/* Left Column Spacer (Desktop) / Logo (Mobile) */}
        <div className="pointer-events-auto md:pointer-events-none flex items-center">
          <span className="md:hidden font-heading text-3xl font-black text-black text-stroke-white" style={{ WebkitTextStroke: "1px white" }}>
            DS.
          </span>
        </div>

        {/* Center Navigation Links (Desktop) */}
        <div className="bg-[#52057E] rounded-[50px] px-12 py-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] pointer-events-auto hidden md:block border-[4px] border-black">
          <ul className="flex items-center gap-12 text-white font-body text-2xl md:text-3xl">
            {links.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-[#E2FF3E] transition-colors duration-300">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right CTA & Mobile Menu Toggle */}
        <div className="flex justify-end items-center gap-4 pointer-events-auto">
          <Link
            href="#native"
            className="hidden md:flex bg-[#52057E] border-[4px] border-black rounded-[40px] px-8 py-4 items-center gap-4 text-white font-body text-2xl md:text-3xl hover:bg-black hover:text-[#E2FF3E] transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            Go
            <Apple className="w-8 h-8" />
            Native
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden w-12 h-12 bg-[#E2FF3E] border-[3px] border-black rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-1 active:translate-x-1 transition-all"
          >
            <Menu className="w-6 h-6 text-black" strokeWidth={3} />
          </button>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-[1000] bg-black flex flex-col justify-center items-center px-6 md:hidden"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 bg-white border-[3px] border-black rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(226,255,62,1)] active:shadow-none active:translate-y-1 active:translate-x-1 transition-all"
            >
              <X className="w-6 h-6 text-black" strokeWidth={3} />
            </button>

            <div className="w-full h-full flex flex-col justify-center">
              <ul className="flex flex-col gap-6 w-full">
                {links.map((link, i) => (
                  <motion.li
                    key={link.name}
                    custom={i}
                    variants={linkVariants}
                    className="overflow-hidden"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block font-heading text-6xl text-white hover:text-[#E2FF3E] uppercase transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              
              <motion.div 
                custom={links.length}
                variants={linkVariants}
                className="mt-12 w-full"
              >
                <Link
                  href="#native"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex justify-between bg-[#52057E] border-[4px] border-[#E2FF3E] rounded-[40px] px-8 py-5 items-center gap-4 text-white font-body text-3xl transition-all shadow-[6px_6px_0px_0px_rgba(226,255,62,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(226,255,62,1)]"
                >
                  <span className="font-bold">Go Native</span>
                  <div className="bg-[#E2FF3E] p-2 rounded-full">
                    <Apple className="w-8 h-8 text-black" />
                  </div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
