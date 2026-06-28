import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';
import { Phone, MessageCircle, Mail, Clock } from 'lucide-react';
import { useInquiry } from '../context/InquiryContext';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { selectedService, selectedCapacity } = useInquiry();
  const [serviceValue, setServiceValue] = useState('');
  const [capacityValue, setCapacityValue] = useState('');

  useEffect(() => {
    if (selectedService) setServiceValue(selectedService);
  }, [selectedService]);

  useEffect(() => {
    if (selectedCapacity) setCapacityValue(selectedCapacity);
  }, [selectedCapacity]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const form = e.currentTarget;

    const data = {
      full_name: (form.elements.namedItem('full_name') as HTMLInputElement).value,
      organization: (form.elements.namedItem('organization') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      service: serviceValue,
      pickup_location: (form.elements.namedItem('pickup_location') as HTMLInputElement).value,
      capacity: capacityValue,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/submit-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Submission failed');
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again or call us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-deep-blue tracking-tighter mb-6">
            Get a Quick Quote.
          </h2>
          <p className="text-lg text-deep-blue/70 leading-relaxed">
            Tell us your requirements and our team will get back to you within 2 business days.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 glass-panel rounded-[2rem] p-8 md:p-10"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16">
                <h3 className="text-2xl font-bold text-deep-blue mb-3">Thanks &mdash; we'll be in touch.</h3>
                <p className="text-deep-blue/70 max-w-sm">
                  Your inquiry has been received. One of our team members will reach out within 2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-deep-blue/70 mb-2">Full Name *</label>
                  <input name="full_name" required type="text" placeholder="e.g. John Doe" className="w-full px-4 py-3 rounded-xl border border-deep-blue/10 bg-white/60 focus:outline-none focus:ring-2 focus:ring-brand" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-deep-blue/70 mb-2">Organization / School</label>
                  <input name="organization" type="text" placeholder="Company name" className="w-full px-4 py-3 rounded-xl border border-deep-blue/10 bg-white/60 focus:outline-none focus:ring-2 focus:ring-brand" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-deep-blue/70 mb-2">Phone Number *</label>
                  <input name="phone" required type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-xl border border-deep-blue/10 bg-white/60 focus:outline-none focus:ring-2 focus:ring-brand" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-deep-blue/70 mb-2">Email Address</label>
                  <input name="email" type="email" placeholder="you@example.com" className="w-full px-4 py-3 rounded-xl border border-deep-blue/10 bg-white/60 focus:outline-none focus:ring-2 focus:ring-brand" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-deep-blue/70 mb-2">Service Required</label>
                  <select value={serviceValue} onChange={(e) => setServiceValue(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-deep-blue/10 bg-white/60 focus:outline-none focus:ring-2 focus:ring-brand">
                    <option value="">Select a service</option>
                    <option value="Corporate Employee Transportation">Corporate Employee Transportation</option>
                    <option value="School Transportation">School Transportation</option>
                    <option value="Bus & Car Rentals">Bus & Car Rentals</option>
                    <option value="Airport Transfers">Airport Transfers</option>
                    <option value="Tours & Excursions">Tours & Excursions</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-deep-blue/70 mb-2">Pickup Location</label>
                  <input name="pickup_location" type="text" placeholder="Street, city, state" className="w-full px-4 py-3 rounded-xl border border-deep-blue/10 bg-white/60 focus:outline-none focus:ring-2 focus:ring-brand" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-deep-blue/70 mb-2">Seating Capacity Required</label>
                  <select value={capacityValue} onChange={(e) => setCapacityValue(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-deep-blue/10 bg-white/60 focus:outline-none focus:ring-2 focus:ring-brand">
                    <option value="">Select capacity</option>
                    <option value="2-4">2-4 Seater</option>
                    <option value="4-7">4-7 Seater</option>
                    <option value="12-22">12-22 Seater</option>
                    <option value="22-36">22-36 Seater</option>
                    <option value="36-50">36-50 Seater</option>
                    <option value="50+">50+ Seater</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-deep-blue/70 mb-2">Your Message</label>
                  <textarea name="message" rows={4} placeholder="Tell us about your requirements, estimated passengers, and frequency..." className="w-full px-4 py-3 rounded-xl border border-deep-blue/10 bg-white/60 focus:outline-none focus:ring-2 focus:ring-brand resize-none" />
                </div>
                <div className="sm:col-span-2">
                  {error && (
                    <p className="text-red-500 text-sm mb-4">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-brand text-white font-bold py-4 rounded-xl hover:bg-brand/90 transition-colors shadow-lg disabled:opacity-60"
                  >
                    {isLoading ? 'Sending…' : 'Send My Inquiry'}
                  </button>
                  <p className="text-xs text-deep-blue/40 text-center mt-3">We value your privacy. Your data is stored securely.</p>
                </div>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <a href="tel:+919848042774" className="glass-panel rounded-[1.5rem] p-6 flex items-center gap-4 hover:bg-white/60 transition-colors">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-brand shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <p className="font-bold text-deep-blue">Call Sales Team</p>
                <p className="text-sm text-deep-blue/60">+91 9848042774</p>
              </div>
            </a>

            <a href="https://wa.me/919848042774" target="_blank" rel="noopener noreferrer" className="glass-panel rounded-[1.5rem] p-6 flex items-center gap-4 hover:bg-white/60 transition-colors">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                <MessageCircle size={20} />
              </div>
              <div>
                <p className="font-bold text-deep-blue">WhatsApp Support</p>
                <p className="text-sm text-deep-blue/60">Available for instant quotes</p>
              </div>
            </a>

            <a href="mailto:bluejaytravelshyd@gmail.com" className="glass-panel rounded-[1.5rem] p-6 flex items-center gap-4 hover:bg-white/60 transition-colors">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <p className="font-bold text-deep-blue">Email Inquiry</p>
                <p className="text-sm text-deep-blue/60">bluejaytravelshyd@gmail.com</p>
              </div>
            </a>

            <div className="glass-panel rounded-[1.5rem] p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock size={18} className="text-deep-blue/60" />
                <p className="font-bold text-deep-blue text-sm">Operating Hours</p>
              </div>
              <div className="space-y-2 text-sm text-deep-blue/70">
                <div className="flex justify-between"><span>Office Visits</span><span>Mon&ndash;Sat, 9AM&ndash;6PM</span></div>
                <div className="flex justify-between"><span>Emergency Support</span><span>24/7 Available</span></div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}