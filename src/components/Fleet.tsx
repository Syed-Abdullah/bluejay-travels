import { motion } from 'motion/react';
import { Users, Wind, Map, Shield } from 'lucide-react';
import { useInquiry } from '../context/InquiryContext';

const fleet = [
  {
    type: 'Executive Sedan',
    model: 'Swift Dzire',
    image: '/dzire.jpeg',
    capacity: '3-4 Seats',
    capacityBracket: '2-4',
    features: ['Premium AC', 'GPS Tracked', 'Wi-Fi Enabled']
  },
  {
    type: 'Luxury SUV',
    model: 'Innova Hycross',
    image: '/innova.jpg',
    capacity: '6 Seats',
    capacityBracket: '4-7',
    features: ['Executive Seating', 'Enhanced Privacy', 'Chauffeur Driven']
  },
  {
    type: 'Tempo Traveller',
    model: 'Force Traveller',
    image: '/tempo.png',
    capacity: '12-26 Seats',
    capacityBracket: '12-22',
    features: ['Reclining Seats', 'AC & Heating', 'Ideal for Group Tours']
  },
  {
    type: 'Mini Bus',
    model: 'Force Urbania',
    image: '/urbania.png',
    capacity: '21-35 Seats',
    capacityBracket: '22-36',
    features: ['Air Suspension', 'Overhead Racks', 'Corporate Shuttle Ready']
  },
  {
    type: 'School & Staff Bus',
    model: 'Mahindra / Eicher / Tata',
    image: "/schoolbus.png",
    capacity: '40-55 Seats',
    capacityBracket: '36-50',
    features: ['GPS Monitoring', 'First Aid Kit', 'Trained Attendants']
  },
  {
    type: 'Luxury Coach',
    model: 'Volvo / Benz',
    image: '/luxury.png',
    capacity: '40-45 Seats',
    capacityBracket: '36-50',
    features: ['Air Suspension','Entertainment']
  }
];

export default function Fleet() {
  const { setSelectedCapacity } = useInquiry();

  return (
    <section id="fleet" className="py-32 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-black text-deep-blue tracking-tighter mb-6">
              A Fleet Built for <br/> Reliability.
            </h2>
            <p className="text-lg text-deep-blue/70 leading-relaxed">
              Meticulously maintained, technologically integrated, and piloted by trained professionals. Our fleet is the backbone of your mobility strategy.
            </p>
          </motion.div>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fleet.map((vehicle, index) => (
            <motion.div
              key={vehicle.type}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative rounded-[40px] overflow-hidden bg-white/40 shadow-lg hover:shadow-xl transition-all duration-500 h-[480px]"
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              <img 
                src={vehicle.image} 
                alt={vehicle.type}
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-[0.16,1,0.3,1]"
              />

              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-8">
                <div className="transform lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-brand font-medium text-sm mb-2">{vehicle.model}</p>
                  <h3 className="text-2xl font-bold text-white tracking-tight mb-4">{vehicle.type}</h3>
                  
                  <div className="flex items-center gap-4 text-white/80 text-sm mb-6 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <div className="flex items-center gap-1.5"><Users size={16} /> {vehicle.capacity}</div>
                  </div>

                  <ul className="space-y-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-200 mb-4">
                    {vehicle.features.map(feature => (
                      <li key={feature} className="text-white/70 text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a href="#contact" onClick={() => setSelectedCapacity(vehicle.capacityBracket)} className="inline-flex items-center gap-2 text-sm font-bold text-white bg-brand/90 hover:bg-brand px-4 py-2 rounded-full opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 delay-300 w-fit">
                    Inquire Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}