import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-brand-500/30 selection:text-brand-50">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Portfolio />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
