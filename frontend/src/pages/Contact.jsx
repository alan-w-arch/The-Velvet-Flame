import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaCrown, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { GiCandleFlame } from "react-icons/gi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [activeAccordion, setActiveAccordion] = useState(null);

  const owners = [
    // ... (keep the existing owners data from previous code)
  ];

  const faqs = [
    {
      question: "What are your shipping policies?",
      answer: "We offer free standard shipping on orders over $50. Delivery typically takes 3-5 business days.",
    },
    {
      question: "How do I track my order?",
      answer: "Once shipped, you’ll receive a tracking number via email. Use our Order Tracker for real-time updates.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes! We ship globally. Additional customs fees may apply depending on your location.",
    },
    {
      question: "What’s your return policy?",
      answer: "Unused candles can be returned within 30 days. Contact us at returns@thevelvetflame.com to initiate.",
    },
  ];

  const handleAccordionToggle = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here (e.g., API call)
  };

  return (
    <div className="bg-black text-gray-100 min-h-screen">
      {/* ... (keep existing hero section and owners profiles) */}

      {/* ===== CONTACT FORM & FAQ ===== */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-amber-900/20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="p-8 border border-amber-900/30 bg-gradient-to-br from-gray-900/50 to-gray-900/20 rounded-sm">
            <h2 className="font-playfair text-3xl text-amber-200 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-montserrat text-amber-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-amber-900/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-montserrat text-amber-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-amber-900/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block font-montserrat text-amber-300 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-amber-900/30 text-gray-100 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    required
                  >
                    <option value="" disabled>Select a topic</option>
                    <option value="Order Inquiry">Order Inquiry</option>
                    <option value="Wholesale">Wholesale</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block font-montserrat text-amber-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-amber-900/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-amber-900/70 hover:bg-amber-800/80 border border-amber-700/50 text-amber-100 font-montserrat uppercase tracking-wider transition-colors"
                >
                  Submit Query
                </button>
              </div>
            </form>
          </div>

          {/* FAQ Accordion */}
          <div>
            <h2 className="font-playfair text-3xl text-amber-200 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-amber-900/30 bg-gray-900/20 rounded-sm overflow-hidden"
                >
                  <button
                    onClick={() => handleAccordionToggle(index)}
                    className="w-full flex justify-between items-center p-4 text-left font-montserrat text-amber-200 hover:bg-amber-900/10 transition-colors"
                  >
                    <span>{faq.question}</span>
                    {activeAccordion === index ? (
                      <FaChevronUp className="text-amber-400" />
                    ) : (
                      <FaChevronDown className="text-amber-400" />
                    )}
                  </button>
                  {activeAccordion === index && (
                    <div className="p-4 font-montserrat text-gray-300 bg-gray-900/30">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ... (keep existing business contact section) */}
    </div>
  );
};

export default Contact;