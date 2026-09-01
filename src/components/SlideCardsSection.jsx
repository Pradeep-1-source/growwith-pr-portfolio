import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const TESTIMONIAL_CARDS = [
  {
    id: 1,
    client: "Decor Station India",
    name: "Rajesh Kumar",
    role: "Founder & Owner",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    match: "99.9% Match",
    quote: "Pradeep transformed our online store completely. Mobile conversions increased by 35% within the first month. High-quality execution and lightning fast delivery!",
    tags: ["Shopify E-Commerce", "Razorpay", "35% Conversion Boost"]
  },
  {
    id: 2,
    client: "Zynors Tech Solutions",
    name: "Vikram R.",
    role: "Managing Director",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    match: "99.5% Match",
    quote: "The full-stack web application built by GrowWith PR handles thousands of queries with zero lag. Outstanding performance, clear communication, and ongoing support.",
    tags: ["Full-Stack App", "React", "Node.js"]
  },
  {
    id: 3,
    client: "Aurex Global Indonesia",
    name: "David H. Tan",
    role: "Head of International Trade",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    match: "100% Match",
    quote: "Our export inquiry volume tripled after launching the Areca Nut export portal. The direct WhatsApp funnel brings international trade buyers directly to us.",
    tags: ["Global Export Site", "WhatsApp Funnel", "International SEO"]
  },
  {
    id: 4,
    client: "Sri KDM Enterprises",
    name: "K. Dhanush",
    role: "Retail Chain Manager",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    match: "98.9% Match",
    quote: "Super smooth React storefront with zero lag during peak holiday sales. Pradeep delivers top-tier work with strict adherence to deadlines.",
    tags: ["React Storefront", "Instant Filter", "Zero Lag"]
  },
  {
    id: 5,
    client: "BigTown Collectibles",
    name: "Siddharth Verma",
    role: "Brand Director",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    match: "99.7% Match",
    quote: "The luxury dark UI theme engineered for BigTown positioned us as the premier diecast marketplace in India. Exceptional UI/UX precision!",
    tags: ["Luxury Dark UI", "Diecast Hub", "High Conversion"]
  }
];

const SlideCardsSection = () => {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scrollLeft = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    setTimeout(checkScroll, 350);
  };

  const scrollRight = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    setTimeout(checkScroll, 350);
  };

  return (
    <section className="py-28 bg-[#050505] relative z-10 select-none overflow-hidden border-t border-red-600/20">

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-red-600/10 rounded-full blur-[190px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">

        {/* Header */}
        <div className="flex flex-col items-start space-y-4" data-aos="fade-right">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded bg-black/80 backdrop-blur-2xl border border-red-600/40 text-xs font-mono uppercase tracking-widest text-white shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
            <span className="text-red-500 font-bold">EPISODE 07</span>
            <span className="text-white/40">|</span>
            <span>CLIENT PROOF & REVIEWS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            CLIENT REVIEWS & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-600 to-amber-500 drop-shadow-[0_0_30px_rgba(229,9,20,0.4)]">
              TRENDING SLIDE SHOWCASES.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed max-w-2xl">
            Slide through real client feedback and verified business results delivered by GrowWith PR.
          </p>
        </div>

        {/* Nav Buttons */}
        <div className="flex items-center gap-3 shrink-0" data-aos="fade-left">
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
              canScrollLeft
                ? 'bg-[#141414] border-white/20 text-white hover:bg-red-600 hover:border-red-600 hover:shadow-[0_0_20px_rgba(229,9,20,0.6)] cursor-pointer'
                : 'bg-black/40 border-white/10 text-white/20 cursor-not-allowed'
            }`}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
              canScrollRight
                ? 'bg-[#141414] border-white/20 text-white hover:bg-red-600 hover:border-red-600 hover:shadow-[0_0_20px_rgba(229,9,20,0.6)] cursor-pointer'
                : 'bg-black/40 border-white/10 text-white/20 cursor-not-allowed'
            }`}
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

      </div>

      {/* Slide Track */}
      <div
        ref={sliderRef}
        onScroll={checkScroll}
        className="flex items-stretch gap-6 px-4 sm:px-8 max-w-7xl mx-auto overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar py-4 touch-pan-x"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {TESTIMONIAL_CARDS.map((card, cidx) => (
          <div
            key={card.id}
            className="w-[85vw] sm:w-[360px] md:w-[400px] shrink-0 snap-center"
          >
            <AnimatedCard className="h-full">
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <img
                    src={card.avatar}
                    alt={card.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-red-600/40 shadow-lg"
                  />
                  <div>
                    <h4 className="font-bold text-base font-heading text-white group-hover:text-red-500 transition-colors">
                      {card.name}
                    </h4>
                    <p className="text-xs font-mono text-white/60">
                      {card.role} &bull; <span className="text-red-400 font-semibold">{card.client}</span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 mb-1">
                    {card.match}
                  </span>
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(card.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="w-6 h-6 text-red-600/30 absolute -top-2 -left-2 pointer-events-none" />
                <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed pl-4 italic">
                  "{card.quote}"
                </p>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2 mt-auto">
                {card.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono text-white/70 bg-white/5 border border-white/10 px-2.5 py-1 rounded group-hover:border-red-600/40 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </AnimatedCard>
          </div>
        ))}
      </div>

    </section>
  );
};

export default SlideCardsSection;
