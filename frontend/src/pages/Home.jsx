import React from "react";
import { Link } from "react-router-dom";
import { GiCandleFlame, GiSparkles } from "react-icons/gi";
import { FiArrowRight } from "react-icons/fi";
import MN from "../assets/MidnightNoir.webp";
import VE from "../assets/VelvetEmber.avif";
import GT from "../assets/GildedTwilight.avif";

const HomePage = () => {
  // Sample product data
  const featuredCollections = [
    {
      id: 1,
      name: "Midnight Noir",
      description: "Smoky oud & vanilla",
      price: "$48",
      image: `${MN}`,
    },
    {
      id: 2,
      name: "Velvet Ember",
      description: "Amber & sandalwood",
      price: "$52",
      image: `${VE}`,
    },
    {
      id: 3,
      name: "Gilded Twilight",
      description: "Fig & tonka bean",
      price: "$56",
      image: `${GT}`,
    },
  ];

  const testimonials = [
    {
      quote: "The scent lingers like a memory. Absolutely divine.",
      author: "— Sophia R.",
    },
    {
      quote: "My home feels like a five-star hotel now.",
      author: "— Marcus T.",
    },
  ];

  return (
    <div className="bg-black text-gray-100 min-h-screen">
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Glow (Candle Light Effect) */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/10 to-black z-0" />
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-amber-400/10 rounded-full filter blur-3xl -translate-x-1/2" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <GiCandleFlame className="mx-auto text-amber-400 text-5xl mb-6 animate-pulse" />
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400">
            Illuminate the Darkness
          </h1>
          <p className="font-montserrat text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Hand-poured luxury candles crafted for those who seek elegance in every flame.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center px-8 py-3 bg-amber-900/70 hover:bg-amber-800/80 border border-amber-700/50 text-amber-100 font-montserrat uppercase tracking-wider transition-colors"
          >
            Explore <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      {/* ===== CURATED COLLECTIONS ===== */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-amber-900/20">
        <div className="text-center mb-16">
          <GiSparkles className="mx-auto text-amber-400 text-3xl mb-4" />
          <h2 className="font-playfair text-4xl text-amber-200 mb-4">Curated for Connoisseurs</h2>
          <p className="font-montserrat text-gray-400 max-w-2xl mx-auto">
            Each candle is a masterpiece, blending rare essences with unparalleled craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featuredCollections.map((item) => (
            <div key={item.id} className="group relative overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <h3 className="font-playfair text-2xl text-amber-100 mb-1">{item.name}</h3>
                <p className="font-montserrat text-gray-300 text-sm mb-3">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-montserrat text-amber-400">{item.price}</span>
                  <Link
                    to={`/product/${item.id}`}
                    className="text-amber-100 hover:text-amber-300 transition-colors flex items-center"
                  >
                    View <FiArrowRight className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900/50 border-y border-amber-900/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-3xl text-center text-amber-200 mb-12">
            Words from Our Patrons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 border border-amber-900/30 bg-gradient-to-br from-gray-900/50 to-gray-900/20 backdrop-blur-sm"
              >
                <p className="font-montserrat italic text-gray-300 mb-4">"{testimonial.quote}"</p>
                <p className="font-montserrat text-amber-400 text-sm">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SUBSCRIPTION CTA ===== */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <GiCandleFlame className="mx-auto text-amber-400 text-4xl mb-4" />
          <h2 className="font-playfair text-4xl text-amber-200 mb-4">Join the Inner Circle</h2>
          <p className="font-montserrat text-gray-400">
            Receive seasonal exclusives and early access to limited editions.
          </p>
        </div>

        <form className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email"
              className="flex-grow px-4 py-3 bg-gray-900/50 border border-amber-900/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-amber-900/70 hover:bg-amber-800/80 border border-amber-700/50 text-amber-100 font-montserrat uppercase tracking-wider transition-colors"
            >
              Subscribe
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default HomePage;