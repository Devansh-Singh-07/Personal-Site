"use client";

import { X } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md animate-fade-in-up" 
        style={{ animationDuration: '0.3s' }} 
        onClick={onClose} 
      />
      
      <div 
        className="relative w-full max-w-5xl h-[85vh] bg-white border-[8px] border-black shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] rounded-[30px] md:rounded-[40px] flex flex-col animate-fade-in-up overflow-hidden" 
        style={{ animationDuration: '0.4s' }}
      >
        {/* Header bar */}
        <div className="flex justify-between items-center bg-[#E2FF3E] border-b-[8px] border-black p-4 md:px-8 md:py-6">
          <h2 className="font-heading text-3xl md:text-5xl text-black uppercase tracking-wider">My Resume</h2>
          <button 
            onClick={onClose}
            className="w-10 h-10 md:w-12 md:h-12 bg-red-500 border-[4px] border-black rounded-full flex justify-center items-center hover:scale-110 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all shrink-0"
          >
            <X className="w-5 h-5 md:w-6 md:h-6 text-black" strokeWidth={3} />
          </button>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 w-full bg-[#1E1E1E] relative">
          <iframe 
            src="/resume.pdf#toolbar=0" 
            className="w-full h-full border-none"
            title="Resume PDF"
          />
        </div>
      </div>
    </div>
  );
}
