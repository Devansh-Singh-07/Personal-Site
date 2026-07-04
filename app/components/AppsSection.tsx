export default function AppsSection() {
  const apps = [
    { name: "ClassMotion", color: "bg-blue-500", scale: "scale-90" },
    { name: "DevDen", color: "bg-[#1E1E1E]", scale: "scale-100 z-10 animate-pulse-glow" },
    { name: "RSMS", color: "bg-purple-500", scale: "scale-90" },
  ];

  return (
    <section id="apps" className="py-32 bg-black text-[#E2FF3E]">
      <div className="max-w-[1728px] mx-auto px-16">
        <h2 className="font-heading text-8xl md:text-[96px] mb-24 text-center text-[#E2FF3E]">
          MY APPS
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4 lg:gap-12">
          {apps.map((app, i) => (
            <div
              key={i}
              className={`relative w-[300px] h-[600px] md:w-[350px] md:h-[700px] rounded-[50px] border-[14px] border-[#333] bg-black shadow-2xl overflow-hidden flex flex-col transition-transform duration-500 hover:scale-105 ${app.scale}`}
            >
              {/* Dynamic Island (CSS mockup) */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-full z-20 flex justify-end items-center px-4">
                <div className="w-3 h-3 rounded-full bg-gray-800 border-[3px] border-[#111]" />
              </div>

              {/* Status Bar */}
              <div className="absolute top-0 w-full h-[50px] z-10 flex justify-between items-end px-8 pb-2 text-white font-sans text-[14px] font-semibold">
                <span>9:41</span>
                <div className="flex gap-2 items-center">
                  <div className="w-4 h-3 bg-white mask-signal" />
                  <div className="w-4 h-3 bg-white mask-wifi" />
                  <div className="w-6 h-3 border border-white rounded-[4px] p-[1px]">
                    <div className="w-[80%] h-full bg-white rounded-[2px]" />
                  </div>
                </div>
              </div>

              {/* App Screen Content */}
              <div className={`flex-1 w-full h-full ${app.color} pt-[60px] pb-[40px] px-6 flex flex-col`}>
                <div className="mt-auto mb-auto text-center">
                  <h3 className="font-heading text-4xl text-white mb-4">
                    {app.name}
                  </h3>
                  <div className="w-16 h-16 bg-white/20 rounded-2xl mx-auto backdrop-blur-md flex justify-center items-center">
                    <div className="w-8 h-8 bg-white rounded-lg" />
                  </div>
                </div>
              </div>

              {/* Home Indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[140px] h-[5px] bg-white rounded-full z-20" />
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-16">
          <div className="w-4 h-4 bg-[#E2FF3E] rounded-full" />
          <div className="w-4 h-4 bg-gray-600 rounded-full" />
          <div className="w-4 h-4 bg-gray-600 rounded-full" />
        </div>
      </div>
    </section>
  );
}
