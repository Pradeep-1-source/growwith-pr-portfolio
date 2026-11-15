import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { ExternalLink, Eye, ArrowUpRight } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const categories = [
  "All",
  "E-Commerce",
  "Corporate & Business",
  "Creative & Agency",
  "Gym & Fitness"
];

const matchesCategory = (project, cat) => {
  if (cat === "All") return true;
  const pCat = (project.category || "").toLowerCase();
  if (cat === "E-Commerce") {
    return pCat.includes("commerce") || pCat.includes("store");
  }
  if (cat === "Corporate & Business") {
    return pCat.includes("corporate") || pCat.includes("business") || pCat.includes("rice");
  }
  if (cat === "Creative & Agency") {
    return pCat.includes("creative") || pCat.includes("agency") || pCat.includes("media");
  }
  if (cat === "Gym & Fitness") {
    return pCat.includes("gym") || pCat.includes("fitness");
  }
  return pCat.includes(cat.toLowerCase());
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === "All"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => matchesCategory(p, activeCategory));

  return (
    <section id="work" className="bg-[#050505] relative font-sans text-white w-full py-28 select-none border-t border-white/10">
      
      {/* Background Netflix Watermark Text */}
      <div className="absolute top-12 left-0 w-full flex items-start justify-center pointer-events-none z-0 overflow-hidden opacity-[0.03]">
        <h1 className="text-[18vw] font-black font-netflix text-white tracking-tighter leading-none whitespace-nowrap uppercase">
          CLIENT WORK
        </h1>
      </div>

      {/* Ambient Crimson Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-red-600/10 rounded-full blur-[180px] pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header - Netflix Series Episode Format */}
        <div className="flex flex-col items-start space-y-4 mb-12" data-aos="fade-up">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded bg-black/80 backdrop-blur-2xl border border-red-600/40 text-xs font-mono uppercase tracking-widest text-white shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
            <span className="text-red-500 font-bold">EPISODE 03</span>
            <span className="text-white/40">|</span>
            <span>VERIFIED CLIENT CASE STUDIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            RECENT CLIENT WORK & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-600 to-amber-500 drop-shadow-[0_0_30px_rgba(229,9,20,0.4)]">
              FEATURED DIGITAL ORIGINALS.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed max-w-3xl">
            Explore live e-commerce stores, custom B2B web platforms, and business systems designed and engineered for real clients worldwide.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 sm:pb-0 sm:flex-wrap mb-10 sm:mb-14 -mx-4 px-4 sm:mx-0 sm:px-0" data-aos="fade-up" data-aos-delay="100">
          {categories.map((cat) => {
            const count = cat === "All"
              ? PROJECTS_DATA.length
              : PROJECTS_DATA.filter((p) => matchesCategory(p, cat)).length;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 flex items-center gap-2 shrink-0 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-red-600 text-white shadow-[0_0_20px_rgba(229,9,20,0.6)] font-bold scale-105'
                    : 'bg-[#141414] border border-white/10 text-white/70 hover:text-white hover:border-white/30'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  activeCategory === cat ? 'bg-black/30 text-white' : 'bg-white/10 text-white/50'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Client Work Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => {
            const episodeNum = idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`;
            return (
              <div
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={(idx % 3) * 100}
              >
                <AnimatedCard className="h-full flex flex-col justify-between group cursor-pointer">
                  <div>
                    
                    {/* Top Image Preview Frame with Hover Zoom */}
                    <div 
                      onClick={() => setSelectedProject(project)}
                      className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-black border border-white/10 group-hover:border-red-600/50 transition-colors"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95"
                        loading="lazy"
                      />
                      
                      {/* Dark gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                      {/* Top Badges: Episode & Match */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white bg-black/80 backdrop-blur-md px-2.5 py-1 rounded border border-red-600/40">
                          S01 E{episodeNum}
                        </span>
                        <span className="text-[10px] font-mono font-bold text-emerald-400 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded border border-emerald-500/30">
                          99% Match
                        </span>
                      </div>

                      {/* Hover Explore Action Pill */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-black/40 backdrop-blur-xs">
                        <span className="px-4 py-2 rounded-full bg-red-600 text-white font-mono text-xs uppercase tracking-widest font-bold shadow-[0_0_20px_rgba(229,9,20,0.8)] flex items-center gap-1.5 transform scale-90 group-hover:scale-100 transition-transform">
                          <Eye className="w-3.5 h-3.5" /> View Details
                        </span>
                      </div>
                    </div>

                    {/* Category & Platform Meta */}
                    <div className="flex items-center justify-between text-[11px] font-mono text-red-500 font-bold uppercase tracking-wider mb-2 gap-2">
                      <span className="truncate">{project.category}</span>
                      <span className="text-white/40 shrink-0">{project.platform}</span>
                    </div>

                    {/* Project Title */}
                    <h3 
                      onClick={() => setSelectedProject(project)}
                      className="text-xl font-black font-heading text-white mb-2.5 group-hover:text-red-500 transition-colors leading-tight"
                    >
                      {project.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-white/70 font-light leading-relaxed mb-6 line-clamp-2">
                      {project.shortDesc}
                    </p>

                  </div>

                  {/* Card Footer: Tech Tags & Live Link */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto gap-3">
                    <div className="flex flex-wrap gap-1.5 max-w-[50%]">
                      {project.technologies.slice(0, 2).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono text-white/60 bg-white/5 px-2 py-0.5 rounded border border-white/10 group-hover:border-red-600/30 transition-colors truncate"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {project.url && project.url !== "#" && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-[11px] font-mono font-bold tracking-wider uppercase transition-all duration-300 shadow-[0_0_12px_rgba(229,9,20,0.5)] hover:shadow-[0_0_20px_rgba(229,9,20,0.85)] hover:scale-105"
                          aria-label={`Visit live site for ${project.title}`}
                        >
                          <span>Live Website</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-white/30"
                        aria-label={`Open details modal for ${project.title}`}
                        title="View Details"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </AnimatedCard>
              </div>
            );
          })}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

    </section>
  );
};

export default Portfolio;
