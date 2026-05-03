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
  MessageSquare
} from 'lucide-react';
import { SectionLabel } from '../components/SectionLabel';
import { ConceptualAnimation } from '../components/ConceptualAnimation';
import { SEO } from '../components/SEO';

import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';

export const Home = () => {
  const { openModal } = useModal();
  return (
    <>
      <SEO 
        title="Orvelo | Helping Businesses Build Secure and Scalable Ecosystems" 
        description="Orvelo is an extended leadership team that helps companies audit workflows, standardise operations, and build AI-assisted digital ecosystems for scale."
      />
      {/* SECTION 1: OPENING SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-24 py-32 z-10 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <div className="max-w-xl">
              <h1 className="flex flex-col gap-6 mb-12 tracking-tight leading-[1.1]">
                <span className="text-4xl md:text-5xl lg:text-6xl font-light text-white text-balance">
                  There is an <span className="italic">AI</span> for everything.
                </span>
                <span className="text-base md:text-xl font-light text-white/40 text-balance leading-relaxed">
                  But what is actually right for <span className="text-white/60">your business?</span>
                </span>
              </h1>
            </div>
            
            <div className="space-y-6 max-w-xl text-base md:text-xl font-light text-white/50 leading-relaxed mb-12">
              <p>
                Every day, business owners are told that AI can improve sales, automate work, fix operations, and save time.
              </p>
              <p className="text-white/70">
                The problem is not access. The problem is knowing what to use, where to start, and <span className="text-brand-teal">how to make it work</span> in the real world.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              viewport={{ once: true }}
            >
              <button 
                onClick={openModal}
                className="group flex items-center gap-4 text-[10px] font-bold tracking-[0.2em] uppercase text-brand-teal hover:text-white transition-all"
              >
                Start a Conversation
                <div className="w-10 h-10 rounded-full border border-brand-teal/20 flex items-center justify-center group-hover:bg-brand-teal/10 group-hover:border-brand-teal/40 transition-all">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            <ConceptualAnimation />
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-brand-teal/5 blur-[100px] rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: WHO WE ARE */}
      <section id="who" className="relative py-48 px-6 md:px-24 z-10 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-24 items-start">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 1.2 }}
             viewport={{ once: true }}
          >
            <SectionLabel>Genesis</SectionLabel>
            <h2 className="text-2xl md:text-4xl font-light leading-tight mb-10 text-balance">
              That is where Orvelo comes in.
            </h2>
            <div className="space-y-8 text-white/50 text-lg leading-relaxed font-light">
              <p>
                Orvelo helps growing businesses find the right direction and build momentum through practical leadership and execution.
              </p>
              <p>
                The name Orvelo comes from <strong className="text-white font-medium">orbital velocity</strong>, the point at which something has enough force to break free and move forward.
              </p>
              <p>
                Businesses face their own version of gravity every day: slower sales, inefficient processes, disconnected systems, and manual work.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-10">
            {[
              { 
                icon: Compass, 
                title: "Direction", 
                desc: "The right leadership to understand the problem, identify the opportunity, and guide the next move." 
              },
              { 
                icon: Zap, 
                title: "Momentum", 
                desc: "The execution support, systems, tools, and AI enablement needed to turn the right decision into real progress." 
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

      {/* SECTION 3: START SMALL */}
      <section className="relative py-56 px-6 md:px-24 z-10 text-center max-w-5xl mx-auto">
        <motion.div
           initial={{ opacity: 0, scale: 0.98 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.2 }}
           viewport={{ once: true }}
        >
          <SectionLabel>Strategy</SectionLabel>
          <h2 className="text-2xl md:text-4xl font-light mb-16 text-balance leading-[1.1]">
            You do not need a massive transformation to begin.
          </h2>
          <div className="space-y-10 text-white/40 text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
            <p>
              Most businesses do not need to overhaul everything at once. They need to identify one meaningful place to start, make progress there, and build from that momentum.
            </p>
            <p>
              That is how we work. We help businesses focus on what matters first, validate value early, and grow with more confidence over time.
            </p>
            <div className="pt-12">
               <span className="text-white font-bold uppercase tracking-[0.4em] text-[10px] border-b border-brand-teal/40 pb-2">
                 Start with the right move. Build from what works.
               </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 4: DIRECTION SECTION (Leadership) */}
      <section id="leadership" className="relative py-48 px-6 md:px-24 z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <SectionLabel>Advisory</SectionLabel>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light mb-8 max-w-4xl text-balance leading-tight">
            Bring in the right fractional leader for the challenge in front of you
          </h2>
          <p className="text-white/40 text-xl max-w-2xl font-light leading-relaxed">
            Not every business problem needs the same kind of leadership. Orvelo brings in the right fractional expert based on what your business actually needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              role: "Fractional CAIO",
              name: "Beta Mahatvaraj",
              credentials: "AI Strategy & Implementation",
              bio: "For businesses that need help making sense of AI, identifying the right use cases, and choosing what to prioritize.",
              imagePath: "https://marketing.indiatx.com/wp-content/uploads/2026/05/Beta.png",
              seed: "beta-mahatvaraj"
            },
            {
              role: "CTO",
              name: "Muthuraman",
              credentials: "Systems Architecture",
              bio: "For businesses that need help improving systems, building tools, automating workflows, or translating ideas into execution.",
              imagePath: "https://marketing.indiatx.com/wp-content/uploads/2026/05/Muthu.png",
              seed: "muthuraman"
            },
            {
              role: "Fractional CMO",
              name: "Senthil Anand",
              credentials: "Growth & Digital Strategy",
              bio: "For businesses that need help fixing sales and marketing gaps, improving demand generation, and building stronger growth systems.",
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


      {/* SECTION 5: MOMENTUM SECTION (Execution) */}
      <section id="momentum" className="relative py-32 px-6 md:px-24 z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionLabel>Execution</SectionLabel>
            <h2 className="text-xl md:text-3xl font-light mb-8">
              Then we help you build momentum through execution
            </h2>
            <div className="space-y-6 text-white/60 leading-relaxed text-lg font-light mb-12">
              <p>
                Leadership sets the direction. Progress comes from execution.
              </p>
              <p>
                Once the path is clear, Orvelo helps businesses move forward with practical support that turns ideas into working outcomes.
              </p>
            </div>
            <p className="text-lg text-white font-light italic border-l-2 border-brand-teal pl-6 py-2">
              The goal is not more activity. It is useful progress that the business can build on.
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

      {/* SECTION 6: HOW IT WORKS */}
      <section className="relative py-32 px-6 md:px-24 z-10 max-w-7xl mx-auto bg-white/5 rounded-[3rem] p-12 md:p-24">
        <div className="text-center mb-24">
          <SectionLabel>Method</SectionLabel>
          <h2 className="text-xl md:text-3xl font-light">A practical way to move forward</h2>
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
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
            <p className="text-white/60 text-lg font-light italic">
              You do not need to figure everything out upfront. You just need the right place to begin.
            </p>
        </div>
      </section>

      {/* SECTION 7: EXAMPLES / WHAT WE’VE DONE */}
      <section id="case-studies" className="relative py-32 px-6 md:px-24 z-10 max-w-7xl mx-auto">
        <div className="mb-20">
          <SectionLabel>Evidence</SectionLabel>
          <h2 className="text-xl md:text-3xl font-light mb-4 text-white">What this looks like in practice</h2>
          <p className="text-white/60 text-base font-light mb-12">
            How Orvelo brings leadership and execution together for real-world impact.
          </p>
          
          <Link 
            to="/case-studies"
            className="group flex items-center gap-4 text-[10px] font-bold tracking-[0.2em] uppercase text-brand-teal hover:text-white transition-all"
          >
            Explore all 21 case studies
            <div className="w-10 h-10 rounded-full border border-brand-teal/20 flex items-center justify-center group-hover:bg-brand-teal/10 group-hover:border-brand-teal/40 transition-all">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Improving lead generation for a manufacturing company",
              slug: "ai-product-chatbot-conversions",
              insight: "The business was generating website traffic, but too many opportunities were being lost because visitors were not being engaged at the right time.",
              outcome: "A smarter first point of interaction and stronger support for the sales process."
            },
            {
              title: "Streamlining production scheduling for a manufacturing company",
              slug: "after-sales-parts-ai-inspection",
              insight: "The production team was relying on inefficient scheduling methods that made planning harder and slowed decision-making.",
              outcome: "Better visibility, smoother scheduling, and a more practical system for planning."
            }
          ].map((example, i) => (
            <Link 
              key={i}
              to={`/case-studies/${example.slug}`}
              className="glass p-10 rounded-[2.5rem] group hover:border-brand-teal/40 transition-all duration-500"
            >
              <h3 className="text-2xl font-light mb-8 group-hover:text-brand-teal transition-colors">{example.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8">{example.insight}</p>
              <div className="flex items-center justify-between">
                <span className="text-white/70 italic text-sm">"{example.outcome}"</span>
                <ArrowRight className="w-4 h-4 text-brand-teal group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 8: FINAL CTA */}
      <section className="relative py-48 px-6 md:px-24 z-10 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.05)_0%,transparent_70%)] pointer-events-none" />

          <h2 className="text-2xl md:text-4xl font-light mb-8 text-balance leading-tight">
            Need help finding the <br/> <span className="text-brand-teal">right place to start?</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-light max-w-2xl mx-auto mb-16 leading-relaxed">
            Whether the challenge is AI, operations, systems, or growth, Orvelo helps you bring in the right leadership and build momentum from there.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={openModal}
              className="px-10 py-5 bg-brand-blue text-white font-bold rounded-full hover:brightness-110 transition-all transform hover:scale-105 active:scale-95 flex items-center gap-3 shadow-[0_0_30px_rgba(59,130,246,0.2)]"
            >
              <Calendar className="w-5 h-5" />
              Book a Strategy Call
            </button>
            <button 
              onClick={openModal}
              className="px-10 py-5 bg-white/5 border border-white/10 font-bold rounded-full hover:bg-white/10 transition-all flex items-center gap-3 text-white"
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

