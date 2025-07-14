import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUser, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { GiCandleFlame } from "react-icons/gi";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdminDropdownOpen, setIsAdminDropdownOpen] = useState(false);
  const { cartItems } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  // Sample product data (replace with your actual data or API call)
  const products = [
    { id: 1, name: "Midnight Noir", category: "Woody" },
    { id: 2, name: "Velvet Ember", category: "Amber" },
    { id: 3, name: "Gilded Twilight", category: "Floral" },
  ];

  // Handle search input changes
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter products based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    const results = products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  }, [searchQuery]);

  // Handle search submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isSearchOpen && !e.target.closest(".search-container")) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSearchOpen]);

  return (
    <nav className="bg-black border-b border-amber-600/20 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center group">
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
                </NavLink>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-6 ml-6">
              {/* Search Icon and Dropdown */}
              <div className="relative search-container">
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="text-gray-400 hover:text-amber-300 transition-colors"
                >
                  <FaSearch size={16} />
                </button>
                
                {isSearchOpen && (
                  <div className="absolute right-0 mt-4 w-72 bg-gray-900/95 backdrop-blur-sm rounded-sm shadow-2xl border border-amber-900/50 py-2 z-50">
                    <form onSubmit={handleSearchSubmit} className="px-4">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder="Search candles..."
                        className="w-full bg-gray-800/70 border-b border-amber-900/30 text-gray-100 px-2 py-1 focus:outline-none focus:border-amber-400"
                        autoFocus
                      />
                    </form>
                    
                    {/* Search Results */}
                    {searchResults.length > 0 && (
                      <div className="mt-2 max-h-60 overflow-y-auto">
                        {searchResults.map((product) => (
                          <Link
                            key={product.id}
                            to={`/product/${product.id}`}
                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-amber-900/10 hover:text-amber-200"
                            onClick={() => {
                              setIsSearchOpen(false);
                              setSearchQuery("");
                            }}
                          >
                            {product.name} - {product.category}
                          </Link>
                        ))}
                      </div>
                    )}
                    
                    {searchQuery && searchResults.length === 0 && (
                      <div className="px-4 py-2 text-sm text-gray-400">
                        No products found
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Cart Icon */}
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

              {/* Admin Dropdown */}
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
                      Admin Dashboard
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
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