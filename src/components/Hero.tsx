import { motion } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, ShieldCheck, Clock, MapPin } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);

  return (
    <section
  ref={containerRef}
  className="relative min-h-screen flex items-center bg-transparent"
  style={{
    paddingTop: 'calc(var(--header-height, 96px) + 24px)',
    paddingBottom: 'var(--mobile-hero-bottom-clearance, 0px)',
  }}
>
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <motion.div
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-brand to-transparent blur-[120px]"
        />
        <motion.div
          animate={{ 
            x: [0, -50, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] -right-[5%] w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-deep-blue to-transparent blur-[100px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div 
          className="flex flex-col items-start gap-8 lg:-mt-12"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-[84px] md:leading-[0.9] font-black tracking-tighter text-deep-blue"
          >
            Reliable Transport, Always. 
            
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-deep-blue/70 leading-relaxed max-w-xl"
          >
           Blue Jay Travels provides employee transportation, executive travel, airport transfers, bus rentals, school transport, corporate events, and excursion services—delivering safe, punctual, and dependable journeys for businesses and organizations across Hyderabad.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a href="#contact" className="group flex items-center justify-center gap-2 bg-brand text-white px-10 py-5 rounded-2xl text-base font-bold hover:bg-brand/90 transition-all duration-300 shadow-[0_20px_50px_rgba(0,161,232,0.3)]">
              Request Proposal
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#fleet" className="flex items-center justify-center gap-2 bg-white border border-deep-blue/10 text-deep-blue px-10 py-5 rounded-2xl text-base font-bold hover:bg-slate-50 transition-all duration-300 shadow-sm">
              Explore Fleet
            </a>
          </motion.div>
        </motion.div>

        {/* Hero Image Presentation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[600px] hidden lg:block group"
        >
          <div className="absolute inset-0 rounded-[40px] overflow-hidden shadow-2xl bg-slate-100">
             <img 
                src="/hero-bus.png" 
                alt="Blue Jay Premium Fleet" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/60 via-transparent to-transparent opacity-80" />
          </div>

          {/* Floating UI Elements */}
          <motion.div 
           animate={{ y: [-10, 10, -10] }}
           transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-12 -left-8 glass-panel bg-white/90 backdrop-blur-md p-4 rounded-2xl flex items-center gap-4 shadow-xl border border-white/50"
          >
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-brand shrink-0">
              <ShieldCheck size={24} />
            </div>
            <p className="text-lg font-black text-deep-blue uppercase tracking-wider pr-2">40 YEARS OF TRUST</p>
          </motion.div>

          <motion.div 
           animate={{ y: [10, -10, 10] }}
           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
           className="absolute bottom-12 -right-8 glass-panel bg-white/90 backdrop-blur-md p-4 rounded-2xl flex items-center gap-4 shadow-xl border border-white/50"
          >
            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
              <Clock size={24} />
            </div>
            <p className="text-lg font-black text-deep-blue uppercase tracking-wider pr-2">ON-TIME ALWAYS</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
