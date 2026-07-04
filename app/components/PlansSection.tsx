import { Play, Check, Circle } from "lucide-react";

export default function PlansSection() {
  const columns = [
    {
      title: "Todo",
      tasks: [
        {
          title: "Learn Guitar",
          desc: "Learn to play new songs that excite me more than ever!!!!!",
          priority: "Medium",
          icon: <Circle className="w-5 h-5 text-white" />,
        },
        {
          title: "Make Portfolio",
          desc: "Learn to play new songs that excite me more than ever!!!!!",
          priority: "High",
          icon: <Play className="w-5 h-5 text-white" />,
        },
      ],
    },
    {
      title: "In Progress",
      tasks: [
        {
          title: "Make Portfolio",
          desc: "Learn to play new songs that excite me more than ever!!!!!",
          priority: "High",
          icon: <Play className="w-5 h-5 text-white" />,
        },
        {
          title: "Make Portfolio",
          desc: "Learn to play new songs that excite me more than ever!!!!!",
          priority: "High",
          icon: <Play className="w-5 h-5 text-white" />,
        },
      ],
    },
    {
      title: "Completed",
      tasks: [
        {
          title: "Make Portfolio",
          desc: "Learn to play new songs that excite me more than ever!!!!!",
          priority: "High",
          icon: <Check className="w-5 h-5 text-white" />,
        },
        {
          title: "Make Portfolio",
          desc: "Learn to play new songs that excite me more than ever!!!!!",
          priority: "High",
          icon: <Check className="w-5 h-5 text-white" />,
        },
      ],
    },
  ];

  return (
    <section id="progress" className="py-32 bg-[#E2FF3E] hidden md:block">
      <div className="max-w-[1728px] mx-auto px-6 md:px-16">
        <h2 className="font-heading text-8xl md:text-[96px] mb-16 text-black">
          My Plans
        </h2>

        {/* Kanban Board Container */}
        <div className="bg-black rounded-[40px] border-4 border-white p-8 md:p-12 w-full overflow-x-auto">
          <div className="min-w-[1000px] grid grid-cols-3 gap-8">
            {columns.map((col, cIdx) => (
              <div key={cIdx} className="flex flex-col relative">
                {/* Column Title */}
                <h3 className="font-sans text-4xl font-bold text-white mb-8 pb-4">
                  {col.title}
                </h3>

                {/* Column Divider (except last one) */}
                {cIdx < columns.length - 1 && (
                  <div className="absolute right-[-16px] top-[70px] bottom-0 w-[4px] bg-white opacity-20 rounded-full" />
                )}

                {/* Tasks List */}
                <div className="flex flex-col gap-6">
                  {col.tasks.map((task, tIdx) => (
                    <div
                      key={tIdx}
                      className="bg-[#E2FF3E] rounded-[20px] p-6 hover:-translate-y-1 transition-transform cursor-grab active:cursor-grabbing"
                    >
                      <h4 className="font-sans text-2xl font-bold text-black mb-3">
                        {task.title}
                      </h4>
                      <p className="font-sans text-lg font-medium text-black mb-6 leading-snug">
                        {task.desc}
                      </p>

                      <div className="flex justify-between items-end mt-auto">
                        <div className="bg-[#52057E] rounded-lg px-4 py-1">
                          <span className="font-body text-white text-sm">
                            {task.priority}
                          </span>
                        </div>

                        <button className="w-10 h-10 bg-black rounded-lg flex justify-center items-center hover:bg-gray-800 transition-colors">
                          {task.icon}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-gray-400 font-sans text-sm mt-12 text-center">
            *Drag to move tasks to other blocks (UI illustration)
          </p>
        </div>
      </div>
    </section>
  );
}
