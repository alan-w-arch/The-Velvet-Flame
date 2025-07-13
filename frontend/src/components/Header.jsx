import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaUser, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { GiCandleFlame } from "react-icons/gi";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdminDropdownOpen, setIsAdminDropdownOpen] = useState(false);
  const { cartItems } = useCart();

  return (
    <nav className="bg-black border-b border-amber-600/20 shadow-xl">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Brand Logo (Luxury Serif + Flame Icon) */}
          <Link
            to="/"
            className="flex items-center group"
          >
            <GiCandleFlame className="text-amber-400 mr-2 text-2xl transition-transform group-hover:scale-110" />
            <span className="font-playfair text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400 tracking-wider">
              THE VELVET FLAME
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {/* Menu Links */}
            <div className="flex space-x-8">
              {["Home", "Shop", "About", "Contact"].map((item) => (
                <NavLink
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `relative px-1 py-2 text-sm font-thin font-montserrat uppercase tracking-wider ${
                      isActive ? "text-amber-300" : "text-gray-300 hover:text-amber-200"
                    }`
                  }
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-amber-400 transition-all group-hover:w-full" />
                </NavLink>
              ))}
            </div>

            {/* Icons (Gold Accents) */}
            <div className="flex items-center space-x-6 ml-6">
              <button className="text-gray-400 hover:text-amber-300 transition-colors">
                <FaSearch size={16} />
              </button>
              <Link
                to="/cart"
                className="relative text-gray-400 hover:text-amber-300 transition-colors"
              >
                <FaShoppingCart size={18} />
                {cartItems.length > 0 && (
                <span className="absolute -top-3 -right-3 bg-amber-300/30 hover:bg-amber-300 hover:text-black text-gray-300 text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                  {cartItems.length}
                </span>
                )}
              </Link>
              
              {/* Admin Dropdown (Velvet-Inspired) */}
              <div className="relative">
                <button
                  onClick={() => setIsAdminDropdownOpen(!isAdminDropdownOpen)}
                  className="flex items-center text-gray-400 hover:text-amber-300 transition-colors"
                >
                  <FaUser size={16} className="mr-1" />
                  <span className="text-xs font-montserrat">Account</span>
                </button>
                {isAdminDropdownOpen && (
                  <div className="absolute right-0 mt-4 w-56 bg-gray-900/95 backdrop-blur-sm rounded-sm shadow-2xl border border-amber-900/50 py-2 z-50">
                    <Link
                      to="/admin/dashboard"
                      className="block px-4 py-3 text-sm font-light text-gray-300 hover:bg-amber-900/10 hover:text-amber-200 border-b border-amber-900/30"
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/admin/products"
                      className="block px-4 py-3 text-sm font-light text-gray-300 hover:bg-amber-900/10 hover:text-amber-200 border-b border-amber-900/30"
                    >
                      Product Manager
                    </Link>
                    <Link
                      to="/admin/orders"
                      className="block px-4 py-3 text-sm font-light text-gray-300 hover:bg-amber-900/10 hover:text-amber-200"
                    >
                      Customer Orders
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button (Gold Outline) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md border border-amber-600/30 text-amber-400 focus:outline-none"
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dark Velvet Background) */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm border-t border-amber-900/30">
          <div className="px-4 pt-4 pb-6 space-y-4">
            {["Home", "Shop", "About", "Contact"].map((item) => (
              <NavLink
                key={item}
                to={`/${item.toLowerCase()}`}
                className="block py-3 text-gray-300 hover:text-amber-200 font-montserrat uppercase tracking-wider border-b border-amber-900/20"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </NavLink>
            ))}
            <div className="pt-4">
              <Link
                to="/admin/dashboard"
                className="block py-3 text-amber-300 font-montserrat text-sm uppercase tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                Admin Dashboard
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;