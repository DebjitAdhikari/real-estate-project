import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Heart, MapPin, Bed, Bath, Square, Phone } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const properties = [
  {
    id: 1,
    title: "Luxury Beachfront Villa",
    location: "Miami Beach, FL",
    price: "$2,500,000",
    beds: 4,
    baths: 3.5,
    sqft: 3200,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
    ],
    description: "Stunning beachfront villa with panoramic ocean views, featuring modern architecture and luxury finishes."
  },
  {
    id: 2,
    title: "Modern Downtown Penthouse",
    location: "New York, NY",
    price: "$3,800,000",
    beds: 3,
    baths: 2.5,
    sqft: 2800,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
    ],
    description: "Luxurious penthouse in the heart of Manhattan with spectacular city views and high-end amenities."
  },
  {
    id: 3,
    title: "Contemporary Mountain Estate",
    location: "Aspen, CO",
    price: "$4,200,000",
    beds: 5,
    baths: 4.5,
    sqft: 4500,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
    ],
    description: "Magnificent mountain estate with breathtaking views, featuring premium finishes and outdoor living spaces."
  }
];

function Properties() {
  const [selectedProperty, setSelectedProperty] = React.useState(null);

  return (
    <div className="bg-[#3e3e3e] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-[#3e3e3e] bg-opacity-80"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-[#f5c96a]">Exclusive</span> Properties
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Discover our handpicked selection of luxury properties.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Property Listings */}
      <section className="py-20 bg-[#2e2e2e]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {properties.map((property, index) => (
              <motion.div 
                key={property.id}
                className="bg-[#3e3e3e] rounded-xl overflow-hidden shadow-lg"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <button className="absolute top-4 right-4 p-2 bg-white rounded-full text-[#3e3e3e] hover:bg-[#f5c96a] transition-colors">
                    <Heart className="h-5 w-5" />
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <MapPin className="h-4 w-4 text-[#f5c96a] mr-2" />
                    <span className="text-gray-300 text-sm">{property.location}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                  <p className="text-[#f5c96a] text-2xl font-bold mb-4">{property.price}</p>
                  <div className="flex justify-between mb-6">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 text-gray-300 mr-1" />
                      <span className="text-gray-300">{property.beds} beds</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 text-gray-300 mr-1" />
                      <span className="text-gray-300">{property.baths} baths</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 text-gray-300 mr-1" />
                      <span className="text-gray-300">{property.sqft} sqft</span>
                    </div>
                  </div>
                  <motion.button 
                    className="w-full bg-[#f5c96a] text-[#3e3e3e] py-3 rounded-lg font-semibold flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Details
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Property */}
      <section className="py-20 bg-[#3e3e3e]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Featured <span className="text-[#f5c96a]">Property</span>
            </h2>
            <p className="text-gray-300">Explore our most exclusive listing</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="relative h-[500px] rounded-xl overflow-hidden"
              variants={fadeInUp}
            >
              <img 
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                alt="Featured Property"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div 
              className="flex flex-col justify-center"
              variants={fadeInUp}
            >
              <h3 className="text-3xl font-bold mb-4">Luxury Beachfront Villa</h3>
              <p className="text-[#f5c96a] text-2xl font-bold mb-6">$2,500,000</p>
              <div className="flex gap-6 mb-6">
                <div className="flex items-center">
                  <Bed className="h-5 w-5 text-[#f5c96a] mr-2" />
                  <span>4 Bedrooms</span>
                </div>
                <div className="flex items-center">
                  <Bath className="h-5 w-5 text-[#f5c96a] mr-2" />
                  <span>3.5 Bathrooms</span>
                </div>
                <div className="flex items-center">
                  <Square className="h-5 w-5 text-[#f5c96a] mr-2" />
                  <span>3,200 sqft</span>
                </div>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Experience luxury living at its finest in this stunning beachfront villa. 
                Featuring panoramic ocean views, modern architecture, and premium finishes throughout. 
                This exclusive property offers the perfect blend of indoor and outdoor living spaces.
              </p>
              <div className="flex gap-4">
                <motion.button 
                  className="flex-1 bg-[#f5c96a] text-[#3e3e3e] py-4 rounded-lg font-semibold flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Schedule Viewing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
                <motion.button 
                  className="flex-1 border-2 border-[#f5c96a] text-[#f5c96a] py-4 rounded-lg font-semibold flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Agent
                  <Phone className="ml-2 h-5 w-5" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2e2e2e]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Find Your <span className="text-[#f5c96a]">Dream Property</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our expert team guide you through your next property investment
            </p>
            <motion.button 
              className="inline-flex items-center bg-[#f5c96a] text-[#3e3e3e] px-8 py-4 rounded-lg hover:bg-opacity-90 transition-colors shadow-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Properties;