import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { InfiniteSlider } from './ui/infinite-slider.jsx';
import { HeroVideo } from './ui/hero-video.jsx';

export function Hero() {
  const hlsUrl = "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/697945ca6b876878dba3b23fbd2f1561/manifest/video.m3u8";

  const logos = [
    { name: "OpenAI", url: "https://html.tailus.io/blocks/customers/openai.svg" },
    { name: "Nvidia", url: "https://html.tailus.io/blocks/customers/nvidia.svg" },
    { name: "GitHub", url: "https://html.tailus.io/blocks/customers/github.svg" },
    { name: "Tailus", url: "https://html.tailus.io/blocks/customers/tailus.svg" },
    { name: "Vercel", url: "https://html.tailus.io/blocks/customers/vercel.svg" },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full flex flex-col min-h-screen overflow-hidden" id="home">
      
      {/* ---------- Video Background (behind everything) ---------- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050505] via-[#050505]/60 to-[#050505]" />
        <HeroVideo 
          src={hlsUrl}
          className="w-full h-full object-cover opacity-40 mix-blend-screen"
        />
      </div>

      {/* Ambient glow orbs */}
      <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-[#983AD6] rounded-full mix-blend-screen filter blur-[180px] opacity-[0.07] pointer-events-none" />
      <div className="absolute top-[30%] right-[10%] w-[350px] h-[350px] bg-[#FA93FA] rounded-full mix-blend-screen filter blur-[180px] opacity-[0.05] pointer-events-none" />

      {/* ---------- Main Content ---------- */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 flex-grow pt-32 pb-8">
        
        {/* Status Badge */}
        <div className="animate-fade-in-up opacity-0 flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] mb-10 backdrop-blur-md">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4ade80]"></span>
          </span>
          <span className="text-sm font-medium text-white/60">
            Open to collaborations
          </span>
        </div>

        {/* Name */}
        <h1 className="animate-fade-in-up opacity-0 delay-100 text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-black leading-[1.05] tracking-[-2px] mb-4">
          <span className="text-gradient-subtle">Kunal</span>{' '}
          <span className="text-white">Singha</span>
        </h1>

        {/* Alias */}
        <div className="animate-fade-in-up opacity-0 delay-200 flex items-center gap-3 mb-8">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-white/20" />
          <span className="text-lg md:text-xl font-bold tracking-[6px] uppercase text-gradient">
            HUNTERZEN
          </span>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-white/20" />
        </div>

        {/* Role */}
        <p className="animate-fade-in-up opacity-0 delay-300 text-base md:text-lg text-white/50 max-w-xl mx-auto leading-relaxed font-light mb-12">
          CTO of <span className="text-[#C967E8] font-medium">Neurovia Solutions</span> · Full-Stack Developer · Android ROM Developer
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up opacity-0 delay-400 flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => scrollTo('about')}
            className="group flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-white text-[#050505] font-semibold text-sm hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-300 active:scale-95"
          >
            About Me
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="mailto:kunalsingha390@gmail.com"
            className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-transparent border border-white/15 text-white font-semibold text-sm hover:bg-white/[0.05] hover:border-white/30 transition-all duration-300 active:scale-95"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-20 flex flex-col items-center pb-8 animate-fade-in opacity-0 delay-800">
        <span className="text-[10px] uppercase tracking-[3px] text-white/25 mb-3">Scroll</span>
        <ChevronDown className="w-4 h-4 text-white/25 animate-bounce" />
      </div>

      {/* ---------- Logo Cloud ---------- */}
      <div className="relative z-30 w-full border-t border-white/[0.04] py-6 bg-[#050505]/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-6 md:gap-10">
          
          <div className="flex-shrink-0 flex items-center gap-4">
            <span className="text-[11px] font-semibold uppercase tracking-[2px] text-white/30">
              Trusted by
            </span>
            <div className="hidden md:block w-px h-6 bg-white/[0.08]"></div>
          </div>

          <div className="flex-grow w-full overflow-hidden">
             <InfiniteSlider duration={30} className="py-1">
                <div className="flex items-center gap-14 px-7">
                  {logos.map((logo, i) => (
                    <img 
                      key={i} 
                      src={logo.url} 
                      alt={logo.name} 
                      className="h-7 md:h-8 w-auto brightness-0 invert opacity-30 hover:opacity-60 transition-opacity duration-500" 
                    />
                  ))}
                </div>
             </InfiniteSlider>
          </div>

        </div>
      </div>

    </section>
  );
}
