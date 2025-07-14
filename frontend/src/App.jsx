import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from "./pages/Cart";
import './App.css'
import { CartProvider } from "./context/CartContext";
import Dashboard from "./pages/Dashboard"; // Assuming you have a Dashboard page

function App() {
  return (
    <CartProvider>    
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/products" element={<Dashboard />} />
          <Route path="/admin/orders" element={<Dashboard />} />
        </Routes>
        <Footer/>
      </Router>
    </CartProvider>

  )
}

export default App
