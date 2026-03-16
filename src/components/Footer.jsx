import React from 'react';
import { Github, Instagram, Send, ChevronUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full relative border-t border-white/[0.04] pt-12 pb-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
          
          {/* Branding */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="text-xl font-extrabold tracking-[4px] uppercase text-gradient">
              HUNTERZEN
            </div>
            <div className="text-xs text-white/30 font-light tracking-wide">
              Designed & Developed by Kunal Singha
            </div>
          </div>

          {/* Social + Scroll Top */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3">
              <a 
                href="https://github.com/hunterzen" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-[#FA93FA] hover:bg-white/[0.08] hover:border-[#C967E8]/30 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github strokeWidth={1.5} className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/ig_nitroxedits?igsh=MXZ6dXI1MjI2aGlyMg==" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-[#FA93FA] hover:bg-white/[0.08] hover:border-[#C967E8]/30 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram strokeWidth={1.5} className="w-4 h-4" />
              </a>
              <a 
                href="https://t.me/HunterZolomonnnn" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-[#FA93FA] hover:bg-white/[0.08] hover:border-[#C967E8]/30 transition-all duration-300"
                aria-label="Telegram"
              >
                <Send strokeWidth={1.5} className="w-4 h-4" />
              </a>
            </div>
            
            <div className="w-px h-6 bg-white/[0.08]"></div>

            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#FA93FA]/10 to-[#983AD6]/10 border border-[#C967E8]/20 flex items-center justify-center text-white/70 hover:text-white hover:scale-110 hover:border-[#C967E8]/40 active:scale-95 transition-all duration-300 group"
              aria-label="Scroll to top"
            >
              <ChevronUp strokeWidth={2} className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-6 border-t border-white/[0.04] text-center">
          <p className="text-[11px] text-white/20 font-light tracking-wide">
            © {currentYear} Kunal Singha. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
