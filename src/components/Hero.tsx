import { motion } from 'motion/react';
import { ArrowRight, Zap } from 'lucide-react';

export function Hero() {
  const whatsappUrl = "https://wa.me/5567993174612?text=Quero%20um%20site%20profissional";

  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-dark">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-lg h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-card-border mb-8">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-xs font-semibold text-slate-300 tracking-wide uppercase">Criação de Sites em Ponta Porã — MS</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Seu site está<br />fazendo você<br />
            <span className="text-accent">perder clientes</span><br />
            todos os dias.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Enquanto você lê isso, seus concorrentes estão aparecendo no Google, recebendo mensagens no WhatsApp e fechando vendas no automático.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 max-w-md mx-auto">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-black px-8 py-4 rounded-full font-bold text-lg transition-all"
            >
              Quero um site que vende
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#servicos"
              className="w-full flex items-center justify-center gap-2 bg-card hover:bg-card/80 text-white border border-card-border px-8 py-4 rounded-full font-bold transition-all"
            >
              <Zap className="w-4 h-4 text-accent" />
              Ver o que entregamos
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
