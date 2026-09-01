import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, MessageCircle, Play } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Skills', href: '#skills' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-2xl px-5 py-3 transition-all duration-300 flex items-center justify-between ${
          scrolled
            ? 'glass-nav shadow-2xl shadow-black/90 py-2.5 border-red-600/30'
            : 'bg-black/40 backdrop-blur-md border border-white/10'
        }`}
      >
        {/* Brand Logo - Netflix Styled */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-red-600/60 p-0.5 bg-black transition-transform duration-300 group-hover:scale-105 shadow-[0_0_15px_rgba(229,9,20,0.4)]">
            <img
              src="/logo.png"
              alt="GrowWith PR Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl tracking-tight text-white font-netflix leading-none flex items-center gap-1">
              GROWWITH <span className="text-red-600">PR</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white inline-block"></span>
            </span>
            <span className="text-[9px] text-white/50 uppercase tracking-widest font-mono">
              DIGITAL STUDIO // 4K
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono uppercase tracking-widest text-white/70 hover:text-red-500 transition-colors relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://wa.me/917305053083"
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-2 rounded-lg text-xs font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 flex items-center gap-1.5 transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          <a
            href="#contact"
            className="netflix-red-btn px-5 py-2.5 rounded-lg text-xs font-mono uppercase tracking-widest flex items-center gap-2 group shadow-[0_0_20px_rgba(229,9,20,0.6)] hover:scale-105 active:scale-95"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            Start Project
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-[#141414] border border-white/10 text-white hover:text-red-500 transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-x-4 top-20 z-50 glass-nav p-6 rounded-2xl border border-red-600/30 bg-[#050505]/95 shadow-2xl backdrop-blur-2xl flex flex-col gap-4"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-mono uppercase tracking-widest text-white/80 hover:text-red-500 py-2.5 px-3 rounded-lg hover:bg-white/5 transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="netflix-red-btn text-center py-3 rounded-xl text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-red-600/40"
              >
                <Play className="w-3.5 h-3.5 fill-current" /> Start Project
              </a>
              <a
                href="https://wa.me/917305053083"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl text-xs font-mono uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" /> Direct WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
