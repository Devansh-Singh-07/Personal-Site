"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectsSection() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      desc: "A scalable full-stack e-commerce solution built with Next.js, Node.js, and PostgreSQL.",
      tags: ["Next.js", "Node.js", "Tailwind", "PostgreSQL"],
    },
    {
      title: "Task Management API",
      desc: "RESTful API built with Express, MongoDB, and secured with JWT authentication.",
      tags: ["Express", "MongoDB", "JWT"],
    },
    {
      title: "Fitness Tracker iOS App",
      desc: "Native iOS app built with SwiftUI and CoreData with health kit integration.",
      tags: ["SwiftUI", "CoreData", "HealthKit"],
    },
    {
      title: "Real-time Chat",
      desc: "Socket.io based real-time communication application with read receipts.",
      tags: ["React", "Socket.io", "Express"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#E2FF3E] text-black overflow-hidden">
      <div className="max-w-[1728px] mx-auto px-6 md:px-16">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="font-heading text-5xl md:text-[96px] mb-12 md:mb-16 uppercase"
        >
          Other Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {projects.map((proj, idx) => {
            const isExpanded = expandedIdx === idx;
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setExpandedIdx(isExpanded ? null : idx)}
                className="bg-white border-[4px] md:border-[6px] border-black rounded-[24px] md:rounded-[30px] p-6 md:p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-none hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 md:hover:-translate-y-2 md:hover:-translate-x-2 transition-all duration-300 flex flex-col cursor-pointer md:cursor-default"
              >
                <div className="flex justify-between items-center md:items-start mb-0 md:mb-6 gap-4">
                  <h3 className="font-body text-2xl sm:text-3xl md:text-4xl font-bold">{proj.title}</h3>
                  
                  {/* Mobile Expand Icon */}
                  <div className="md:hidden shrink-0 w-10 h-10 bg-[#E2FF3E] border-[2px] border-black rounded-full flex items-center justify-center transition-transform duration-300" style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    <ChevronDown className="w-6 h-6 text-black" />
                  </div>

                  {/* Desktop Link Icon */}
                  <Link
                    href="#"
                    onClick={(e) => e.stopPropagation()}
                    className="hidden md:flex w-12 h-12 bg-[#52057E] rounded-full items-center justify-center text-white hover:scale-110 transition-transform shrink-0"
                  >
                    <ArrowUpRight className="w-6 h-6" />
                  </Link>
                </div>

                <div className={`grid transition-all duration-300 ease-in-out md:!grid-rows-[1fr] md:!opacity-100 ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0 md:mt-6'}`}>
                  <div className="overflow-hidden flex flex-col h-full">
                    <p className="font-sans text-lg md:text-xl mb-6 md:mb-8 flex-1">
                      {proj.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 md:gap-3 mt-auto">
                      {proj.tags.map(tag => (
                        <span key={tag} className="bg-gray-100 border-[2px] border-black rounded-full px-3 py-1 md:px-4 md:py-2 font-sans font-bold text-xs md:text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Mobile Link inside expanded content */}
                    <Link
                      href="#"
                      onClick={(e) => e.stopPropagation()}
                      className="md:hidden mt-6 bg-[#52057E] text-white border-[3px] border-black rounded-full py-3 flex justify-center items-center gap-2 font-body font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:translate-x-1 active:shadow-none"
                    >
                      View Project <ArrowUpRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
