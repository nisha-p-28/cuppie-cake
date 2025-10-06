import React, { useState } from "react";
import {
  LayoutDashboard,
  Cake,
  Settings,
  Gift,
  Package,
  ChevronLeft,
  ChevronRight,
  Search,
  Bell,
  UserCircle,
  ShoppingBag,
  DollarSign,
  TrendingUp,
  Users,
} from "lucide-react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


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

      {/* 🔹 Menu Items */}
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


// 🔹 Topbar Component (Same as your given design)
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
          alt="user"
        />
      </div>
    </div>
  </div>
);


// 🔹 Dashboard Page
const DashboardPage = () => {
  const [collapsed, setCollapsed] = useState(false);

  // Dashboard Metrics
  const metrics = [
    { title: "Total Orders", value: "1,240", change: "+8%", icon: <ShoppingBag size={22} />, color: "text-green-600" },
    { title: "Revenue", value: "₹84,500", change: "+12%", icon: <DollarSign size={22} />, color: "text-green-600" },
    { title: "New Customers", value: "230", change: "+5%", icon: <Users size={22} />, color: "text-green-600" },
    { title: "Monthly Growth", value: "15%", change: "-2%", icon: <TrendingUp size={22} />, color: "text-red-600" },
  ];

  // Orders Data
  const orders = [
    { id: 1, customer: "Riya Sharma", item: "Chocolate Cake", status: "Delivered" },
    { id: 2, customer: "Amit Verma", item: "Vanilla Pastry", status: "In Process" },
    { id: 3, customer: "Neha Singh", item: "Red Velvet Cake", status: "Pending" },
  ];

  // Production Pipeline Data
  const production = [
    { step: "Baking", progress: "Completed" },
    { step: "Frosting", progress: "Ongoing" },
    { step: "Packaging", progress: "Pending" },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      {/* Main Content */}
      <div
        className={`flex-1 bg-[#fbf8f8] min-h-screen transition-all duration-300 ${
          collapsed ? "ml-20" : "ml-64"
        }`}
      >
        {/* Topbar */}
        <div className="p-6">
          <Topbar />
        </div>

        {/* 📊 Dashboard Overview Section */}
        <div className="p-6 space-y-10">
          <h2 className="text-2xl font-semibold text-[#5c4742] mb-4">
            Dashboard Overview
          </h2>

          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((m, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <div className="flex justify-between items-center mb-2">
                  <p className="text-gray-500 text-sm">{m.title}</p>
                  {m.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{m.value}</h3>
                <p className={`text-sm ${m.color}`}>{m.change}</p>
              </div>
            ))}
          </div>

          {/* 🧾 Recent Orders Section */}
          <div>
            <h3 className="text-xl font-semibold text-[#5c4742] mb-3">
              Recent Orders
            </h3>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <table className="w-full text-left border-collapse">
                <thead className="bg-gray-100 text-gray-600 text-sm uppercase">
                  <tr>
                    <th className="p-4">Customer</th>
                    <th className="p-4">Item</th>
                    <th className="p-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((o) => (
                    <tr key={o.id} className="border-b hover:bg-gray-50 transition">
                      <td className="p-4 font-medium text-gray-800">{o.customer}</td>
                      <td className="p-4 text-gray-600">{o.item}</td>
                      <td className="p-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            o.status === "Delivered"
                              ? "bg-green-100 text-green-600"
                              : o.status === "In Process"
                              ? "bg-yellow-100 text-yellow-600"
                              : "bg-red-100 text-red-600"
                          }`}
                        >
                          {o.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ⚙️ Production Pipeline Section */}
          <div>
            <h3 className="text-xl font-semibold text-[#5c4742] mb-3">
              Production Pipeline
            </h3>
            <div className="bg-white p-6 rounded-2xl shadow-md space-y-3">
              {production.map((p, i) => (
                <div key={i} className="flex justify-between items-center border-b pb-2 last:border-none">
                  <p className="font-medium text-gray-800">{p.step}</p>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      p.progress === "Completed"
                        ? "bg-green-100 text-green-600"
                        : p.progress === "Ongoing"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {p.progress}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 📈 Sales Analytics Section */}
          <div>
            <h3 className="text-xl font-semibold text-[#5c4742] mb-3">
              Sales Analytics & Customer Trends
            </h3>
            <div className="bg-white p-6 rounded-2xl shadow-md text-gray-600">
              <p>
                Here you can display interactive charts in the future — such as
                daily/weekly/monthly sales analytics and customer trends.
              </p>
              <p className="mt-2 italic text-gray-400">
                (Coming soon: graphs and charts to visualize growth.)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
