
import React from 'react';

const SharkTank: React.FC = () => {
  const videoUrl = "https://www.youtube.com/watch?v=sGysgwm02YY";

  return (
    <section className="py-32 bg-navy-accent/30 overflow-hidden reveal">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-primary text-sm font-black uppercase tracking-widest">The Big Win</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight uppercase italic tracking-tighter">Funngro @ Shark Tank</h2>
            
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed mb-10">
              <p>
                <span className="text-primary font-black uppercase">From the Tank to your pocket! 🦈</span> Funngro stole the show in Season 2, bagging a massive deal with <span className="text-white font-bold italic">Namita Thapar</span> and <span className="text-white font-bold italic">Amit Jain</span>.
              </p>
              <p>
                This investment wasn't just cash—it was a national salute to <span className="text-primary font-black underline decoration-primary/30 underline-offset-4 uppercase">YOU</span>, the next generation of global earners. 
              </p>
              <p>
                Following the show, our vision exploded, now trusted by <span className="text-white font-bold">50 Lakh+ users</span> working with giants like <span className="text-white border-b border-primary/30">Angel One, Groww, and CarDekho</span>.
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 min-w-[160px] flex items-center gap-5 backdrop-blur-sm group hover:border-primary/30 transition-colors">
                <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-3xl">groups</span>
                </div>
                <div>
                  <p className="text-3xl text-white font-black leading-none mb-1 tracking-tighter">5M+</p>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Trusted Teens</p>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 min-w-[160px] flex items-center gap-5 backdrop-blur-sm group hover:border-primary/30 transition-colors">
                <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-3xl">rocket_launch</span>
                </div>
                <div>
                  <p className="text-3xl text-white font-black leading-none mb-1 tracking-tighter">₹12Cr</p>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Net Worth</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-2xl group relative">
            <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <a 
              href={videoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block relative z-10 overflow-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10"
            >
              <div 
                className="aspect-video bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url('https://img.youtube.com/vi/sGysgwm02YY/maxresdefault.jpg')` }}
              >
              </div>
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center group-hover:bg-black/30 transition-all duration-500">
                <div className="size-24 bg-primary rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(37,244,123,0.5)] group-hover:scale-110 active:scale-95 transition-all cursor-pointer">
                  <span className="material-symbols-outlined text-background-dark text-6xl fill-1">play_arrow</span>
                </div>
                <span className="mt-6 text-white font-black text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">Watch the Pitch</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SharkTank;
