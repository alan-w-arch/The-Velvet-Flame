import React, { useState } from "react";
import { FiFilter, FiShoppingCart, FiX, FiStar, FiChevronDown } from "react-icons/fi";
import { GiCandleFlame } from "react-icons/gi";
import { useCart } from "../context/CartContext";

const Shop = () => {
  const { addToCart } = useCart();
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Midnight Noir",
      category: "Woody",
      price: 48,
      rating: 4.8,
      image: "https://via.placeholder.com/300x400/111827/EDEADE?text=Midnight+Noir",
      description: "Smoky oud & vanilla blend for a mysterious ambiance.",
      inStock: true,
    },
    {
      id: 2,
      name: "Velvet Ember",
      category: "Amber",
      price: 52,
      rating: 4.9,
      image: "https://via.placeholder.com/300x400/111827/EDEADE?text=Velvet+Ember",
      description: "Warm amber and sandalwood for a cozy glow.",
      inStock: true,
    },
    {
      id: 3,
      name: "Gilded Twilight",
      category: "Floral",
      price: 56,
      rating: 4.7,
      image: "https://via.placeholder.com/300x400/111827/EDEADE?text=Gilded+Twilight",
      description: "Fig and tonka bean for an elegant evening.",
      inStock: false,
    },
    {
      id: 4,
      name: "Royal Tobacco",
      category: "Woody",
      price: 54,
      rating: 4.6,
      image: "https://via.placeholder.com/300x400/111827/EDEADE?text=Royal+Tobacco",
      description: "Rich tobacco leaf and cedarwood for depth.",
      inStock: true,
    },
    {
      id: 5,
      name: "Black Orchid",
      category: "Floral",
      price: 58,
      rating: 4.9,
      image: "https://via.placeholder.com/300x400/111827/EDEADE?text=Black+Orchid",
      description: "Exotic orchid and patchouli for a bold statement.",
      inStock: true,
    },
    {
      id: 6,
      name: "Amber Noir",
      category: "Amber",
      price: 50,
      rating: 4.5,
      image: "https://via.placeholder.com/300x400/111827/EDEADE?text=Amber+Noir",
      description: "Deep amber and vanilla for a sensual glow.",
      inStock: true,
    },
  ];

  // State for filters/sorting
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured")
  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesStock = product.inStock;
    return matchesCategory && matchesStock;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0; // Default: featured (original order)
  });


  return (
    <div className="bg-black text-gray-100 min-h-screen relative">
      {/* ===== HERO SECTION ===== */}
      <section className="relative py-32 px-6 flex items-center justify-center bg-gradient-to-b from-amber-900/10 to-black border-b border-amber-900/20">
        <div className="text-center max-w-4xl mx-auto">
          <GiCandleFlame className="mx-auto text-amber-400 text-5xl mb-6" />
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400">
            Shop Luxury Candles
          </h1>
          <p className="font-montserrat text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Handcrafted scents for the discerning soul.
          </p>
        </div>
      </section>

      {/* ===== FILTER & SORT BAR ===== */}
      <section className="py-6 px-6 border-b border-amber-900/20 sticky top-0 bg-black z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Filter Button */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center text-amber-200 hover:text-amber-300 transition-colors"
          >
            <FiFilter className="mr-2" />
            <span className="font-montserrat uppercase tracking-wider text-sm">Filter</span>
          </button>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-900/50 border border-amber-900/30 text-gray-100 font-montserrat px-4 py-2 pr-8 focus:outline-none focus:ring-1 focus:ring-amber-500 appearance-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
            <FiChevronDown className="absolute right-3 top-3 text-amber-400 pointer-events-none" />
          </div>
        </div>

        {/* Filter Menu */}
        {isFilterOpen && (
          <div className="absolute left-0 right-0 mt-2 bg-gray-900/95 backdrop-blur-sm border border-amber-900/30 p-6 z-20">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-playfair text-amber-200 text-xl">Filters</h3>
                <button onClick={() => setIsFilterOpen(false)} className="text-gray-400 hover:text-amber-300">
                  <FiX size={20} />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-montserrat text-amber-300 mb-4 uppercase text-sm tracking-wider">Category</h4>
                  {["All", "Woody", "Amber", "Floral"].map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsFilterOpen(false);
                      }}
                      className={`block w-full text-left py-2 px-4 mb-2 font-montserrat text-sm ${
                        selectedCategory === category
                          ? "bg-amber-900/30 text-amber-200"
                          : "text-gray-400 hover:text-amber-300"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                <div>
                  <h4 className="font-montserrat text-amber-300 mb-4 uppercase text-sm tracking-wider">Price Range</h4>
                  <div className="space-y-2">
                    {["$0 - $50", "$50 - $100", "$100+"].map((range) => (
                      <button
                        key={range}
                        className="block w-full text-left py-2 px-4 font-montserrat text-sm text-gray-400 hover:text-amber-300"
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-montserrat text-amber-300 mb-4 uppercase text-sm tracking-wider">Availability</h4>
                  <button className="block w-full text-left py-2 px-4 font-montserrat text-sm text-gray-400 hover:text-amber-300">
                    In Stock Only
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ===== PRODUCT GRID ===== */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {sortedProducts.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden border border-amber-900/20 bg-gradient-to-br from-gray-900/30 to-gray-900/10 hover:border-amber-600/40 transition-all"
            >
              {/* Product Image */}
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-playfair text-xl text-amber-200">{product.name}</h3>
                  <span className="font-montserrat text-amber-400">${product.price}</span>
                </div>
                <p className="font-montserrat text-gray-400 text-sm mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-amber-400">
                    <FiStar className="mr-1" />
                    <span className="font-montserrat text-sm">{product.rating}</span>
                  </div>
                  <button
                    onClick={() => addToCart(product)}
                    className="flex items-center text-amber-200 hover:text-amber-300 transition-colors"
                  >
                    <FiShoppingCart className="mr-2" />
                    <span className="font-montserrat text-sm uppercase tracking-wider">Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Shop;