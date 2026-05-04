import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'motion/react';
import { CASE_STUDIES } from '../CaseStudyData';
import { ArrowLeft, CheckCircle2, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';
import { useModal } from '../context/ModalContext';
import { SEO } from '../components/SEO';

export const CaseStudyDetail = () => {
  const { slug } = useParams();
  const study = CASE_STUDIES.find(s => s.slug === slug);
  const { openModal } = useModal();
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
        <SEO title="Case Study Not Found | Orvelo" />
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
      <SEO 
        title={`${study.title} | Orvelo`} 
        description={study.clientContext}
      />
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-teal origin-left z-[60]"
        style={{ scaleX }}
      />

      <div className="pt-32 pb-48 px-6 md:px-24 max-w-7xl mx-auto min-h-screen">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Link 
            to="/case-studies" 
            className="group inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-[10px] uppercase font-bold tracking-widest"
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
          <div className="mb-24 max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-teal px-4 py-1.5 border border-brand-teal/20 rounded-full">
                {study.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-light text-white mb-10 leading-[1.1] tracking-tight">
              {study.title}
            </h1>
          </div>

          <div className="grid gap-16 md:gap-32">
            {/* Split View Content */}
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
              <div className="lg:col-span-4 sticky top-32">
                <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 mb-6 border-l-2 border-brand-teal pl-4">
                  The Problem
                </h2>
                <div className="text-white/40 text-sm font-light leading-relaxed">
                  Understanding the starting point and the friction that was holding the business back.
                </div>
              </div>
              <div className="lg:col-span-8">
                <p className="text-lg md:text-xl font-light text-white/70 leading-relaxed max-w-3xl">
                  {study.clientContext}
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
              <div className="lg:col-span-4 sticky top-32">
                <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 mb-6 border-l-2 border-brand-teal pl-4">
                  The Audit
                </h2>
                <div className="text-white/40 text-sm font-light leading-relaxed">
                  How Orvelo’s leadership team identified the root causes and determined the right direction.
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="glass p-10 md:p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/5 blur-[80px] rounded-full -translate-y-32 translate-x-32 group-hover:bg-brand-teal/10 transition-all duration-1000" />
                  <p className="text-lg md:text-xl font-light text-white/80 leading-relaxed italic relative z-10">
                    {study.auditSolution}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
              <div className="lg:col-span-4 sticky top-32">
                <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 mb-6 border-l-2 border-brand-teal pl-4 text-balance">
                  The Execution
                </h2>
                <div className="text-white/40 text-sm font-light leading-relaxed">
                  The practical steps taken to build systems, tools, and processes for scale.
                </div>
              </div>
              <div className="lg:col-span-8 bg-white/[0.01] border border-white/5 p-10 md:p-16 rounded-[3rem]">
                <p className="text-lg md:text-xl font-light text-white/60 leading-relaxed mb-12">
                  {study.execution}
                </p>
                <div className="flex flex-wrap gap-3">
                  {["System Architecture", "AI Integration", "Workflow Automation", "Process Governance", "Strategic Planning"].map((tag) => (
                    <span key={tag} className="text-[9px] uppercase tracking-widest font-bold text-white/30 px-5 py-2.5 border border-white/5 rounded-full hover:border-brand-teal/30 hover:text-brand-teal/70 transition-all cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
              <div className="lg:col-span-4">
                <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-teal mb-6 border-l-2 border-brand-teal pl-4">
                  The Outcome
                </h2>
              </div>
              <div className="lg:col-span-8">
                <div className="border-t border-brand-teal/20 pt-12">
                  <div className="flex items-start gap-8">
                    <div className="w-14 h-14 rounded-2xl bg-brand-teal/5 border border-brand-teal/20 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 className="w-7 h-7 text-brand-teal" />
                    </div>
                    <div className="space-y-4">
                      <p className="text-2xl md:text-4xl font-light text-white leading-tight">
                        {study.outcome}
                      </p>
                    </div>
                  </div>
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
            
            <button 
              onClick={openModal}
              className="px-10 py-5 bg-brand-blue text-white font-bold rounded-full hover:brightness-110 transition-all shadow-[0_0_50px_rgba(59,130,246,0.15)] flex items-center gap-3"
            >
              Discuss your challenge
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
