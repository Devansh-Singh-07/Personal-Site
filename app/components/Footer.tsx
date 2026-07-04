"use client";

import { ArrowUp, Mail, Briefcase, GitBranch, FileText } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-[#E2FF3E] border-t-[8px] border-black pt-20 pb-12 px-6 md:px-16 relative overflow-hidden z-20">
      <div className="max-w-[1728px] mx-auto flex flex-col items-center">
        
        {/* Massive Headline */}
        <h2 className="font-heading text-6xl md:text-[150px] leading-[0.9] text-center mb-16 md:mb-24 uppercase">
          Let's Build <br />
          <span className="text-transparent text-stroke-lime">Something</span> <br />
          Extraordinary.
        </h2>

        {/* Social Links & Resume Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-5xl mb-24">
          <a 
            href="mailto:hello@example.com"
            className="bg-[#E2FF3E] text-black border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(226,255,62,0.3)] hover:shadow-[12px_12px_0px_0px_rgba(226,255,62,1)] rounded-[30px] p-6 flex flex-col items-center gap-4 hover:-translate-y-2 hover:-translate-x-2 transition-all group"
          >
            <div className="w-16 h-16 bg-black rounded-full flex justify-center items-center group-hover:scale-110 transition-transform">
              <Mail className="w-8 h-8 text-[#E2FF3E]" />
            </div>
            <span className="font-body text-2xl font-bold uppercase tracking-widest">Email</span>
          </a>

          <a 
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#52057E] text-white border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(82,5,126,0.3)] hover:shadow-[12px_12px_0px_0px_rgba(82,5,126,1)] rounded-[30px] p-6 flex flex-col items-center gap-4 hover:-translate-y-2 hover:-translate-x-2 transition-all group"
          >
            <div className="w-16 h-16 bg-black rounded-full flex justify-center items-center group-hover:scale-110 transition-transform">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <span className="font-body text-2xl font-bold uppercase tracking-widest">LinkedIn</span>
          </a>

          <a 
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)] hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] rounded-[30px] p-6 flex flex-col items-center gap-4 hover:-translate-y-2 hover:-translate-x-2 transition-all group"
          >
            <div className="w-16 h-16 bg-black rounded-full flex justify-center items-center group-hover:scale-110 transition-transform">
              <GitBranch className="w-8 h-8 text-white" />
            </div>
            <span className="font-body text-2xl font-bold uppercase tracking-widest">GitHub</span>
          </a>

          <a 
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1E1E1E] text-[#E2FF3E] border-[4px] border-[#E2FF3E] shadow-[6px_6px_0px_0px_rgba(226,255,62,0.3)] hover:shadow-[12px_12px_0px_0px_rgba(226,255,62,1)] rounded-[30px] p-6 flex flex-col items-center gap-4 hover:-translate-y-2 hover:-translate-x-2 transition-all group"
          >
            <div className="w-16 h-16 bg-[#E2FF3E] rounded-full flex justify-center items-center group-hover:scale-110 transition-transform">
              <FileText className="w-8 h-8 text-black" />
            </div>
            <span className="font-body text-2xl font-bold uppercase tracking-widest">Resume</span>
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t-[4px] border-[#333] gap-6">
          <p className="font-sans font-bold text-lg text-gray-400">
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
    </footer>
  );
}
