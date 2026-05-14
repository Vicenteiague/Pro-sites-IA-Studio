import { motion } from 'motion/react';
import { ArrowRight, Heart } from 'lucide-react';

const cases = [
  {
    category: "RESTAURANTE",
    title: "Cardápio digital + reservas",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bgColor: "bg-orange-500/10"
  },
  {
    category: "SALÃO DE BELEZA",
    title: "Agendamento direto no WhatsApp",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bgColor: "bg-pink-500/10"
  },
  {
    category: "STUDIO FITNESS",
    title: "Captação de alunos 24h",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bgColor: "bg-accent/10"
  },
  {
    category: "IMOBILIÁRIA",
    title: "Vitrine de imóveis premium",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bgColor: "bg-blue-500/10" // Using gray as neutral
  }
];

export function Portfolio() {
  return (
    <section id="servicos" className="py-20 bg-dark w-full max-w-md mx-auto px-4 sm:max-w-7xl sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent text-black font-bold text-sm tracking-wide mb-8">
          CASES REAIS E POSICIONAMENTO VISÍVEL
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Criação que<br />posiciona.<br />
          <span className="text-accent">Resultados que<br />conectam.</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-xl mx-auto">
          Cada projeto é pensado para transformar visitantes em clientes — com estética premium e estrutura que vende.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {cases.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`rounded-[2rem] border border-card-border overflow-hidden ${item.bgColor} bg-opacity-20`}
          >
            <div className="relative pt-8 px-8">
              <button className="absolute top-8 right-8 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-accent hover:bg-card transition-colors z-10">
                <Heart className="w-5 h-5 fill-transparent" />
              </button>
              
              <div className="relative mx-auto max-w-[280px] sm:max-w-md w-full aspect-[9/16] sm:aspect-video rounded-t-2xl overflow-hidden border-t-4 border-x-4 border-card shadow-2xl">
                 {/* Fake device frame */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-dark rounded-b-xl z-20 hidden sm:block"></div>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover rounded-t-xl"
                />
              </div>
            </div>
            
            <div className="bg-card p-8 border-t border-card-border flex items-center justify-between">
              <div>
                <p className="text-accent font-bold text-sm tracking-widest uppercase mb-2">
                  {item.category}
                </p>
                <h3 className="text-white text-xl sm:text-2xl font-bold">{item.title}</h3>
              </div>
              <button className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-black shrink-0 hover:scale-105 transition-transform">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
