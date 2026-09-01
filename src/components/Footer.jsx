import React from 'react';
import { MessageCircle, Mail, Phone, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] text-white/60 pt-16 pb-12 border-t border-red-600/20 relative z-10 font-sans select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-red-600/60 p-0.5 bg-black shadow-[0_0_15px_rgba(229,9,20,0.4)]">
                <img
                  src="/logo.png"
                  alt="GrowWith PR Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-black text-xl font-netflix text-white tracking-wider">
                GROWWITH <span className="text-red-600">PR</span>
              </span>
            </div>

            <p className="text-xs text-white/60 font-light leading-relaxed max-w-sm">
              Custom web development, e-commerce storefronts, and conversion-focused growth marketing engineered by Pradeep to help brands scale fast.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://wa.me/917305053083"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="mailto:growwithpr@gmail.com"
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white hover:text-red-500 hover:border-red-600/40 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-red-500">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li><a href="#home" className="hover:text-red-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-red-500 transition-colors">About Pradeep</a></li>
              <li><a href="#services" className="hover:text-red-500 transition-colors">Digital Services</a></li>
              <li><a href="#work" className="hover:text-red-500 transition-colors">Featured Work</a></li>
              <li><a href="#skills" className="hover:text-red-500 transition-colors">Core Stack</a></li>
              <li><a href="#process" className="hover:text-red-500 transition-colors">Work Process</a></li>
              <li><a href="#contact" className="hover:text-red-500 transition-colors">Start Project</a></li>
            </ul>
          </div>

          {/* Services List */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-red-500">
              Services
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li><a href="#services" className="hover:text-red-500 transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-red-500 transition-colors">E-Commerce Stores</a></li>
              <li><a href="#services" className="hover:text-red-500 transition-colors">Shopify & WordPress</a></li>
              <li><a href="#services" className="hover:text-red-500 transition-colors">Meta Ads Campaigns</a></li>
              <li><a href="#services" className="hover:text-red-500 transition-colors">SEO & Content Audit</a></li>
              <li><a href="#services" className="hover:text-red-500 transition-colors">Custom Web Apps</a></li>
            </ul>
          </div>

          {/* Direct Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-red-500">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs font-mono">
              <p className="text-white font-bold flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-red-500" /> +91 7305053083
              </p>
              <p className="text-white/50">Tamil Nadu, India</p>
              <p className="text-emerald-400 font-semibold text-[11px] pt-2 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> WhatsApp Active 24/7
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <p>© 2026 GROWWITH PR. ALL RIGHTS RESERVED. DESIGNED & DEVELOPED BY PRADEEP.</p>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white hover:text-red-500 hover:border-red-600/40 transition-all flex items-center gap-2"
          >
            Back to top <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
