
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden bg-hero-radial reveal">
      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.1] tracking-tight mb-8">
          Funngro Teen Freelancing
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-2xl mx-auto mb-12">
          Earn REAL money by working with REAL companies! Join India's leading platform for teen independence and student freelancing.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full px-12 py-5 bg-primary text-background-dark text-lg font-black hover:bg-primary/90 hover:-translate-y-1 shadow-2xl shadow-primary/20 transition-all active:scale-95">
            Start Earning Now <span className="material-symbols-outlined text-2xl">trending_up</span>
          </button>
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full px-12 py-5 bg-white/5 border border-white/10 text-white text-lg font-bold hover:bg-white/10 transition-all active:scale-95">
            Watch Teen Success
          </button>
        </div>

        {/* Download Buttons with float/tilt/glow animations */}
        <div className="flex flex-wrap items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <a href="#" className="flex items-center gap-3 bg-black border border-white/10 rounded-2xl px-7 py-3.5 transition-all duration-300 group
            hover:-translate-y-2 hover:rotate-[-2deg] hover:border-white/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            <svg className="w-8 h-8 fill-white group-hover:scale-110 transition-transform duration-300" viewBox="0 0 384 512">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
            </svg>
            <div className="text-left">
              <p className="text-[10px] text-white/50 leading-none mb-1 font-bold uppercase tracking-wider">Download on the</p>
              <p className="text-xl text-white font-black leading-none tracking-tight">App Store</p>
            </div>
          </a>

          <a href="#" className="flex items-center gap-3 bg-black border border-white/10 rounded-2xl px-7 py-3.5 transition-all duration-300 group
            hover:-translate-y-2 hover:rotate-[2deg] hover:border-[#3DDC84]/40 hover:shadow-[0_0_30px_rgba(61,220,132,0.3)]">
            <svg className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="#3DDC84">
              <path d="M17.523 15.3414C17.069 15.3414 16.699 14.9714 16.699 14.5174C16.699 14.0634 17.069 13.6934 17.523 13.6934C17.977 13.6934 18.347 14.0634 18.347 14.5174C18.347 14.9714 17.977 15.3414 17.523 15.3414ZM6.477 15.3414C6.023 15.3414 5.653 14.9714 5.653 14.5174C5.653 14.0634 6.023 13.6934 6.477 13.6934C6.931 13.6934 7.301 14.0634 7.301 14.5174C7.301 14.9714 6.931 15.3414 6.477 15.3414ZM17.915 11.2144L19.782 7.97737C19.927 7.72537 19.839 7.40237 19.587 7.25737C19.335 7.11237 19.012 7.20037 18.867 7.45237L16.969 10.7444C15.549 10.0984 13.882 9.74037 12 9.74037C10.118 9.74037 8.451 10.0984 7.031 10.7444L5.133 7.45237C4.988 7.20037 4.665 7.11237 4.413 7.25737C4.161 7.40237 4.073 7.72537 4.218 7.97737L6.085 11.2144C3.047 12.8794 1 15.9324 1 19.4844H23C23 15.9324 20.953 12.8794 17.915 11.2144Z"/>
            </svg>
            <div className="text-left">
              <p className="text-[10px] text-white/50 leading-none mb-1 font-bold uppercase tracking-wider">GET IT ON</p>
              <p className="text-xl text-white font-black leading-none tracking-tight">Google Play</p>
            </div>
          </a>
        </div>
      </div>
      
      {/* Decorative Orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
};

export default Hero;
