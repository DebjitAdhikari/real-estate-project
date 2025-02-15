import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Building, ArrowRight } from 'lucide-react';

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

function ContactPage() {
  return (
    <div className="bg-[#3e3e3e] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
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
              Let's <span className="text-[#f5c96a]">Connect</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              We're here to help you with all your real estate needs. Reach out to us today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-[#2e2e2e]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: Phone, title: "Call Us", info: "+1 (555) 123-4567", subInfo: "Mon-Fri, 9am-6pm" },
              { icon: Mail, title: "Email Us", info: "contact@luxestate.com", subInfo: "24/7 Support" },
              { icon: MapPin, title: "Visit Us", info: "123 Luxury Lane", subInfo: "New York, NY 10001" },
              { icon: Clock, title: "Business Hours", info: "Mon-Fri: 9am-6pm", subInfo: "Sat: 10am-4pm" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-[#3e3e3e] p-8 rounded-xl text-center"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <item.icon className="h-12 w-12 text-[#f5c96a] mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-300 mb-2">{item.info}</p>
                <p className="text-[#f5c96a] text-sm">{item.subInfo}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-[#3e3e3e]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Get in <span className="text-[#f5c96a]">Touch</span>
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Whether you're looking to buy, sell, or invest in property, our team of experts is here to help. 
                Fill out the form and we'll get back to you as soon as possible.
              </p>
              <div className="space-y-6">
                {[
                  { icon: MessageSquare, text: "Expert consultation on all real estate matters" },
                  { icon: Building, text: "Comprehensive property management services" },
                  { icon: Clock, text: "Quick response within 24 hours" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <feature.icon className="h-6 w-6 text-[#f5c96a] mr-4" />
                    <span className="text-gray-300">{feature.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <form className="bg-[#2e2e2e] p-8 rounded-xl shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                    <input 
                      type="text"
                      className="w-full px-4 py-3 bg-[#3e3e3e] rounded-lg focus:ring-2 focus:ring-[#f5c96a] focus:outline-none transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                    <input 
                      type="text"
                      className="w-full px-4 py-3 bg-[#3e3e3e] rounded-lg focus:ring-2 focus:ring-[#f5c96a] focus:outline-none transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input 
                    type="email"
                    className="w-full px-4 py-3 bg-[#3e3e3e] rounded-lg focus:ring-2 focus:ring-[#f5c96a] focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                  <input 
                    type="tel"
                    className="w-full px-4 py-3 bg-[#3e3e3e] rounded-lg focus:ring-2 focus:ring-[#f5c96a] focus:outline-none transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea 
                    className="w-full px-4 py-3 bg-[#3e3e3e] rounded-lg focus:ring-2 focus:ring-[#f5c96a] focus:outline-none transition-colors h-32 resize-none"
                    placeholder="Tell us about your real estate needs..."
                  ></textarea>
                </div>
                <motion.button 
                  className="w-full bg-[#f5c96a] text-[#3e3e3e] py-4 rounded-lg font-semibold flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
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
              Our <span className="text-[#f5c96a]">Location</span>
            </h2>
            <p className="text-gray-300">Visit our office in the heart of the city</p>
          </motion.div>

          <motion.div 
            className="relative h-[400px] rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645004000000!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#3e3e3e]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your <span className="text-[#f5c96a]">Journey</span>?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied clients who have found their dream properties through our expertise
            </p>
            <motion.button 
              className="inline-flex items-center bg-[#f5c96a] text-[#3e3e3e] px-8 py-4 rounded-lg hover:bg-opacity-90 transition-colors shadow-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;