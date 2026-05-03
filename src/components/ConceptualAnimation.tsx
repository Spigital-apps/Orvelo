import { motion } from 'motion/react';
import { Cpu } from 'lucide-react';

export const ConceptualAnimation = () => {
  const rings = [
    { names: ["ChatGPT", "Gemini", "Claude"], duration: 20 },
    { names: ["MidJourney", "Suno", "Jasper"], duration: 25 },
    { names: ["Runway", "Notion", "Otter"], duration: 30 }
  ];

  return (
    <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0">
      {/* Central Core */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-brand-teal/30 flex items-center justify-center"
        animate={{ 
          boxShadow: ["0 0 20px rgba(45,212,191,0.1)", "0 0 50px rgba(45,212,191,0.3)", "0 0 20px rgba(45,212,191,0.1)"]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div className="w-24 h-24 rounded-full bg-brand-teal/5 flex items-center justify-center relative overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-tr from-brand-teal/20 via-transparent to-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <Cpu className="w-10 h-10 text-brand-teal" />
        </div>
      </motion.div>

      {/* Orbital Rings & Names */}
      {rings.map((ringData, ringIdx) => {
        const ringLevel = ringIdx + 1;
        const radius = 30 + ringLevel * 50;
        const size = 60 + ringLevel * 100;
        
        return (
          <motion.div
            key={ringIdx}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/5 rounded-full"
            style={{ width: `${size}px`, height: `${size}px` }}
            animate={{ rotate: ringLevel % 2 === 0 ? 360 : -360 }}
            transition={{ duration: ringData.duration, repeat: Infinity, ease: "linear" }}
          >
            {ringData.names.map((name, i) => {
              const angle = i * (360 / ringData.names.length);
              return (
                <div
                  key={name}
                  className="absolute"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${angle}deg) translateX(${radius}px)`
                  }}
                >
                  {/* Counter-rotation to keep text upright */}
                  <motion.div
                    className="flex flex-col items-center gap-1"
                    animate={{ rotate: ringLevel % 2 === 0 ? -360 : 360 }}
                    transition={{ duration: ringData.duration, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-teal shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
                    <span className="text-[7.5px] font-bold uppercase tracking-[0.2em] text-white/40 whitespace-nowrap bg-brand-navy/80 px-1.5 py-0.5 rounded-sm border border-white/5">
                      {name}
                    </span>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        );
      })}

      {/* Connecting Lines (Simulated with glowing auras) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.03)_0%,transparent_70%)]" />
    </div>
  );
};
