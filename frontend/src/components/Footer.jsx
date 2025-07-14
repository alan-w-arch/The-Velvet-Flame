import React from "react";
import { FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";
import { GiCandleFlame } from "react-icons/gi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-amber-900/20 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4">
            <div className="flex items-center">
              <GiCandleFlame className="text-amber-400 text-2xl mr-2" />
              <span className="font-playfair text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400">
                THE VELVET FLAME
              </span>
            </div>
            <p className="font-montserrat text-gray-400 text-sm">
              Luxury scented candles crafted with passion and precision.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/the_velvet_flames?igsh=MWkwODdwdXh4aG9qbw==" target="_blank" className="text-gray-400 hover:text-amber-300 transition-colors">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">
                <FaPinterest size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-amber-200 text-lg mb-4">Explore</h3>
            <ul className="space-y-2 font-montserrat text-gray-400">
              <li><Link to="/shop" className="hover:text-amber-300 transition-colors">Shop</Link></li>
              {/*<li><Link to="/collections" className="hover:text-amber-300 transition-colors">Collections</Link></li>*/}
              <li><Link to="/about" className="hover:text-amber-300 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-amber-300 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-playfair text-amber-200 text-lg mb-4">Support</h3>
            <ul className="space-y-2 font-montserrat text-gray-400">
              <li><Link to="/contact" className="hover:text-amber-300 transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="hover:text-amber-300 transition-colors">Shipping</Link></li>
              <li><Link to="/contact" className="hover:text-amber-300 transition-colors">Returns</Link></li>
              <li><Link to="/contact" className="hover:text-amber-300 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-amber-200 text-lg mb-4">Contact Us</h3>
            <div className="space-y-2 font-montserrat text-gray-400">
              <a 
                href="mailto:contact@thevelvetflame.com" 
                className="block hover:text-amber-300 transition-colors"
              >
                contact@thevelvetflame.com
              </a>
              <p>+91 9815759234</p>
              <p>Lovely Proffessional University</p>
              <p>Phagwara, Punjab</p>
            </div>
          </div>
        </div>

        {/* Copyright Line */}
        <div className="border-t border-amber-900/20 pt-8 text-center">
          <p className="font-montserrat text-gray-500 text-sm">
            © {new Date().getFullYear()} THE VELVET FLAME. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;