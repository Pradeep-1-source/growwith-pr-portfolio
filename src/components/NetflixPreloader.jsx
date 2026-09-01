import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const NetflixPreloader = ({ onComplete }) => {
  const preloaderRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });

    tl.set(preloaderRef.current, { autoAlpha: 1 })
      .fromTo(
        contentRef.current,
        { scale: 0.9, opacity: 0, filter: "blur(10px)" },
        { scale: 1, opacity: 1, filter: "blur(0px)", duration: 0.9, ease: "power3.out" }
      )
      .to(contentRef.current, {
        scale: 1.08,
        opacity: 0,
        filter: "blur(12px)",
        duration: 0.5,
        ease: "power2.in",
        delay: 0.7
      })
      .to(preloaderRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut"
      });
  }, [onComplete]);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[99999] bg-[#050505] flex items-center justify-center select-none overflow-hidden"
    >
      <div ref={contentRef} className="flex flex-col items-center gap-4">
        {/* Minimal Red Glowing Indicator Dot */}
        <div className="w-3 h-3 rounded-full bg-red-600 animate-ping shadow-[0_0_20px_#E50914]"></div>

        {/* Netflix Title Typography */}
        <div className="text-center">
          <h1 
            className="text-4xl md:text-6xl font-black uppercase tracking-[0.35em] text-white font-netflix drop-shadow-[0_0_30px_rgba(229,9,20,0.8)]"
          >
            GROWWITH <span className="text-red-600">PR</span>
          </h1>
          <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/50 mt-1">
            DIGITAL STUDIO // ORIGINAL SERIES
          </p>
        </div>
      </div>
    </div>
  );
};

export default NetflixPreloader;
