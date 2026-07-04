import { Sparkles, Code2, Database, Smartphone, GitBranch } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: <Code2 className="w-8 h-8 md:w-12 md:h-12" />,
      skills: ["JavaScript", "TypeScript", "Java", "Swift"],
    },
    {
      icon: <Sparkles className="w-8 h-8 md:w-12 md:h-12" />,
      skills: [
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "REST APIs",
        "HTML",
        "CSS",
      ],
    },
    {
      icon: <Database className="w-8 h-8 md:w-12 md:h-12" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL"],
    },
    {
      icon: <Smartphone className="w-8 h-8 md:w-12 md:h-12" />,
      skills: [
        "SwiftUI",
        "UIKit",
        "Swift Concurrency",
        "MVVM",
        "Xcode",
        "iOS Development",
      ],
    },
    {
      icon: <GitBranch className="w-8 h-8 md:w-12 md:h-12" />,
      skills: [
        "Git",
        "GitHub",
        "Figma",
        "Jira",
        "Prisma",
        "JWT",
        "Agile",
        "Scrum",
      ],
    },
  ];

  // We duplicate the array to create a seamless infinite scrolling effect
  const sliderContent = [...skillCategories, ...skillCategories];

  return (
    <section id="skills" className="py-32 overflow-hidden bg-[#E2FF3E]">
      <div className="max-w-[1728px] mx-auto px-16 mb-16">
        <h2 className="font-heading text-8xl md:text-[96px] text-black">
          Skills
        </h2>
      </div>

      <div className="relative w-full flex overflow-hidden py-10 bg-[#52057E] text-[#E2FF3E] border-y-8 border-black transform -rotate-2">
        <div className="flex whitespace-nowrap animate-scroll-left">
          {sliderContent.map((category, idx) => (
            <div key={idx} className="flex items-center mx-8">
              <span className="mr-6 text-white">{category.icon}</span>
              <span className="font-body text-4xl md:text-5xl font-bold tracking-wider">
                {category.skills.join(" • ")}
              </span>
              <span className="mx-8 text-3xl opacity-50">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
