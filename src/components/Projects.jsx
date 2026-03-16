import React, { useEffect, useRef, useState } from 'react';
import { Folder, ExternalLink, Star } from 'lucide-react';

export function Projects() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Simple-Weather-Code",
      desc: "A simple weather application code.",
      link: "https://github.com/HUNTERZEN/Simple-Weather-Code",
      lang: "CSS",
      langColor: "#563d7c",
      stars: 0
    },
    {
      title: "Git-AdvanceGG",
      desc: "Advanced Git workflows and optimizations.",
      link: "https://github.com/HUNTERZEN/Git-AdvanceGG",
      lang: "Python",
      langColor: "#3572A5",
      stars: 0
    },
    {
      title: "Kernel-Builder",
      desc: "Can make kernel with your device trees links and no need to download anything.",
      link: "https://github.com/HUNTERZEN/Kernel-Builder",
      lang: "Shell",
      langColor: "#89e051",
      stars: 0
    },
    {
      title: "Developer-Portfolio",
      desc: "A high-performance, responsive portfolio website built to showcase projects.",
      link: "https://github.com/HUNTERZEN/Personal-Developer-Portfolio",
      lang: "JavaScript",
      langColor: "#f1e05a",
      stars: 0
    },
    {
      title: "ExtremeL3",
      desc: "A high-performance system optimization module meticulously tuned for Snapdragon 870.",
      link: "https://github.com/HUNTERZEN/ExtremeL3",
      lang: "Shell",
      langColor: "#89e051",
      stars: 0
    },
    {
      title: "MaxPerfomanceMagisk",
      desc: "A professional, universal system optimization module built for Raw Performance.",
      link: "https://github.com/HUNTERZEN/MaxPerfomanceMagiskModule",
      lang: "Shell",
      langColor: "#89e051",
      stars: 1
    }
  ];

  return (
    <section 
      className="w-full py-28 relative overflow-hidden" 
      id="projects"
      ref={sectionRef}
    >
      <div className={`max-w-6xl mx-auto px-6 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="section-divider" />
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Pinned <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-base text-white/40 font-light max-w-md mx-auto">
            A showcase of my recent work from GitHub.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <a 
              key={index}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className={`group relative flex flex-col justify-between p-6 rounded-2xl bg-white/[0.015] border border-white/[0.06] hover:border-[#C967E8]/40 transition-all duration-500 hover:-translate-y-1.5 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-[#C967E8]/[0.04] to-transparent" />
              </div>

              {/* Shimmer line on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-2xl">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C967E8]/40 to-transparent" />
              </div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-5">
                  <div className="p-2.5 rounded-xl bg-[#C967E8]/[0.08] text-[#C967E8] group-hover:bg-[#C967E8]/[0.12] transition-colors">
                    <Folder className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div className="text-white/25 group-hover:text-white/70 transition-colors duration-300">
                    <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                </div>
                
                <h3 className="text-base font-semibold mb-2 group-hover:text-[#FA93FA] transition-colors duration-300">{project.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed font-light mb-6">
                  {project.desc}
                </p>
              </div>

              <div className="relative z-10 flex items-center gap-4 text-xs font-medium text-white/40 pt-4 border-t border-white/[0.04]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: project.langColor }}></span>
                  {project.lang}
                </div>
                {project.stars > 0 && (
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-white/30 text-white/30" />
                    {project.stars}
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
