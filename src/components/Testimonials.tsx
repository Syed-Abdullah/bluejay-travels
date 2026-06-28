import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Blue Jay Travels has handled our employee transport for years. Their punctuality is unmatched, and their drivers are consistently professional.",
    name: 'Rajesh Khanna',
    role: 'HR Director',
    company: 'TechCorp Global'
  },
  {
    quote: "Safety protocols they follow for our school buses give us complete peace of mind. They're the best school transport partner we've worked with.",
    name: 'Sarah D\'Souza',
    role: 'Principal',
    company: 'Global Edu Academy'
  },
  {
    quote: "Efficient, clean, and professional. We've used their luxury coaches for several annual offsites now, and the experience is consistently worry-free.",
    name: 'Amit Sharma',
    role: 'Operations Head',
    company: 'Apex Manufacturing'
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-deep-blue tracking-tighter mb-6">
            Voices of Trust.
          </h2>
          <p className="text-lg text-deep-blue/70 leading-relaxed">
            Don't just take our word for it. Here's what our long-standing partners have to say about our commitment to excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-panel rounded-[2rem] p-8 flex flex-col"
            >
              <div className="flex gap-1 mb-6 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="text-deep-blue/80 leading-relaxed mb-8 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-bold text-deep-blue">{t.name}</p>
                <p className="text-sm text-deep-blue/60">{t.role}, {t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
