import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AOS from 'aos';
import 'aos/dist/aos.css';

import SEO from './components/SEO';
import NetflixPreloader from './components/NetflixPreloader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStats from './components/TrustStats';
import About from './components/About';
import ServicesWheel from './components/ServicesWheel';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Process from './components/Process';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import SlideCardsSection from './components/SlideCardsSection';
import ContactForm from './components/ContactForm';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS (from Portnewstich)
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic'
    });

    // Initialize Lenis Smooth Scroll (from Portnewstich)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    // Sync Lenis with GSAP ScrollTrigger & AOS
    lenis.on('scroll', () => {
      ScrollTrigger.update();
      AOS.refresh();
    });

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <div className="bg-[#050505] text-white min-h-screen relative font-sans selection:bg-red-600 selection:text-white">
      {/* Cinematic Netflix Intro Preloader */}
      {loading && <NetflixPreloader onComplete={() => setLoading(false)} />}

      <SEO
        title="GrowWith PR | Web Development & Digital Growth"
        description="GrowWith PR by Pradeep builds premium, high-converting custom websites, e-commerce stores, WordPress platforms, Meta Ads campaigns, and digital growth systems."
      />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <TrustStats />
        <About />
        <ServicesWheel />
        <Portfolio />
        <Skills />
        <Process />
        <WhyWorkWithMe />
        <SlideCardsSection />
        <ContactForm />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
