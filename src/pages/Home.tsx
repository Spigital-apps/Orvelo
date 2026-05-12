import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Orbit, 
  Zap, 
  Compass, 
  Layers, 
  Cpu, 
  Code, 
  Workflow, 
  TrendingUp, 
  CheckCircle2,
  Calendar,
  MessageSquare,
  Sun,
  Moon
} from 'lucide-react';
import { SectionLabel } from '../components/SectionLabel';
import { ParticleAnimation } from '../components/ParticleAnimation';
import { SEO } from '../components/SEO';

import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';

import { CaseStudyTabs } from '../components/CaseStudyTabs';
import { CASE_STUDIES } from '../CaseStudyData';
import { useState, useRef } from 'react';

export const Home = () => {
  const { openModal } = useModal();
  const [activeCategory, setActiveCategory] = useState('All');
  const [heroTheme, setHeroTheme] = useState<'dark' | 'light'>('dark');
  
  const filteredStudies = activeCategory === 'All' 
    ? CASE_STUDIES 
    : CASE_STUDIES.filter(study => study.category === activeCategory);

  const featuredStudies = filteredStudies.slice(0, 3);
  const carouselStudies = filteredStudies.slice(3);
  const scrollRef = useRef<HTMLDivElement>(null);

  const isDark = heroTheme === 'dark';

  return (
    <>
      <SEO 
        title="Orvelo | AI Consulting and Execution Partner for Growing Businesses" 
        description="Not sure where to start with AI? Orvelo helps SMBs identify the right opportunities, bring in the right fractional leader, and execute practical solutions that move the business forward."
      />
      
      {/* SECTION 1: OPENING SECTION (Hero) */}
      <section className={`relative min-h-screen flex flex-col justify-center items-center px-6 md:px-24 py-24 z-10 overflow-hidden transition-colors duration-700 ${isDark ? 'bg-brand-navy' : 'bg-white'}`}>
        <ParticleAnimation theme={heroTheme} />
        
        {/* Theme Toggle */}
        <div className="absolute top-32 right-6 md:right-24 z-20">
          <button 
            onClick={() => setHeroTheme(prev => prev === 'dark' ? 'light' : 'dark')}
            className={`p-3 rounded-full border transition-all ${isDark ? 'border-white/10 text-white hover:bg-white/5' : 'border-brand-navy/10 text-brand-navy hover:bg-brand-navy/5'}`}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-center max-w-4xl"
        >
          <h1 className="flex flex-col gap-4 mb-20">
            <span className={`text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.05] ${isDark ? 'text-white' : 'text-brand-navy'}`}>
              You know AI can help.
            </span>
            <span className={`text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-balance leading-[1.05] ${isDark ? 'text-[#2ecab7]' : 'text-brand-blue'}`}>
              You just don’t know where to start.
            </span>
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="#readiness"
              className={`px-10 py-5 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 flex items-center gap-3 shadow-lg ${isDark ? 'bg-brand-blue text-white shadow-brand-blue/20' : 'bg-brand-navy text-white shadow-brand-navy/20'}`}
            >
              Start with Orvelo
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link 
              to="/case-studies"
              className={`px-10 py-5 rounded-full font-bold border transition-all flex items-center gap-3 ${isDark ? 'border-white/10 text-white hover:bg-white/5' : 'border-brand-navy/10 text-brand-navy hover:bg-brand-navy/5'}`}
            >
              Explore Case Studies
            </Link>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2: WHO WE ARE (Genesis) */}
      <section id="who" className="relative py-32 px-6 md:px-24 z-10 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-24 items-start">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 1.2 }}
             viewport={{ once: true }}
          >
            <SectionLabel>Clarity over noise</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-light leading-tight mb-10 text-balance text-white">
              Your business does not need AI tools, it needs clarity on where AI can actually help, what is worth doing first, and how to make progress without wasting time, money, or energy on the wrong things.
            </h2>
            <div className="space-y-8 text-white/50 text-lg leading-relaxed font-light">
              <p className="text-brand-teal font-medium text-xl italic">
                That is exactly where Orvelo comes in.
              </p>
              <p>
                Orvelo gives your business the <strong className="text-white font-medium">orbital velocity</strong> it needs to break free and move forward — overcoming the gravity of slower sales, inefficient processes, disconnected systems, and manual work that slows growth.
              </p>
              <p>
                We help growing businesses make sense of the noise, identify the right starting point, and move forward with the right mix of leadership and execution.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-10">
            {[
              { 
                icon: Compass, 
                title: "Human Intelligence", 
                desc: "Extended leadership that works with you to understand the real problem, identify the real opportunity, and decide the best way forward." 
              },
              { 
                icon: Workflow, 
                title: "AI Execution", 
                desc: "AI agents and execution support that build the tools, systems, automations, and workflows needed to turn those decisions into practical business results." 
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 * i }}
                viewport={{ once: true }}
                className="glass p-10 rounded-[2rem] group hover:border-brand-teal/40 transition-all duration-700 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 blur-3xl rounded-full -translate-y-16 translate-x-16 group-hover:bg-brand-teal/10 transition-all" />
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-brand-teal group-hover:bg-brand-teal group-hover:text-brand-navy transition-all duration-500">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-light mb-4 text-white">{item.title}</h3>
                <p className="text-white/50 text-base leading-relaxed font-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: EVIDENCE (Case Studies) */}
      <section id="case-studies" className="relative py-32 px-6 md:px-24 z-10 max-w-7xl mx-auto border-t border-white/5 bg-white text-brand-navy rounded-[3rem] my-12">
        <div className="mb-20">
          <SectionLabel className="text-brand-blue border-brand-blue/20">Evidence</SectionLabel>
          <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-brand-navy">What this looks like in practice</h2>
          <p className="text-brand-navy/60 text-base font-light mb-12">
            How Orvelo brings leadership and execution together for real-world impact.
          </p>

          <div className="flex items-center justify-between mb-12">
            <CaseStudyTabs activeCategory={activeCategory} setActiveCategory={setActiveCategory} showContent={false} theme="light" />
            
            <div className="hidden md:flex gap-3">
              <button 
                onClick={() => scrollRef.current?.scrollBy({ left: -432, behavior: 'smooth' })}
                className="w-12 h-12 rounded-full border border-brand-navy/10 flex items-center justify-center hover:bg-brand-navy/5 transition-colors text-brand-navy"
              >
                <ArrowRight className="w-5 h-5 rotate-180" />
              </button>
              <button 
                onClick={() => scrollRef.current?.scrollBy({ left: 432, behavior: 'smooth' })}
                className="w-12 h-12 rounded-full border border-brand-navy/10 flex items-center justify-center hover:bg-brand-navy/5 transition-colors text-brand-navy"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-12 snap-x no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredStudies.map((study, i) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="min-w-[320px] md:min-w-[400px] snap-start"
              >
                <Link 
                  to={`/case-studies/${study.slug}`}
                  className="bg-black p-10 rounded-[2.5rem] group hover:border-brand-teal/40 border border-white/5 transition-all duration-500 h-[380px] flex flex-col"
                >
                  <div className="text-[10px] uppercase tracking-widest text-brand-teal font-bold mb-4">{study.category}</div>
                  <h3 className="text-xl md:text-2xl font-light mb-6 group-hover:text-brand-teal transition-colors flex-grow leading-tight text-white">{study.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-8 line-clamp-3 font-light">{study.outcome}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-white/30 text-[9px] uppercase tracking-widest font-bold group-hover:text-brand-teal transition-colors">Read Case Study</span>
                    <div className="w-10 h-10 rounded-full border border-brand-teal/20 flex items-center justify-center group-hover:bg-brand-teal group-hover:text-brand-navy transition-all">
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/case-studies"
              className="group inline-flex items-center gap-4 text-[10px] font-bold tracking-[0.2em] uppercase text-brand-blue hover:text-brand-navy transition-all"
            >
              Explore all {CASE_STUDIES.length} case studies
              <div className="w-10 h-10 rounded-full border border-brand-blue/20 flex items-center justify-center group-hover:bg-brand-blue/10 group-hover:border-brand-blue/40 transition-all">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: STRATEGY (Readiness Audit) */}
      <section id="readiness" className="relative py-32 px-6 md:px-24 z-10 text-center max-w-5xl mx-auto border-t border-white/5">
        <motion.div
           initial={{ opacity: 0, scale: 0.98 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.2 }}
           viewport={{ once: true }}
        >
          <SectionLabel>Readiness Audit</SectionLabel>
          <h2 className="text-2xl md:text-5xl font-light mb-16 text-balance leading-[1.1] text-white">
            Start with the problem that matters most.
          </h2>
          <div className="space-y-10 text-white/40 text-xl md:text-2xl font-light max-w-4xl mx-auto leading-relaxed">
            <p>
              Whether you are trying to improve sales and marketing, unlock revenue growth, increase operational efficiency, or deliver a better customer experience, the first step is understanding where AI can make a real difference.
            </p>
            <p className="text-brand-teal font-medium">
              The Orvelo Readiness Audit helps you do exactly that.
            </p>
            <p className="text-lg md:text-xl">
              Our extended leadership team studies your current processes, identifies the bottlenecks and opportunities, and maps where AI can create real business value. They then develop a practical roadmap and build a focused mockup or proof of concept, so you can test the approach before scaling further.
            </p>
            <div className="pt-12">
              <button 
                onClick={openModal}
                className="group inline-flex items-center gap-4 text-[10px] font-bold tracking-[0.2em] uppercase text-brand-teal hover:text-white transition-all"
              >
                Schedule your Readiness Audit
                <div className="w-10 h-10 rounded-full border border-brand-teal/20 flex items-center justify-center group-hover:bg-brand-teal/10 group-hover:border-brand-teal/40 transition-all">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 5: ADVISORY (Leadership) */}
      <section id="leadership" className="relative py-32 px-6 md:px-24 z-10 max-w-7xl mx-auto border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <SectionLabel>Advisory</SectionLabel>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light mb-8 max-w-4xl text-balance leading-tight text-white italic">
            Guidance before automation
          </h2>
          <div className="space-y-6 text-white/40 text-xl max-w-3xl font-light leading-relaxed">
            <p>
              While everyone is chasing AI tools and automations, your business needs the right leader to understand the problem, guide the decision, and stay involved through execution.
            </p>
            <p>
              Orvelo gives you access to extended leadership that can step in, guide the work, help execute the solution, and leave behind systems that continue to deliver results.
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              role: "Your extended CAIO",
              name: "Beta Mahatvaraj",
              credentials: "AI Strategy & Implementation",
              bio: "Helping businesses and founders understand AI, identify the right use cases, and prioritize what to build for maximum impact.",
              imagePath: "https://marketing.indiatx.com/wp-content/uploads/2026/05/Beta.png",
              seed: "beta-mahatvaraj"
            },
            {
              role: "Your extended CAIO",
              name: "Kharthickeyen KS",
              credentials: "AI Strategist & Coach",
              bio: "Helping businesses and founders adopt AI effectively and build the right AI foundations for their organization.",
              imagePath: "https://marketing.indiatx.com/wp-content/uploads/2026/05/Karthikeyan.png",
              seed: "kharthickeyen-ks"
            },
            {
              role: "Your extended CTO",
              name: "Muthuraman",
              credentials: "Systems Architecture",
              bio: "Helping businesses improve systems, build tools, automate workflows, and translate complex ideas into reliable execution.",
              imagePath: "https://marketing.indiatx.com/wp-content/uploads/2026/05/Muthu.png",
              seed: "muthuraman"
            },
            {
              role: "Your extended CMO",
              name: "Senthil Anand",
              credentials: "Growth & Digital Strategy",
              bio: "Helping businesses fix sales and marketing gaps, improve demand generation, and build stronger growth systems for scale.",
              imagePath: "https://marketing.indiatx.com/wp-content/uploads/2026/05/Senthil.png",
              seed: "senthil-anand"
            }
          ].map((leader, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="glass rounded-[2.5rem] overflow-hidden group hover:border-brand-teal/40 hover:-translate-y-2 transition-all duration-700"
            >
               <div className="aspect-[4/5] relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 bg-white/5">
                 <img 
                   src={leader.imagePath} 
                   alt={leader.name} 
                   className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                   referrerPolicy="no-referrer"
                   onError={(e) => {
                     const target = e.target as HTMLImageElement;
                     if (!target.src.includes('picsum')) {
                       target.src = `https://picsum.photos/seed/${leader.seed}/800/1000`;
                     } else if (!target.src.includes('dicebear')) {
                       target.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${leader.name}&backgroundColor=020617&baseColor=2dd4bf`;
                     }
                   }}
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-80" />
                 <div className="absolute bottom-8 left-8">
                    <div className="text-brand-teal text-[10px] uppercase tracking-[0.2em] font-bold mb-1">{leader.role}</div>
                    <h3 className="text-3xl font-light text-white">{leader.name}</h3>
                 </div>
              </div>
              <div className="p-10">
                <p className="text-white/40 text-[10px] uppercase tracking-widest mb-6 font-semibold italic">{leader.credentials}</p>
                <p className="text-white/50 text-base leading-relaxed font-light">{leader.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* SECTION 6: MOMENTUM (Execution) */}
      <section id="momentum" className="relative py-32 px-6 md:px-24 z-10 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionLabel>Execution</SectionLabel>
            <h2 className="text-xl md:text-3xl font-light mb-8 text-white italic">
              Execution that is built to deliver results
            </h2>
            <div className="space-y-6 text-white/60 leading-relaxed text-lg font-light mb-12 text-balance">
              <p>
                It has become easy to build automations and AI workflows. But without the right thinking behind them, they rarely deliver meaningful results.
              </p>
              <p>
                That is why Orvelo does more than consult. We stay involved through execution, helping you build the right systems, automate the right processes, and create results that actually matter.
              </p>
            </div>
            <p className="text-lg text-white font-light italic border-l-2 border-brand-teal pl-6 py-2">
              Leadership sets the direction. Progress comes from execution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: Code, text: "Custom applications" },
              { icon: Workflow, text: "Workflow automation" },
              { icon: Layers, text: "Process optimization" },
              { icon: TrendingUp, text: "Sales & Marketing execution" },
              { icon: Cpu, text: "AI support & implementation" },
              { icon: Zap, text: "Smart internal tools" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-5 glass rounded-2xl hover:bg-white/10 transition-colors cursor-default group"
              >
                <item.icon className="w-5 h-5 text-brand-teal" />
                <span className="text-sm font-light text-white/80 group-hover:text-white transition-colors">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: METHOD (How it works) */}
      <section className="relative py-32 px-6 md:px-24 z-10 max-w-7xl mx-auto bg-white/5 rounded-[4rem] p-12 md:p-24 border border-white/5">
        <div className="text-center mb-24">
          <SectionLabel>Method</SectionLabel>
          <h2 className="text-2xl md:text-4xl font-light text-white">A practical way to move forward</h2>
        </div>
        
        <div className="grid md:grid-cols-4 gap-12">
          {[
            {
              step: "01",
              title: "Understand the business",
              desc: "We look at where the friction is, what is slowing progress, and where the biggest opportunities exist."
            },
            {
              step: "02",
              title: "Align the right leader",
              desc: "We bring in the right fractional expert based on the challenge you are solving."
            },
            {
              step: "03",
              title: "Build the right solution",
              desc: "We support the business with the tools, systems, automations, or marketing execution needed to move things forward."
            },
            {
              step: "04",
              title: "Grow from there",
              desc: "Once the first wins are in place, we help you build momentum and expand what works."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="text-5xl font-bold text-white/5 mb-6 group-hover:text-brand-teal/20 transition-colors duration-500">{item.step}</div>
              <h3 className="text-xl font-light mb-4 group-hover:text-brand-teal transition-colors text-white">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
            <p className="text-white/40 text-lg font-light italic">
              You do not need to figure everything out upfront. You just need the right place to begin.
            </p>
        </div>
      </section>

      {/* SECTION 8: FINAL CTA */}
      <section className="relative py-40 px-6 md:px-24 z-10 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(46,202,183,0.08)_0%,transparent_70%)] pointer-events-none" />

          <h2 className="text-3xl md:text-5xl font-light mb-10 text-balance leading-tight text-white">
            Need help finding the <br/> <span className="text-brand-teal">right place to start?</span>
          </h2>
          <p className="text-white/50 text-xl max-w-2xl mx-auto mb-16 leading-relaxed font-light">
            Whether the challenge is AI, operations, systems, or growth, Orvelo helps you bring in the right leadership and build momentum from there.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-10">
            <button 
              onClick={openModal}
              className="w-full sm:w-auto px-10 py-5 bg-brand-blue text-white font-bold rounded-full hover:brightness-110 transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(59,130,246,0.3)]"
            >
              <Calendar className="w-5 h-5" />
              Book a Strategy Call
            </button>
            <button 
              onClick={openModal}
              className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 font-bold rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-3 text-white"
            >
              <MessageSquare className="w-5 h-5" />
              Start a Conversation
            </button>
          </div>
        </motion.div>
      </section>
    </>
  );
};
