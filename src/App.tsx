import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import { Home } from './pages/Home';
import { CaseStudiesPage } from './pages/CaseStudies';
import { CaseStudyDetail } from './pages/CaseStudyDetail';

// --- Shared Components ---

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-24 bg-brand-navy/95 backdrop-blur-sm border-b border-white/5 flex justify-between items-center pointer-events-auto">
      <div className="flex items-center gap-3">
        <Link to="/" className="flex items-center gap-4 group cursor-pointer">
          <div className="relative h-14 flex items-center">
            <img 
              src="/Orvelo.png" 
              alt="Orvelo" 
              className="h-full object-contain transition-opacity duration-300"
              onLoad={(e) => {
                (e.target as HTMLImageElement).classList.remove('opacity-0');
              }}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        </Link>
      </div>
      <div className="hidden md:flex gap-10 items-center text-[10px] uppercase tracking-widest font-bold text-white/50">
        <Link to="/#who" className="hover:text-white transition-colors">Who We Are</Link>
        <Link to="/#leadership" className="hover:text-white transition-colors">Leadership</Link>
        <Link to="/#momentum" className="hover:text-white transition-colors">Momentum</Link>
        <Link to="/case-studies" className={`hover:text-white transition-colors ${location.pathname.startsWith('/case-studies') ? 'text-brand-teal' : ''}`}>Case Studies</Link>
        <button className="px-6 py-2.5 bg-brand-blue text-white rounded-full hover:brightness-110 transition-all font-bold active:scale-95 text-[9px]">
          Strategy Call
        </button>
      </div>
    </nav>
  );
};

const OrbitalBackground = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw]">
      {[1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="orbital-path left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: `${i * 30}%`,
            height: `${i * 30}%`,
            opacity: 0.08 / i,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 70 + i * 25, repeat: Infinity, ease: 'linear' }}
        />
      ))}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.9)_70%,#020617_100%)]" />
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-brand-teal/5 blur-[120px] rounded-full" />
    </div>
  </div>
);

const Footer = () => (
  <footer className="relative py-12 px-6 md:px-24 z-10 border-t border-white/5 max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-3 h-10">
        <Link to="/">
          <img src="/Orvelo.png" alt="Orvelo" className="h-full object-contain opacity-50 hover:opacity-100 transition-opacity" />
        </Link>
      </div>
      <div className="text-[10px] text-white/30 uppercase tracking-[0.2em]">
        © 2026 Orvelo Consulting Group. Precision in Motion.
      </div>
      <div className="flex gap-8 text-[10px] text-white/30 uppercase tracking-widest">
        <a href="#" className="hover:text-white/60">Privacy</a>
        <a href="#" className="hover:text-white/60 hover:border-b border-brand-teal">LinkedIn</a>
      </div>
    </div>
  </footer>
);

const ScrollToAnchor = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);
  return null;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative font-sans text-white/90 selection:bg-brand-teal/30 overflow-x-hidden min-h-screen flex flex-col">
        <ScrollToAnchor />
        <ScrollToTop />
        <Navbar />
        <OrbitalBackground />
        
        <main className="flex-grow z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
