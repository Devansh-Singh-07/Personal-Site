import Image from "next/image";
import Link from "next/link";
import { MessageCircle, FileText } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-48 px-16 flex flex-col md:flex-row justify-between items-stretch max-w-[1728px] mx-auto pb-12">
      {/* Left Content */}
      <div className="flex-1 z-10 max-w-3xl flex flex-col justify-center">
        <div className="mb-4 animate-fade-in-up">
          <p className="font-body text-3xl font-bold">
            <span className="text-[#52057E]">●</span> FullStack Web & iOS
            Developer
          </p>
        </div>

        <h1 className="font-heading text-8xl md:text-[150px] leading-[0.8] mb-8 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          <span className="text-[#1E1E1E] block mb-10">Devansh</span>
          <span className="text-[#52057E] block ">Singh</span>
        </h1>

        <p className="font-sans text-2xl md:text-[32px] leading-tight mb-12 font-medium max-w-xl animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          I build solutions and Experiences that solve real-world problems.
        </p>

        <div className="flex flex-wrap items-center gap-6 mb-16 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
          <Link
            href="#contact"
            className="bg-[#52057E] text-white rounded-[40px] px-8 py-5 flex items-center gap-4 font-body text-[32px] hover:scale-105 transition-transform shadow-lg"
          >
            Contact me
            <MessageCircle className="w-8 h-8" />
          </Link>
          <Link
            href="#resume"
            className="bg-black text-[#E2FF3E] rounded-[40px] px-8 py-5 flex items-center gap-4 font-body text-[32px] hover:scale-105 transition-transform shadow-lg"
          >
            My Resume
            <FileText className="w-8 h-8" />
          </Link>
        </div>

        {/* Stats Row */}
        <div className="flex items-center gap-8 font-body text-[32px] leading-tight animate-fade-in-up mt-auto" style={{ animationDelay: "400ms" }}>
          <div>
            10+ <br />
            Projects
          </div>
          <div className="w-[4px] h-[88px] bg-[#52057E] rounded-full mx-4" />
          <div>
            300+ <br />
            DSA Problems
          </div>
          <div className="w-[4px] h-[88px] bg-[#52057E] rounded-full mx-4" />
          <div>
            4+ <br />
            Years Learning
          </div>
        </div>
      </div>

      {/* Right Content (Image) */}
      <div className="flex-1 w-full min-h-[600px] mt-16 md:mt-0 animate-fade-in-up flex items-center justify-center" style={{ animationDelay: "500ms" }}>
        
        {/* Composition Wrapper */}
        <div className="relative w-[85%] h-[85%] min-h-[600px]">
          {/* Purple Background */}
          <div className="absolute inset-0 bg-[#52057E] rounded-[40px] transform rotate-[-2deg] shadow-2xl" />
          
          {/* Image Overlay */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <Image
              src="/DevanshPng.png"
              alt="Devansh Singh"
              fill
              className="object-cover object-bottom transform hover:scale-105 transition-transform duration-700 pointer-events-auto"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
