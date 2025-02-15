import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Users, Building2, Trophy, Target, Clock, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

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

const testimonials = [
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
  },
  {
    name: "James Wilson",
    role: "Commercial Client",
    text: "Outstanding service in finding the perfect commercial property. Their market knowledge is exceptional."
  },
  {
    name: "Lisa Thompson",
    role: "Property Seller",
    text: "They helped me get the best price for my property. The marketing strategy was brilliant."
  }
];

function About() {
  return (
    <div className="bg-[#3e3e3e] text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
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
              <span className="text-[#f5c96a]">About</span> Our Journey
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Two decades of excellence in real estate, building trust and delivering dreams.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#2e2e2e]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-[#3e3e3e] p-8 rounded-xl"
              variants={fadeInUp}
            >
              <Target className="h-12 w-12 text-[#f5c96a] mb-6" />
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                To revolutionize the real estate experience through innovation, integrity, and exceptional service. We strive to make property dreams accessible to everyone while maintaining the highest standards of professionalism.
              </p>
            </motion.div>
            <motion.div 
              className="bg-[#3e3e3e] p-8 rounded-xl"
              variants={fadeInUp}
            >
              <Trophy className="h-12 w-12 text-[#f5c96a] mb-6" />
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                To be the most trusted name in real estate, known for our commitment to excellence, innovation, and customer satisfaction. We aim to shape the future of property investment and management.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Our <span className="text-[#f5c96a]">Journey</span>
            </h2>
            <p className="text-gray-300">The path that led us to excellence</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#f5c96a] opacity-20"></div>
            
            {[
              {
                year: "2003",
                title: "Foundation",
                description: "Started with a small office and big dreams"
              },
              {
                year: "2008",
                title: "Market Expansion",
                description: "Opened offices in major metropolitan areas"
              },
              {
                year: "2013",
                title: "Digital Revolution",
                description: "Launched innovative property technology solutions"
              },
              {
                year: "2018",
                title: "Global Recognition",
                description: "Awarded Best Real Estate Agency"
              },
              {
                year: "2023",
                title: "Sustainable Future",
                description: "Pioneering eco-friendly property development"
              }
            ].map((milestone, index) => (
              <motion.div 
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <div className="bg-[#2e2e2e] p-6 rounded-xl shadow-lg">
                    <div className="text-[#f5c96a] text-2xl font-bold mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-gray-300">{milestone.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#f5c96a] rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Our <span className="text-[#f5c96a]">Leadership</span> Team
            </h2>
            <p className="text-gray-300">Meet the experts behind our success</p>
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
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                name: "David Anderson",
                role: "CEO & Founder",
                description: "20+ years of real estate expertise"
              },
              {
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                name: "Sarah Martinez",
                role: "Head of Operations",
                description: "Former Fortune 500 executive"
              },
              {
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                name: "Michael Chang",
                role: "Chief Investment Officer",
                description: "15+ years in property investment"
              }
            ].map((member, index) => (
              <motion.div 
                key={index}
                className="bg-[#3e3e3e] rounded-xl overflow-hidden"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-[#f5c96a] mb-2">{member.role}</p>
                  <p className="text-gray-300">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section with Slider */}
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

      {/* Stats Section */}
      <section className="py-20 bg-[#3e3e3e]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: Building2, value: "1000+", label: "Properties Sold" },
              { icon: Users, value: "50,000+", label: "Happy Clients" },
              { icon: Award, value: "25+", label: "Industry Awards" },
              { icon: Star, value: "4.9", label: "Customer Rating" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                variants={fadeInUp}
              >
                <stat.icon className="h-12 w-12 text-[#f5c96a] mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
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
              Ready to <span className="text-[#f5c96a]">Work</span> With Us?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied clients who have found their dream properties through our expertise
            </p>
            <motion.button 
              className="inline-flex items-center bg-[#f5c96a] text-[#3e3e3e] px-8 py-4 rounded-lg hover:bg-opacity-90 transition-colors shadow-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;