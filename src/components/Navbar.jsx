import React, { useState } from 'react';
import { Menu, X, Home as HomeIcon, Building, Users, Phone } from 'lucide-react';
import 'animate.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#252525] text-white py-4 shadow-lg fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Logo" className="h-10 w-10" />
          <a href="/" className="text-2xl font-bold text-[#f5c96a]">DreamProperty</a>
        </div>
        <button 
          className="md:hidden text-[#f5c96a]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
        <ul className={`md:flex space-x-6 hidden text-lg`}>
          <li><a href="/" className="hover:text-[#f5c96a] transition-all">Home</a></li>
          <li><a href="/about" className="hover:text-[#f5c96a] transition-all">About</a></li>
          <li><a href="/properties" className="hover:text-[#f5c96a] transition-all">Properties</a></li>
          <li><a href="/contact" className="hover:text-[#f5c96a] transition-all">Contact</a></li>
        </ul>
      </div>
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-[#252525] text-lg py-4 space-y-4">
          <li><a href="/" className="hover:text-[#f5c96a] transition-all">Home</a></li>
          <li><a href="/about" className="hover:text-[#f5c96a] transition-all">About</a></li>
          <li><a href="/properties" className="hover:text-[#f5c96a] transition-all">Properties</a></li>
          <li><a href="/contact" className="hover:text-[#f5c96a] transition-all">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};
export default Navbar