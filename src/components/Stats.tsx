import { motion } from 'motion/react';

const stats = [
  { value: '40+', label: 'Years Experience' },
  { value: '50+', label: 'Enterprise Clients' },
  { value: '1,000+', label: 'Daily Trips' },
  { value: '75+', label: 'Vehicles Managed' },
  { value: '2500+', label: 'Employees Transported Daily' },
  { value: '99.9%', label: 'Corporate Satisfaction' },
];

export default function Stats() {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      {/* Subtle background element */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(0,161,232,0.1)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_100%,rgba(1,45,125,0.05)_0%,transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 glass-panel rounded-[40px] py-16 px-12 shadow-sm border-white/60">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-4xl md:text-5xl font-black text-deep-blue tracking-tighter mb-2">
                {stat.value}
              </div>
              <div className="text-[10px] text-deep-blue/50 font-bold uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
