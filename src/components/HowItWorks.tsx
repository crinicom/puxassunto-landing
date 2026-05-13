import { Users, LayoutGrid, MessageCircle, Sparkles } from 'lucide-react';

const steps = [
  {
    title: "Reúna a galera",
    description: "Junte amigos ou família em um ambiente confortável. O Puxassunto é feito para conexões reais.",
    icon: <Users className="w-8 h-8 text-white" />
  },
  {
    title: "Escolha sua vibe",
    description: "O deck tem 4 categorias (Quebrando o gelo, Exibição, Ponto de vista e Imersão). Escolha uma ou misture todas!",
    icon: <LayoutGrid className="w-8 h-8 text-white" />
  },
  {
    title: "Sorteie e responda",
    description: "Alguém retira uma carta e lê a pergunta em voz alta. Não há respostas certas, apenas a sua verdade.",
    icon: <MessageCircle className="w-8 h-8 text-white" />
  },
  {
    title: "Deixe fluir",
    description: "Ouça as respostas dos outros, aprofunde a conversa e descubra coisas que você nunca imaginou sobre quem está ao seu lado.",
    icon: <Sparkles className="w-8 h-8 text-white" />
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-puxaCream relative px-6 z-10 border-t border-b border-black/5">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-puxaPurple/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-puxaText mb-4">Como funciona o jogo</h2>
          <p className="text-puxaText/70 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Quatro passos simples para criar conexões inesquecíveis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="glass-panel p-8 flex flex-col items-center text-center hover:bg-white transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-puxaBlue to-puxaPurple flex items-center justify-center mb-6 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-puxaText mb-3">Passo {index + 1}: {step.title}</h3>
              <p className="text-puxaText/70 leading-relaxed font-medium">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
