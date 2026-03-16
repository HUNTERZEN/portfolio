import React, { useEffect, useRef, useState } from 'react';

export function Skills() {
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

  const techStack = [
    { name: 'C++', color: '#00599C' },
    { name: 'JavaScript', color: '#F7DF1E' },
    { name: 'PowerShell', color: '#5391FE' },
    { name: 'Python', color: '#3776AB' },
    { name: 'Bash', color: '#4EAA25' },
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'HTML5', color: '#E34F26' },
    { name: 'Java', color: '#007396' },
    { name: 'Kotlin', color: '#7F52FF' },
    { name: 'Dart', color: '#0175C2' },
    { name: 'Rust', color: '#DEA584' },
    { name: 'Azure', color: '#0089D6' },
    { name: 'AWS', color: '#FF9900' },
    { name: 'Firebase', color: '#FFCA28' },
    { name: '.NET', color: '#512BD4' },
    { name: 'Vite', color: '#646CFF' },
    { name: 'React', color: '#61DAFB' },
    { name: 'NGINX', color: '#009639' },
    { name: 'SQLite', color: '#44A8D6' },
    { name: 'Appwrite', color: '#F02E65' }
  ];

  return (
    <section 
      className="w-full py-28 relative overflow-hidden" 
      id="skills"
      ref={sectionRef}
    >
      <div className={`max-w-6xl mx-auto px-6 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="section-divider" />
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-base text-white/40 font-light max-w-md mx-auto">
            Languages, tools & frameworks I specialize in.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {techStack.map((tech, index) => (
            <div 
              key={index} 
              className={`group relative flex items-center gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-400 overflow-hidden cursor-default ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Hover glow */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-[0.12] transition-opacity duration-500 rounded-2xl"
                style={{ background: `radial-gradient(circle at center, ${tech.color} 0%, transparent 70%)` }}
              />
              
              {/* Dot */}
              <div className="relative flex-shrink-0">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: tech.color }} />
                <div 
                  className="absolute inset-0 rounded-full blur-[3px] opacity-60"
                  style={{ backgroundColor: tech.color }}
                />
              </div>
              
              <span className="font-medium text-sm text-white/70 group-hover:text-white transition-colors duration-300 z-10">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

      </div>
      
      {/* Background glow */}
      <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-[#FA93FA] rounded-full mix-blend-screen filter blur-[200px] opacity-[0.04] pointer-events-none" />
    </section>
  );
}
