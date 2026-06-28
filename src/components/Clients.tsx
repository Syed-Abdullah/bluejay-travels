import { motion } from 'motion/react';

// Using abstract geometric shapes/text to represent logos elegantly
const clients = [
  'TechCorp Global',
  'PharmaLife Inc.',
  'Stellar Financial',
  'Nexus IT Parks',
  'Apex Manufacturing',
  'Global Edu',
  'Pinnacle Group',
  'Vanguard Systems'
];

export default function Clients() {
  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-semibold text-deep-blue/40 uppercase tracking-widest mb-12"
        >
          Trusted by Industry Leaders
        </motion.p>
        
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12 opacity-60">
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              className="text-2xl font-bold text-deep-blue/40 hover:text-deep-blue transition-colors duration-300 cursor-default"
            >
              {client}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
