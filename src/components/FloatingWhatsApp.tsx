import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/919848042774"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed z-50 bottom-[100px] lg:bottom-8 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl cursor-pointer"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
    </motion.a>
  );
}
