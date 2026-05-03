import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CASE_STUDIES } from '../CaseStudyData';
import { CATEGORIES, Category } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CaseStudyTabs = () => {
  const [activeCategory, setActiveCategory] = useState<Category>(CATEGORIES[0]);

  const filteredStudies = CASE_STUDIES.filter(study => study.category === activeCategory);

  return (
    <div className="w-full">
      {/* Tabs Header */}
      <div className="flex flex-wrap gap-2 mb-12 border-b border-white/5 pb-6">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 relative ${
              activeCategory === category 
                ? 'text-brand-teal bg-white/5' 
                : 'text-white/40 hover:text-white/70 hover:bg-white/[0.02]'
            }`}
          >
            {category}
            {activeCategory === category && (
              <motion.div 
                layoutId="activeTab"
                className="absolute inset-0 border border-brand-teal/30 rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="wait">
          {filteredStudies.map((study, idx) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: idx * 0.05 }}
              className="group"
            >
              <Link to={`/case-studies/${study.slug}`} className="block h-full">
                <div className="glass h-full p-8 rounded-[2rem] border border-white/5 group-hover:border-brand-teal/40 transition-all duration-500 flex flex-col justify-between">
                  <div>
                    <div className="text-[9px] uppercase tracking-widest font-bold text-brand-teal/60 mb-4">{study.category}</div>
                    <h3 className="text-xl font-light text-white leading-tight group-hover:text-brand-teal transition-colors">
                      {study.title}
                    </h3>
                  </div>
                  <div className="mt-8 flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-white/30 group-hover:text-white/50 transition-colors">View Case Study</span>
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-teal group-hover:border-brand-teal group-hover:text-brand-navy transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
