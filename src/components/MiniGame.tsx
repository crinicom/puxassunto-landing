import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    id: 'exibicao',
    name: 'Exibição',
    dorso: '/mini_game/ex_dorso.png',
    frentes: ['/mini_game/ex1.png', '/mini_game/ex2.png', '/mini_game/ex3.png', '/mini_game/ex4.png']
  },
  {
    id: 'imersao',
    name: 'Imersão',
    dorso: '/mini_game/im_dorso.png',
    frentes: ['/mini_game/im1.png', '/mini_game/im2.png', '/mini_game/im3.png', '/mini_game/im4.png']
  },
  {
    id: 'rompendo_o_gelo',
    name: 'Rompendo o Gelo',
    dorso: '/mini_game/qg_dorso.png',
    frentes: ['/mini_game/qg1.png', '/mini_game/qg2.png', '/mini_game/qg3.png', '/mini_game/qg4.png']
  },
  {
    id: 'ponto_de_vista',
    name: 'Ponto de Vista',
    dorso: '/mini_game/pv_dorso.png',
    frentes: ['/mini_game/pv1.png', '/mini_game/pv2.png', '/mini_game/pv3.png', '/mini_game/pv4.png']
  }
];

const getRandomCategory = () => categories[Math.floor(Math.random() * categories.length)];

export default function MiniGame() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [frontIndex, setFrontIndex] = useState(0);
  const [showCTA, setShowCTA] = useState(false);

  // Initialize randomly on mount
  useEffect(() => {
    setCurrentCategory(getRandomCategory());
  }, []);

  const handleReset = useCallback(() => {
    setIsFlipped(false);
    setShowCTA(false);
    
    setTimeout(() => {
      setCurrentCategory(getRandomCategory());
    }, 300); // Wait for the unflip animation before swapping category
  }, []);

  // Auto-reset after 10 seconds when flipped
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isFlipped) {
      timeoutId = setTimeout(() => {
        handleReset();
      }, 10000);
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isFlipped, handleReset]);

  const handleCardClick = () => {
    if (isFlipped) {
      handleReset();
    } else {
      setFrontIndex(Math.floor(Math.random() * 4));
      setIsFlipped(true);
      
      // Show CTA button after flip animation completes
      setTimeout(() => {
        setShowCTA(true);
      }, 600);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 w-full max-w-md mx-auto">
      <div 
        className="relative w-72 h-96 sm:w-80 sm:h-[28rem] cursor-pointer perspective-1000 mb-8"
        onClick={handleCardClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleCardClick(); }}
        aria-label={isFlipped ? "Clique para virar outra carta" : `Carta da categoria ${currentCategory.name}. Clique para virar.`}
      >
        <motion.div
          className="w-full h-full relative preserve-3d"
          style={{ transformStyle: 'preserve-3d' }}
          initial={{ rotateY: 0 }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Front of card (Dorso in this context before flip) */}
          <div 
            className="absolute inset-0 w-full h-full backface-hidden rounded-[2rem] shadow-xl overflow-hidden border border-black/10"
          >
            <img 
              src={currentCategory.dorso} 
              alt={`Dorso da carta ${currentCategory.name}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Back of card (Frente - question revealed) */}
          <div 
            className="absolute inset-0 w-full h-full backface-hidden rounded-[2rem] shadow-2xl overflow-hidden border border-puxaGold/30"
            style={{ transform: 'rotateY(180deg)' }}
          >
            <img 
              src={currentCategory.frentes[frontIndex]} 
              alt="Pergunta revelada"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>

      {/* Post-Flip actions */}
      <div className="h-24 flex flex-col items-center justify-center w-full">
        {isFlipped ? (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: showCTA ? 1 : 0, y: showCTA ? 0 : 10 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-4 w-full"
          >
            <button 
              className="w-full sm:w-auto px-8 py-3 h-12 bg-puxaGold text-white uppercase font-bold tracking-wider rounded-full hover:bg-yellow-500 hover:shadow-[0_4px_15px_rgba(243,156,18,0.4)] transition-all duration-300"
              onClick={() => document.getElementById('cta-footer')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Quero jogar!
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-puxaText/60 uppercase font-bold tracking-widest text-sm animate-pulse text-center"
          >
            Clique na carta para revelar
          </motion.div>
        )}
      </div>
    </div>
  );
}
