"use client";

import { Sparkles, Code2, Database, Smartphone, GitBranch, Layers, Cpu, Code } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function SkillsSection() {
  const cardVariants: Variants = {
    hidden: { scale: 0.9, opacity: 0.6 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <section id="skills" className="py-20 bg-[#E2FF3E] text-black">
      <div className="max-w-[1728px] mx-auto px-8 md:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="font-heading text-5xl md:text-[120px] leading-none mb-16 uppercase text-black"
        >
          Arsenal
        </motion.h2>

        {/* Bento Grid Layout (Horizontal Scroll on Mobile, Grid on Desktop) */}
        <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none md:grid-cols-4 auto-rows-auto md:auto-rows-[300px] gap-6 pb-10 md:pb-0 [&::-webkit-scrollbar]:hidden -mx-8 px-8 md:mx-0 md:px-0">

          {/* Card 1: Frontend */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.6 }}
            className="shrink-0 snap-center w-[85vw] md:w-auto md:col-span-1 md:row-span-1 bg-white border-[6px] border-black rounded-[40px] p-6 md:p-8 flex flex-col justify-between relative group overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:-translate-x-2 transition-all duration-300 min-h-[150px] md:min-h-[300px]"
          >
            <div className="z-10 flex justify-between items-start">
              <h3 className="font-heading text-4xl text-black">Frontend</h3>
              <Layers className="w-12 h-12 text-black" />
            </div>
            <div className="z-10">
              <p className="font-body text-2xl text-black">React.js • Next.js<br />Tailwind • Framer</p>
            </div>
            <div className="absolute -right-10 -bottom-10 opacity-10 transform group-hover:rotate-45 transition-transform duration-1000">
              <Layers className="w-64 h-64 text-black" />
            </div>
          </motion.div>

          {/* Card 2: iOS Native */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.6 }}
            className="shrink-0 snap-center w-[85vw] md:w-auto md:col-span-1 md:row-span-1 bg-[#52057E] border-[6px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-[40px] p-6 md:p-8 flex flex-col justify-between relative group overflow-hidden min-h-[150px] md:min-h-[300px] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
          >
            <div className="z-10 flex justify-between items-start">
              <h3 className="font-heading text-4xl text-white">iOS<br />Native</h3>
              <Smartphone className="w-12 h-12 text-[#E2FF3E]" />
            </div>
            <div className="z-10">
              <p className="font-body text-2xl text-[#E2FF3E]">SwiftUI • UIKit<br />MVVM • CoreData</p>
            </div>
          </motion.div>

          {/* Card 3: Backend & DB */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.6 }}
            className="shrink-0 snap-center w-[85vw] md:w-auto md:col-span-1 md:row-span-1 bg-[#1E1E1E] border-[6px] border-black rounded-[40px] p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:-translate-x-2 transition-all duration-300 min-h-[150px] md:min-h-[300px]"
          >
            <div className="flex justify-between items-start">
              <h3 className="font-heading text-4xl text-[#E2FF3E]">Backend<br />& DB</h3>
              <Database className="w-12 h-12 text-[#E2FF3E]" />
            </div>
            <div className="z-10 mt-auto">
              <p className="font-body text-2xl text-gray-300">Node.js • Express<br />MongoDB • Postgres</p>
            </div>
          </motion.div>

          {/* Card 4: Core Languages */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.6 }}
            className="shrink-0 snap-center w-[85vw] md:w-auto md:col-span-1 md:row-span-2 bg-white border-[6px] border-black rounded-[40px] p-6 md:p-8 flex flex-col relative min-h-[150px] md:min-h-0 group shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:-translate-x-2 transition-all duration-300"
          >
            <div>
              <div className="w-16 h-16 bg-black rounded-2xl hidden md:flex items-center justify-center mb-8 transform group-hover:rotate-12 transition-transform">
                <Code className="w-8 h-8 text-[#E2FF3E]" />
              </div>
              <h3 className="font-heading text-5xl text-black leading-none mb-4 md:mb-6">Core<br className="hidden md:block" /> Langs</h3>
            </div>

            <div className="flex flex-row flex-wrap md:flex-col gap-2 md:gap-3">
              {[
                { name: "JavaScript", color: "bg-yellow-400 border-[2px] border-black" },
                { name: "TypeScript", color: "bg-blue-600 text-white border-[2px] border-black" },
                { name: "Swift", color: "bg-orange-500 text-white border-[2px] border-black" },
                { name: "Java", color: "bg-red-500 text-white border-[2px] border-black" },
              ].map(lang => (
                <div key={lang.name} className={`px-4 py-2 md:px-6 md:py-4 rounded-full md:rounded-2xl font-body text-xl md:text-3xl font-bold ${lang.color} transform md:hover:translate-x-4 transition-transform cursor-default shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                  {lang.name}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 5: Tools & Workflow (Hidden on Mobile - rendered below) */}
          <div className="hidden md:flex md:col-span-3 md:row-span-1 bg-black rounded-[40px] p-8 flex-col justify-center relative overflow-hidden border-[6px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:-translate-x-2 transition-all duration-300 min-h-[300px]">
            <div className="absolute top-4 left-8 flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-gray-400" />
              <span className="font-sans text-sm font-bold text-gray-400 uppercase tracking-widest">Workflow & Tools</span>
            </div>

            {/* Massive scrolling text */}
            <div className="flex whitespace-nowrap animate-scroll-left mt-8">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center mx-12">
                  <span className="font-heading text-5xl md:text-[100px] text-transparent text-stroke-white opacity-50 hover:opacity-100 hover:text-white transition-all cursor-default">
                    GIT • GITHUB • FIGMA • JIRA • PRISMA • AGILE
                  </span>
                  <span className="mx-12 text-4xl md:text-6xl text-[#E2FF3E]">✦</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Mobile Tools & Workflow (Static, under the carousel) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="md:hidden mt-6 bg-black rounded-[40px] p-6 flex flex-col justify-center relative overflow-hidden border-[6px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] h-[160px]"
        >
          <div className="flex items-center gap-2 mb-4">
            <GitBranch className="w-5 h-5 text-gray-400" />
            <span className="font-sans text-xs font-bold text-gray-400 uppercase tracking-widest">Workflow & Tools</span>
          </div>

          {/* Scrolling text */}
          <div className="flex whitespace-nowrap animate-scroll-left" style={{ animationDuration: '10s' }}>
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center mx-4">
                <span className="font-heading text-4xl text-transparent text-stroke-white opacity-50 cursor-default">
                  GIT • GITHUB • FIGMA • JIRA • PRISMA • AGILE
                </span>
                <span className="mx-6 text-3xl text-[#E2FF3E]">✦</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
