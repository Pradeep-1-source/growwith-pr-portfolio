import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Check, Send, Sparkles, ShieldAlert, Phone, Mail, MapPin, Play } from 'lucide-react';

const BUDGET_OPTIONS = [
  {
    id: 'Basic',
    title: 'Basic',
    desc: 'For simple starter websites',
    highlight: false
  },
  {
    id: 'Professional',
    title: 'Professional',
    badge: 'Recommended',
    desc: 'For growing businesses seeking scale',
    highlight: true
  },
  {
    id: 'Premium',
    title: 'Premium',
    desc: 'For advanced custom requirements',
    highlight: false
  }
];

const SERVICE_OPTIONS = [
  'Website Development',
  'E-commerce Store',
  'WordPress Development',
  'Shopify Setup',
  'Landing Page',
  'Digital Marketing',
  'Meta Ads',
  'SEO & Content',
  'Other Services'
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    businessName: '',
    budget: 'Professional',
    websiteType: 'E-commerce Website',
    selectedServices: ['Website Development'],
    description: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const toggleService = (service) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(service);
      const updated = exists
        ? prev.selectedServices.filter((s) => s !== service)
        : [...prev.selectedServices, service];
      return { ...prev, selectedServices: updated };
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!formData.whatsapp.trim()) newErrors.whatsapp = 'WhatsApp number is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const formattedServices = formData.selectedServices.length > 0
      ? formData.selectedServices.map((s) => `• ${s}`).join('\n')
      : '• Not specified';

    const rawMessage = `*NEW WEBSITE & DIGITAL ENQUIRY — GROWWITH PR*
────────────────────────────
*Client Name:* ${formData.name.trim()}
*WhatsApp:* ${formData.whatsapp.trim()}
*Email:* ${formData.email.trim()}
*Business/Brand:* ${formData.businessName.trim() || 'N/A'}
────────────────────────────
*Selected Budget:* ${formData.budget}
*Website Type:* ${formData.websiteType}
────────────────────────────
*Services Required:*
${formattedServices}
────────────────────────────
*Project Details:*
${formData.description.trim() || 'No additional details provided.'}
────────────────────────────
_Sent via GrowWith PR Web Portal_`;

    const encodedMessage = encodeURIComponent(rawMessage);
    const whatsappUrl = `https://wa.me/917305053083?text=${encodedMessage}`;

    setTimeout(() => {
      setIsSubmitting(false);
      window.open(whatsappUrl, '_blank');
    }, 400);
  };

  return (
    <section id="contact" className="py-28 bg-[#050505] relative z-10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header - Netflix Series Episode Format */}
        <div className="flex flex-col items-start space-y-4 mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded bg-black/80 backdrop-blur-2xl border border-red-600/40 text-xs font-mono uppercase tracking-widest text-white shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
            <span className="text-red-500 font-bold">FINALE</span>
            <span className="text-white/40">|</span>
            <span>START YOUR PROJECT TODAY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            LET'S BUILD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-600 to-amber-500 drop-shadow-[0_0_30px_rgba(229,9,20,0.4)]">
              SOMETHING GREAT TOGETHER.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed max-w-3xl">
            Tell me about your project goals and budget. I’ll review your details and connect directly via WhatsApp with an action plan.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Info Column (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            data-aos="fade-right"
            className="lg:col-span-4 flex flex-col gap-6"
          >
            {/* Direct Contact Card */}
            <div className="glass-card p-8 rounded-3xl border-white/10 bg-[#141414]/90 shadow-2xl">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-red-500 mb-6">
                Direct Contact Channels
              </h3>
              
              <div className="space-y-6">
                <a
                  href="https://wa.me/917305053083"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-white/50 uppercase block font-bold">WhatsApp / Direct Line</span>
                    <span className="text-base font-black text-white group-hover:text-emerald-400 transition-colors">+91 7305053083</span>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-red-600/10 border border-red-600/30 text-red-500">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-white/50 uppercase block font-bold">Official Email</span>
                    <span className="text-sm font-bold text-white">growwithpr@gmail.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-white/50 uppercase block font-bold">Location</span>
                    <span className="text-sm font-bold text-white">Tamil Nadu, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Guarantee Card */}
            <div className="glass-card p-6 rounded-2xl border-white/10 bg-[#141414]/80 flex items-start gap-4 shadow-xl">
              <div className="p-2.5 rounded-xl bg-red-600/10 text-red-500 border border-red-600/20">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-1">Fast 2-Hour Response</h4>
                <p className="text-xs text-white/60 font-light leading-relaxed">
                  Enquiries submitted receive an instant proposal review and direct WhatsApp message within 2 hours.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Interactive Form Column (8 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 glass-card p-6 sm:p-10 rounded-3xl border-white/10 bg-[#141414]/95 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Row 1: Name & WhatsApp */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-white block">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. John Doe"
                    className={`w-full bg-[#050505] border ${
                      errors.name ? 'border-red-500' : 'border-white/10 focus:border-red-600'
                    } rounded-xl px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-white/30 font-mono`}
                  />
                  {errors.name && (
                    <span className="text-xs text-red-400 font-mono flex items-center gap-1">
                      <ShieldAlert className="w-3.5 h-3.5" /> {errors.name}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-white block">
                    WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    placeholder="e.g. +91 9876543210"
                    className={`w-full bg-[#050505] border ${
                      errors.whatsapp ? 'border-red-500' : 'border-white/10 focus:border-red-600'
                    } rounded-xl px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-white/30 font-mono`}
                  />
                  {errors.whatsapp && (
                    <span className="text-xs text-red-400 font-mono flex items-center gap-1">
                      <ShieldAlert className="w-3.5 h-3.5" /> {errors.whatsapp}
                    </span>
                  )}
                </div>
              </div>

              {/* Row 2: Email & Business Name */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-white block">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. john@brand.com"
                    className={`w-full bg-[#050505] border ${
                      errors.email ? 'border-red-500' : 'border-white/10 focus:border-red-600'
                    } rounded-xl px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-white/30 font-mono`}
                  />
                  {errors.email && (
                    <span className="text-xs text-red-400 font-mono flex items-center gap-1">
                      <ShieldAlert className="w-3.5 h-3.5" /> {errors.email}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-white block">
                    Business / Brand Name <span className="text-white/40 text-[10px]">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    placeholder="e.g. ABC Store"
                    className="w-full bg-[#050505] border border-white/10 focus:border-red-600 rounded-xl px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-white/30 font-mono"
                  />
                </div>
              </div>

              {/* Budget Selection Cards */}
              <div className="space-y-3">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-white block">
                  Select Project Budget Range <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {BUDGET_OPTIONS.map((opt) => {
                    const selected = formData.budget === opt.id;
                    return (
                      <div
                        key={opt.id}
                        onClick={() => setFormData({ ...formData, budget: opt.id })}
                        className={`cursor-pointer rounded-2xl p-4 border transition-all duration-300 relative flex flex-col justify-between ${
                          selected
                            ? 'bg-[#1c1c1c] border-red-600 shadow-[0_0_20px_rgba(229,9,20,0.3)] ring-1 ring-red-600'
                            : 'bg-[#050505] border-white/10 hover:border-white/20'
                        }`}
                      >
                        {opt.badge && (
                          <span className="absolute -top-2.5 right-4 px-2.5 py-0.5 rounded-full text-[9px] font-mono font-extrabold uppercase bg-red-600 text-white shadow-md">
                            {opt.badge}
                          </span>
                        )}

                        <div className="flex items-center justify-between mb-2">
                          <span className={`text-base font-bold font-heading ${selected ? 'text-red-500' : 'text-white'}`}>
                            {opt.title}
                          </span>
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selected ? 'border-red-600 bg-red-600' : 'border-white/20'}`}>
                            {selected && <Check className="w-3 h-3 text-white stroke-[3]" />}
                          </div>
                        </div>

                        <p className="text-xs text-white/60 font-light leading-tight">
                          {opt.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Website Type Selection */}
              <div className="space-y-3">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-white block">
                  Website Type <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['Business Website', 'E-commerce Website'].map((type) => {
                    const selected = formData.websiteType === type;
                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, websiteType: type })}
                        className={`py-3.5 px-5 rounded-xl border text-xs font-mono font-bold tracking-wider uppercase transition-all flex items-center justify-between ${
                          selected
                            ? 'bg-red-600/10 border-red-600 text-red-500'
                            : 'bg-[#050505] border-white/10 text-white hover:border-white/20'
                        }`}
                      >
                        <span>{type}</span>
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selected ? 'border-red-600 bg-red-600' : 'border-white/20'}`}>
                          {selected && <Check className="w-3 h-3 text-white stroke-[3]" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Services Required Multi-select */}
              <div className="space-y-3">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-white block">
                  Services Required <span className="text-white/40 text-[10px]">(Select all that apply)</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_OPTIONS.map((service) => {
                    const selected = formData.selectedServices.includes(service);
                    return (
                      <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-mono border transition-all flex items-center gap-2 ${
                          selected
                            ? 'bg-red-600 border-red-600 text-white shadow-md font-bold'
                            : 'bg-[#050505] border-white/10 text-white/70 hover:text-white hover:border-white/20'
                        }`}
                      >
                        {selected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        <span>{service}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Project Description */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-white block">
                  Project Description & Requirements
                </label>
                <textarea
                  name="description"
                  rows="4"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Tell me about your business goals, timelines, or reference websites..."
                  className="w-full bg-[#050505] border border-white/10 focus:border-red-600 rounded-xl p-4 text-sm text-white outline-none transition-colors placeholder:text-white/30 font-mono resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="netflix-red-btn w-full py-4 rounded-xl text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(229,9,20,0.6)] hover:scale-[1.01]"
              >
                {isSubmitting ? (
                  <span>Opening WhatsApp...</span>
                ) : (
                  <>
                    <MessageCircle className="w-5 h-5 fill-current" />
                    Send Enquiry on WhatsApp (+91 7305053083)
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ContactForm;
