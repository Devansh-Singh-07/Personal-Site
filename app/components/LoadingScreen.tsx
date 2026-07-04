"use client";

import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Start exit animation after 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Completely unmount after exit animation (700ms)
    const cleanup = setTimeout(() => {
      setShouldRender(false);
    }, 2700);

    return () => {
      clearTimeout(timer);
      clearTimeout(cleanup);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div 
      className={`fixed inset-0 z-[10000] flex items-center justify-center bg-[#52057E] transition-transform duration-700 ease-in-out ${isLoading ? 'translate-y-0' : '-translate-y-full'}`}
    >
      {/* Comic Dot Pattern Overlay for brutalist aesthetic */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{ backgroundImage: 'radial-gradient(circle, #000 3px, transparent 3px)', backgroundSize: '32px 32px' }}
      />
      
      <div className="relative z-10 bg-[#E2FF3E] border-[8px] border-black shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] rounded-[40px] px-16 py-12 flex flex-col items-center justify-center gap-8 animate-fade-in-up">
        <Loader2 className="w-24 h-24 text-black animate-spin" strokeWidth={3} />
        <h1 className="font-heading text-5xl md:text-7xl text-black uppercase tracking-widest text-center">
          Loading
          <span className="animate-pulse">...</span>
        </h1>
      </div>
    </div>
  );
}
