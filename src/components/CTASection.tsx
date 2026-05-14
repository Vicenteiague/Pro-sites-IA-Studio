import { motion } from 'motion/react';
import { Clock, Send, ShieldCheck } from 'lucide-react';
import { useState, FormEvent } from 'react';

export function CTASection() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá, me chamo ${formData.name}. ${formData.message}`;
    const whatsappUrl = `https://wa.me/5567993174612?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-24 bg-dark relative overflow-hidden border-t border-card-border">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=2000&q=80')] opacity-5 mix-blend-overlay bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12 lg:mb-0"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-card-border mb-6">
              <Clock className="w-4 h-4 text-accent" />
              <span className="text-xs font-semibold text-white uppercase tracking-wider">Atenção</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Seu cliente decide em <span className="text-accent">menos de 5 segundos.</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Se o visual do seu negócio parece amador, lento ou ultrapassado, o cliente simplesmente fecha a página e compra de outro.
            </p>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Seu negócio merece parecer grande.</h3>
              <p className="text-lg text-slate-400">
                Mesmo sendo pequeno hoje. Clientes compram de empresas que transmitem confiança — e um site profissional faz exatamente isso.
              </p>
              <div className="p-4 bg-card border border-card-border rounded-xl">
                <p className="text-accent font-medium">
                  Pare de perder clientes para quem aparece melhor que você online.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-card border border-card-border rounded-3xl p-8 shadow-2xl relative"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <ShieldCheck className="w-24 h-24 text-white" />
            </div>
            
            <div className="mb-8 relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2">Vamos criar o site que vende por você</h3>
              <p className="text-slate-400 text-sm">
                Preencha os campos abaixo. Em poucos minutos retornamos no seu WhatsApp com seu orçamento.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Seu Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-dark border border-card-border rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="Ex: João Silva"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1">WhatsApp</label>
                <input 
                  type="tel" 
                  id="phone" 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-dark border border-card-border rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="(67) 90000-0000"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Sobre o seu negócio</label>
                <textarea 
                  id="message" 
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-dark border border-card-border rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                  placeholder="Qual o ramo da sua empresa?"
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-accent hover:bg-accent-hover text-dark rounded-xl px-4 py-4 font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02]"
              >
                Solicitar Orçamento
                <Send className="w-4 h-4" />
              </button>
              
              <p className="text-xs text-center text-slate-500 mt-4">
                Seus dados são usados apenas para retornar seu orçamento.
              </p>
            </form>
          </motion.div>
        
        </div>
      </div>
    </section>
  );
}
