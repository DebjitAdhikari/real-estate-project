import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  ArrowRight, 
  Heart, 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Phone,
  Calendar,
  Check,
  ChevronLeft,
  ChevronRight,
  Download,
  Share2,
  Mail
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const PropertyDetails = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [showAllAmenities, setShowAllAmenities] = useState(false);
  const topref=useRef(null)
  const images = [
    // "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    // "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    // "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
    "/images/vrindavan-1.jpg", 
    "/images/vrindavan-3.jpg", 
    "/images/vrindavan-2.jpg", 
    "/images/vrindavan-4.jpg", 

  ];

  const amenities = [
    "24 Hours Water Supply",
    "24x7 Security Service",
    "Lift Facilities (2 Lifts)",
    "Stairs (3 Nos.)",
    "CCTV",
    "Generator",
    "Community Hall", 
    "Temple"
    // "Swimming Pool",
    // "Gym",
    // "Tennis Court",
    // "Children's Play Area",
    // "24/7 Security",
    // "Clubhouse",
    // "Jogging Track",
    // "Landscaped Gardens",
    // "Indoor Games",
    // "Meditation Center",
    // "Basketball Court",
    // "Library"
  ];

  const specifications = {
    "Property Type": "Luxury Villa",
    "Status": "Ready to Move",
    "Floor": "Ground + 2",
    "Total Units": "50",
    "Plot Area": "3500 sq.ft.",
    "Construction Status": "Completed",
    "Possession": "Immediate",
    "Total Towers": "N/A",
    "Launch Date": "Jan 2023",
    "Property Age": "New Construction"
  };

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + images.length) % images.length);
  };
 useEffect(()=>{
  topref.current?.scrollIntoView({behavior:"smooth"})
 },[])
  return (
    <div ref={topref} className="bg-[#3e3e3e] mt-2 pt-[50px] sm:mt-10 text-white min-h-screen">
      {/* Header Section */}
      <motion.div 
        className="relative h-[60vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0">
          <img 
            src={images[activeImage]} 
            alt="Property" 
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
        
        {/* Image Navigation */}
        <button 
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full hover:bg-[#f5c96a] transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button 
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full hover:bg-[#f5c96a] transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Thumbnail Navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={`w-3 h-3 rounded-full ${
                activeImage === index ? 'bg-[#f5c96a]' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* Quick Actions */}
      <div className="bg-[#2e2e2e] py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center bg- space-x-6">
            <motion.button 
              className="flex items-center bg-transparent space-x-2 hover:text-[#f5c96a]"
              whileHover={{ scale: 1.05 }}
            >
              <Share2 className="h-5 w-5" />
              <span>Share</span>
            </motion.button>
            {/* <motion.button 
              className="flex items-center space-x-2 hover:text-[#f5c96a]"
              whileHover={{ scale: 1.05 }}
            >
              <Download className="h-5 w-5" />
              <span>Download Brochure</span>
            </motion.button> */}
          </div>
          <motion.button 
            className="bg-[#f5c96a] text-[#3e3e3e] px-6 py-2 rounded-lg font-semibold flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="h-5 w-5" />
            <span>Contact Agent</span>
          </motion.button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* Property Title Section */}
            <motion.div 
              className="mb-8"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              <div className="flex items-center space-x-4 mb-2">
                <MapPin className="h-5 w-5 text-[#f5c96a]" />
                <span className="text-gray-300">Kolkata, India</span>
              </div>
              <h1 className="text-4xl font-bold mb-4">Vrindavan Garden</h1>
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-[#f5c96a]">₹2,500,000</span>
                <span className="text-gray-300">(₹781/sq.ft.)</span>
              </div>
            </motion.div>

            {/* Key Features */}
            <motion.div 
              className="grid grid-cols-3 gap-4 mb-12 bg-[#2e2e2e] p-6 rounded-xl"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              <div className="text-center">
                <Bed className="h-8 w-8 text-[#f5c96a] mx-auto mb-2" />
                <div className="font-bold text-xl">4</div>
                <div className="text-gray-300">Bedrooms</div>
              </div>
              <div className="text-center">
                <Bath className="h-8 w-8 text-[#f5c96a] mx-auto mb-2" />
                <div className="font-bold text-xl">3.5</div>
                <div className="text-gray-300">Bathrooms</div>
              </div>
              <div className="text-center">
                <Square className="h-8 w-8 text-[#f5c96a] mx-auto mb-2" />
                <div className="font-bold text-xl">3,200</div>
                <div className="text-gray-300">Sq.ft.</div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div 
              className="mb-12"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p className="text-gray-300 leading-relaxed">
                Experience luxury living at its finest in this stunning beachfront villa. 
                This exclusive property offers breathtaking ocean views and has been 
                meticulously designed to provide the perfect blend of comfort and elegance. 
                The villa features high-end finishes throughout, including marble flooring, 
                designer kitchen with premium appliances, and floor-to-ceiling windows that 
                flood the space with natural light.
              </p>
            </motion.div>

            {/* Specifications */}
            <motion.div 
              className="mb-12"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              <h2 className="text-2xl font-bold mb-4">Specifications</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 bg-[#2e2e2e] p-6 rounded-xl">
                {Object.entries(specifications).map(([key, value]) => (
                  <div key={key} className="space-y-1">
                    <div className="text-gray-300">{key}</div>
                    <div className="font-semibold">{value}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Amenities */}
            <motion.div 
              className="mb-12"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              <h2 className="text-2xl font-bold mb-4">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-[#2e2e2e] p-6 rounded-xl">
                {amenities.slice(0, showAllAmenities ? undefined : 6).map((amenity) => (
                  <div key={amenity} className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-[#f5c96a]" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
              {amenities.length > 6 && (
                <button
                  onClick={() => setShowAllAmenities(!showAllAmenities)}
                  className="mt-4 bg-transparent text-[#f5c96a] hover:underline"
                >
                  {showAllAmenities ? 'Show Less' : 'Show All Amenities'}
                </button>
              )}
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-1">
            <motion.div 
              className="bg-[#2e2e2e] p-6 rounded-xl sticky top-4"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              <h3 className="text-xl font-bold mb-6">Schedule a Viewing</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-[#3e3e3e] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#f5c96a]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-[#3e3e3e] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#f5c96a]"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full bg-[#3e3e3e] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#f5c96a]"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Preferred Date</label>
                  <input 
                    type="date" 
                    className="w-full bg-[#3e3e3e] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#f5c96a]"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea 
                    className="w-full bg-[#3e3e3e] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#f5c96a] h-32"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <motion.button 
                  type="submit"
                  className="w-full bg-[#f5c96a] text-[#3e3e3e] py-3 rounded-lg font-semibold flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Schedule Viewing
                  <Calendar className="ml-2 h-5 w-5" />
                </motion.button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-600">
                <button className="w-full bg-transparent border-2 border-[#f5c96a] text-[#f5c96a] py-3 rounded-lg font-semibold flex items-center justify-center mb-4">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Agent
                </button>
                <button className="w-full bg-transparent border-2 border-[#f5c96a] text-[#f5c96a] py-3 rounded-lg font-semibold flex items-center justify-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Agent
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;