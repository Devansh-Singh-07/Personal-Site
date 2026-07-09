"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { MessageCircle, FileText, Mail, Briefcase, GitBranch, X } from "lucide-react";
import ResumeModal from "./ResumeModal";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => {
      setIsHovered(false);
    }, 2000); // Effect lasts 3 seconds max
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    };
  }, []);

  return (
    <section className="relative min-h-screen pt-24 md:pt-30 px-6 md:px-16 flex flex-col md:flex-row justify-between items-stretch max-w-[1728px] mx-auto overflow-hidden md:overflow-visible">
      {/* Background Blur Overlay (Desktop) */}
      <div
        className={`hidden md:block fixed inset-0 z-40 bg-white/40 backdrop-blur-2xl transition-opacity duration-500 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      {/* Contact Modal */}
      <AnimatePresence>
        {isContactOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={() => setIsContactOpen(false)} />
            <motion.div 
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="relative w-full max-w-xl bg-white border-[8px] border-black shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] rounded-[40px] p-8 md:p-12 flex flex-col gap-8"
            >
              <button
                onClick={() => setIsContactOpen(false)}
                className="absolute top-6 right-6 w-12 h-12 bg-red-500 border-[4px] border-black rounded-full flex justify-center items-center hover:scale-110 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <X className="w-6 h-6 text-black" strokeWidth={3} />
              </button>

              <h2 className="font-heading text-5xl md:text-7xl text-black">Let's Connect!</h2>

              <div className="flex flex-col gap-4">
                <a href="mailto:devanshsingh0412@gmail.com" className="w-full bg-[#E2FF3E] border-[4px] border-black rounded-[24px] p-4 flex items-center justify-between hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-black rounded-full flex justify-center items-center group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-[#E2FF3E]" />
                    </div>
                    <span className="font-body text-2xl md:text-3xl font-bold text-black">Email Me</span>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/devansh-pratap-singh07/" target="_blank" rel="noopener noreferrer" className="w-full bg-[#52057E] border-[4px] border-black rounded-[24px] p-4 flex items-center justify-between hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-black rounded-full flex justify-center items-center group-hover:scale-110 transition-transform">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-body text-2xl md:text-3xl font-bold text-white">LinkedIn</span>
                  </div>
                </a>

                <a href="https://github.com/Devansh-Singh-07" target="_blank" rel="noopener noreferrer" className="w-full bg-black border-[4px] border-black rounded-[24px] p-4 flex items-center justify-between hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(226,255,62,1)] transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center group-hover:scale-110 transition-transform">
                      <GitBranch className="w-6 h-6 text-black" />
                    </div>
                    <span className="font-body text-2xl md:text-3xl font-bold text-white">GitHub</span>
                  </div>
                </a>

                <button onClick={() => { setIsContactOpen(false); setIsResumeOpen(true); }} className="w-full bg-white border-[4px] border-black rounded-[24px] p-4 flex items-center justify-between hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-black rounded-full flex justify-center items-center group-hover:scale-110 transition-transform">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-body text-2xl md:text-3xl font-bold text-black">View Resume</span>
                  </div>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Left Content */}
      <div className="flex-1 z-10 max-w-3xl flex flex-col justify-start md:justify-center pt-8 md:pt-10 pb-40 md:pb-0">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <p className="font-body text-2xl md:text-3xl font-bold">
            <span className="text-[#52057E]">●</span> FullStack Web & iOS
            Developer
          </p>
        </motion.div>

        <h1 className="font-heading text-7xl sm:text-[90px] md:text-[150px] leading-[1.1] mb-6 md:mb-8 flex flex-col -space-y-4 md:-space-y-8">
          <span className="block overflow-hidden pb-2 md:pb-4 pt-2">
            <motion.span 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
              className="text-[#1E1E1E] block"
            >
              Devansh
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-2 md:pb-4 pt-2">
            <motion.span 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
              className="text-[#52057E] block"
            >
              Singh
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-sans text-xl md:text-[32px] leading-tight mb-8 md:mb-12 font-medium max-w-xl"
        >
          I build solutions and Experiences that solve real-world problems.
        </motion.p>

        {/* Desktop Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="hidden md:flex flex-row flex-nowrap items-center gap-6 mb-16 w-full justify-start"
        >
          <button
            onClick={() => setIsContactOpen(true)}
            className="bg-[#52057E] text-white rounded-[40px] px-8 py-5 flex items-center justify-center gap-4 font-body text-[32px] hover:scale-105 transition-transform shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex-1 max-w-[290px] border-[4px] border-black"
          >
            Contact me
            <MessageCircle className="w-8 h-8 shrink-0" />
          </button>
          <button
            onClick={() => setIsResumeOpen(true)}
            className="bg-black text-[#E2FF3E] rounded-[40px] px-8 py-5 flex items-center justify-center gap-4 font-body text-[32px] hover:scale-105 transition-transform shadow-[6px_6px_0px_0px_rgba(82,5,126,1)] flex-1 max-w-[290px] border-[4px] border-[#52057E]"
          >
            My Resume
            <FileText className="w-8 h-8 shrink-0" />
          </button>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-row flex-wrap md:flex-nowrap items-center gap-4 md:gap-8 font-body text-[20px] md:text-[32px] leading-tight"
        >
          <div className="bg-white md:bg-transparent border-[3px] border-black md:border-none rounded-[20px] md:rounded-none px-4 py-2 md:p-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-none">
            <span className="text-[#52057E] font-bold">10+</span> <br className="hidden md:block" />
            Projects
          </div>
          <div className="hidden md:block w-[4px] h-[88px] bg-[#52057E] rounded-full mx-2" />
          <div className="bg-white md:bg-transparent border-[3px] border-black md:border-none rounded-[20px] md:rounded-none px-4 py-2 md:p-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-none">
            <span className="text-[#52057E] font-bold">300+</span> <br className="hidden md:block" />
            DSA Problems
          </div>
          <div className="hidden md:block w-[4px] h-[88px] bg-[#52057E] rounded-full mx-2" />
          <div className="bg-white md:bg-transparent border-[3px] border-black md:border-none rounded-[20px] md:rounded-none px-4 py-2 md:p-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-none">
            <span className="text-[#52057E] font-bold">4+</span> <br className="hidden md:block" />
            Years Learning
          </div>
        </motion.div>
      </div>

      {/* Right Content (Image) - Mobile uses absolute positioning bottom, Desktop uses flex */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
        className="hidden md:flex absolute bottom-20 md:bottom-0 -right-10 md:right-0 w-[120%] md:w-auto h-[60vh] md:h-auto md:relative flex-col flex-1 mt-16 md:mt-0 z-0 md:z-50 pointer-events-none md:pointer-events-auto"
      >
        {/* Composition Wrapper */}
        <div className="relative w-full flex-1 min-h-[400px] md:min-h-[500px] lg:min-h-[650px] xl:min-h-[850px]">
          {/* Purple Background - Trapezoid */}
          <div
            className="absolute inset-0 bg-[#52057E] -z-10"
            style={{
              clipPath: "polygon(0% 60%, 110% 15%, 100% 100%, 0% 100%)",
            }}
          />

          {/* Hover Text & Arrow (Desktop Only) */}
          <div className={`hidden md:flex absolute top-[40%] right-[80%] xl:right-[100%] items-center gap-4 transition-all duration-700 pointer-events-none z-50 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90 translate-x-10'}`}>
            <span className="text-6xl md:text-8xl text-black font-medium -rotate-12 whitespace-nowrap" style={{ fontFamily: "'Caveat', cursive" }}>
              Builder at heart
            </span>
            <svg className="w-24 h-24 text-black transform rotate-[15deg] mt-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 20 Q 50 20 80 70" stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none" />
              <path d="M 55 70 L 80 70 L 70 45" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>

          {/* Image Overlay */}
          <div className="absolute inset-0 z-10 flex justify-center md:justify-end lg:justify-center items-end pointer-events-none">
            <Image
              src="/DevanshAgain.png"
              alt="Devansh Singh"
              width={1000}
              height={1000}
              className={`w-auto h-[110%] md:h-full object-bottom transform transition-transform duration-700 md:pointer-events-auto origin-bottom ${isHovered ? 'scale-[1.03] cursor-none' : 'scale-100 cursor-default'}`}
              priority
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        </div>
      </motion.div>

      {/* Floating Mobile Dock */}
      <motion.div 
        initial={{ y: 150 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.8, type: "spring", bounce: 0.4 }}
        className="md:hidden fixed bottom-6 left-6 right-6 z-[90] flex gap-3"
      >
        <button
          onClick={() => setIsContactOpen(true)}
          className="flex-1 bg-[#52057E] text-white rounded-[24px] py-4 flex items-center justify-center gap-2 font-body text-xl font-bold border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-1 active:translate-x-1 transition-all"
        >
          Contact <MessageCircle className="w-5 h-5" />
        </button>
        <button
          onClick={() => setIsResumeOpen(true)}
          className="flex-1 bg-black text-[#E2FF3E] rounded-[24px] py-4 flex items-center justify-center gap-2 font-body text-xl font-bold border-[3px] border-[#52057E] shadow-[4px_4px_0px_0px_rgba(82,5,126,1)] active:shadow-none active:translate-y-1 active:translate-x-1 transition-all"
        >
          Resume <FileText className="w-5 h-5" />
        </button>
      </motion.div>
    </section>
  );
}