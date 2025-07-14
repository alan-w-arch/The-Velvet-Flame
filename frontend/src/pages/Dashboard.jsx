import React, { useState } from "react";
import { FiPieChart, FiShoppingBag, FiUsers, FiSettings, FiLogOut, FiPlus, FiTrash2, FiEdit} from "react-icons/fi";
import { GiCandleFlame } from "react-icons/gi";

const Dashboard = () => {
  // Sample data
  const [orders, setOrders] = useState([
    { id: 1, customer: "Sophia R.", date: "2023-10-15", amount: "$148", status: "Completed" },
    { id: 2, customer: "Marcus T.", date: "2023-10-14", amount: "$96", status: "Shipped" },
    { id: 3, customer: "Elena K.", date: "2023-10-13", amount: "$204", status: "Processing" },
  ]);

  const [products, setProducts] = useState([
    { id: 1, name: "Midnight Noir", stock: 42, price: "$48" },
    { id: 2, name: "Velvet Ember", stock: 28, price: "$52" },
    { id: 3, name: "Gilded Twilight", stock: 15, price: "$56" },
  ]);

  const [activeTab, setActiveTab] = useState("dashboard");
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  // Delete product
  const handleDeleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
    setIsConfirmOpen(false);
  };

  return (
    <div className="bg-black text-gray-100 min-h-screen flex">
      {/* ===== SIDEBAR ===== */}
      <div className="w-64 bg-gray-900 border-r border-amber-900/20 p-6 flex flex-col">
        <div className="flex items-center mb-10">
          <GiCandleFlame className="text-amber-400 text-2xl mr-2" />
          <h1 className="font-playfair text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400">
            THE VELVET FLAME
          </h1>
          <span className="ml-2 text-xs bg-amber-900/30 text-amber-300 px-2 py-1 rounded-full">Admin</span>
        </div>

        <nav className="flex-grow">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`flex items-center w-full px-4 py-3 mb-2 rounded-sm transition-colors ${activeTab === "dashboard" ? "bg-amber-900/30 text-amber-200" : "text-gray-400 hover:bg-gray-800"}`}
          >
            <FiPieChart className="mr-3" />
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab("orders")}
            className={`flex items-center w-full px-4 py-3 mb-2 rounded-sm transition-colors ${activeTab === "orders" ? "bg-amber-900/30 text-amber-200" : "text-gray-400 hover:bg-gray-800"}`}
          >
            <FiShoppingBag className="mr-3" />
            Orders
          </button>
          <button
            onClick={() => setActiveTab("products")}
            className={`flex items-center w-full px-4 py-3 mb-2 rounded-sm transition-colors ${activeTab === "products" ? "bg-amber-900/30 text-amber-200" : "text-gray-400 hover:bg-gray-800"}`}
          >
            <FiShoppingBag className="mr-3" />
            Products
          </button>
          <button
            onClick={() => setActiveTab("customers")}
            className={`flex items-center w-full px-4 py-3 mb-2 rounded-sm transition-colors ${activeTab === "customers" ? "bg-amber-900/30 text-amber-200" : "text-gray-400 hover:bg-gray-800"}`}
          >
            <FiUsers className="mr-3" />
            Customers
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={`flex items-center w-full px-4 py-3 rounded-sm transition-colors ${activeTab === "settings" ? "bg-amber-900/30 text-amber-200" : "text-gray-400 hover:bg-gray-800"}`}
          >
            <FiSettings className="mr-3" />
            Settings
          </button>
        </nav>

        <button className="flex items-center px-4 py-3 text-gray-400 hover:text-amber-300 mt-auto">
          <FiLogOut className="mr-3" />
          Log Out
        </button>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="flex-grow p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-playfair text-3xl text-amber-200 capitalize">
            {activeTab === "dashboard" ? "Admin Dashboard" : activeTab}
          </h1>
          
        </div>

        {/* Dashboard Content */}
        {activeTab === "dashboard" && (
          <div>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/20 border border-amber-900/20 p-6 rounded-sm">
                <h3 className="font-montserrat text-gray-400 mb-2">Total Revenue</h3>
                <p className="font-playfair text-2xl text-amber-200">$8,420</p>
                <p className="font-montserrat text-green-400 text-sm mt-2">↑ 12% from last month</p>
              </div>
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/20 border border-amber-900/20 p-6 rounded-sm">
                <h3 className="font-montserrat text-gray-400 mb-2">Total Orders</h3>
                <p className="font-playfair text-2xl text-amber-200">142</p>
                <p className="font-montserrat text-green-400 text-sm mt-2">↑ 8% from last month</p>
              </div>
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/20 border border-amber-900/20 p-6 rounded-sm">
                <h3 className="font-montserrat text-gray-400 mb-2">New Customers</h3>
                <p className="font-playfair text-2xl text-amber-200">36</p>
                <p className="font-montserrat text-green-400 text-sm mt-2">↑ 5% from last month</p>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/20 border border-amber-900/20 rounded-sm overflow-hidden">
              <div className="p-4 border-b border-amber-900/20 flex justify-between items-center">
                <h3 className="font-playfair text-xl text-amber-200">Recent Orders</h3>
                <button className="text-amber-300 hover:text-amber-200 text-sm font-montserrat">
                  View All
                </button>
              </div>
              <div className="divide-y divide-amber-900/20">
                {orders.slice(0, 5).map(order => (
                  <div key={order.id} className="p-4 flex justify-between items-center hover:bg-gray-900/30 transition-colors">
                    <div>
                      <p className="font-montserrat text-amber-200">Order #{order.id}</p>
                      <p className="font-montserrat text-gray-400 text-sm">{order.customer} • {order.date}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="font-playfair text-amber-200">{order.amount}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-montserrat ${
                        order.status === "Completed" ? "bg-green-900/30 text-green-400" :
                        order.status === "Shipped" ? "bg-blue-900/30 text-blue-400" :
                        "bg-amber-900/30 text-amber-400"
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === "orders" && (
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/20 border border-amber-900/20 rounded-sm overflow-hidden">
            <div className="p-4 border-b border-amber-900/20 flex justify-between items-center">
              <h3 className="font-playfair text-xl text-amber-200">All Orders</h3>
              <div className="flex space-x-2">
                <select className="bg-gray-900/50 border border-amber-900/30 text-gray-100 px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500">
                  <option>Filter by status</option>
                  <option>Completed</option>
                  <option>Shipped</option>
                  <option>Processing</option>
                </select>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-900/50 border-b border-amber-900/20">
                  <tr>
                    <th className="p-4 text-left font-montserrat text-gray-400 text-sm uppercase">Order ID</th>
                    <th className="p-4 text-left font-montserrat text-gray-400 text-sm uppercase">Customer</th>
                    <th className="p-4 text-left font-montserrat text-gray-400 text-sm uppercase">Date</th>
                    <th className="p-4 text-left font-montserrat text-gray-400 text-sm uppercase">Amount</th>
                    <th className="p-4 text-left font-montserrat text-gray-400 text-sm uppercase">Status</th>
                    <th className="p-4 text-left font-montserrat text-gray-400 text-sm uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-amber-900/20">
                  {orders.map(order => (
                    <tr key={order.id} className="hover:bg-gray-900/30 transition-colors">
                      <td className="p-4 font-montserrat text-amber-200">#{order.id}</td>
                      <td className="p-4 font-montserrat">{order.customer}</td>
                      <td className="p-4 font-montserrat text-gray-400">{order.date}</td>
                      <td className="p-4 font-playfair text-amber-200">{order.amount}</td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-montserrat ${
                          order.status === "Completed" ? "bg-green-900/30 text-green-400" :
                          order.status === "Shipped" ? "bg-blue-900/30 text-blue-400" :
                          "bg-amber-900/30 text-amber-400"
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <button className="text-amber-300 hover:text-amber-200 mr-2">
                          <FiEdit size={16} />
                        </button>
                        <button className="text-red-400 hover:text-red-300">
                          <FiTrash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Products Tab */}
        {activeTab === "products" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-playfair text-2xl text-amber-200">Product Management</h2>
              <button className="flex items-center px-4 py-2 bg-amber-900/70 hover:bg-amber-800/80 border border-amber-700/50 text-amber-100 font-montserrat uppercase tracking-wider text-sm transition-colors">
                <FiPlus className="mr-2" />
                Add Product
              </button>
            </div>

            <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/20 border border-amber-900/20 rounded-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-900/50 border-b border-amber-900/20">
                    <tr>
                      <th className="p-4 text-left font-montserrat text-gray-400 text-sm uppercase">Product</th>
                      <th className="p-4 text-left font-montserrat text-gray-400 text-sm uppercase">Stock</th>
                      <th className="p-4 text-left font-montserrat text-gray-400 text-sm uppercase">Price</th>
                      <th className="p-4 text-left font-montserrat text-gray-400 text-sm uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-amber-900/20">
                    {products.map(product => (
                      <tr key={product.id} className="hover:bg-gray-900/30 transition-colors">
                        <td className="p-4 font-montserrat text-amber-200">{product.name}</td>
                        <td className="p-4 font-montserrat">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            product.stock > 20 ? "bg-green-900/30 text-green-400" :
                            product.stock > 5 ? "bg-amber-900/30 text-amber-400" :
                            "bg-red-900/30 text-red-400"
                          }`}>
                            {product.stock} in stock
                          </span>
                        </td>
                        <td className="p-4 font-playfair text-amber-200">{product.price}</td>
                        <td className="p-4">
                          <button className="text-amber-300 hover:text-amber-200 mr-2">
                            <FiEdit size={16} />
                          </button>
                          <button 
                            onClick={() => {
                              setProductToDelete(product.id);
                              setIsConfirmOpen(true);
                            }}
                            className="text-red-400 hover:text-red-300"
                          >
                            <FiTrash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Customers Tab */}
        {activeTab === "customers" && (
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/20 border border-amber-900/20 rounded-sm p-8 text-center">
            <h2 className="font-playfair text-2xl text-amber-200 mb-4">Customer Insights</h2>
            <p className="font-montserrat text-gray-400">Customer management features coming soon.</p>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === "settings" && (
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/20 border border-amber-900/20 rounded-sm p-8">
            <h2 className="font-playfair text-2xl text-amber-200 mb-6">Store Settings</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-montserrat text-amber-300 mb-2">Store Name</h3>
                <input
                  type="text"
                  defaultValue="THE VELVET FLAME"
                  className="w-full bg-gray-900/50 border border-amber-900/30 text-gray-100 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>
              <div>
                <h3 className="font-montserrat text-amber-300 mb-2">Store Description</h3>
                <textarea
                  rows="4"
                  defaultValue="Luxury scented candles crafted with passion and precision."
                  className="w-full bg-gray-900/50 border border-amber-900/30 text-gray-100 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>
              <button className="px-6 py-3 bg-amber-900/70 hover:bg-amber-800/80 border border-amber-700/50 text-amber-100 font-montserrat uppercase tracking-wider transition-colors">
                Save Settings
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {isConfirmOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gray-900 border border-amber-900/30 p-6 rounded-sm max-w-md w-full">
            <h3 className="font-playfair text-xl text-amber-200 mb-4">Confirm Deletion</h3>
            <p className="font-montserrat text-gray-400 mb-6">
              Are you sure you want to delete this product? This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsConfirmOpen(false)}
                className="px-4 py-2 border border-amber-900/30 text-amber-200 font-montserrat hover:bg-gray-800 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteProduct(productToDelete)}
                className="px-4 py-2 bg-red-900/30 border border-red-900/30 text-red-400 font-montserrat hover:bg-red-900/40 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;