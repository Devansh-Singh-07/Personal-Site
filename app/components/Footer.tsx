"use client";

import { useState, useRef } from "react";
import { ArrowUp, Mail, Briefcase, GitBranch, FileText } from "lucide-react";
import ResumeModal from "./ResumeModal";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

export default function Footer() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const footerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });

  const scaleText = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityText = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <footer ref={footerRef} id="contact" className="bg-black text-[#E2FF3E] border-t-[8px] border-black pt-20 pb-12 px-6 md:px-16 relative overflow-hidden z-20">
      <div className="max-w-[1728px] mx-auto flex flex-col items-center">
        
        {/* Massive Headline */}
        <motion.h2 
          style={{ scale: scaleText, opacity: opacityText }}
          className="font-heading text-6xl md:text-[150px] leading-[0.9] text-center mb-16 md:mb-24 uppercase origin-bottom"
        >
          Let's Build <br />
          <span className="text-transparent text-stroke-lime">Something</span> <br />
          Extraordinary.
        </motion.h2>

        {/* Social Links & Resume Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-5xl mb-24"
        >
          <motion.a 
            variants={itemVariants}
            href="mailto:devanshsingh0412@gmail.com"
            className="bg-[#E2FF3E] text-black border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(226,255,62,0.3)] hover:shadow-[12px_12px_0px_0px_rgba(226,255,62,1)] rounded-[30px] p-6 flex flex-col items-center gap-4 hover:-translate-y-2 hover:-translate-x-2 transition-all group active:translate-y-0 active:translate-x-0 active:shadow-[2px_2px_0px_0px_rgba(226,255,62,1)]"
          >
            <div className="w-16 h-16 bg-black rounded-full flex justify-center items-center group-hover:scale-110 transition-transform">
              <Mail className="w-8 h-8 text-[#E2FF3E]" />
            </div>
            <span className="font-body text-2xl font-bold uppercase tracking-widest">Email</span>
          </motion.a>

          <motion.a 
            variants={itemVariants}
            href="https://www.linkedin.com/in/devansh-pratap-singh07/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#52057E] text-white border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(82,5,126,0.3)] hover:shadow-[12px_12px_0px_0px_rgba(82,5,126,1)] rounded-[30px] p-6 flex flex-col items-center gap-4 hover:-translate-y-2 hover:-translate-x-2 transition-all group active:translate-y-0 active:translate-x-0 active:shadow-[2px_2px_0px_0px_rgba(82,5,126,1)]"
          >
            <div className="w-16 h-16 bg-black rounded-full flex justify-center items-center group-hover:scale-110 transition-transform">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <span className="font-body text-2xl font-bold uppercase tracking-widest">LinkedIn</span>
          </motion.a>

          <motion.a 
            variants={itemVariants}
            href="https://github.com/Devansh-Singh-07"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)] hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] rounded-[30px] p-6 flex flex-col items-center gap-4 hover:-translate-y-2 hover:-translate-x-2 transition-all group active:translate-y-0 active:translate-x-0 active:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
          >
            <div className="w-16 h-16 bg-black rounded-full flex justify-center items-center group-hover:scale-110 transition-transform">
              <GitBranch className="w-8 h-8 text-white" />
            </div>
            <span className="font-body text-2xl font-bold uppercase tracking-widest">GitHub</span>
          </motion.a>

          <motion.button 
            variants={itemVariants}
            onClick={() => setIsResumeOpen(true)}
            className="bg-[#1E1E1E] text-[#E2FF3E] border-[4px] border-[#E2FF3E] shadow-[6px_6px_0px_0px_rgba(226,255,62,0.3)] hover:shadow-[12px_12px_0px_0px_rgba(226,255,62,1)] rounded-[30px] p-6 flex flex-col items-center gap-4 hover:-translate-y-2 hover:-translate-x-2 transition-all group active:translate-y-0 active:translate-x-0 active:shadow-[2px_2px_0px_0px_rgba(226,255,62,1)]"
          >
            <div className="w-16 h-16 bg-[#E2FF3E] rounded-full flex justify-center items-center group-hover:scale-110 transition-transform">
              <FileText className="w-8 h-8 text-black" />
            </div>
            <span className="font-body text-2xl font-bold uppercase tracking-widest">Resume</span>
          </motion.button>
        </motion.div>

        {/* Bottom Bar */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t-[4px] border-[#333] gap-6">
          <p className="font-sans font-bold text-center md:text-left text-sm md:text-lg text-gray-400">
            © {new Date().getFullYear()} DEVANSH SINGH. ALL RIGHTS RESERVED.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-3 font-body text-xl font-bold uppercase tracking-widest hover:text-white transition-colors group"
          >
            Back To Top
            <div className="w-10 h-10 border-[3px] border-[#E2FF3E] rounded-full flex justify-center items-center group-hover:bg-[#E2FF3E] group-hover:text-black transition-all">
              <ArrowUp className="w-5 h-5" />
            </div>
          </button>
        </div>

      </div>
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </footer>
  );
}
