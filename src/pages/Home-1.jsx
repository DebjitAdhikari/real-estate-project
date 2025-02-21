

import { Blob } from '../components/Blob';
import { FloatingGraphic } from '../components/FloatingGraphic';
import { WavyBackground } from '../components/WavyBackground';
import { motion } from 'framer-motion';
import { ArrowRight, Building } from 'lucide-react';
function Home() {
  return (
    <div className="bg-[#3e3e3e] pt-[60px] text-white overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center">
        <WavyBackground />
        <Blob className="left-[10%] top-[20%]" />
        <Blob className="right-[10%] bottom-[20%]" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <motion.h1 
              className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-[#f5c96a] block">Discover</span>
              Your Dream Home
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-gray-300 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Exceptional properties in prime locations. Your journey to the perfect home starts here.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button 
                className="inline-flex items-center bg-[#f5c96a] text-[#3e3e3e] px-8 py-4 rounded-lg hover:bg-opacity-90 transition-colors shadow-lg font-semibold mr-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Properties
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
              <motion.button 
                className="inline-flex items-center border-2 border-[#f5c96a] text-[#f5c96a] px-8 py-4 rounded-lg hover:bg-[#f5c96a] hover:text-[#3e3e3e] transition-colors shadow-lg font-semibold mt-4 md:mt-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <FloatingGraphic>
              <img 
                src="images/vrindavan-2.jpg"
                alt="Luxury home"
                className="rounded-2xl shadow-2xl"
              />
            </FloatingGraphic>
            
            <motion.div 
              className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#f5c96a] rounded-lg">
                  <Building className="h-6 w-6 text-[#3e3e3e]" />
                </div>
                <div>
                  <p className="text-[#3e3e3e] font-semibold">Premium Properties</p>
                  <p className="text-gray-500 text-sm">Exclusive Collection</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Rest of your sections with added animations */}
      {/* Add Blob components strategically throughout other sections */}
      <Blob className="left-[5%] top-[60%] opacity-20" />
      <Blob className="right-[5%] top-[80%] opacity-20" />
      </div>
  )
}

export default Home
