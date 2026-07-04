import { Sparkles, Code2, Database, Smartphone, GitBranch, Layers, Cpu, Code } from "lucide-react";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32 bg-[#1E1E1E] text-[#E2FF3E]">
      <div className="max-w-[1728px] mx-auto px-8 md:px-16">
        <h2 className="font-heading text-6xl md:text-[120px] leading-none mb-16 uppercase text-[#E2FF3E]">
          Arsenal
        </h2>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-6">
          
          {/* Card 1: Frontend (Spans 1 col, 1 row) */}
          <div className="md:col-span-1 md:row-span-1 bg-[#E2FF3E] rounded-[40px] p-8 flex flex-col justify-between relative group overflow-hidden hover:shadow-[0_0_40px_rgba(226,255,62,0.4)] transition-all duration-500">
            <div className="z-10 flex justify-between items-start">
              <h3 className="font-heading text-4xl text-black">Frontend</h3>
              <Layers className="w-12 h-12 text-black" />
            </div>
            <div className="z-10">
              <p className="font-body text-2xl text-black">React.js • Next.js<br/>Tailwind • Framer</p>
            </div>
            <div className="absolute -right-10 -bottom-10 opacity-10 transform group-hover:rotate-45 transition-transform duration-1000">
              <Layers className="w-64 h-64 text-black" />
            </div>
          </div>

          {/* Card 2: iOS Native (Spans 1 col, 1 row) */}
          <div className="md:col-span-1 md:row-span-1 bg-[#52057E] rounded-[40px] p-8 flex flex-col justify-between relative group overflow-hidden">
            <div className="z-10 flex justify-between items-start">
              <h3 className="font-heading text-4xl text-white">iOS<br/>Native</h3>
              <Smartphone className="w-12 h-12 text-[#E2FF3E]" />
            </div>
            <div className="z-10">
              <p className="font-body text-2xl text-[#E2FF3E]">SwiftUI • UIKit<br/>MVVM • CoreData</p>
            </div>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </div>

          {/* Card 3: Backend & DB (Spans 1 col, 1 row) */}
          <div className="md:col-span-1 md:row-span-1 border-[6px] border-[#E2FF3E] rounded-[40px] p-8 flex flex-col justify-between relative overflow-hidden group hover:bg-[#E2FF3E] transition-colors duration-500">
            <div className="flex justify-between items-start">
              <h3 className="font-heading text-4xl text-[#E2FF3E] group-hover:text-black transition-colors">Backend<br/>& DB</h3>
              <Database className="w-12 h-12 text-[#E2FF3E] group-hover:text-black transition-colors" />
            </div>
            <div className="z-10 mt-auto">
              <p className="font-body text-2xl text-gray-300 group-hover:text-black transition-colors">Node.js • Express<br/>MongoDB • Postgres</p>
            </div>
          </div>

          {/* Card 4: Languages (Spans 1 col, 2 rows) */}
          <div className="md:col-span-1 md:row-span-2 bg-white rounded-[40px] p-8 flex flex-col justify-between overflow-hidden group">
            <div>
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-12 transition-transform">
                <Code className="w-8 h-8 text-[#E2FF3E]" />
              </div>
              <h3 className="font-heading text-5xl text-black leading-none mb-6">Core<br/>Langs</h3>
            </div>
            
            <div className="flex flex-col gap-3">
              {[
                { name: "JavaScript", color: "bg-yellow-400" },
                { name: "TypeScript", color: "bg-blue-600 text-white" },
                { name: "Swift", color: "bg-orange-500 text-white" },
                { name: "Java", color: "bg-red-500 text-white" },
              ].map(lang => (
                <div key={lang.name} className={`px-6 py-4 rounded-2xl font-body text-3xl font-bold ${lang.color} transform hover:translate-x-4 transition-transform cursor-default shadow-md`}>
                  {lang.name}
                </div>
              ))}
            </div>
          </div>

          {/* Card 5: Tools & Workflow (Spans 3 cols, 1 row - Marquee style beneath the first 3 cards) */}
          <div className="md:col-span-3 md:row-span-1 bg-black rounded-[40px] flex flex-col justify-center overflow-hidden border-2 border-gray-800 relative">
            <div className="absolute top-4 left-8 flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-gray-500" />
              <span className="font-sans text-sm font-bold text-gray-500 uppercase tracking-widest">Workflow & Tools</span>
            </div>
            
            {/* Massive scrolling text */}
            <div className="flex whitespace-nowrap animate-scroll-left mt-8">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center mx-12">
                  <span className="font-heading text-7xl md:text-[100px] text-transparent text-stroke-white opacity-50 hover:opacity-100 hover:text-white transition-all cursor-default">
                    GIT • GITHUB • FIGMA • JIRA • PRISMA • AGILE
                  </span>
                  <span className="mx-12 text-6xl text-[#52057E]">✦</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
