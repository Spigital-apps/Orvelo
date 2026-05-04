import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Briefcase, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const AI_NAMES = ["ChatGPT", "Gemini", "Claude", "MidJourney", "Jasper", "Runway", "Llama", "DeepSeek", "Suno", "Perplexity"];
const BUSINESSES = ["Retail", "Manuf.", "Aviation", "Energy", "Tech"];

const Comet = () => {
  const [comet, setComet] = useState<{ id: number; name: string; top: string; left: string } | null>(null);

  useEffect(() => {
    const spawnComet = () => {
      const id = Date.now();
      const name = AI_NAMES[Math.floor(Math.random() * AI_NAMES.length)];
      // Random starting positions outside the view
      const top = Math.random() * 60 + '%';
      const left = '110%';
      setComet({ id, name, top, left });

      // Clear comet after animation
      setTimeout(() => setComet(null), 3000);
    };

    const interval = setInterval(() => {
      if (Math.random() > 0.6) spawnComet();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {comet && (
        <motion.div
          key={comet.id}
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{ x: -600, y: 400, opacity: [0, 1, 1, 0] }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.5, ease: "linear" }}
          className="absolute pointer-events-none z-0"
          style={{ top: comet.top, left: comet.left }}
        >
          <div className="flex flex-col items-center">
            <div className="w-1 h-1 bg-brand-teal rounded-full shadow-[0_0_15px_#2ecab7]" />
            <div className="h-20 w-[1px] bg-gradient-to-t from-transparent via-brand-teal/20 to-transparent absolute -top-20" />
            <span className="mt-2 text-[8px] font-bold uppercase tracking-widest text-brand-teal/40 whitespace-nowrap italic">
              {comet.name}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const BusinessNode = ({ name, index }: any) => {
  const [orbit, setOrbit] = useState(index % 3);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setOrbit(Math.floor(Math.random() * 3));
    }, 5000 + Math.random() * 5000);
    return () => clearInterval(interval);
  }, []);

  const radius = 80 + (orbit * 60);
  const duration = 20 + (orbit * 10);

  return (
    <motion.div
      className="absolute top-1/2 left-1/2"
      animate={{ rotate: 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      <motion.div
        className="absolute"
        animate={{ x: radius }}
        transition={{ type: "spring", stiffness: 20, damping: 10 }}
        style={{ top: '-10px', left: '-10px' }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ rotate: -360 }}
          transition={{ duration, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-6 h-6 rounded-lg bg-brand-navy border border-[#2ecab7]/30 flex items-center justify-center shadow-[0_0_15px_rgba(46,202,183,0.1)]">
            <Briefcase className="w-3 h-3 text-[#2ecab7]" />
          </div>
          <span className="text-[7px] font-bold uppercase tracking-widest text-[#2ecab7]/60 whitespace-nowrap bg-brand-navy/60 px-1 rounded-sm">
            {name}
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export const ConceptualAnimation = () => {
  const rings = [1, 2, 3];

  return (
    <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0 overflow-hidden rounded-[3rem]">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(46,202,183,0.05)_0%,transparent_70%)]" />
      
      <Comet />

      {/* Central Core */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-brand-teal/20 flex items-center justify-center z-20"
        animate={{ 
          boxShadow: ["0 0 20px rgba(46,202,183,0.1)", "0 0 60px rgba(46,202,183,0.2)", "0 0 20px rgba(46,202,183,0.1)"]
        }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <div className="w-28 h-28 rounded-full bg-brand-teal/5 flex items-center justify-center relative overflow-hidden backdrop-blur-sm border border-white/5">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-tr from-[#2ecab7]/10 via-transparent to-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <div className="relative z-10 flex flex-col items-center">
            <Cpu className="w-8 h-8 text-[#2ecab7] mb-1" />
            <Sparkles className="w-4 h-4 text-[#2ecab7]/40 animate-pulse" />
          </div>
        </div>
      </motion.div>

      {/* Orbital Rings */}
      {rings.map((ringLevel) => {
        const radius = 80 + (ringLevel - 1) * 60;
        const size = radius * 2;
        
        return (
          <div
            key={ringLevel}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/5 rounded-full pointer-events-none"
            style={{ width: `${size}px`, height: `${size}px` }}
          />
        );
      })}

      {/* Static AI Nodes */}
      {AI_NAMES.slice(0, 6).map((name, i) => {
        const ringLevel = (i % 3) + 1;
        const radius = 80 + (ringLevel - 1) * 60;
        const duration = 25 + (i * 5);
        const angle = i * 60;

        return (
          <motion.div
            key={name}
            className="absolute top-1/2 left-1/2"
            animate={{ rotate: 360 }}
            transition={{ duration, repeat: Infinity, ease: "linear" }}
          >
            <div
              className="absolute"
              style={{
                transform: `rotate(${angle}deg) translateX(${radius}px)`
              }}
            >
              <motion.div
                className="flex flex-col items-center gap-1"
                animate={{ rotate: -360 }}
                transition={{ duration, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-1 h-1 rounded-full bg-white/20" />
                <span className="text-[7px] font-medium text-white/30 whitespace-nowrap italic">
                  {name}
                </span>
              </motion.div>
            </div>
          </motion.div>
        );
      })}

      {/* Dynamic Business Nodes */}
      {BUSINESSES.map((name, i) => (
        <BusinessNode key={name} name={name} index={i} />
      ))}
    </div>
  );
};

