import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ProjectsSection() {
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
    <section id="projects" className="py-20 bg-[#E2FF3E] text-black">
      <div className="max-w-[1728px] mx-auto px-6 md:px-16">
        <h2 className="font-heading text-5xl md:text-[96px] mb-16">
          Other Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-white border-[6px] border-black rounded-[30px] p-6 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-none hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:-translate-x-2 transition-all duration-300 flex flex-col"
            >
              <div className="flex justify-between items-start mb-6 gap-4">
                <h3 className="font-body text-3xl md:text-4xl font-bold">{proj.title}</h3>
                <Link
                  href="#"
                  className="w-10 h-10 md:w-12 md:h-12 bg-[#52057E] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shrink-0"
                >
                  <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                </Link>
              </div>

              <p className="font-sans text-xl mb-8 flex-1">
                {proj.desc}
              </p>

              <div className="flex flex-wrap gap-3 mt-auto">
                {proj.tags.map(tag => (
                  <span key={tag} className="bg-gray-100 border-2 border-black rounded-full px-4 py-2 font-sans font-medium text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
