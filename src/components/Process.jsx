import React from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { Search, Compass, Palette, Code, Rocket } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const processIcons = [Search, Compass, Palette, Code, Rocket];

const Process = () => {
  return (
    <section id="process" className="py-28 bg-[#050505] relative z-10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Header */}
        <div className="flex flex-col items-start space-y-4 mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded bg-black/80 backdrop-blur-2xl border border-red-600/40 text-xs font-mono uppercase tracking-widest text-white shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
            <span className="text-red-500 font-bold">EPISODE 05</span>
            <span className="text-white/40">|</span>
            <span>HOW WE EXECUTE & LAUNCH</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            A 5-STEP <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-600 to-amber-500 drop-shadow-[0_0_30px_rgba(229,9,20,0.4)]">
              PROVEN WORK PROCESS.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed max-w-3xl">
            From the initial idea to post-launch optimization, every stage is structured for total clarity, speed, and quality.
          </p>
        </div>

        {/* 5 Steps Grid with alternating AOS directions */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = processIcons[idx % processIcons.length];
            const aosDir = idx % 2 === 0 ? "fade-up" : "zoom-in";
            return (
              <div
                key={step.step}
                data-aos={aosDir}
                data-aos-delay={idx * 80}
              >
                <AnimatedCard className="h-full">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl font-black font-netflix text-red-500 group-hover:scale-110 transition-transform tracking-widest">
                        {step.step}
                      </span>
                      <div className="p-2.5 rounded-xl bg-red-600/10 text-red-500 border border-red-600/20 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-lg font-black font-heading text-white mb-1 group-hover:text-red-500 transition-colors">
                      {step.title}
                    </h3>
                    <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider text-red-400 mb-3">
                      {step.subtitle}
                    </span>

                    <p className="text-xs text-white/70 font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </AnimatedCard>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Process;
