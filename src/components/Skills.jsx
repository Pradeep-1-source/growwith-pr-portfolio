import React from 'react';

const techCardsRow1 = [
  { name: 'React.js', level: 'Advanced', category: 'Frontend', },
  { name: 'Tailwind CSS', level: 'Expert', category: 'Styling', },
  { name: 'Node.js', level: 'Advanced', category: 'Backend', },
  { name: 'Shopify', level: 'Expert', category: 'E-Commerce', },
  { name: 'WordPress', level: 'Expert', category: 'CMS', },
  { name: 'JavaScript ES6+', level: 'Expert', category: 'Language', },
  { name: 'Meta Ads & Pixel', level: 'Expert', category: 'Paid Marketing', },
  { name: 'Google SEO', level: 'Advanced', category: 'Organic Growth', },
  { name: 'MySQL & SQL', level: 'Advanced', category: 'Database', },
  { name: 'Python & Java', level: 'Proficient', category: 'Programming', },
];

const deliverablesRow2 = [
  { title: 'Custom UI/UX Design', desc: 'Mobile-first responsive interfaces' },
  { title: 'Payment Gateways', desc: 'UPI, Razorpay, Stripe, Netbanking' },
  { title: 'WhatsApp Lead Funnels', desc: 'Instant 1-click consultation' },
  { title: 'Order & Inventory System', desc: 'Stock management & notifications' },
  { title: 'Page Speed Optimization', desc: 'Lightning fast 95+ score' },
  { title: 'Security Hardening', desc: 'SSL & WordPress security' },
  { title: 'Meta Pixel & CAPI', desc: 'High-ROI audience tracking' },
  { title: 'Admin CMS Panel', desc: 'Easy content editing & management' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-28 bg-[#050505] relative z-10 select-none overflow-hidden border-t border-white/10">

      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-red-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-14">
        {/* Header */}
        <div className="flex flex-col items-start space-y-4" data-aos="fade-up">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded bg-black/80 backdrop-blur-2xl border border-red-600/40 text-xs font-mono uppercase tracking-widest text-white shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
            <span className="text-red-500 font-bold">EPISODE 04</span>
            <span className="text-white/40">|</span>
            <span>TECHNICAL CAPABILITY & STACK</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            CORE STACK & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-600 to-amber-500 drop-shadow-[0_0_30px_rgba(229,9,20,0.4)]">
              PRODUCTION DELIVERABLES.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed max-w-3xl">
            Battle-tested stack of modern frameworks, languages, e-commerce engines, and growth platforms used daily to build robust digital solutions.
          </p>
        </div>
      </div>

      {/* Portnewstich Dual Infinite Marquee Rows */}
      <div className="flex flex-col gap-8" data-aos="fade-up" data-aos-delay="100">

        {/* ── ROW 1: Forward Infinite Scroll ── */}
        <div>
          <div className="flex items-center justify-between px-6 sm:px-12 max-w-7xl mx-auto mb-3">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-red-500 flex items-center gap-2">
              ⚡ Core Technologies
            </span>
          </div>

          <div className="marquee-row-wrap">
            <div className="marquee-fade-left"></div>
            <div className="marquee-row-clip">
              <div className="py-2">
                <div className="marquee-inner flex transform-gpu min-w-[200%] gap-5 px-4">
                  {[...techCardsRow1, ...techCardsRow1, ...techCardsRow1].map((card, idx) => (
                    <div
                      key={`tech-${idx}`}
                      className="skill-marquee-card w-[220px] sm:w-[260px] p-5 shrink-0 cursor-pointer flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-red-400 bg-red-600/10 px-2.5 py-0.5 rounded border border-red-600/20">
                          {card.category}
                        </span>
                        <span className="text-[10px] font-mono text-emerald-400 font-bold border border-emerald-500/30 px-1.5 py-0.5 rounded bg-emerald-500/10">
                          {card.level}
                        </span>
                      </div>
                      <h4 className="text-lg font-black font-heading text-white mb-1">{card.name}</h4>
                      <p className="text-[11px] font-mono text-white/50">Production Ready</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="marquee-fade-right"></div>
          </div>
        </div>

        {/* ── ROW 2: Reverse Infinite Scroll ── */}
        <div>
          <div className="flex items-center justify-between px-6 sm:px-12 max-w-7xl mx-auto mb-3">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-amber-500 flex items-center gap-2">
              🏆 Deliverables & Architecture
            </span>
          </div>

          <div className="marquee-row-wrap">
            <div className="marquee-fade-left"></div>
            <div className="marquee-row-clip">
              <div className="py-2">
                <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] gap-5 px-4">
                  {[...deliverablesRow2, ...deliverablesRow2, ...deliverablesRow2].map((item, idx) => (
                    <div
                      key={`deliv-${idx}`}
                      className="skill-marquee-card w-[240px] sm:w-[280px] p-5 shrink-0 cursor-pointer flex flex-col justify-between border-amber-500/30 hover:border-amber-500"
                    >
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-400 mb-2 block">
                        // FEATURE 0{ (idx % deliverablesRow2.length) + 1 }
                      </span>
                      <h4 className="text-base font-black font-heading text-white mb-1">{item.title}</h4>
                      <p className="text-xs font-mono text-white/60">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="marquee-fade-right"></div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Skills;
