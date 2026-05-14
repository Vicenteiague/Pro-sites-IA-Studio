import { motion } from 'motion/react';
import { ShieldCheck, MessageCircle, Search, TrendingUp, Smartphone, Zap, CheckCircle2 } from 'lucide-react';

const deliverables = [
  "Site moderno e profissional",
  "Integração com WhatsApp",
  "Botões estratégicos de conversão",
  "Design premium e responsivo",
  "SEO para aparecer no Google",
  "Carregamento ultra rápido"
];

const features = [
  {
    icon: ShieldCheck,
    title: "Credibilidade imediata",
    description: "Visual premium que transmite confiança no primeiro segundo."
  },
  {
    icon: MessageCircle,
    title: "Mais WhatsApp",
    description: "Botões estratégicos que transformam visita em conversa."
  },
  {
    icon: Search,
    title: "Aparecer no Google",
    description: "SEO técnico para você ser encontrado por quem procura."
  },
  {
    icon: TrendingUp,
    title: "Converter visitas em vendas",
    description: "Estrutura de copy e CTAs pensada para fechar."
  },
  {
    icon: Smartphone,
    title: "Perfeito no celular",
    description: "Responsivo de verdade — onde 80% dos seus clientes estão."
  },
  {
    icon: Zap,
    title: "Carregamento ultra rápido",
    description: "Performance que segura o cliente antes dele fechar a aba."
  }
];

export function Features() {
  return (
    <section className="py-20 bg-dark w-full max-w-md mx-auto px-4 sm:max-w-7xl sm:px-6 lg:px-8">
      {/* Deliverables Section */}
      <div className="mb-24 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-card-border mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-xs font-semibold text-slate-300 tracking-wide uppercase">Entregáveis</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">
          O que você <span className="text-accent">recebe</span>
        </h2>
        
        <div className="flex flex-col gap-4 max-w-sm mx-auto text-left">
          {deliverables.map((item, i) => (
            <div key={i} className="bg-card border border-card-border rounded-xl p-5 flex items-center gap-4">
              <div className="bg-accent rounded-full p-1 text-black shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <span className="text-white font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Features Detail Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-card-border mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-xs font-semibold text-slate-300 tracking-wide uppercase">O que fazemos</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight max-w-2xl mx-auto">
          Transformamos negócios comuns em <span className="text-accent">máquinas de vendas online</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-lg mb-12">
          Criamos sites profissionais, modernos e estratégicos — pensados para converter, não só decorar.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-card border border-card-border rounded-3xl p-8 hover:border-white/10 transition-all text-left"
          >
            <div className="w-12 h-12 rounded-full border border-card-border bg-[#181818] flex items-center justify-center mb-6">
              <feature.icon className="w-5 h-5 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
            <p className="text-slate-400 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          Seu site não precisa ser<br />
          apenas <span className="text-slate-500 line-through">"bonito"</span>.<br />
          Ele precisa <span className="text-accent">vender.</span>
        </h2>
      </div>
    </section>
  );
}
