import { motion } from 'motion/react';
import { ShieldCheck, Heart, Target } from 'lucide-react';

const safetyPoints = [
  {
    title: 'Experienced Drivers',
    description: 'Every driver is carefully selected, professionally trained, and committed to providing safe and dependable journeys.'
  },
  {
    title: 'Well-Maintained Fleet',
    description: 'Our vehicles are regularly inspected and serviced to deliver reliable, comfortable transportation every day.'
  },
  {
    title: 'Safety You Can Trust',
    description: "Over 40 years of dependable transportation with no fatal incidents — a record we're proud to uphold."
  }
];

export default function About() {
  return (
    <section id="about" className="py-32 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-semibold text-brand uppercase tracking-widest mb-4">Our Story</p>
            <h2 className="text-4xl md:text-5xl font-black text-deep-blue tracking-tighter mb-6">
              Four Decades of <br /> Reliable Journeys.
            </h2>
            <p className="text-lg text-deep-blue/70 leading-relaxed">
              Started with a single bus by <b>Ullah Saab</b>, Blue Jay Travels has spent over 40 years earning the trust of corporations, schools, and organizations across Hyderabad. Built on punctuality, safety, and dependable service, we don't just provide transportation—we become a reliable part of our clients' everyday operations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[360px] rounded-[40px] overflow-hidden shadow-xl bg-slate-100"
          >
            <img
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1200"
              alt="Blue Jay Travels fleet"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel rounded-[2rem] p-10"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-brand mb-6">
              <Target size={24} />
            </div>
            <h3 className="text-2xl font-bold text-deep-blue mb-4">Our Mission</h3>
            <p className="text-deep-blue/70 leading-relaxed">
              To provide safe, reliable, and professionally managed transportation that organizations and institutions can build their daily operations around, without a second thought.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-panel rounded-[2rem] p-10"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-6">
              <Heart size={24} />
            </div>
            <h3 className="text-2xl font-bold text-deep-blue mb-4">Our Vision</h3>
            <p className="text-deep-blue/70 leading-relaxed">
              To be the most trusted name in corporate and institutional transportation, setting the standard for safety and service across every city we operate in.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <ShieldCheck className="text-brand" size={28} />
            <h3 className="text-3xl font-bold text-deep-blue tracking-tight">Our Safety Commitment</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {safetyPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/40 glass-panel rounded-[2rem] p-8"
              >
                <h4 className="text-lg font-bold text-deep-blue mb-3">{point.title}</h4>
                <p className="text-deep-blue/70 text-sm leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
