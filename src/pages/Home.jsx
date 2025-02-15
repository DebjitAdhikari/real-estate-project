import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Home as HomeIcon, Building, Users, Phone, Star, MessageSquare, MapPin, Clock } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
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

function Home() {
  return (
    <div className="bg-[#3e3e3e] text-white">
      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-[#3e3e3e] bg-opacity-60"></div>
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
      <section className="py-20 bg-[#3e3e3e]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-[#f5c96a]">About</span> Our Agency
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
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
                    <Star className="h-5 w-5 text-[#f5c96a] mr-3" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              className="relative h-[500px]"
              variants={fadeInUp}
            >
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Modern building"
                className="rounded-lg shadow-2xl object-cover h-full w-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-[#2e2e2e]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-[#f5c96a]">Featured</span> Properties
            </h2>
            <p className="text-gray-300">Discover our hand-picked selection of premium properties</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "Modern Villa",
                location: "Beverly Hills",
                price: "$5,900,000"
              },
              {
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "Luxury Penthouse",
                location: "Manhattan",
                price: "$3,200,000"
              },
              {
                image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "Seaside Mansion",
                location: "Malibu",
                price: "$8,500,000"
              }
            ].map((property, index) => (
              <motion.div 
                key={index}
                className="group relative overflow-hidden rounded-xl"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-[400px]">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 p-6 w-full">
                    <h3 className="text-2xl font-bold mb-2">{property.title}</h3>
                    <div className="flex items-center text-gray-300 mb-2">
                      <MapPin className="h-4 w-4 mr-2" />
                      {property.location}
                    </div>
                    <p className="text-[#f5c96a] text-xl font-bold">{property.price}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
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
              <span className="text-[#f5c96a]">Client</span> Testimonials
            </h2>
            <p className="text-gray-300">What our satisfied clients say about us</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                name: "Sarah Johnson",
                role: "Homeowner",
                text: "The team went above and beyond to help us find our dream home. Their expertise and dedication are unmatched."
              },
              {
                name: "Michael Chen",
                role: "Property Investor",
                text: "Professional, knowledgeable, and always available. They made the investment process smooth and profitable."
              },
              {
                name: "Emma Davis",
                role: "First-time Buyer",
                text: "As a first-time buyer, I appreciated their patience and guidance throughout the entire process."
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-[#2e2e2e] p-8 rounded-xl shadow-lg"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <div className="mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="inline-block h-5 w-5 text-[#f5c96a] mr-1" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="ml-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-[#f5c96a] text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      

      {/* Request Callback */}
      <section className="py-20 bg-[#2e2e2e]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
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
                    className="w-full px-4 py-3 rounded-lg bg-[#3e3e3e] border border-gray-600 focus:border-[#f5c96a] focus:outline-none"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg bg-[#3e3e3e] border border-gray-600 focus:border-[#f5c96a] focus:outline-none"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg bg-[#3e3e3e] border border-gray-600 focus:border-[#f5c96a] focus:outline-none"
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
                <div className="space-y-4">
                  <div className="bg-[#3e3e3e] p-6 rounded-lg">
                    <Clock className="h-8 w-8 text-[#f5c96a] mb-4" />
                    <h3 className="font-semibold mb-2">Quick Response</h3>
                    <p className="text-gray-300 text-sm">24/7 dedicated support</p>
                  </div>
                  <div className="bg-[#3e3e3e] p-6 rounded-lg">
                    <MessageSquare className="h-8 w-8 text-[#f5c96a] mb-4" />
                    <h3 className="font-semibold mb-2">Expert Advice</h3>
                    <p className="text-gray-300 text-sm">Professional guidance</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-[#3e3e3e] p-6 rounded-lg">
                    <Users className="h-8 w-8 text-[#f5c96a] mb-4" />
                    <h3 className="font-semibold mb-2">Dedicated Team</h3>
                    <p className="text-gray-300 text-sm">Personal assistance</p>
                  </div>
                  <div className="bg-[#3e3e3e] p-6 rounded-lg">
                    <Building className="h-8 w-8 text-[#f5c96a] mb-4" />
                    <h3 className="font-semibold mb-2">Property Tours</h3>
                    <p className="text-gray-300 text-sm">Virtual & in-person</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
              <span className="text-[#f5c96a]">Get in</span> Touch
            </h2>
            <p className="text-gray-300">We're here to help you with any questions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Phone,
                title: "Call Us",
                info: "+1 (555) 123-4567",
                subInfo: "Mon-Fri 9am-6pm"
              },
              {
                icon: MessageSquare,
                title: "Email Us",
                info: "info@realestate.com",
                subInfo: "24/7 Online Support"
              },
              {
                icon: MapPin,
                title: "Visit Us",
                info: "123 Property Lane",
                subInfo: "New York, NY 10001"
              }
            ].map((contact, index) => (
              <motion.div 
                key={index}
                className="text-center p-8 bg-[#2e2e2e] rounded-xl"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <contact.icon className="h-12 w-12 text-[#f5c96a] mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">{contact.title}</h3>
                <p className="text-[#f5c96a] font-medium mb-2">{contact.info}</p>
                <p className="text-gray-300">{contact.subInfo}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;