import { useState, useEffect } from 'react';
import MiniGame from './components/MiniGame';
import HowItWorks from './components/HowItWorks';
import { motion, AnimatePresence } from 'framer-motion';
import { useUrls } from './hooks/useUrls';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const { jogarUrl, jugarUrl } = useUrls();

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
              <div className="flex items-center gap-2">
                <a 
                  href={jogarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-puxaGold text-white text-xs sm:text-sm uppercase font-bold tracking-wider rounded-full hover:bg-yellow-500 hover:shadow-[0_0_15px_rgba(243,156,18,0.4)] transition-all duration-300 flex items-center gap-2"
                >
                  <img src="https://flagcdn.com/br.svg" alt="Brasil" className="w-4 h-4 rounded-full object-cover border border-white/20" />
                  <span className="hidden sm:inline">Quero jogar!</span>
                  <span className="sm:hidden">PT</span>
                </a>
                <a 
                  href={jugarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-puxaGold text-white text-xs sm:text-sm uppercase font-bold tracking-wider rounded-full hover:bg-yellow-500 hover:shadow-[0_0_15px_rgba(243,156,18,0.4)] transition-all duration-300 flex items-center gap-2"
                >
                  <img src="https://flagcdn.com/ar.svg" alt="Argentina" className="w-4 h-4 rounded-full object-cover border border-white/20" />
                  <span className="hidden sm:inline">Quiero jugar!</span>
                  <span className="sm:hidden">ES</span>
                </a>
              </div>
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
              100 perguntas para puxar conversa. Ideal para amigos, familia y cualquier momento!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={jogarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg bg-puxaGold text-white uppercase font-black tracking-widest rounded-full hover:bg-yellow-500 hover:scale-105 shadow-[0_4px_15px_rgba(243,156,18,0.3)] hover:shadow-[0_8px_25px_rgba(243,156,18,0.5)] transition-all duration-300 w-full sm:w-auto"
              >
                <img src="https://flagcdn.com/br.svg" alt="Brasil" className="w-6 h-6 rounded-full object-cover border border-white/20" />
                Quero jogar!
              </a>
              <a 
                href={jugarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg bg-puxaGold text-white uppercase font-black tracking-widest rounded-full hover:bg-yellow-500 hover:scale-105 shadow-[0_4px_15px_rgba(243,156,18,0.3)] hover:shadow-[0_8px_25px_rgba(243,156,18,0.5)] transition-all duration-300 w-full sm:w-auto"
              >
                <img src="https://flagcdn.com/ar.svg" alt="Argentina" className="w-6 h-6 rounded-full object-cover border border-white/20" />
                Quiero jugar!
              </a>
            </div>
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <a 
              href={jogarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-5 sm:h-16 text-lg sm:text-xl bg-puxaGold text-white uppercase font-black tracking-widest rounded-full shadow-[0_4px_20px_rgba(243,156,18,0.4)] hover:shadow-[0_8px_30px_rgba(243,156,18,0.6)] hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <img src="https://flagcdn.com/br.svg" alt="Brasil" className="w-7 h-7 rounded-full object-cover border border-white/20" />
              Quero jogar!
            </a>
            <a 
              href={jugarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-5 sm:h-16 text-lg sm:text-xl bg-puxaGold text-white uppercase font-black tracking-widest rounded-full shadow-[0_4px_20px_rgba(243,156,18,0.4)] hover:shadow-[0_8px_30px_rgba(243,156,18,0.6)] hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <img src="https://flagcdn.com/ar.svg" alt="Argentina" className="w-7 h-7 rounded-full object-cover border border-white/20" />
              Quiero jugar!
            </a>
          </div>
        </div>
      </section>
      
      <footer className="py-8 text-center text-puxaText/50 text-sm bg-puxaCream">
        <p>&copy; {new Date().getFullYear()} Puxassunto. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
