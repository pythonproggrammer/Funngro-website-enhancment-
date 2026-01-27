
import React from 'react';

interface EcosystemProps {
  onTeenlancerClick?: () => void;
}

const Ecosystem: React.FC<EcosystemProps> = ({ onTeenlancerClick }) => {
  return (
    <section id="ecosystem" className="py-32 bg-background-dark border-t border-white/5 overflow-hidden reveal relative">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <h4 className="text-[10px] font-black tracking-[0.2em] text-primary uppercase mb-4">Our Network</h4>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase italic">Work Ecosystem</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto font-medium">Bridging talent with opportunity through three core pillars of modern work culture.</p>
        </div>

        <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 lg:gap-12 min-h-[450px]">
          {/* Teenlancer Node */}
          <div 
            onClick={onTeenlancerClick}
            className="flex-1 group cursor-pointer"
          >
            <div className="h-full rounded-[2.5rem] bg-navy-accent/40 border border-primary/20 p-10 text-center backdrop-blur-md transition-all duration-500 ease-out 
              hover:-translate-y-4 hover:border-primary/60 hover:shadow-[0_0_50px_rgba(37,244,123,0.3)] hover:bg-navy-accent/60 flex flex-col items-center justify-center">
              <div className="size-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                <span className="material-symbols-outlined text-primary text-5xl">school</span>
              </div>
              <h3 className="text-white font-black text-2xl tracking-tight mb-2 uppercase">TEENLANCER</h3>
              <p className="text-primary/80 font-black text-sm uppercase tracking-widest">Be Independent</p>
              <div className="mt-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 bg-primary text-background-dark px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">
                Explore Jobs
              </div>
            </div>
          </div>

          {/* Company Node */}
          <div className="flex-1 group">
            <div className="h-full rounded-[2.5rem] bg-navy-accent/40 border border-sky-400/20 p-10 text-center backdrop-blur-md transition-all duration-500 ease-out 
              hover:-translate-y-4 hover:border-sky-400/60 hover:shadow-[0_0_50px_rgba(56,189,248,0.3)] hover:bg-navy-accent/60 flex flex-col items-center justify-center cursor-default">
              <div className="size-24 bg-sky-400/10 rounded-3xl flex items-center justify-center mb-8 transition-transform duration-500 shadow-inner">
                <span className="material-symbols-outlined text-sky-400 text-6xl">apartment</span>
              </div>
              <h3 className="text-white font-black text-3xl tracking-tight mb-2 uppercase">Company</h3>
              <p className="text-sky-400 font-black text-base uppercase tracking-widest">Smart Talent</p>
              <div className="mt-8 opacity-50 text-slate-500 text-[10px] font-black uppercase tracking-widest">
                Trusted by 1000+ Brands
              </div>
            </div>
          </div>

          {/* Shelancer Node */}
          <div className="flex-1 group">
            <div className="h-full rounded-[2.5rem] bg-navy-accent/40 border border-rose-400/20 p-10 text-center backdrop-blur-md transition-all duration-500 ease-out 
              hover:-translate-y-4 hover:border-rose-400/60 hover:shadow-[0_0_50px_rgba(251,113,133,0.3)] hover:bg-navy-accent/60 flex flex-col items-center justify-center cursor-default">
              <div className="size-20 bg-rose-400/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                <span className="material-symbols-outlined text-rose-400 text-5xl">female</span>
              </div>
              <h3 className="text-white font-black text-2xl tracking-tight mb-2 uppercase">SHELANCER</h3>
              <p className="text-rose-400/80 font-black text-sm uppercase tracking-widest">Empowering Women</p>
              <div className="mt-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 bg-rose-400 text-background-dark px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">
                Join Community
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 flex justify-center">
          <button 
            onClick={onTeenlancerClick}
            className="group flex items-center gap-3 rounded-full px-16 py-6 bg-primary text-background-dark font-black text-xl shadow-2xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all active:scale-95 uppercase tracking-tighter italic"
          >
            Explore Opportunities
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
