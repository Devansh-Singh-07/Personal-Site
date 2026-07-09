"use client";

import { useState } from "react";
import { Smartphone, Zap, Activity, Code, ChevronRight, ChevronLeft } from "lucide-react";
import { motion, PanInfo, AnimatePresence } from "framer-motion";

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

  const handleDragEnd = (e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -50) {
      handleNext();
    } else if (info.offset.x > 50) {
      handlePrev();
    }
  };

  return (
    <section id="apps" className="py-20 bg-[#E2FF3E] text-black relative overflow-hidden">
      <div className="max-w-[1728px] mx-auto px-6 md:px-16 relative z-10">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-2 bg-[#52057E]" />
            <span className="font-sans text-xl font-bold uppercase tracking-[0.3em] text-[#52057E]">iOS Portfolio</span>
          </div>
          <h2 className="font-heading text-5xl md:text-[120px] leading-none text-black">
            NATIVE <br />
            <span className="text-transparent text-stroke">EXPERIENCES</span>
          </h2>
        </motion.div>

        {/* 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center mt-12 md:mt-24">

          {/* Left Column: Circular Device Carousel */}
          <div className="relative w-full h-[450px] md:h-[600px] flex justify-center items-center">

            {/* Navigation Arrows (Flanking the devices - hidden on mobile since we have swipe) */}
            <button 
              onClick={handlePrev}
              className="hidden md:flex absolute left-0 md:-left-4 lg:left-0 z-40 w-12 h-12 md:w-16 md:h-16 rounded-full border-[4px] border-black bg-white items-center justify-center hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all text-black"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            <button 
              onClick={handleNext}
              className="hidden md:flex absolute right-0 md:-right-4 lg:right-0 z-40 w-12 h-12 md:w-16 md:h-16 rounded-full border-[4px] border-black bg-white items-center justify-center hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all text-black"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            {/* Devices Container */}
            <div className="relative w-[220px] h-[450px] md:w-[280px] md:h-[580px]">
              <AnimatePresence initial={false}>
                {apps.map((app, i) => {
                  const offset = (i - activeIndex + apps.length) % apps.length;

                  let zIndex = 10;
                  let scale = 1;
                  let translateX = 0;
                  let opacity = 1;

                  if (offset === 0) {
                    zIndex = 30;
                    scale = 1;
                    translateX = 0;
                    opacity = 1;
                  } else if (offset === 1) {
                    zIndex = 20;
                    scale = 0.85;
                    translateX = typeof window !== 'undefined' && window.innerWidth < 768 ? 120 : 160;
                    opacity = 0.5;
                  } else if (offset === 2) {
                    zIndex = 20;
                    scale = 0.85;
                    translateX = typeof window !== 'undefined' && window.innerWidth < 768 ? -120 : -160;
                    opacity = 0.5;
                  }

                  const isActive = offset === 0;

                  return (
                    <motion.div
                      key={app.name}
                      layout
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ 
                        scale, 
                        x: translateX, 
                        opacity,
                        zIndex 
                      }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 30 
                      }}
                      drag={isActive ? "x" : false}
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={1}
                      onDragEnd={isActive ? handleDragEnd : undefined}
                      onClick={() => {
                        if (offset === 1) handleNext();
                        if (offset === 2) handlePrev();
                      }}
                      className="absolute inset-0 rounded-[45px] border-[8px] border-black bg-black overflow-hidden flex flex-col cursor-grab active:cursor-grabbing"
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
                        <div className="w-20 h-20 bg-white/20 rounded-[24px] backdrop-blur-xl border border-white/30 shadow-2xl flex justify-center items-center mb-8 transform hover:scale-110 transition-transform">
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
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
            
            {/* Mobile swipe hint */}
            <div className="absolute -bottom-8 md:hidden text-black/50 font-sans font-bold text-sm tracking-widest uppercase">
              Swipe to explore
            </div>
          </div>

          {/* Right Column: Active App Details */}
          <div className="flex flex-col justify-center max-w-xl mx-auto lg:mx-0 pl-0 lg:pl-12 text-center lg:text-left mt-16 md:mt-12 lg:mt-0">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block px-6 py-2 bg-[#52057E] text-white border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-full font-body text-xl font-bold uppercase tracking-widest mb-8">
                {apps[activeIndex].category}
              </div>

              <h3 className="font-heading text-5xl md:text-8xl text-black mb-6 md:mb-8">
                {apps[activeIndex].name}
              </h3>

              <p className="font-sans text-xl md:text-2xl text-black font-bold leading-relaxed mb-10 md:mb-12">
                {apps[activeIndex].desc}
              </p>

              <button className="bg-white text-black rounded-[40px] px-8 py-4 font-body text-2xl font-bold transition-all border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] flex items-center gap-4 mx-auto lg:mx-0 active:shadow-none active:translate-y-0 active:translate-x-0">
                View Case Study
                <ChevronRight className="w-6 h-6 border-[2px] border-black rounded-full" />
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
