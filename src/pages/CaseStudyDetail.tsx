import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'motion/react';
import { CASE_STUDIES } from '../CaseStudyData';
import { ArrowLeft, CheckCircle2, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';

export const CaseStudyDetail = () => {
  const { slug } = useParams();
  const study = CASE_STUDIES.find(s => s.slug === slug);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white/50">
        <div className="text-center">
          <h2 className="text-4xl font-light mb-4 text-white">Case study not found</h2>
          <Link to="/case-studies" className="text-brand-teal hover:underline flex items-center gap-2 justify-center">
            <ArrowLeft className="w-4 h-4" /> Back to all case studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-teal origin-left z-[60]"
        style={{ scaleX }}
      />

      <div className="pt-32 pb-48 px-6 md:px-24 max-w-5xl mx-auto min-h-screen">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Link 
            to="/case-studies" 
            className="group flex items-center gap-2 text-white/40 hover:text-white transition-colors text-[10px] uppercase font-bold tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Case Studies
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-teal">
                {study.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-10 leading-[1.1] tracking-tight text-balance">
              {study.title}
            </h1>
          </div>

          <div className="grid gap-24">
            {/* Split View Content */}
            <div className="grid md:grid-cols-3 gap-16">
              <div className="md:col-span-1">
                <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 mb-8 border-b border-white/5 pb-4">
                  Client Context
                </h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-xl md:text-2xl font-light text-white/60 leading-relaxed">
                  {study.clientContext}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-16">
              <div className="md:col-span-1">
                <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 mb-8 border-b border-white/5 pb-4">
                  Audit & Solution
                </h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-xl md:text-2xl font-light text-white/60 leading-relaxed italic">
                  {study.auditSolution}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-16">
              <div className="md:col-span-1">
                <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 mb-8 border-b border-white/5 pb-4">
                  Execution
                </h2>
              </div>
              <div className="md:col-span-2 bg-white/[0.02] p-10 md:p-16 rounded-[3rem] border border-white/5">
                <p className="text-xl md:text-2xl font-light text-white/70 leading-relaxed mb-10">
                  {study.execution}
                </p>
                <div className="flex flex-wrap gap-4">
                  {["System Architecture", "AI Integration", "Process Governance", "Strategic Planning"].map((tag) => (
                    <span key={tag} className="text-[9px] uppercase tracking-widest font-bold text-brand-teal/50 px-4 py-2 border border-brand-teal/20 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-16">
              <div className="md:col-span-1">
                <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 mb-8 border-b border-white/5 pb-4">
                  Outcome
                </h2>
              </div>
              <div className="md:col-span-2">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full border border-brand-teal/40 flex items-center justify-center shrink-0 mt-2">
                    <CheckCircle2 className="w-6 h-6 text-brand-teal" />
                  </div>
                  <p className="text-3xl md:text-5xl font-light text-white leading-tight">
                    {study.outcome}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA / Navigation */}
          <div className="mt-48 pt-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
            <Link 
              to="/case-studies" 
              className="text-white/40 hover:text-brand-teal transition-colors flex items-center gap-3 font-bold uppercase tracking-widest text-xs"
            >
              See other solutions <ChevronRight className="w-4 h-4" />
            </Link>
            
            <button className="px-10 py-5 bg-brand-blue text-white font-bold rounded-full hover:brightness-110 transition-all shadow-[0_0_50px_rgba(59,130,246,0.15)] flex items-center gap-3">
              Discuss your challenge
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
