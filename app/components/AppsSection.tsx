"use client";

import { useState } from "react";
import { Smartphone, Zap, Activity, Code, ChevronRight, ChevronLeft } from "lucide-react";

export default function AppsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const apps = [
    {
      name: "ClassMotion",
      category: "Education",
      desc: "Intelligent classroom motion & attention tracker.",
      bgColor: "bg-blue-600",
      icon: <Activity className="w-12 h-12 text-white" />
    },
    {
      name: "DevDen",
      category: "Developer Tools",
      desc: "The ultimate ecosystem for developers. Build, track, and deploy seamlessly.",
      bgColor: "bg-[#52057E]",
      icon: <Code className="w-12 h-12 text-white" />
    },
    {
      name: "RSMS",
      category: "Management",
      desc: "Robust School Management System for modern institutions to handle administration at scale.",
      bgColor: "bg-[#1E1E1E]",
      icon: <Zap className="w-12 h-12 text-white" />
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % apps.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + apps.length) % apps.length);
  };

  return (
    <section id="apps" className="py-20 bg-[#E2FF3E] text-black relative overflow-hidden">
      <div className="max-w-[1728px] mx-auto px-6 md:px-16 relative z-10">

        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-2 bg-[#52057E]" />
            <span className="font-sans text-xl font-bold uppercase tracking-[0.3em] text-[#52057E]">iOS Portfolio</span>
          </div>
          <h2 className="font-heading text-5xl md:text-[120px] leading-none text-black">
            NATIVE <br />
            <span className="text-transparent text-stroke">EXPERIENCES</span>
          </h2>
        </div>

        {/* 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center mt-24">

          {/* Left Column: Circular Device Carousel */}
          <div className="relative w-full h-[450px] md:h-[600px] flex justify-center items-center">

            {/* Navigation Arrows (Flanking the devices) */}
            <button 
              onClick={handlePrev}
              className="absolute left-0 md:-left-4 lg:left-0 z-40 w-12 h-12 md:w-16 md:h-16 rounded-full border-[4px] border-black bg-white flex items-center justify-center hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all text-black"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            <button 
              onClick={handleNext}
              className="absolute right-0 md:-right-4 lg:right-0 z-40 w-12 h-12 md:w-16 md:h-16 rounded-full border-[4px] border-black bg-white flex items-center justify-center hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all text-black"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            {/* Devices Container */}
            <div className="relative w-[220px] h-[450px] md:w-[280px] md:h-[580px]">
              {apps.map((app, i) => {
                // Calculate position based on active index
                // Since there are exactly 3 items:
                // offset 0 = Active (Center)
                // offset 1 = Right
                // offset 2 = Left
                const offset = (i - activeIndex + apps.length) % apps.length;

                let positionClass = "";
                if (offset === 0) {
                  // Active Center
                  positionClass = "z-30 scale-100 translate-x-0 opacity-100";
                } else if (offset === 1) {
                  // Right Side
                  positionClass = "z-20 scale-85 translate-x-[60%] opacity-50 hover:opacity-100 hover:-translate-y-2 cursor-pointer";
                } else if (offset === 2) {
                  // Left Side
                  positionClass = "z-20 scale-85 -translate-x-[60%] opacity-50 hover:opacity-100 hover:-translate-y-2 cursor-pointer";
                }

                return (
                  <div
                    key={app.name}
                    onClick={() => {
                      if (offset === 1) handleNext();
                      if (offset === 2) handlePrev();
                    }}
                    className={`absolute inset-0 rounded-[45px] border-[8px] border-black bg-black overflow-hidden flex flex-col transition-all duration-700 ease-out transform ${positionClass}`}
                  >
                    {/* Dynamic Island */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-[30px] bg-black rounded-full z-30 flex justify-end items-center px-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-900 border-[2px] border-[#111]" />
                    </div>

                    {/* Status Bar */}
                    <div className="absolute top-0 w-full h-[40px] z-20 flex justify-between items-end px-6 pb-2 text-white font-sans text-[12px] font-semibold mix-blend-difference">
                      <span>9:41</span>
                      <div className="flex gap-2 items-center">
                        <div className="w-3 h-2.5 bg-white mask-signal" />
                        <div className="w-3 h-2.5 bg-white mask-wifi" />
                        <div className="w-5 h-2.5 border border-white rounded-[3px] p-[1px]">
                          <div className="w-[80%] h-full bg-white rounded-[1.5px]" />
                        </div>
                      </div>
                    </div>

                    {/* App Content */}
                    <div className={`flex-1 w-full h-full ${app.bgColor} pt-[70px] pb-[40px] px-6 flex flex-col relative`}>
                      <div className="w-20 h-20 bg-white/20 rounded-[24px] backdrop-blur-xl border border-white/30 shadow-2xl flex justify-center items-center mb-8 transform group-hover:scale-110 transition-transform">
                        {app.icon}
                      </div>

                      <div className="mt-auto z-10">
                        <div className="inline-block px-3 py-1 bg-black/30 rounded-full backdrop-blur-md mb-3">
                          <span className="font-sans text-xs font-bold text-white uppercase tracking-wider">{app.category}</span>
                        </div>
                        <h3 className="font-heading text-4xl text-white mb-2 leading-none">
                          {app.name}
                        </h3>
                      </div>
                    </div>

                    {/* Home Indicator */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] h-[4px] bg-white/80 rounded-full z-30" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active App Details */}
          <div className="flex flex-col justify-center max-w-xl mx-auto lg:mx-0 pl-0 lg:pl-12 text-center lg:text-left mt-12 lg:mt-0">
            {/* Animated content wrapper using standard CSS transitions driven by key */}
            <div
              key={activeIndex}
              className="animate-fade-in-up"
            >
              <div className="inline-block px-6 py-2 bg-[#52057E] text-white border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-full font-body text-xl font-bold uppercase tracking-widest mb-8">
                {apps[activeIndex].category}
              </div>

              <h3 className="font-heading text-5xl md:text-8xl text-black mb-8">
                {apps[activeIndex].name}
              </h3>

              <p className="font-sans text-xl md:text-2xl text-black font-bold leading-relaxed mb-12">
                {apps[activeIndex].desc}
              </p>

              <button className="bg-white text-black rounded-[40px] px-8 py-4 font-body text-2xl font-bold transition-all border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] flex items-center gap-4 mx-auto lg:mx-0">
                View Case Study
                <ChevronRight className="w-6 h-6 border-[2px] border-black rounded-full" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
