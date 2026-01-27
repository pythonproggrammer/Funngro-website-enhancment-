
import React from 'react';
import Logo from './Logo';

interface NavbarProps {
  onTeenClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onTeenClick }) => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-background-dark/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer">
          <Logo className="size-10" />
          <h1 className="text-2xl font-black tracking-tighter text-white">Funngro</h1>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <button 
            onClick={onTeenClick}
            className="text-sm font-semibold text-slate-400 hover:text-primary transition-colors uppercase"
          >
            Teen
          </button>
          <a className="text-sm font-semibold text-slate-400 hover:text-primary transition-colors uppercase" href="#company">Company</a>
          <a className="text-sm font-semibold text-slate-400 hover:text-primary transition-colors uppercase" href="#shelancer">Shelancer</a>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-4 mr-4 text-white/40">
            <span className="material-symbols-outlined cursor-pointer hover:text-white transition-colors">phone_iphone</span>
            <span className="material-symbols-outlined cursor-pointer hover:text-white transition-colors">notifications</span>
          </div>
          <button className="hidden sm:flex items-center justify-center rounded-full h-11 px-6 border border-white/10 text-white text-sm font-bold hover:bg-white/5 transition-all">
            Company Login
          </button>
          <button 
            onClick={onTeenClick}
            className="flex items-center justify-center rounded-full h-11 px-7 bg-primary text-background-dark text-sm font-black shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
          >
            Earn Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
