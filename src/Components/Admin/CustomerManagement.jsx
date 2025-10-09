import React, { useState } from "react";
import {
  LayoutDashboard,
  Cake,
  Settings,
  Gift,
  Package,
  ChevronLeft,
  ChevronRight,
  Users,
  MessageCircle,
  Gift as GiftIcon,
  Search,
  UserPlus,
  Edit2,
  Trash2,
  Phone,
  Mail,
} from "lucide-react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

/* 🔹 Sidebar Component */
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
      className={`h-screen bg-[#df7373] text-white shadow-xl transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      } fixed left-0 top-0`}
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
          aria-label="Toggle sidebar"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* 🔹 Menu Items */}
      <nav className="p-4 space-y-3">
        {menuItems.map(({ name, icon: Icon, path }) => (
          <Link
            key={name}
            to={path}
            className="flex items-center gap-3 hover:bg-white hover:text-[#E8A598] rounded-lg px-3 py-2 cursor-pointer transition font-medium"
          >
            <Icon size={20} />
            {!collapsed && <span>{name}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
};

/* 🔹 Topbar Component (Same as your given design) */
const Topbar = () => (
  <div className="flex items-center justify-between">
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
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/female-user-image-illustration-svg-download-png-6515859.png"
          alt="user avatar"
        />
      </div>
    </div>
  </div>
);

// 🔹 Customers Page (fixed collapse logic)
const CustomersPage = () => {
  // ✅ collapsed state (passed to Sidebar)
  const [collapsed, setCollapsed] = useState(false);

  // 👈 state for active tab
  const [selectedTab, setSelectedTab] = useState("customers");

  const customers = [
    { id: 1, name: "Aarav Sharma", email: "aarav@example.com", phone: "+91 98765 43210", status: "Active" },
    { id: 2, name: "Meera Kapoor", email: "meera@example.com", phone: "+91 99887 66554", status: "Inactive" },
    { id: 3, name: "Rohan Verma", email: "rohan@example.com", phone: "+91 77665 44332", status: "Active" },
  ];

  const complaints = [
    { id: 1, name: "Aarav Sharma", issue: "Late delivery", status: "Resolved" },
    { id: 2, name: "Meera Kapoor", issue: "Wrong cake received", status: "Pending" },
  ];

  const rewards = [
    { id: 1, name: "Rohan Verma", points: 120, level: "Gold" },
    { id: 2, name: "Aarav Sharma", points: 80, level: "Silver" },
  ];

  return (
    // NOTE: Do not wrap with Router here if your app already has a top-level Router.
    // If not, uncomment the Router below and wrap <Sidebar /> & main content.
    // <Router>
    <div className="flex">
      {/* Sidebar (pass collapsed & setCollapsed) */}
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      {/* Main Content - dynamic left margin so layout shifts with sidebar */}
      <div
        className={`flex-1 transition-all duration-300 ${collapsed ? "ml-20" : "ml-64"} p-6 bg-gray-50 min-h-screen`}
      >
        {/* Topbar */}
        <Topbar />

        {/* Dashboard Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4 mt-8">
          <div
            className={`flex items-center gap-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer ${
              selectedTab === "customers" ? "ring-2 ring-pink-300" : ""
            }`}
            onClick={() => setSelectedTab("customers")}
          >
            <div className="bg-pink-100 text-pink-600 p-4 rounded-xl">
              <Users size={28} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">View Customers</h3>
              <p className="text-gray-500 text-sm">See all registered customers</p>
            </div>
          </div>

          <div
            className={`flex items-center gap-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer ${
              selectedTab === "complaints" ? "ring-2 ring-blue-300" : ""
            }`}
            onClick={() => setSelectedTab("complaints")}
          >
            <div className="bg-blue-100 text-blue-600 p-3 rounded-xl">
              <MessageCircle size={28} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Queries & Complaints</h3>
              <p className="text-gray-500 text-sm">Handle customer support quickly</p>
            </div>
          </div>

          <div
            className={`flex items-center gap-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer ${
              selectedTab === "rewards" ? "ring-2 ring-green-300" : ""
            }`}
            onClick={() => setSelectedTab("rewards")}
          >
            <div className="bg-green-100 text-green-600 p-3 rounded-xl">
              <GiftIcon size={28} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Loyalty Rewards</h3>
              <p className="text-gray-500 text-sm">Offer discounts & rewards</p>
            </div>
          </div>
        </div>

        {/* Conditional Content */}
        {selectedTab === "customers" && (
          <>
            {/* Search Bar */}
            <div className="flex items-center bg-white p-3 rounded-xl shadow-sm mb-6">
              <Search className="text-gray-400 mr-2" size={20} />
              <input
                type="text"
                placeholder="Search customers..."
                className="w-full outline-none text-gray-600"
              />
              <button className="ml-3 px-3 py-1 bg-rose-100 rounded-md text-sm">Search</button>
            </div>

            {/* Customers Table */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-700">
              Customer List
            </h3>
            <span className="text-sm text-gray-500">Showing 1–5 of 320</span>
          </div>

          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50 text-gray-600 uppercase text-sm">
              <tr>
                <th className="p-4">Customer</th>
                <th className="p-4">Email</th>
                <th className="p-4">Phone</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr
                  key={customer.id}
                  className="border-b hover:bg-[#fff5f5] transition"
                >
                  <td className="p-4 flex items-center gap-3">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                      alt="user"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-medium text-gray-800">{customer.name}</p>
                      <p className="text-xs text-gray-500">Joined 2024</p>
                    </div>
                  </td>
                  <td className="p-4 text-gray-600">{customer.email}</td>
                  <td className="p-4 text-gray-600">{customer.phone}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        customer.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {customer.status}
                    </span>
                  </td>
                  <td className="p-4 text-center flex justify-center gap-4 text-gray-500">
                    <Phone
                      size={18}
                      className="hover:text-green-500 cursor-pointer"
                    />
                    <Mail
                      size={18}
                      className="hover:text-blue-500 cursor-pointer"
                    />
                    <Edit2
                      size={18}
                      className="hover:text-indigo-500 cursor-pointer"
                    />
                    <Trash2
                      size={18}
                      className="hover:text-red-500 cursor-pointer"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
          </>
        )}

        {selectedTab === "complaints" && (
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Customer Complaints</h3>
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-100 text-gray-600 text-sm uppercase">
                <tr>
                  <th className="p-4">Customer</th>
                  <th className="p-4">Issue</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {complaints.map((c) => (
                  <tr key={c.id} className="border-b hover:bg-gray-50 transition">
                    <td className="p-4 font-medium text-gray-800">{c.name}</td>
                    <td className="p-4 text-gray-600">{c.issue}</td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          c.status === "Resolved"
                            ? "bg-green-100 text-green-600"
                            : "bg-yellow-100 text-yellow-600"
                        }`}
                      >
                        {c.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {selectedTab === "rewards" && (
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Loyalty Rewards</h3>
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-100 text-gray-600 text-sm uppercase">
                <tr>
                  <th className="p-4">Customer</th>
                  <th className="p-4">Points</th>
                  <th className="p-4">Level</th>
                </tr>
              </thead>
              <tbody>
                {rewards.map((r) => (
                  <tr key={r.id} className="border-b hover:bg-gray-50 transition">
                    <td className="p-4 font-medium text-gray-800">{r.name}</td>
                    <td className="p-4 text-gray-600">{r.points}</td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          r.level === "Gold"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {r.level}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>

  );
};

export default CustomersPage;
