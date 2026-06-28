import { motion } from 'motion/react';

const reasons = [
  {
    title: 'Enterprise Safety Standards',
    description: 'Military-grade encryption for routing data, mandatory background checks, GPS geofencing, and SOS integration for absolute peace of mind.'
  },
  {
    title: 'Precision Analytics',
    description: 'Custom dashboards for facilities managers to track fleet utilization, carbon footprint, cost per trip, and on-time performance.'
  },
  {
    title: 'Transparent Billing',
    description: 'No hidden charges. Automated invoicing integrated directly with your ERP systems (SAP, Oracle) for frictionless procurement.'
  },
  {
    title: '24/7 Control Center',
    description: 'A dedicated command center monitoring every trip in real-time, proactively routing around traffic anomalies and weather events.'
  },
  {
    title: 'Compliance First',
    description: 'Strict adherence to all state and national transport regulations, labor laws, and corporate ESG mandates.'
  },
  {
    title: 'Trained Chauffeurs',
    description: 'Drivers undergo rigorous behavioral training, defensive driving courses, and regular health checkups.'
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
              We don't operate like a transport vendor. We operate like your internal mobility partner.
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
