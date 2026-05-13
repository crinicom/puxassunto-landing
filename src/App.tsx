import { useState, useEffect } from 'react';
import MiniGame from './components/MiniGame';
import HowItWorks from './components/HowItWorks';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-puxaCream text-puxaText selection:bg-puxaGold/30 selection:text-puxaText">
      
      {/* Sticky Header */}
      <AnimatePresence>
        {scrolled && (
          <motion.header 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-0 left-0 w-full z-50 bg-puxaCream/90 backdrop-blur-md border-b border-black/5 shadow-sm"
          >
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
              <div className="font-bold text-xl tracking-widest text-puxaText">
                PUXA<span className="text-puxaGold">SSUNTO</span>
              </div>
              <button 
                onClick={() => document.getElementById('cta-footer')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-2 bg-puxaGold text-white text-sm uppercase font-bold tracking-wider rounded-full hover:bg-yellow-500 hover:shadow-[0_0_15px_rgba(243,156,18,0.4)] transition-all duration-300"
              >
                Quero jogar!
              </button>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-12 px-6 overflow-hidden">
        {/* Colorful Abstract background elements matching the box */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-puxaBlue/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-puxaPurple/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-puxaGold/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-puxaText drop-shadow-sm">
              PUXA <span className="text-transparent bg-clip-text bg-gradient-to-r from-puxaBlue via-puxaPurple to-puxaGold">ASSUNTO</span>
            </h1>
            <p className="text-lg md:text-2xl text-puxaText/80 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              100 perguntas para puxar conversa. Ideal para amigos, família e qualquer momento!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <button 
              onClick={() => document.getElementById('cta-footer')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 text-lg bg-puxaGold text-white uppercase font-black tracking-widest rounded-full hover:bg-yellow-500 hover:scale-105 shadow-[0_4px_15px_rgba(243,156,18,0.3)] hover:shadow-[0_8px_25px_rgba(243,156,18,0.5)] transition-all duration-300"
            >
              Quero jogar!
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-full flex flex-col items-center"
          >
            <p className="text-puxaText/60 uppercase tracking-widest text-sm mb-8 font-bold">Experimente uma carta</p>
            <MiniGame />
          </motion.div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <HowItWorks />

      {/* Footer CTA */}
      <section id="cta-footer" className="py-32 px-6 relative overflow-hidden bg-white flex flex-col items-center justify-center border-t border-black/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-puxaGold/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-puxaText mb-8">
            Pronto para <span className="text-puxaGold">puxar assunto</span>?
          </h2>
          <p className="text-xl text-puxaText/80 mb-12 font-medium">
            Perfeito para reuniões, viagens e encontros. Para todas as idades, sem tempo limite e sem respostas certas.
          </p>
          <button className="px-12 py-5 sm:h-16 text-xl bg-puxaGold text-white uppercase font-black tracking-widest rounded-full shadow-[0_4px_20px_rgba(243,156,18,0.4)] hover:shadow-[0_8px_30px_rgba(243,156,18,0.6)] hover:scale-105 transition-all duration-300 w-full sm:w-auto">
            Quero jogar!
          </button>
        </div>
      </section>
      
      <footer className="py-8 text-center text-puxaText/50 text-sm bg-puxaCream">
        <p>&copy; {new Date().getFullYear()} Puxassunto. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
