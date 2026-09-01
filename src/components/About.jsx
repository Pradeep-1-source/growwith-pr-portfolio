import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Layout, TrendingUp, Briefcase, MapPin, Award } from 'lucide-react';
import AnimatedCard from './AnimatedCard';
import profileImg from '../assets/profile.jpg';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const pillars = [
    {
      title: "Full-Stack Web Engineering",
      desc: "Clean, performant architecture using React, Node.js, JavaScript, Java, Python, SQL, and modern web frameworks.",
      icon: Code2
    },
    {
      title: "UI/UX & Design Precision",
      desc: "Apple-inspired minimal design, strong contrast, modern typography, glassmorphism, and touch ergonomics.",
      icon: Layout
    },
    {
      title: "Growth & Conversion Strategy",
      desc: "Meta Ads, Google SEO, page speed optimization, and direct WhatsApp lead funnels designed to increase client revenue.",
      icon: TrendingUp
    },
    {
      title: "E-Commerce & Digital Commerce",
      desc: "Deep experience setting up e-commerce platforms (Shopify, WooCommerce, Custom) with integrated payment gateways.",
      icon: Briefcase
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // --- PORTNEWSTICH HUGE TEXT SCROLL ZOOM ---
    gsap.fromTo(
      ".welcome-huge-text",
      { y: -80, scale: 0.9, opacity: 0 },
      {
        y: 0,
        scale: 1,
        opacity: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "top center",
          scrub: 1
        }
      }
    );

    // --- Cinematic Stagger Entrance on Scroll ---
    gsap.fromTo(
      cardRefs.current.filter(Boolean),
      { y: 60, opacity: 0, scale: 0.96 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.9,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    );

  }, []);

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#050505] text-white py-28 px-4 sm:px-8 flex flex-col justify-center select-none overflow-hidden"
    >
      {/* Portnewstich Huge Background Watermark Text with Scroll Zoom */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <h2 className="welcome-huge-text text-[22vw] sm:text-[18vw] font-black font-netflix uppercase text-white tracking-tighter leading-none whitespace-nowrap opacity-0">
          WELCOME
        </h2>
      </div>

      {/* Background Cinematic Crimson Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full space-y-16">
        
        {/* Section Header - Netflix Series Episode Format */}
        <div className="flex flex-col items-start space-y-4" data-aos="fade-up">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded bg-black/80 backdrop-blur-2xl border border-red-600/40 text-xs font-mono uppercase tracking-widest text-white shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
            <span className="text-red-500 font-bold">EPISODE 01</span>
            <span className="text-white/40">|</span>
            <span>ABOUT GROWWITH PR</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            EPISODE SYNOPSIS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-600 to-amber-500 drop-shadow-[0_0_30px_rgba(229,9,20,0.4)]">
              MORE THAN JUST A DEVELOPER.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed max-w-3xl">
            I bridge the gap between technical execution and real business growth. When you work with me, you don’t just get code — you get a strategic partner committed to your digital success.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Card 1: Personal Profile Core (Span 5) */}
          <div
            ref={addToRefs}
            data-aos="fade-right"
            className="lg:col-span-5"
          >
            <AnimatedCard className="h-full">
              <div className="absolute top-0 right-0 p-6 text-white/5 font-mono text-7xl font-black pointer-events-none">
                01
              </div>

              <div className="flex flex-col items-center text-center space-y-5">
                {/* Profile Photo */}
                <div className="relative w-36 h-36 rounded-full p-1 bg-gradient-to-tr from-red-600 via-rose-500 to-amber-400 shadow-2xl">
                  <img
                    src={profileImg}
                    alt="Pradeep - Founder of GrowWith PR"
                    className="w-full h-full rounded-full object-cover object-top border-4 border-[#050505]"
                  />
                  <span className="absolute bottom-1 right-1 w-5 h-5 bg-emerald-400 border-2 border-[#050505] rounded-full shadow-lg shadow-emerald-400/50" />
                </div>

                <div>
                  <h3 className="text-2xl font-black font-heading text-white">Pradeep</h3>
                  <p className="text-xs font-mono font-bold uppercase tracking-widest text-red-500 mt-1">
                    Founder & Lead Digital Architect
                  </p>
                </div>

                <p className="text-sm text-white/70 font-light leading-relaxed">
                  "My goal is simple: deliver high-caliber web applications and growth marketing strategies that make your brand unmistakable and turn visitors into long-term clients."
                </p>

                {/* Badges */}
                <div className="flex flex-wrap items-center justify-center gap-3 w-full text-xs font-mono text-white/70 pt-4 border-t border-white/10">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-red-500" /> Tamil Nadu, India
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-red-500" /> 500+ Projects
                  </span>
                </div>
              </div>
            </AnimatedCard>
          </div>

          {/* Card 2: 4 Core Technical & Strategic Pillars (Span 7) */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6" data-aos="fade-left">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} ref={addToRefs}>
                  <AnimatedCard className="h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-red-600/10 text-red-500 border border-red-600/20 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono text-white/30 font-bold">0{idx + 2}</span>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-lg font-bold font-heading text-white group-hover:text-red-500 transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </AnimatedCard>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
