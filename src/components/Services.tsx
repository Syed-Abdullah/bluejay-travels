import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useInquiry } from '../context/InquiryContext';

const services = [
  {
    title: 'Corporate Employee Transportation',
    description: 'Scalable daily commute solutions for large workforces. Optimized routing, real-time tracking, and absolute reliability for 24/7 operations.',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'School Transportation',
    description: 'Safe, supervised, and comfortable bus services for educational institutions. Verified drivers, background-checked staff, and rigorous daily vehicle checks.',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Bus & Car Rentals',
    description: 'From luxury coaches for events to executive sedans for individual travel. A diverse fleet covering every group size and comfort requirement.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Airport Transfers',
    description: 'Seamless first and last-mile connectivity. Flight tracking integration ensures we are there before you land.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Tours & Excursions',
    description: 'Curated travel packages and reliable tour transport for corporate off-sites and institutional excursions, with drivers who know the routes.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Corporate Events',
    description: 'Coordinated fleet movements for off-sites, conferences, and large-scale corporate gatherings. End-to-end logistics management.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200'
  }
];

export default function Services() {
  const { setSelectedService } = useInquiry();

  const handleInquire = (title: string) => {
    setSelectedService(title);
  };

  return (
    <section id="solutions" className="py-32 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-black text-deep-blue tracking-tighter mb-6">
            Engineered for <br/> Enterprise Scale.
          </h2>
          <p className="text-lg text-deep-blue/70 leading-relaxed">
            We don't just move people; we design mobility architectures for modern organizations. From individual executives to thousands of employees.
          </p>
        </motion.div>

        <div className="space-y-32">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className={`flex flex-col lg:flex-row gap-16 items-center ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:w-1/2"
              >
                <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] group">
                  <div className="absolute inset-0 bg-deep-blue/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-[0.16,1,0.3,1]"
                  />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:w-1/2 flex flex-col gap-6"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-deep-blue tracking-tight">
                  {service.title}
                </h3>
                <p className="text-lg text-deep-blue/70 leading-relaxed max-w-md">
                  {service.description}
                </p>
                
                <div className="mt-4">
                  <a href="#contact" onClick={() => handleInquire(service.title)} className="inline-flex items-center gap-2 text-deep-blue font-semibold hover:text-brand transition-colors group">
                    Inquire Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}