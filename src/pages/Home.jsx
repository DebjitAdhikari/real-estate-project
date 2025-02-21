import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Home as HomeIcon, Building, Users, Phone, Star, MessageSquare, MapPin, Clock, Bed, Heart, Bath, Square } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import "./styles.css"
import 'swiper/css/pagination';
import FloatingBlob from '../components/FloatingBlob';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};
const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeInOut" },
};



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
      title: "Vrindavan Garden",
      location: "Mednipur, West Bengal",
      price: "₹2,500,000",
      beds: 4,
      baths: 3.5,
      sqft: 3200,
      image:
        "images/vrindavan-3.jpg",
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
function Home() {

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
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  
  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.3 } },
  };
  
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
const testimonials = [
  {
    name: "Debjit Adhikari",
    role: "Homeowner",
    text: "The team went above and beyond to help us find our dream home. Their expertise and dedication are unmatched."
  },
  {
    name: "Sanjit Pal",
    role: "Property Investor",
    text: "Professional, knowledgeable, and always available. They made the investment process smooth and profitable."
  },
  {
    name: "Manjit Pal",
    role: "First-time Buyer",
    text: "As a first-time buyer, I appreciated their patience and guidance throughout the entire process."
  },
  {
    name: "Akash Kundu",
    role: "Commercial Client",
    text: "Outstanding service in finding the perfect commercial property. Their market knowledge is exceptional."
  },
  {
    name: "Karan Kumar Yadav",
    role: "Property Seller",
    text: "They helped me get the best price for my property. The marketing strategy was brilliant."
  }
];
  return (
    <div className="bg-[#3e3e3e] pt-[60px] text-white">
      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center relative"
        style={{
          // backgroundImage: 'url("https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
          backgroundImage: 'url("images/vrindavan-2.jpg")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-[#f5c96a]">Discover</span> Your Dream Home
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl text-gray-300">
              Exceptional properties in prime locations. Your journey to the perfect home starts here.
            </p>
            <motion.button 
              className="inline-flex items-center bg-[#f5c96a] text-[#3e3e3e] px-8 py-4 rounded-lg hover:bg-opacity-90 transition-colors shadow-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Properties
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#2a2a2a] to-[#3e3e3e] overflow-hidden">
      {/* Floating Blobs for Aesthetic Background */}
      <FloatingBlob className="top-10 left-10 w-40 h-40 rounded-full" color="#f5c96a" />
      <FloatingBlob className="bottom-20 right-10 w-64 h-64 rounded-full" color="#f5c96a" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Left Content */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-white">
              About<span className="text-[#f5c96a]"> Shah Real Estate</span> 
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              With over two decades of experience in the real estate market, we've helped thousands of families find their perfect home. Our commitment to excellence and customer satisfaction sets us apart.
            </p>
            <ul className="space-y-4">
              {[
                "Professional and experienced team",
                "Extensive property portfolio",
                "Personalized service approach",
                "Transparent dealings"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center text-gray-300"
                  variants={fadeInUp}
                >
                  <Star className="h-6 w-6 text-[#f5c96a] mr-3" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Image with Animated Effect */}
          <motion.div 
            className="relative h-auto sm:h-[500px] overflow-hidden rounded-lg shadow-2xl"
            variants={fadeInUp}
          >
            <motion.img 
              src="images/vrindavan-4.jpg" 
              alt="Modern building"
              className="h-full w-full object-fit rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>

      
       
      {/* Featured properties */}
      <section className="relative py-20 bg-[#2e2e2e] overflow-hidden">
      {/* Floating SVG Background Elements */}
      <motion.div
        className="absolute top-10 left-5 sm:left-16 w-20 h-20 bg-[#f5c96a] rounded-lg opacity-30"
        variants={floatingAnimation}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-[#f5c96a] rounded-full opacity-20 blur-xl"
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

      {/* Testimonials Section with Slider */}
      <section className="py-20 bg-[#3e3e3e] relative overflow-hidden"> {/* Added relative for positioning blobs */}
      {/* Blob Animations */}
      <motion.div
        className="sm:absolute sm:block hidden w-64 h-64 bg-[#14c2b0] rounded-full blur-[150px] opacity-10 top-0 left-0 -translate-x-1/2 -translate-y-1/4 animate-blob" // Adjusted positioning and animation
        variants={fadeInDown}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }} // Smooth animation
      />
       <motion.div
        className="absolute w-48 h-48 bg-[#c2b614] sm:bg-[#549952] rounded-full blur-[70px] opacity-20 bottom-0 right-0 translate-x-1/4 translate-y-1/4 animate-blob" // Adjusted positioning and animation
        variants={fadeInDown}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }} // Smooth animation
      />
        <motion.div
        className="absolute w-56 h-56 bg-[#14c2b0] sm:bg-[#f56ac7] rounded-full blur-[80px] opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-blob" // Adjusted positioning and animation
        variants={fadeInDown}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }} // Smooth animation
      />

      <div className="max-w-7xl mx-auto px-6 z-10"> {/* Added z-index to bring content forward */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-[#f5c96a]">Client</span> Testimonials
          </h2>
          <p className="text-gray-300">What our satisfied clients say about us</p>
        </motion.div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="testimonial-slider"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-[#2e2e2e] p-8 rounded-xl shadow-lg h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="inline-block h-5 w-5 text-[#f5c96a] mr-1" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">{testimonial.text}</p>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-[#f5c96a] text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
      

      {/* Request Callback */}
      <section className="py-20 bg-[#2e2e2e] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid"></div> {/* Grid background */}

      <div className="max-w-7xl mx-auto px-6 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className='z-50'
          >
            {/* ... (form content remains the same) */}
            <h2 className="text-4xl font-bold mb-6 text-white">
              <span className="text-[#f5c96a]">Request a</span> Callback
            </h2>
            <p className="text-gray-300 mb-8">
              Leave your details and we'll get back to you within 24 hours
            </p>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-[#3e3e3e] border border-gray-600 focus:border-[#f5c96a] focus:outline-none text-white"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-[#3e3e3e] border border-gray-600 focus:border-[#f5c96a] focus:outline-none text-white"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg bg-[#3e3e3e] border border-gray-600 focus:border-[#f5c96a] focus:outline-none text-white"
                />
              </div>
              <motion.button
                className="w-full bg-[#f5c96a] text-[#3e3e3e] py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Request Callback
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            className="relative"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-4">
              {/* ... (info boxes content remains the same) */}
              <div className="space-y-4">
                <div className="bg-[#3e3e3e] p-6 rounded-lg">
                  <Clock className="h-8 w-8 text-[#f5c96a] mb-4" />
                  <h3 className="font-semibold mb-2 text-white">Quick Response</h3>
                  <p className="text-gray-300 text-sm">24/7 dedicated support</p>
                </div>
                <div className="bg-[#3e3e3e] p-6 rounded-lg">
                  <MessageSquare className="h-8 w-8 text-[#f5c96a] mb-4" />
                  <h3 className="font-semibold mb-2 text-white">Expert Advice</h3>
                  <p className="text-gray-300 text-sm">Professional guidance</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-[#3e3e3e] p-6 rounded-lg">
                  <Users className="h-8 w-8 text-[#f5c96a] mb-4" />
                  <h3 className="font-semibold mb-2 text-white">Dedicated Team</h3>
                  <p className="text-gray-300 text-sm">Personal assistance</p>
                </div>
                <div className="bg-[#3e3e3e] p-6 rounded-lg">
                  <Building className="h-8 w-8 text-[#f5c96a] mb-4" />
                  <h3 className="font-semibold mb-2 text-white">Property Tours</h3>
                  <p className="text-gray-300 text-sm">Virtual & in-person</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#2e2e2e] relative overflow-hidden"> {/* Darker background */}
      <div className="max-w-7xl mx-auto px-6 z-10"> {/* z-index for content */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-white"> {/* White text */}
            <span className="text-[#f5c96a]">Get in</span> Touch
          </h2>
          <p className="text-gray-400">We're here to help you with any questions</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Phone,
              title: "Call Us",
              info: "+91 8343832712",
              subInfo: "Mon-Fri 9am-6pm",
            },
            {
              icon: MessageSquare,
              title: "Email Us",
              info: "realestate@email.com",
              subInfo: "24/7 Online Support",
            },
            {
              icon: MapPin,
              title: "Visit Us",
              info: "Sector 5",
              subInfo: "Kolkata, 700322",
            },
          ].map((contact, index) => (
            <motion.div
              key={index}
              className="text-center p-8 bg-gradient-to-r from-[#282828] to-[#202020] rounded-xl backdrop-blur-md hover:scale-105 transition-transform duration-300" // Gradient background, blur, hover effect
              // variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
             
            >
              <contact.icon className="h-12 w-12 text-[#f5c96a] mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-white">{contact.title}</h3> {/* White text */}
              <p className="text-[#f5c96a] font-medium mb-2">{contact.info}</p>
              <p className="text-gray-400">{contact.subInfo}</p> {/* Lighter gray text */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}

export default Home;