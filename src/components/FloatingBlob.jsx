import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };
  
  const staggerContainer = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };
  
  // Floating Blobs Component
  const FloatingBlob = ({ className, color }) => (
    <motion.div
      className={`absolute blur-3xl opacity-20 ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 180, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
      style={{ backgroundColor: color }}
    />
  );
export default FloatingBlob