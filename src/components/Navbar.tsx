import { Hexagon, ArrowRight } from 'lucide-react';

export function Navbar() {
  const whatsappUrl = "https://wa.me/5567993174612?text=Quero%20um%20site%20profissional";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Hexagon className="w-8 h-8 text-accent fill-accent" />
            <span className="text-2xl font-bold text-white tracking-tight">
              SitePro
            </span>
          </div>
          <div>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-black hover:bg-accent-hover transition-colors px-6 py-2.5 rounded-full text-sm font-bold inline-flex items-center gap-2"
            >
              WhatsApp <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
