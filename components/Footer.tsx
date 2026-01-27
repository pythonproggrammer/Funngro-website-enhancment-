
import React from 'react';
import Logo from './Logo';

const InstagramLogo = () => (
  <svg className="size-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const XLogo = () => (
  <svg className="size-4 fill-current" viewBox="0 0 24 24">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.482 3.239H4.293L17.607 20.65z" />
  </svg>
);

const YouTubeLogo = () => (
  <svg className="size-5 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const Footer: React.FC = () => {
  const socials = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/funngro/',
      icon: <InstagramLogo />
    },
    {
      name: 'X',
      url: 'https://x.com/funngro',
      icon: <XLogo />
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@funngro_India',
      icon: <YouTubeLogo />
    }
  ];

  return (
    <footer className="py-20 bg-background-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <div className="flex items-center gap-3 mb-10 group cursor-pointer">
          <Logo className="size-8 group-hover:rotate-12 transition-transform" />
          <h2 className="text-2xl font-black text-white tracking-tighter">Funngro</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-10 mb-12">
          {['Privacy Policy', 'Terms of Service', 'Contact Us', 'Blogs', 'FAQ', 'Support'].map((link) => (
            <a 
              key={link} 
              href="#" 
              className="text-slate-500 text-sm font-semibold hover:text-primary hover:translate-y-[-2px] transition-all uppercase tracking-widest"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Download App Section */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <p className="text-slate-400 text-[10px] font-black tracking-[0.2em] uppercase mb-2">Experience Funngro on Mobile</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#" className="flex items-center gap-2 bg-black border border-white/10 rounded-xl px-5 py-2 transition-all duration-300 group
              hover:-translate-y-1 hover:rotate-[-2deg] hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              <svg className="w-6 h-6 fill-white group-hover:scale-110 transition-transform duration-300" viewBox="0 0 384 512">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
              </svg>
              <div className="text-left">
                <p className="text-[8px] text-white/50 leading-none mb-0.5 font-bold uppercase">Download on</p>
                <p className="text-sm text-white font-black leading-none tracking-tight">App Store</p>
              </div>
            </a>

            <a href="#" className="flex items-center gap-2 bg-black border border-white/10 rounded-xl px-5 py-2 transition-all duration-300 group
              hover:-translate-y-1 hover:rotate-[2deg] hover:border-[#3DDC84]/40 hover:shadow-[0_0_20px_rgba(61,220,132,0.2)]">
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="#3DDC84">
                <path d="M17.523 15.3414C17.069 15.3414 16.699 14.9714 16.699 14.5174C16.699 14.0634 17.069 13.6934 17.523 13.6934C17.977 13.6934 18.347 14.0634 18.347 14.5174C18.347 14.9714 17.977 15.3414 17.523 15.3414ZM6.477 15.3414C6.023 15.3414 5.653 14.9714 5.653 14.5174C5.653 14.0634 6.023 13.6934 6.477 13.6934C6.931 13.6934 7.301 14.0634 7.301 14.5174C7.301 14.9714 6.931 15.3414 6.477 15.3414ZM17.915 11.2144L19.782 7.97737C19.927 7.72537 19.839 7.40237 19.587 7.25737C19.335 7.11237 19.012 7.20037 18.867 7.45237L16.969 10.7444C15.549 10.0984 13.882 9.74037 12 9.74037C10.118 9.74037 8.451 10.0984 7.031 10.7444L5.133 7.45237C4.988 7.20037 4.665 7.11237 4.413 7.25737C4.161 7.40237 4.073 7.72537 4.218 7.97737L6.085 11.2144C3.047 12.8794 1 15.9324 1 19.4844H23C23 15.9324 20.953 12.8794 17.915 11.2144Z"/>
              </svg>
              <div className="text-left">
                <p className="text-[8px] text-white/50 leading-none mb-0.5 font-bold uppercase">Get it on</p>
                <p className="text-sm text-white font-black leading-none tracking-tight">Google Play</p>
              </div>
            </a>
          </div>
        </div>

        {/* Updated Social Media Links with tilt/glow animations */}
        <div className="flex gap-6 mb-12">
          {socials.map((social) => (
            <a 
              key={social.name} 
              href={social.url} 
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="social-btn size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary transition-all cursor-pointer"
            >
              {social.icon}
            </a>
          ))}
        </div>

        <p className="text-slate-600 text-sm font-medium text-center">
          © 2025 FUNNGRO Wishbanc Technologies Private Limited. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
