import React, { useEffect, useRef, useState } from 'react';
import { Code2, Layers, Shield, Smartphone } from 'lucide-react';

export function About() {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const highlights = [
    { icon: Code2, label: 'Full-Stack Dev', desc: 'End-to-end web applications' },
    { icon: Smartphone, label: 'ROM Developer', desc: 'Custom Android OS experiences' },
    { icon: Shield, label: 'Cybersecurity', desc: 'Expanding into security' },
    { icon: Layers, label: 'CTO', desc: 'Leading Neurovia Solutions' },
  ];

  return (
    <section 
      className="w-full py-28 relative overflow-hidden" 
      id="about" 
      ref={sectionRef}
    >
      <div className={`max-w-6xl mx-auto px-6 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="section-divider" />
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-base text-white/40 font-light max-w-lg mx-auto">
            Software engineer passionate about building impactful digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          
          {/* Left Column — Bio */}
          <div className="lg:col-span-3 flex flex-col space-y-8">
            <div className="glass-card p-8 md:p-10">
              <p className="text-base md:text-lg text-white/65 leading-[1.8] font-light">
                I'm a dedicated and passionate software engineer with a core focus on{' '}
                <strong className="text-white/90 font-medium">Full-Stack Web Development</strong> and{' '}
                <strong className="text-white/90 font-medium">App Development</strong>. Beyond building end-to-end web applications, I am deeply involved in mobile ecosystems as an{' '}
                <strong className="text-white/90 font-medium">Android ROM Developer</strong>—building custom OS experiences and creating port builds. I also serve as the CTO of{' '}
                <span className="text-[#C967E8] font-medium">Neurovia Solutions</span>. Currently, I'm expanding my horizons into{' '}
                <strong className="text-white/90 font-medium">Cybersecurity</strong> and am always open to exciting collaborations and providing elite tech support.
              </p>
              
              <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center gap-4">
                <div className="w-1 h-10 rounded-full bg-gradient-to-b from-[#FA93FA] to-[#983AD6]" />
                <p className="text-lg font-medium text-white/80 italic">
                  "Let's build something amazing together."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column — Highlight Cards */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-3">
            {highlights.map((item, i) => (
              <div 
                key={i} 
                className={`glass-card p-5 flex flex-col gap-3 group transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${(i + 2) * 150}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FA93FA]/15 to-[#983AD6]/15 border border-[#C967E8]/20 flex items-center justify-center group-hover:border-[#C967E8]/40 transition-colors">
                  <item.icon className="w-5 h-5 text-[#C967E8]" strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-semibold text-white/90">{item.label}</h3>
                <p className="text-xs text-white/40 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
      
      {/* Background glow */}
      <div className="absolute top-1/2 -left-40 w-80 h-80 bg-[#983AD6] rounded-full mix-blend-screen filter blur-[180px] opacity-[0.06] pointer-events-none" />
    </section>
  );
}
