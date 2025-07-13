import React from "react";
import { useCart } from "../context/CartContext";
import { FiTrash2, FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  // Calculate total price
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-black text-gray-100 min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-playfair text-4xl text-amber-200 mb-8 text-center">
          Your Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <FiShoppingBag className="mx-auto text-amber-400 text-5xl mb-6" />
            <p className="font-montserrat text-gray-400 text-lg mb-6">
              Your cart is empty.
            </p>
            <Link
              to="/shop"
              className="px-6 py-3 bg-amber-900/70 hover:bg-amber-800/80 border border-amber-700/50 text-amber-100 font-montserrat uppercase tracking-wider transition-colors inline-block"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Cart Items List */}
            <div className="divide-y divide-amber-900/20">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="py-6 flex flex-col md:flex-row gap-6"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 object-cover rounded-sm border border-amber-900/20"
                  />
                  <div className="flex-grow">
                    <h3 className="font-playfair text-xl text-amber-200 mb-2">
                      {item.name}
                    </h3>
                    <p className="font-montserrat text-gray-400 text-sm mb-4">
                      {item.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-montserrat text-amber-400">
                        ${item.price}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="flex items-center text-gray-400 hover:text-amber-300 transition-colors"
                      >
                        <FiTrash2 className="mr-2" />
                        <span className="font-montserrat text-sm">Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="border-t border-amber-900/20 pt-8">
              <div className="flex justify-between items-center mb-6">
                <span className="font-montserrat text-gray-400 uppercase tracking-wider">
                  Subtotal
                </span>
                <span className="font-playfair text-2xl text-amber-200">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/shop"
                  className="px-6 py-3 border border-amber-700/50 text-amber-200 font-montserrat uppercase tracking-wider text-center transition-colors hover:bg-amber-900/20"
                >
                  Continue Shopping
                </Link>
                <button className="px-6 py-3 bg-amber-900/70 hover:bg-amber-800/80 border border-amber-700/50 text-amber-100 font-montserrat uppercase tracking-wider transition-colors">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;