
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ecosystem from './components/Ecosystem';
import SharkTank from './components/SharkTank';
import AICareerAdvisor from './components/AICareerAdvisor';
import Footer from './components/Footer';
import TeenlancerPage from './components/TeenlancerPage';

const App: React.FC = () => {
  const [view, setView] = useState<'landing' | 'teenlancer'>('landing');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Reset scroll when switching views
    window.scrollTo(0, 0);
    setScrolled(false);

    // Dynamic SEO Metadata
    if (view === 'landing') {
      document.title = "Funngro | India's #1 Teen Freelancing Platform - Earn While You Learn";
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute("content", "Join Funngro, India's premier teen freelancing platform. Work with top companies like Groww and Angel One, earn your first salary, and gain real-world experience before you turn 18.");
    } else if (view === 'teenlancer') {
      document.title = "Teenlancer Portal | Freelance Gigs for Teens & Students - Funngro";
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute("content", "Explore teenlancer opportunities on Funngro. Find freelance gigs in video editing, social media management, and more. Build your professional portfolio with real projects.");
    }

    // Scroll Reveal Observer for main page
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

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el) => observer.observe(el));

    // Scroll listener for announcement bar behavior
    const handleScroll = () => {
      // Threshold to start hiding the announcement bar
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [view]);

  if (view === 'teenlancer') {
    return <TeenlancerPage onBack={() => setView('landing')} />;
  }

  return (
    <div className="min-h-screen bg-background-dark text-white selection:bg-primary/30 selection:text-primary animate-in fade-in duration-700">
      {/* Announcement Bar - Visible only on landing, hides on scroll */}
      <div 
        className={`w-full bg-primary overflow-hidden transition-all duration-500 ease-in-out z-[60] 
          ${scrolled ? 'max-h-0 opacity-0' : 'max-h-20 py-2.5 opacity-100'}`}
      >
        <div className="px-4 text-center">
          <p className="text-background-dark text-[10px] md:text-xs font-black tracking-[0.2em] uppercase">
            🚀 Funngro @ Shark Tank India Season 2 - Empowering 50 Lakh+ Teens!
          </p>
        </div>
      </div>

      <Navbar onTeenClick={() => setView('teenlancer')} />
      
      <main>
        <Hero />
        <AICareerAdvisor />
        <Ecosystem onTeenlancerClick={() => setView('teenlancer')} />
        <SharkTank />
      </main>

      <Footer />

      {/* Persistent Mobile CTA */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 md:hidden w-[90%]">
        <button 
          onClick={() => setView('teenlancer')}
          className="w-full py-4 rounded-2xl bg-primary text-background-dark font-black text-lg shadow-[0_10px_30px_rgba(37,244,123,0.3)] hover:scale-105 active:scale-95 transition-all"
        >
          Earn Your First Salary
        </button>
      </div>
    </div>
  );
};

export default App;
