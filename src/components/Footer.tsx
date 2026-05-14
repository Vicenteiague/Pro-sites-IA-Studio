import { Mail, MapPin, Phone, Hexagon } from 'lucide-react';

export function Footer() {
  const whatsappUrl = "https://wa.me/5567993174612?text=Quero%20um%20site%20profissional";
  const email = "startmktlocal@gmail.com";

  return (
    <footer className="bg-[#050505] border-t border-card-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <span className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-2">
              <Hexagon className="w-8 h-8 text-accent fill-accent/20" />
              Start Sites Pro
            </span>
            <p className="text-slate-400 max-w-sm mb-6 mt-4">
              Criamos sites profissionais que transformam visitas em clientes — trabalhando por você 24 horas por dia.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a href={`mailto:${email}`} className="text-slate-400 hover:text-white transition-colors flex items-center gap-3 group">
                  <Mail className="w-5 h-5 text-slate-500 group-hover:text-accent transition-colors" />
                  {email}
                </a>
              </li>
              <li>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-3 group">
                  <Phone className="w-5 h-5 text-slate-500 group-hover:text-accent transition-colors" />
                  +55 67 99317-4612
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Localização</h4>
            <ul className="space-y-4">
              <li className="text-slate-400 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                <span>Ponta Porã — MS<br />Brasil</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-card-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Start Sites Pro — Todos os direitos reservados.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1">
            Sites que trabalham por você <span className="text-accent font-semibold flex items-center">24h <span className="relative flex h-2 w-2 ml-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span></span>
          </p>
        </div>
      </div>
    </footer>
  );
}
