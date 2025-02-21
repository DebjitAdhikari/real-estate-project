import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  Heart,
  MapPin,
  Bed,
  Bath,
  Square,
  Phone
} from "lucide-react"
import { useNavigate } from "react-router-dom"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const propertiesByStatus = {
  completed: [
    {
      id: 1,
      title: "Luxury Beachfront Villa",
      location: "Miami Beach, FL",
      price: "$2,500,000",
      beds: 4,
      baths: 3.5,
      sqft: 3200,
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      ],
      description:
        "Stunning beachfront villa with panoramic ocean views, featuring modern architecture and luxury finishes."
    },
    {
      id: 2,
      title: "Modern Downtown Penthouse",
      location: "New York, NY",
      price: "$3,800,000",
      beds: 3,
      baths: 2.5,
      sqft: 2800,
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      ],
      description:
        "Luxurious penthouse in the heart of Manhattan with spectacular city views and high-end amenities."
    },
    {
      id: 3,
      title: "Contemporary Mountain Estate",
      location: "Aspen, CO",
      price: "$4,200,000",
      beds: 5,
      baths: 4.5,
      sqft: 4500,
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      ],
      description:
        "Magnificent mountain estate with breathtaking views, featuring premium finishes and outdoor living spaces."
    }
  ],
  ongoing: [
    {
      id: 4,
      title: "Urban Loft Development",
      location: "Chicago, IL",
      price: "$1,900,000",
      beds: 2,
      baths: 2,
      sqft: 2100,
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      ],
      description:
        "Modern urban loft with industrial touches and high-end finishes in prime location."
    },
    {
      id: 5,
      title: "Riverside Apartments",
      location: "Portland, OR",
      price: "$2,100,000",
      beds: 3,
      baths: 2,
      sqft: 2400,
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      ],
      description:
        "Luxurious riverside apartments with stunning water views and modern amenities."
    },
    {
      id: 6,
      title: "Garden Townhouses",
      location: "Boston, MA",
      price: "$1,800,000",
      beds: 3,
      baths: 2.5,
      sqft: 2200,
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      ],
      description:
        "Elegant townhouses with private gardens in historic neighborhood."
    }
  ],
  upcoming: [
    {
      id: 7,
      title: "Skyline Residences",
      location: "Seattle, WA",
      price: "$3,200,000",
      beds: 3,
      baths: 3,
      sqft: 2800,
      image:
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      ],
      description:
        "Luxury high-rise residences with panoramic city and water views."
    },
    {
      id: 8,
      title: "Desert Oasis Villas",
      location: "Phoenix, AZ",
      price: "$2,800,000",
      beds: 4,
      baths: 3.5,
      sqft: 3600,
      image:
        "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      ],
      description: "Modern desert villas with private pools and mountain views."
    },
    {
      id: 9,
      title: "Coastal Heights",
      location: "San Diego, CA",
      price: "$3,500,000",
      beds: 4,
      baths: 4,
      sqft: 3800,
      image:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      ],
      description:
        "Exclusive coastal residences with premium finishes and ocean views."
    }
  ]
}
const floatingAnimation = {
  animate: {
    y: [0, 10, 0],
    transition: {
      duration: 5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

function Properties() {
  const [activeStatus, setActiveStatus] = useState("completed")
  const navigate = useNavigate()

  const FilterButton = ({ status }) => (
    <motion.button
      className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
        activeStatus === status
          ? "bg-[#f5c96a] text-[#3e3e3e]"
          : "bg-[#3e3e3e] text-white hover:bg-[#4e4e4e]"
      }`}
      onClick={() => setActiveStatus(status)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </motion.button>
  )

  return (
    <div className="bg-[#3e3e3e] pt-[60px] text-white min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
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
          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <FilterButton status="completed" />
            <FilterButton status="ongoing" />
            <FilterButton status="upcoming" />
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStatus}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              exit={{ opacity: 0, y: 20 }}
            >
              {propertiesByStatus[activeStatus].map(property => (
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
                      <span className="text-gray-300 text-sm">
                        {property.location}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                    <p className="text-[#f5c96a] text-2xl font-bold mb-4">
                      {property.price}
                    </p>
                    <div className="flex sm:flex-row flex-col gap-6 mb-6">
                      <div className="flex items-center">
                        <Bed className="h-4 w-4 text-gray-300 mr-1" />
                        <span className="text-gray-300">
                          {property.beds} beds
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Bath className="h-4 w-4 text-gray-300 mr-1" />
                        <span className="text-gray-300">
                          {property.baths} baths
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Square className="h-4 w-4 text-gray-300 mr-1" />
                        <span className="text-gray-300">
                          {property.sqft} sqft
                        </span>
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
          </AnimatePresence>
        </div>
      </section>

      {/* Featured Property */}
      <section className="relative py-20 bg-[#2e2e2e] overflow-hidden">
            {/* Floating SVG Background Elements */}
            <motion.div
              className="absolute top-10 left-5 sm:left-16 w-20 h-20 bg-[#f5c96a] rounded-lg opacity-30"
              variants={floatingAnimation}
              animate="animate"
            />
            <motion.div
              className="sm:absolute sm:block hidden bottom-20 right-10 w-32 h-32 bg-[#f5c96a] rounded-full opacity-20 blur-xl"
              variants={floatingAnimation}
              animate="animate"
            />
            <motion.div
              className="absolute top-1/3 left-1/2 w-24 h-24 bg-[#6bbaff] rounded-full opacity-25 blur-lg"
              variants={floatingAnimation}
              animate="animate"
            />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
              {/* Section Title */}
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
      
              {/* Property Details */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-12"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {/* Image Section */}
                <motion.div
                  className="relative sm:h-[500px] rounded-xl overflow-hidden shadow-lg"
                  variants={fadeInUp}
                >
                  <img
                    src="images/vrindavan-3.jpg"
                    alt="Featured Property"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </motion.div>
      
                {/* Property Information */}
                <motion.div
                  className="flex flex-col justify-center"
                  variants={fadeInUp}
                >
                  <h3 className="text-3xl font-bold mb-4">Vrindavan Garden</h3>
                  <p className="text-[#f5c96a] text-2xl font-bold mb-6">
                    ₹2,500,000
                  </p>
      
                  {/* Features */}
                  <div className="flex sm:flex-row flex-col gap-6 mb-6">
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
      
                  {/* Description */}
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    Experience luxury living at its finest in this stunning beachfront villa.
                    Featuring panoramic ocean views, modern architecture, and premium
                    finishes throughout. This exclusive property offers the perfect blend of
                    indoor and outdoor living spaces.
                  </p>
      
                  {/* Buttons */}
                  <div className="flex sm:flex-row flex-col gap-4">
                    <motion.button
                      className="flex-1 bg-[#f5c96a] text-[#3e3e3e] py-4 rounded-lg font-semibold flex items-center justify-center shadow-md transition-all duration-300 hover:shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => navigate("properties/vrindavan-garden")}
                    >
                      View Details
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.button>
                    <motion.button
                      className="flex-1 border-2 border-[#f5c96a] text-[#f5c96a] py-4 rounded-lg font-semibold flex items-center justify-center shadow-md transition-all duration-300 hover:bg-[#f5c96a] hover:text-[#3e3e3e]"
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
              Let our expert team guide you through your next property
              investment
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
  )
}

export default Properties
