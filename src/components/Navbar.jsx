import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const offset = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#050505]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleClick(e, '#home')}
          className="text-lg font-extrabold tracking-[3px] uppercase text-gradient transition-opacity hover:opacity-80"
        >
          HUNTERZEN
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeSection === link.href.slice(1)
                  ? 'text-white bg-white/[0.08]'
                  : 'text-white/50 hover:text-white/90 hover:bg-white/[0.04]'
              }`}
            >
              {link.label}
              {activeSection === link.href.slice(1) && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#C967E8]" />
              )}
            </a>
          ))}
        </div>

        {/* Contact Button (Desktop) */}
        <a
          href="mailto:kunalsingha390@gmail.com"
          className="hidden md:flex items-center gap-2 px-5 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-[#FA93FA]/10 to-[#983AD6]/10 border border-[#C967E8]/30 text-white hover:border-[#C967E8]/60 hover:shadow-[0_0_20px_rgba(201,103,232,0.15)] transition-all duration-300"
        >
          Contact
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white/70 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/[0.06] animate-slide-down">
          <div className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeSection === link.href.slice(1)
                    ? 'text-white bg-white/[0.06]'
                    : 'text-white/50 hover:text-white hover:bg-white/[0.03]'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:kunalsingha390@gmail.com"
              className="mt-2 px-4 py-3 text-sm font-semibold rounded-xl text-center bg-gradient-to-r from-[#FA93FA]/10 to-[#983AD6]/10 border border-[#C967E8]/30 text-white"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
