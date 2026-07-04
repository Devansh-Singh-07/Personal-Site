"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, FileText, Mail, Briefcase, GitBranch, X } from "lucide-react";

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section className="relative min-h-screen pt-30 px-6 md:px-16 flex flex-col md:flex-row justify-between items-stretch max-w-[1728px] mx-auto">
      {/* Background Blur Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white/40 backdrop-blur-2xl transition-opacity duration-500 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md animate-fade-in-up" style={{ animationDuration: '0.3s' }} onClick={() => setIsContactOpen(false)} />

          <div className="relative w-full max-w-xl bg-white border-[8px] border-black shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] rounded-[40px] p-8 md:p-12 flex flex-col gap-8 animate-fade-in-up" style={{ animationDuration: '0.4s' }}>
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

              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full bg-white border-[4px] border-black rounded-[24px] p-4 flex items-center justify-between hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black rounded-full flex justify-center items-center group-hover:scale-110 transition-transform">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-body text-2xl md:text-3xl font-bold text-black">Download Resume</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Left Content */}
      <div className="flex-1 z-10 max-w-3xl flex flex-col justify-center pt-10">
        <div className="mb-4 animate-fade-in-up">
          <p className="font-body text-3xl font-bold">
            <span className="text-[#52057E]">●</span> FullStack Web & iOS
            Developer
          </p>
        </div>

        <h1
          className="font-heading text-6xl md:text-[150px] leading-[0.8] mb-8 animate-fade-in-up"
          style={{ animationDelay: "100ms" }}
        >
          <span className="text-[#1E1E1E] block mb-10">Devansh</span>
          <span className="text-[#52057E] block ">Singh</span>
        </h1>

        <p
          className="font-sans text-2xl md:text-[32px] leading-tight mb-12 font-medium max-w-xl animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          I build solutions and Experiences that solve real-world problems.
        </p>

        <div
          className="flex flex-row flex-nowrap items-center gap-2 md:gap-6 mb-16 animate-fade-in-up w-full justify-start"
          style={{ animationDelay: "300ms" }}
        >
          <button
            onClick={() => setIsContactOpen(true)}
            className="bg-[#52057E] text-white rounded-[40px] px-4 py-3 md:px-8 md:py-5 flex items-center justify-center gap-2 md:gap-4 font-body text-[14px] md:text-[32px] hover:scale-105 transition-transform shadow-lg flex-1 max-w-[290px]"
          >
            Contact me
            <MessageCircle className="w-5 h-5 md:w-8 md:h-8 shrink-0" />
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-[#E2FF3E] rounded-[40px] px-4 py-3 md:px-8 md:py-5 flex items-center justify-center gap-2 md:gap-4 font-body text-[14px] md:text-[32px] hover:scale-105 transition-transform shadow-lg flex-1 max-w-[290px]"
          >
            My Resume
            <FileText className="w-5 h-5 md:w-8 md:h-8 shrink-0" />
          </a>
        </div>

        {/* Stats Row */}
        <div
          className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 font-body text-[24px] md:text-[32px] leading-tight animate-fade-in-up"
          style={{ animationDelay: "400ms" }}
        >
          <div>
            10+ <br />
            Projects
          </div>
          <div className="hidden md:block w-[4px] h-[88px] bg-[#52057E] rounded-full mx-4" />
          <div>
            300+ <br />
            DSA Problems
          </div>
          <div className="hidden md:block w-[4px] h-[88px] bg-[#52057E] rounded-full mx-4" />
          <div>
            4+ <br />
            Years Learning
          </div>
        </div>
      </div>

      {/* Right Content (Image) */}
      <div
        className="hidden md:block flex-1 w-full min-h-[600px] mt-16 md:mt-0 animate-fade-in-up relative z-50"
        style={{ animationDelay: "500ms" }}
      >
        {/* Composition Wrapper */}
        <div className="relative w-full h-full min-h-[850px]">
          {/* Purple Background - Trapezoid */}
          <div
            className="absolute inset-0 bg-[#52057E] -z-10"
            style={{
              clipPath: "polygon(0% 60%, 110% 15%, 100% 100%, 0% 100%)",
            }}
          />

          {/* Hover Text & Arrow */}
          <div className={`absolute top-[40%] right-[80%] xl:right-[100%] flex items-center gap-4 transition-all duration-700 pointer-events-none z-50 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90 translate-x-10'}`}>
            <span className="text-6xl md:text-8xl text-black font-medium -rotate-12 whitespace-nowrap" style={{ fontFamily: "'Caveat', cursive" }}>
              Builder at heart
            </span>
            <svg className="w-24 h-24 text-black transform rotate-[15deg] mt-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Swooping arrow pointing right/down towards the image */}
              <path d="M10 20 Q 50 20 80 70" stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none" />
              <path d="M 55 70 L 80 70 L 70 45" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>

          {/* Image Overlay */}
          <div className="absolute inset-0 z-10 flex justify-center items-end pointer-events-none">
            <Image
              src="/DevanshAgain.png"
              alt="Devansh Singh"
              width={1000}
              height={1000}
              className={`w-auto h-full object-bottom transform transition-transform duration-700 pointer-events-auto ${isHovered ? 'scale-[1.03] cursor-none' : 'scale-100 cursor-default'}`}
              priority
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}