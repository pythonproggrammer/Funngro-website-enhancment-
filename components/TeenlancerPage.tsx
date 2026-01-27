
import React, { useState, useEffect, useRef } from 'react';
import Logo from './Logo';

interface TeenlancerPageProps {
  onBack: () => void;
}

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

const testimonials = [
  {
    name: "Aryan Kapoor",
    age: 17,
    role: "Graphic Designer",
    text: "Funngro changed my perspective on earning. I worked with 3 major brands while finishing my 12th boards. It's truly empowering!",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aryan"
  },
  {
    name: "Sanya Mehra",
    age: 16,
    role: "Social Media Manager",
    text: "Being a Teenlancer gave me the financial freedom I never thought I'd have so early. The projects are actually fun and creative!",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sanya"
  },
  {
    name: "Ishaan Gupta",
    age: 18,
    role: "Video Editor",
    text: "I used the money I earned through Funngro to upgrade my PC. The skill validation from top Indian companies is priceless.",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ishaan"
  }
];

const TeenlancerPage: React.FC<TeenlancerPageProps> = ({ onBack }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const scrollRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.15 }
    );

    scrollRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      clearInterval(timer);
      observer.disconnect();
    };
  }, []);

  const socials = [
    { name: 'Instagram', url: 'https://www.instagram.com/funngro/', icon: <InstagramLogo /> },
    { name: 'X', url: 'https://x.com/funngro', icon: <XLogo /> },
    { name: 'YouTube', url: 'https://www.youtube.com/@funngro_India', icon: <YouTubeLogo /> }
  ];

  const brandPartners = [
    { 
      name: 'Angel One', 
      quote: '"A fresh perspective on fintech strategies. Incredible talent!"', 
      icon: 'trending_up', 
      bg: 'bg-blue-500/10', 
      border: 'border-blue-500/20' 
    },
    { 
      name: 'Groww', 
      quote: '"The Gen-Z energy we needed for our social growth."', 
      icon: 'savings', 
      bg: 'bg-primary/10', 
      border: 'border-primary/20' 
    },
    { 
      name: 'CarDekho', 
      quote: '"Highly efficient and professional young creators."', 
      icon: 'directions_car', 
      bg: 'bg-rose-500/10', 
      border: 'border-rose-500/20' 
    },
    { 
      name: 'HDFC Bank', 
      quote: '"Empowering the next generation of financial leaders."', 
      icon: 'account_balance', 
      bg: 'bg-sky-500/10', 
      border: 'border-sky-500/20' 
    }
  ];

  return (
    <div className="min-h-screen bg-background-dark text-white font-sans selection:bg-primary/30 animate-in fade-in duration-1000">
      {/* Header - Identical to Main Page Navbar */}
      <nav className="sticky top-0 z-[100] w-full border-b border-white/5 bg-background-dark/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={onBack}>
            <Logo className="size-10" />
            <span className="text-2xl font-black tracking-tighter text-white uppercase italic">Teenlancer Portal</span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <button className="text-sm font-semibold text-slate-400 hover:text-primary transition-colors uppercase">Teen Projects</button>
            <button className="text-sm font-semibold text-slate-400 hover:text-primary transition-colors uppercase">Partner Brands</button>
            <button className="text-sm font-semibold text-slate-400 hover:text-primary transition-colors uppercase">About Us</button>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-4 mr-4 text-white/40">
              <span className="material-symbols-outlined cursor-pointer hover:text-white transition-colors">phone_iphone</span>
              <span className="material-symbols-outlined cursor-pointer hover:text-white transition-colors">notifications</span>
            </div>
            <button 
              className="flex items-center justify-center rounded-full h-11 px-7 bg-primary text-background-dark text-sm font-black shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all uppercase"
            >
              Start Earning
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden reveal" ref={el => { scrollRefs.current[0] = el; }}>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 text-center lg:text-left z-10 w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-6 mx-auto lg:mx-0">
              <span className="material-symbols-outlined text-[12px] text-primary">verified</span>
              <span className="text-[9px] font-black tracking-widest uppercase text-primary">Official Teenlancer Program</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-4 leading-[0.9] tracking-tighter uppercase">
              TEENLANCER GIGS
            </h1>
            <h2 className="text-2xl md:text-3xl font-black italic text-primary mb-8 tracking-tighter uppercase">
              India's Premier Freelancing Portal for Teens
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-lg mb-12 font-medium leading-relaxed mx-auto lg:mx-0 lg:pr-10">
              Work with top Indian companies on real freelance projects. From video editing to social media, find the perfect gig and earn your first salary while studying.
            </p>
            
            <div className="flex items-center justify-center lg:justify-start gap-4">
              {socials.map((s, i) => (
                <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" 
                   className="social-btn size-12 rounded-xl bg-white/5 border border-white/10 text-white transition-all">
                   {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 w-full relative">
            {brandPartners.map((brand, i) => (
              <div key={i} className="warp-card h-60 w-full group">
                <div className="warp-card-inner">
                  <div className={`warp-card-front p-8 border ${brand.border} ${brand.bg} backdrop-blur-sm shadow-xl`}>
                    <div className="size-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                       <span className="material-symbols-outlined text-white text-3xl">{brand.icon}</span>
                    </div>
                    <h4 className="text-base font-black text-white mb-1 uppercase tracking-tight">{brand.name}</h4>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Official Partner</p>
                  </div>
                  <div className={`warp-card-back p-8 border ${brand.border} bg-[#0b1c2d] backdrop-blur-md shadow-2xl`}>
                    <span className="material-symbols-outlined text-primary mb-4 scale-125">format_quote</span>
                    <p className="text-xs italic text-slate-200 leading-relaxed font-medium px-4 text-center">
                      {brand.quote}
                    </p>
                    <div className="mt-auto pt-4 border-t border-white/10 w-full text-center">
                      <p className="text-[9px] font-black text-primary uppercase tracking-widest">{brand.name} Team</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6 bg-navy-accent/10 reveal" ref={el => { scrollRefs.current[5] = el; }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-black tracking-[0.2em] text-primary uppercase mb-4">Why Teenlancing?</h2>
            <h3 className="text-4xl font-black italic uppercase tracking-tighter">Your Independent Future Starts Here</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: 'monetization_on', 
                title: 'Financial Independence', 
                desc: 'Earn your own money through freelance student jobs and learn how to manage it before you turn 18.' 
              },
              { 
                icon: 'auto_fix_high', 
                title: 'Skill Development', 
                desc: 'Get hands-on experience in high-demand fields like design, tech, and marketing.' 
              },
              { 
                icon: 'public', 
                title: 'Real-World Experience', 
                desc: 'Work directly with real companies on real projects that go on your professional portfolio.' 
              },
              { 
                icon: 'forum', 
                title: 'Supportive Community', 
                desc: 'Join millions of other teens on the same journey to professional growth.' 
              },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-primary/40 hover:bg-white/[0.07] transition-all group">
                <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-lg font-black mb-3 uppercase tracking-tight group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Infographic */}
      <section className="py-24 px-6 bg-navy-accent/20 border-y border-white/5 reveal" ref={el => { scrollRefs.current[1] = el; }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-4">How Teenlancing Works</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative">
            {[
              { icon: 'person_add', title: 'Sign Up', desc: 'Create your profile in 2 minutes and verify your age.' },
              { icon: 'search', title: 'Find Projects', desc: 'Browse curated projects from India\'s top brands.' },
              { icon: 'payments', title: 'Get Paid', desc: 'Complete tasks and get money directly into your account.' }
            ].map((step, i) => (
              <div key={i} className="group flex flex-col items-center">
                <div className="size-20 bg-white/5 rounded-full border border-white/10 flex items-center justify-center mb-8 group-hover:bg-primary/20 group-hover:border-primary/50 group-hover:scale-110 transition-all duration-500 shadow-xl cursor-default">
                  <span className="material-symbols-outlined text-4xl group-hover:text-primary transition-all">{step.icon}</span>
                </div>
                <h3 className="text-xl font-black mb-4 uppercase tracking-wider group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xs">{step.desc}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-10 left-[calc(33.33%*i+20%)] w-[15%] h-px bg-gradient-to-r from-primary/40 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Master Your Craft Section */}
      <section className="py-24 px-6 bg-[#081521] reveal" ref={el => { scrollRefs.current[2] = el; }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="w-full md:w-auto">
              <h2 className="text-4xl font-black mb-4 tracking-tighter italic uppercase text-center md:text-left">Master your freelance craft</h2>
              <p className="text-slate-500 text-sm max-w-md font-medium mx-auto md:mx-0 text-center md:text-left">Pick a category and browse live projects from official brands looking for teen talent. Start your professional freelance career today.</p>
            </div>
            <a href="#" className="flex items-center gap-2 px-6 py-2 border border-white/10 rounded-full text-[10px] font-black tracking-widest hover:border-primary hover:text-primary transition-all group mx-auto md:mx-0">
              BROWSE ALL PROJECTS
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal-stagger active">
            {[
              { icon: 'videocam', title: 'Video Editing', count: '120+ PROJECTS' },
              { icon: 'campaign', title: 'Social Media', count: '300+ PROJECTS' },
              { icon: 'palette', title: 'Graphic Design', count: '240+ PROJECTS' },
              { icon: 'code', title: 'Tech & Coding', count: '80+ PROJECTS' },
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-background-dark/50 border border-white/5 rounded-2xl hover:border-white/20 transition-all cursor-pointer group hover:-translate-y-2" style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className="size-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <span className={`material-symbols-outlined text-3xl group-hover:text-primary transition-all`}>{item.icon}</span>
                </div>
                <h3 className="text-lg font-black mb-2">{item.title}</h3>
                <p className="text-[10px] font-black tracking-widest text-primary/80">{item.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Slider Section */}
      <section className="py-24 px-6 bg-navy-accent/10 reveal" ref={el => { scrollRefs.current[3] = el; }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[10px] font-black tracking-[0.2em] text-primary uppercase mb-4">Teen Success Stories</h2>
            <h3 className="text-4xl font-black italic uppercase tracking-tighter">Loved by Teens Everywhere</h3>
          </div>
          
          <div className="relative min-h-[300px]">
            {testimonials.map((t, i) => (
              <div 
                key={i} 
                className={`absolute inset-0 transition-all duration-700 flex flex-col items-center text-center ${i === activeTestimonial ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'}`}
              >
                <div className="size-24 rounded-full border-2 border-primary/20 p-1 mb-8">
                  <img src={t.img} alt={t.name} className="size-full rounded-full bg-navy-accent" />
                </div>
                <p className="text-xl md:text-2xl font-medium italic text-slate-200 mb-8 max-w-3xl leading-relaxed">
                  "{t.text}"
                </p>
                <div>
                  <h4 className="text-lg font-black text-white">{t.name}, {t.age}</h4>
                  <p className="text-primary font-black text-[10px] tracking-widest uppercase">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setActiveTestimonial(i)}
                className={`size-2 rounded-full transition-all duration-300 ${i === activeTestimonial ? 'w-8 bg-primary' : 'bg-white/20 hover:bg-white/40'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Path to Independence */}
      <section className="path-section py-32 px-6 overflow-hidden reveal" ref={el => { scrollRefs.current[4] = el; }}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-24 tracking-tighter uppercase italic">
            THE PATH TO <span className="text-primary underline decoration-primary/30 underline-offset-8">INDEPENDENCE</span>
          </h2>
          
          <div className="relative flex flex-col md:flex-row items-start justify-between gap-12 md:gap-4 px-4">
             {/* Progress Line - Centered vertically through circles */}
             <div className="progress-line absolute top-[32px] left-0 w-full h-[2px] bg-white/10 hidden md:block z-0 transition-all duration-1000 opacity-50"></div>
             
             {[
               { num: '01', title: 'REGISTER', desc: 'MOBILE VERIFIED' },
               { num: '02', title: 'PROFILE', desc: 'SHOWCASE SKILLS' },
               { num: '03', title: 'APPLY', desc: 'SELECT PROJECTS' },
               { num: '04', title: 'WORK', desc: 'DELIVER QUALITY' },
               { num: '05', title: 'EARN', desc: 'DIRECT TO BANK', highlighted: true },
             ].map((step, idx) => (
               <div key={idx} className="step-container relative z-10 flex flex-col items-center text-center flex-1 cursor-default group">
                  <div className={`step-circle size-16 rounded-full border-2 flex items-center justify-center mb-8 text-xl font-black transition-all duration-500 bg-background-dark border-white/20 text-white ${step.highlighted ? '!border-primary !text-primary' : ''} group-hover:scale-110 group-hover:border-primary group-hover:text-primary shadow-lg`}>
                    {step.num}
                  </div>
                  <div className="space-y-2">
                    <h4 className={`text-[11px] font-black tracking-widest uppercase transition-colors group-hover:text-primary ${step.highlighted ? 'text-primary' : 'text-slate-200'}`}>{step.title}</h4>
                    <p className="text-[9px] font-black text-slate-500 tracking-[0.2em] uppercase transition-colors group-hover:text-slate-400">{step.desc}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-white/5 bg-[#081521]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">
             <div className="col-span-2">
                <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={onBack}>
                   <Logo className="size-8" />
                   <span className="text-xl font-black uppercase tracking-tighter italic">Teenlancer Hub</span>
                </div>
                <p className="text-slate-500 text-xs font-medium max-w-xs mb-8 leading-relaxed">The ultimate student freelance portal for teens to learn, earn and manage money. Empowering the next generation of global creators.</p>
                <div className="flex gap-4">
                   {socials.map((s, i) => (
                     <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="social-btn size-10 rounded-full border border-white/10 bg-white/5 text-slate-400">
                        {s.icon}
                     </a>
                   ))}
                </div>
             </div>
             
             <div>
                <h5 className="text-[10px] font-black tracking-widest text-white uppercase mb-6">Explore</h5>
                <ul className="space-y-4">
                  {['Teen Projects', 'Freelance Guide', 'Skill Hub', 'Community Stories'].map(l => (
                    <li key={l}><a href="#" className="text-slate-500 text-[10px] font-black hover:text-primary uppercase tracking-widest transition-all">{l}</a></li>
                  ))}
                </ul>
             </div>

             <div>
                <h5 className="text-[10px] font-black tracking-widest text-white uppercase mb-6">Company</h5>
                <ul className="space-y-4">
                  {['About Funngro', 'Press Kit', 'Careers', 'Contact Us'].map(l => (
                    <li key={l}><a href="#" className="text-slate-500 text-[10px] font-black hover:text-primary uppercase tracking-widest transition-all">{l}</a></li>
                  ))}
                </ul>
             </div>

             <div>
                <h5 className="text-[10px] font-black tracking-widest text-white uppercase mb-6">Help</h5>
                <ul className="space-y-4">
                  {['Privacy Policy', 'Terms of Use', 'Parental Support', 'Freelancer Rules'].map(l => (
                    <li key={l}><a href="#" className="text-slate-500 text-[10px] font-black hover:text-primary uppercase tracking-widest transition-all">{l}</a></li>
                  ))}
                </ul>
             </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
             <p className="text-slate-600 text-[9px] font-black tracking-widest uppercase">© 2025 FUNNGRO TEENLANCER. ALL RIGHTS RESERVED.</p>
             <p className="text-slate-600 text-[9px] font-black tracking-widest uppercase flex items-center gap-2">
                MADE IN INDIA BY VISIONARIES 
                <span className="material-symbols-outlined text-[12px] text-rose-500 fill-1">favorite</span>
             </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TeenlancerPage;
