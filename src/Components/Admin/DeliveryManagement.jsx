import React, { useState } from "react";
import {
  LayoutDashboard,
  Cake,
  Settings,
  Gift,
  Package,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

// 🔹 Sidebar Component
const Sidebar = ({ collapsed, setCollapsed }) => {
  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/admin/dashboard" },
    { name: "Product", icon: Cake, path: "/admin/product" },
    { name: "Order", icon: Settings, path: "/admin/order" },
    { name: "Customer", icon: Gift, path: "/admin/customer" },
    { name: "Delivery", icon: Package, path: "/admin/delivery" },
  ];

  return (
    <div
      className={`h-screen bg-[#df7373] text-white shadow-xl transition-all duration-300
        ${collapsed ? "w-20" : "w-64"} fixed left-0 top-0`}
    >
      {/* 🔹 Logo + Collapse Button */}
      <div className="flex items-center justify-between p-6 border-b border-[#fcd5ce]">
        {!collapsed && (
          <h1 className="text-xl font-bold text-[#fff1e6] tracking-wide">
            Cuppie Cake
          </h1>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded-md hover:bg-[#da5552] transition"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* 🔹 Menu Items with Router Links */}
      <nav className="p-4 space-y-3">
        {menuItems.map(({ name, icon: Icon, path }) => (
          <Link
            key={name}
            to={path}
            className="flex items-center gap-3 hover:bg-white hover:text-[#E8A598]
              rounded-lg px-3 py-2 cursor-pointer transition font-medium"
          >
            <Icon size={20} />
            {!collapsed && <span>{name}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
};


// 🔹 Main Page with Router
const ProductPage = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

        {/* Main Content */}
        <div
          className={`flex-1 bg-[#fff1e6] min-h-screen transition-all duration-300 ${
            collapsed ? "ml-20" : "ml-64"
          }`}
        >
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/product" element={<Product />} />
            <Route path="/order" element={<Order />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/delivery" element={<Delivery />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

// 🔹 Topbar Component
const Topbar = () => (
  <div className="flex items-center justify-between ">
    <h2 className="text-xl font-semibold text-[#5c4742]">Hey, Zack 👋</h2>
    <div className="flex items-center gap-3">
      <input
        type="text"
        placeholder="Search cakes or offers..."
        className="px-4 py-2 w-72 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-rose-200"
      />
      <button className="p-2 rounded-full bg-rose-100 ">🔔</button>
      <button className="p-2 rounded-full bg-rose-100 ">⚙️</button>
      <div className="w-10 h-10 rounded-full bg-rose-400 flex items-center justify-center text-white font-bold">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/female-user-image-illustration-svg-download-png-6515859.png" alt="" />
      </div>
    </div>
  </div>
);

// 🔹 Delivery Management Page
const DeliveryManagement = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    
      <div className="flex bg-[#fff8f7] min-h-screen">
        {/* Sidebar */}
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

        {/* Main Content */}
        <main
          className={`flex-1 transition-all duration-300 ${
            collapsed ? "ml-20" : "ml-64"
          } bg-[#fff8f7] p-6`}
        >
          <Topbar />

          <div className="space-y-6 mt-8">
            {/* Header Section */}
            <div>
              <h2 className="text-2xl font-bold text-[#5a2a27]">
                🚚 Delivery Management
              </h2>
              <p className="text-gray-600 mt-2">
                Manage delivery operations, staff integrations, and zones
              </p>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Integration Card */}
              <div className="bg-white rounded-xl shadow-md p-6 border border-pink-100 hover:shadow-lg transition">
                <h3 className="font-semibold text-lg text-[#5c4742] mb-3">
                  📱 Integration with Staff App
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Connect and sync with the delivery staff mobile application to
                  assign and track orders in real time.
                </p>
                <button className="bg-[#df7373] text-white px-4 py-2 rounded-lg hover:opacity-85 transition">
                  Connect Now
                </button>
              </div>

              {/* Real-Time Status */}
              <div className="bg-white rounded-xl shadow-md p-6 border border-pink-100 hover:shadow-lg transition">
                <h3 className="font-semibold text-lg text-[#5c4742] mb-3">
                  ⏱️ Real-Time Status Updates
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Keep customers updated with live delivery tracking, ETA, and
                  order progress.
                </p>
                <button className="bg-[#df7373] text-white px-4 py-2 rounded-lg hover:opacity-85 transition">
                  Enable Tracking
                </button>
              </div>

              {/* Delivery Zones */}
              <div className="bg-white rounded-xl shadow-md p-6 border border-pink-100 hover:shadow-lg transition">
                <h3 className="font-semibold text-lg text-[#5c4742] mb-3">
                  🗺️ Manage Zones & Fees
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Define delivery zones, set base fees, and manage distance-based
                  pricing for efficient logistics.
                </p>
                <button className="bg-[#df7373] text-white px-4 py-2 rounded-lg hover:opacity-85 transition">
                  Manage Zones
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    
  );
};

export default DeliveryManagement;
