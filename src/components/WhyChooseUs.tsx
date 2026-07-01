import { motion } from 'motion/react';

const reasons = [
  {
    title: 'Always On Time',
    description: 'Reliable scheduling and disciplined operations that keep employees, students, and events moving without delays.'
  },
  {
    title: 'Safety First',
    description: 'Experienced drivers, maintained vehicles, and strict operating standards for every journey we undertake.'
  },
  {
    title: 'Fleet You Can Count On',
    description: 'From executive cars to buses, every vehicle is maintained for comfort, reliability, and performance.'
  },
  {
    title: 'Built to Scale',
    description: 'Whether it\'s one airport transfer or daily corporate routes, we grow with your transportation needs.'
  },
  {
    title: 'Responsive Support',
    description: 'Quick communication, dependable coordination, and real people available whenever plans change.'
  },
  {
    title: 'Beyond the Daily Commute',
    description: 'Trusted transportation for corporate events, school excursions, educational tours, and special travel requirements.'
  }
];

export default function WhyChooseUs() {
  return (
    <section id="technology" className="py-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 max-w-2xl"
        >
           <h2 className="text-4xl md:text-5xl font-black text-deep-blue tracking-tighter mb-6">
              The Blue Jay <br/> Standard.
            </h2>
            <p className="text-lg text-deep-blue/70">
              Hyderabad's most trusted name in transport. Years of experience, thousands of happy passengers, and a commitment to service that never cuts corners.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="w-12 h-12 rounded-2xl glass-panel flex items-center justify-center mb-6 text-xl font-bold text-deep-blue/40 group-hover:bg-deep-blue group-hover:text-white transition-colors duration-300">
                0{index + 1}
              </div>
              <h3 className="text-2xl font-bold text-deep-blue mb-4">{reason.title}</h3>
              <p className="text-deep-blue/70 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
