import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);
  const spotlightRef = useRef(null);
  const contentRef = useRef(null);
  const textRef = useRef(null);

  const developerRoles = [
    'GROWWITH PR // WEB DEVELOPMENT',
    'ORIGINAL SERIES // E-COMMERCE STORES',
    'HIGH ROI // META ADS CAMPAIGNS',
    'ACCLAIMED // WORDPRESS & SHOPIFY'
  ];

  const rollingTexts = [
    'WEB DEVELOPER',
    'E-COMMERCE EXPERT',
    'META ADS ARCHITECT',
    'DIGITAL STRATEGIST',
    'WEB DEVELOPER'
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    // --- GSAP CINEMATIC ENTRANCE ANIMATION ---
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.fromTo(
      content.querySelectorAll('.hero-anim-item'),
      { y: 40, opacity: 0, filter: "blur(8px)" },
      { y: 0, opacity: 1, filter: "blur(0px)", duration: 1, stagger: 0.08 }
    );

    // --- PORTNEWSTICH PARALLAX SCRUB ON SCROLL ---
    if (textRef.current) {
      gsap.to(textRef.current, {
        y: -40,
        opacity: 0.8,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        }
      });
    }

    const handleMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${x - 300}px, ${y - 300}px, 0)`;
      }
    };

    const handleMouseEnter = () => {
      if (spotlightRef.current) gsap.to(spotlightRef.current, { opacity: 1, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      if (spotlightRef.current) gsap.to(spotlightRef.current, { opacity: 0, duration: 0.3 });
    };

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseenter", handleMouseEnter);
    section.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseenter", handleMouseEnter);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#050505] overflow-hidden flex flex-col justify-between pt-28 pb-16 select-none bg-grid-pattern"
    >
      {/* 1. Background Gradient & Continuous Text Marquee */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/90 to-[#050505] z-0">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-[0.07]">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...developerRoles, ...developerRoles].map((role, idx) => (
              <span key={idx} className="text-[12vw] font-black font-netflix text-red-600 mx-8 uppercase tracking-tighter">
                {role} &bull;
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Direct Mouse Tracking Spotlight Beam */}
      <div
        ref={spotlightRef}
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none z-10 opacity-0 blur-[100px] transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle, rgba(229,9,20,0.3) 0%, rgba(234,179,8,0.1) 40%, transparent 70%)'
        }}
      ></div>

      {/* 3. Main Content Layer */}
      <div ref={contentRef} className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-8 h-full flex flex-col justify-between my-auto">
        
        {/* Top Netflix Cinematic Badge */}
        <div className="hero-anim-item flex items-center justify-between w-full mb-6" data-aos="fade-down">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded bg-black/80 backdrop-blur-2xl border border-red-600/40 text-xs font-mono uppercase tracking-widest text-white shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
            <span className="text-red-500 font-bold tracking-wider">NETFLIX DIGITAL SERIES</span>
            <span className="text-white/40">|</span>
            <span className="text-white/80">SEASONS 2024 - 2026</span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-white/50 tracking-wider">
            <span className="px-2.5 py-1 border border-white/20 rounded bg-black/40 text-emerald-400">AVAILABLE FOR NEW PROJECTS</span>
            <span className="px-2.5 py-1 border border-white/20 rounded bg-black/40">500+ DELIVERED 4K</span>
          </div>
        </div>

        {/* Main Center Stage Layout */}
        <div className="max-w-4xl py-6">
          
          {/* Developer Story & Rolling Headline */}
          <div ref={textRef} className="flex flex-col items-start space-y-5 text-left will-change-transform">
            
            <div className="hero-anim-item flex items-center gap-3" data-aos="fade-right">
              <span className="px-3 py-1 bg-red-600 text-white font-black text-xs rounded tracking-widest shadow-[0_0_20px_rgba(229,9,20,0.8)] animate-pulse">TOP 1%</span>
              <span className="text-white/80 text-xs font-mono tracking-widest uppercase">Digital Growth & Web Architecture</span>
            </div>

            {/* Portnewstich 3D Rolling Headline */}
            <div className="hero-anim-item flex flex-col w-full" data-aos="fade-up">
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight text-white leading-none">
                HELLO, I'M <span className="gold-gradient-text">PRADEEP</span>
              </h1>
              
              {/* Portnewstich Interactive Rolling Text Container */}
              <div className="leading-[0.9] pb-1 overflow-hidden h-[11vw] sm:h-[4.2rem] lg:h-[5.5rem] relative mt-1">
                <div className="animate-text-roll flex flex-col">
                  {rollingTexts.map((text, idx) => (
                    <h1
                      key={idx}
                      className="text-[9vw] sm:text-5xl lg:text-7xl font-black uppercase tracking-tighter text-transparent [-webkit-text-stroke:2px_#E50914] m-0 p-0 leading-[0.9] drop-shadow-[0_0_20px_rgba(229,9,20,0.5)]"
                    >
                      {text}
                    </h1>
                  ))}
                </div>
              </div>
            </div>

            <div className="hero-anim-item flex flex-wrap items-center gap-2 text-xs font-mono text-red-400 font-bold" data-aos="fade-up" data-aos-delay="100">
              <span className="px-2.5 py-1 bg-red-500/10 border border-red-500/30 rounded text-red-500">99.8% On-Time Delivery</span>
              <span className="text-white/40">•</span>
              <span className="text-white/90">Web Dev</span>
              <span className="text-white/40">•</span>
              <span className="text-white/90">E-Commerce</span>
              <span className="text-white/40">•</span>
              <span className="text-white/90">Meta Ads</span>
            </div>

            <p className="hero-anim-item text-base sm:text-xl text-white/80 font-light leading-relaxed max-w-2xl" data-aos="fade-up" data-aos-delay="150">
              Founder of <strong className="text-white font-semibold">GrowWith PR</strong>. I engineer high-performance custom websites, Shopify & WordPress online stores, and conversion-focused marketing campaigns.
            </p>

            {/* Action Buttons */}
            <div className="hero-anim-item flex flex-wrap items-center gap-3 pt-2" data-aos="fade-up" data-aos-delay="200">
              <a
                href="#contact"
                className="netflix-red-btn px-7 py-3.5 rounded text-xs font-mono uppercase tracking-widest flex items-center gap-2.5 shadow-[0_0_25px_rgba(229,9,20,0.6)] hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current" />
                Start a Project
              </a>
              <a
                href="#work"
                className="px-6 py-3.5 bg-white/10 text-white border border-white/20 font-mono text-xs uppercase tracking-widest rounded hover:bg-white/20 transition-all duration-300 backdrop-blur-md flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer"
              >
                View My Work
              </a>
            </div>

            {/* Glowing Social Connection Icons */}
            <div className="hero-anim-item flex items-center gap-3 pt-3" data-aos="fade-up" data-aos-delay="250">
              <a
                href="https://wa.me/917305053083"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-[#141414] border border-white/15 flex items-center justify-center transition-all duration-300 hover:bg-[#25D366] hover:border-[#25D366] hover:shadow-[0_0_20px_rgba(37,211,102,0.6)] group"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-white transition-colors" />
              </a>

              <a
                href="mailto:growwithpr@gmail.com"
                className="w-11 h-11 rounded-full bg-[#141414] border border-white/15 flex items-center justify-center transition-all duration-300 hover:bg-red-600 hover:border-red-600 hover:shadow-[0_0_20px_rgba(229,9,20,0.6)] group"
                aria-label="Email"
              >
                <svg className="w-5 h-5 text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>

              <a
                href="https://wa.me/917305053083"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-[#141414] border border-white/15 flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-red-500 hover:to-fuchsia-500 hover:border-transparent hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] group"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
