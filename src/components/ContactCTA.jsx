import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Sparkles, Play } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="py-20 bg-[#050505] relative z-10 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="relative glass-card p-10 sm:p-16 rounded-3xl border-red-600/30 bg-gradient-to-r from-[#141414] via-[#050505] to-[#141414] overflow-hidden text-center shadow-2xl">
          
          {/* Background Ambient Crimson Glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-600/20 rounded-full blur-[110px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-red-500 bg-red-600/10 border border-red-600/30 mb-6"
            >
              <Sparkles className="w-3.5 h-3.5" /> READY TO UPGRADE YOUR DIGITAL PRESENCE?
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight leading-tight mb-8"
            >
              HAVE AN IDEA? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-600 to-amber-500">
                LET'S TURN IT INTO REALITY.
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="#contact"
                className="netflix-red-btn px-8 py-4 rounded text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(229,9,20,0.6)] w-full sm:w-auto"
              >
                <Play className="w-4 h-4 fill-current" />
                Start Your Project
              </a>

              <a
                href="https://wa.me/917305053083"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 flex items-center justify-center gap-2 transition-all w-full sm:w-auto"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Me (7305053083)
              </a>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactCTA;
