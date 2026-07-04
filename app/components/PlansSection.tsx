"use client";

import { useState } from "react";
import { Play, Check, Circle, GripHorizontal } from "lucide-react";

type Priority = "Low" | "Medium" | "High";

interface Task {
  id: string;
  title: string;
  desc: string;
  priority: Priority;
  iconType: "circle" | "play" | "check";
}

interface Column {
  id: string;
  title: string;
  theme: "todo" | "inprogress" | "completed";
  tasks: Task[];
}

export default function PlansSection() {
  const [columns, setColumns] = useState<Column[]>([
    {
      id: "col-todo",
      title: "Todo",
      theme: "todo",
      tasks: [
        {
          id: "task-1",
          title: "Learn Guitar",
          desc: "Master fingerstyle techniques for acoustic guitar and learn my favorite songs.",
          priority: "Medium",
          iconType: "circle",
        },
        {
          id: "task-2",
          title: "System Design",
          desc: "Read Designing Data-Intensive Applications from cover to cover.",
          priority: "High",
          iconType: "circle",
        },
      ],
    },
    {
      id: "col-inprogress",
      title: "In Progress",
      theme: "inprogress",
      tasks: [
        {
          id: "task-3",
          title: "Make Portfolio",
          desc: "Refine animations, implement fluid interactions, and optimize for devices.",
          priority: "High",
          iconType: "play",
        },
        {
          id: "task-4",
          title: "Learn Rust",
          desc: "Build a high-performance concurrent CLI tool from scratch.",
          priority: "Medium",
          iconType: "play",
        },
      ],
    },
    {
      id: "col-completed",
      title: "Completed",
      theme: "completed",
      tasks: [
        {
          id: "task-5",
          title: "Data Structures",
          desc: "Complete 300+ advanced algorithmic problems and maintain a streak.",
          priority: "High",
          iconType: "check",
        },
        {
          id: "task-6",
          title: "React Native",
          desc: "Build and deploy my first production-ready cross-platform mobile app.",
          priority: "High",
          iconType: "check",
        },
      ],
    },
  ]);

  const [draggedItem, setDraggedItem] = useState<{ colIdx: number; taskIdx: number } | null>(null);
  const [dragOverColIdx, setDragOverColIdx] = useState<number | null>(null);

  const handleDragStart = (e: React.DragEvent, colIdx: number, taskIdx: number) => {
    setDraggedItem({ colIdx, taskIdx });
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent, colIdx: number) => {
    e.preventDefault(); 
    e.dataTransfer.dropEffect = "move";
    if (dragOverColIdx !== colIdx) {
      setDragOverColIdx(colIdx);
    }
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOverColIdx(null);
  };

  const handleDrop = (e: React.DragEvent, targetColIdx: number) => {
    e.preventDefault();
    setDragOverColIdx(null);

    if (!draggedItem) return;

    const { colIdx: sourceColIdx, taskIdx: sourceTaskIdx } = draggedItem;
    if (sourceColIdx === targetColIdx) return;

    setColumns((prev) => {
      const newCols = JSON.parse(JSON.stringify(prev));
      const [movedTask] = newCols[sourceColIdx].tasks.splice(sourceTaskIdx, 1);
      
      // Auto-update icon type based on the target column
      if (newCols[targetColIdx].theme === "todo") movedTask.iconType = "circle";
      if (newCols[targetColIdx].theme === "inprogress") movedTask.iconType = "play";
      if (newCols[targetColIdx].theme === "completed") movedTask.iconType = "check";

      newCols[targetColIdx].tasks.push(movedTask);
      return newCols;
    });

    setDraggedItem(null);
  };



  const getThemeClasses = (theme: string, isDragOver: boolean) => {
    const base = "rounded-[40px] p-8 flex flex-col relative transition-transform duration-300 border-[6px] border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]";
    if (theme === "todo") {
      return `${base} bg-white text-black ${isDragOver ? "scale-[1.02]" : ""}`;
    }
    if (theme === "inprogress") {
      return `${base} bg-[#52057E] text-white ${isDragOver ? "scale-[1.02]" : ""}`;
    }
    if (theme === "completed") {
      return `${base} bg-black text-[#E2FF3E] ${isDragOver ? "scale-[1.02]" : ""}`;
    }
    return base;
  };

  const getTaskClasses = (theme: string) => {
    const base = "rounded-[24px] p-6 md:p-8 cursor-grab active:cursor-grabbing hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 relative group border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]";
    if (theme === "todo") return `${base} bg-[#E2FF3E] text-black`;
    if (theme === "inprogress") return `${base} bg-white text-black`;
    if (theme === "completed") return `${base} bg-white text-black`;
    return base;
  };

  return (
    <section id="progress" className="py-40 bg-[#E2FF3E] hidden md:block relative overflow-hidden text-black">
      <div className="max-w-[1728px] mx-auto px-6 md:px-16 relative z-10">
        <div className="flex justify-between items-end mb-16">
          <h2 className="font-heading text-5xl md:text-[120px] leading-none tracking-tight uppercase">
            My <span className="text-[#52057E] text-stroke">Plans</span>
          </h2>
          <p className="font-sans text-xl font-bold flex items-center gap-3 bg-white rounded-full px-8 py-4 border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <GripHorizontal className="w-6 h-6" /> 
            Drag & Drop to update
          </p>
        </div>

        {/* Kanban Board Container */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {columns.map((col, cIdx) => {
              const isDragOver = dragOverColIdx === cIdx;
              
              return (
                <div 
                  key={col.id} 
                  className={getThemeClasses(col.theme, isDragOver)}
                  onDragOver={(e) => handleDragOver(e, cIdx)}
                  onDragLeave={handleDragLeave}
                  onDrop={(e) => handleDrop(e, cIdx)}
                >
                  {/* Header */}
                  <div className="flex justify-between items-center mb-8 pb-6 border-b-[4px] border-current">
                    <h3 className="font-heading text-5xl">
                      {col.title}
                    </h3>
                    <div className="px-4 py-1.5 rounded-full text-lg font-bold bg-white text-black border-[4px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      {col.tasks.length}
                    </div>
                  </div>

                  {/* Tasks List */}
                  <div className="flex flex-col gap-6 min-h-[400px]">
                    {col.tasks.map((task, tIdx) => (
                      <div
                        key={task.id}
                        draggable
                        onDragStart={(e) => handleDragStart(e, cIdx, tIdx)}
                        className={getTaskClasses(col.theme)}
                      >
                        {/* Priority Badge */}
                        <div className="absolute top-6 right-6">
                          <span className={`px-4 py-1 rounded-full border-[3px] border-black font-bold text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${task.priority === 'High' ? 'bg-red-500 text-white' : task.priority === 'Medium' ? 'bg-yellow-400 text-black' : 'bg-blue-400 text-black'}`}>
                            {task.priority}
                          </span>
                        </div>

                        <h4 className="font-heading text-3xl mb-4 pr-20 leading-tight">
                          {task.title}
                        </h4>
                        <p className="font-sans text-xl font-medium leading-relaxed mb-4 text-black/80">
                          {task.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
