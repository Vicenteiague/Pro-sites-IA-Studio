import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Mariana Oliveira",
    role: "Restaurante Sabor & Arte",
    content: "Em 2 meses dobramos as reservas pelo WhatsApp. O site ficou impecável e os clientes elogiam o tempo todo.",
    initials: "MO"
  },
  {
    name: "Carlos Mendes",
    role: "Imobiliária Horizonte",
    content: "Apareci no Google logo nas primeiras semanas. Hoje recebo lead qualificado todos os dias sem precisar correr atrás.",
    initials: "CM"
  },
  {
    name: "Aline Souza",
    role: "Studio Beauty Aline",
    content: "Profissionalismo do início ao fim. O agendamento integrado ao WhatsApp mudou minha rotina — recomendo de olhos fechados.",
    initials: "AS"
  }
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-dark w-full max-w-md mx-auto px-4 sm:max-w-7xl sm:px-6 lg:px-8 relative overflow-hidden">
      
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-card-border mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-xs font-semibold text-slate-300 tracking-wide uppercase">Depoimentos</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Quem confiou,<br />
          <span className="text-accent">colheu resultados</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-xl mx-auto">
          Empresários de Ponta Porã e região que transformaram o site em máquina de vendas.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-card border border-card-border rounded-3xl p-8 relative flex-1 text-left"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <Quote className="w-10 h-10 text-[#2a2a2a] rotate-180 shrink-0" />
            </div>
            
            <p className="text-slate-300 mb-8 text-lg font-medium leading-relaxed">
              "{testimonial.content}"
            </p>
            
            <div className="border-t border-card-border pt-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-dark border border-card-border flex items-center justify-center text-lg font-bold text-accent shrink-0">
                {testimonial.initials}
              </div>
              <div className="overflow-hidden">
                <h4 className="font-bold text-white truncate">{testimonial.name}</h4>
                <p className="text-sm text-slate-400 truncate">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
