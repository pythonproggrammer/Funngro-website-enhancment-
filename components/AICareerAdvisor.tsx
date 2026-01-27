
import React, { useState, useRef, useEffect } from 'react';
import { getCareerAdvice } from '../services/geminiService';

const AICareerAdvisor: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleAsk = async () => {
    if (!input.trim() || loading) return;
    setLoading(true);
    setResponse('');
    const prompt = `I am a teenager interested in ${input}. What kind of freelance gigs should I apply for on Funngro?`;
    const result = await getCareerAdvice(prompt);
    setResponse(result);
    setLoading(false);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [response, loading]);

  return (
    <section className="py-24 bg-background-dark border-t border-white/5 reveal">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-navy-accent/40 rounded-[2rem] border border-white/10 p-8 md:p-12 backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <span className="material-symbols-outlined text-[120px] text-primary">psychology</span>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl font-black text-white mb-4">AI Career Advisor</h2>
            <p className="text-slate-400 mb-8">Not sure where to start? Tell me your hobbies or skills and I'll suggest the perfect gigs for you.</p>

            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="e.g. video editing, painting, gaming..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-slate-600"
                  onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
                />
                <button
                  onClick={handleAsk}
                  disabled={loading}
                  className="bg-primary text-background-dark px-10 py-4 rounded-2xl font-black hover:bg-primary/90 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                >
                  {loading ? 'Thinking...' : 'Get Suggestions'}
                  {!loading && <span className="material-symbols-outlined">auto_awesome</span>}
                </button>
              </div>

              {(response || loading) && (
                <div 
                  ref={scrollRef}
                  className="bg-background-dark/60 rounded-2xl p-6 border border-white/5 min-h-[100px] max-h-[300px] overflow-y-auto"
                >
                  {loading ? (
                    <div className="flex items-center gap-3 text-primary animate-pulse font-bold">
                      <span className="material-symbols-outlined animate-spin">sync</span>
                      Analyzing your skills...
                    </div>
                  ) : (
                    <div className="text-slate-300 leading-relaxed whitespace-pre-line">
                      {response}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICareerAdvisor;
