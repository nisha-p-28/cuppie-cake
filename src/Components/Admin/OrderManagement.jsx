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
  Truck,
  Clock,
  CheckCircle,
} from "lucide-react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

/* 🔹 Sidebar Component (same as Customers Page) */
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

/* 🔹 Topbar Component (same as Customers Page) */
const Topbar = () => (
  <div className="flex items-center justify-between">
    <h2 className="text-xl font-semibold text-[#5c4742]">Hey, Zack 👋</h2>
    <div className="flex items-center gap-3">
      <input
        type="text"
        placeholder="Search orders or customers..."
        className="px-4 py-2 w-72 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-rose-200"
      />
      <button className="p-2 rounded-full bg-rose-100">🔔</button>
      <button className="p-2 rounded-full bg-rose-100">⚙️</button>
      <div className="w-10 h-10 rounded-full bg-rose-400 flex items-center justify-center text-white font-bold">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/female-user-image-illustration-svg-download-png-6515859.png"
          alt=""
        />
      </div>
    </div>
  </div>
);

/* 🔹 Order Management Page */
const OrderManagement = () => {
  const [collapsed, setCollapsed] = useState(false);

  // 🔸 Mock order data
  const [orders, setOrders] = useState([
    {
      id: 1,
      customer: "Aarav Sharma",
      item: "Chocolate Truffle Cake",
      quantity: 1,
      total: "₹850",
      status: "Processing",
      delivery: "",
    },
    {
      id: 2,
      customer: "Meera Kapoor",
      item: "Red Velvet Cupcakes (6 pcs)",
      quantity: 1,
      total: "₹499",
      status: "Baking",
      delivery: "",
    },
    {
      id: 3,
      customer: "Rohan Verma",
      item: "Butterscotch Cake",
      quantity: 1,
      total: "₹750",
      status: "Out for Delivery",
      delivery: "Rajesh Kumar",
    },
  ]);

  // 🔸 Delivery Staff List
  const deliveryStaff = ["Rajesh Kumar", "Priya Singh", "Amit Patel"];

  // 🔸 Function to update order status
  const updateStatus = (id, newStatus) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  // 🔸 Function to assign delivery person
  const assignDelivery = (id, person) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, delivery: person } : order
      )
    );
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      {/* Main Content */}
      <div
        className={`flex-1 bg-[#fbf8f8] min-h-screen p-6 transition-all duration-300 ${
          collapsed ? "ml-20" : "ml-64"
        }`}
      >
        {/* Topbar */}
        <Topbar />

        {/* Title */}
        <h1 className="text-2xl font-bold text-[#5c4742] mt-8 mb-6">
          🍰 Order Management
        </h1>

        {/* Orders Table */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-100 text-gray-600 text-sm uppercase">
              <tr>
                <th className="p-4">Order ID</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Item</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Total</th>
                <th className="p-4">Delivery Staff</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-4 font-medium text-gray-800">
                    #{order.id}
                  </td>
                  <td className="p-4">{order.customer}</td>
                  <td className="p-4">{order.item}</td>
                  <td className="p-4">{order.quantity}</td>
                  <td className="p-4 font-semibold text-[#df7373]">
                    {order.total}
                  </td>

                  {/* Delivery Assignment */}
                  <td className="p-4">
                    <select
                      value={order.delivery}
                      onChange={(e) =>
                        assignDelivery(order.id, e.target.value)
                      }
                      className="border rounded-lg px-2 py-1 text-sm"
                    >
                      <option value="">Assign</option>
                      {deliveryStaff.map((staff) => (
                        <option key={staff} value={staff}>
                          {staff}
                        </option>
                      ))}
                    </select>
                  </td>

                  {/* Status Badge */}
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        order.status === "Processing"
                          ? "bg-yellow-100 text-yellow-700"
                          : order.status === "Baking"
                          ? "bg-orange-100 text-orange-700"
                          : order.status === "Out for Delivery"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="p-4 text-center flex items-center justify-center gap-2">
                    <button
                      onClick={() => updateStatus(order.id, "Processing")}
                      className="text-yellow-600 hover:text-yellow-700"
                    >
                      <Clock size={18} />
                    </button>
                    <button
                      onClick={() => updateStatus(order.id, "Baking")}
                      className="text-orange-600 hover:text-orange-700"
                    >
                      <Cake size={18} />
                    </button>
                    <button
                      onClick={() => updateStatus(order.id, "Out for Delivery")}
                      className="text-blue-600 hover:text-blue-700"
                    >
                      <Truck size={18} />
                    </button>
                    <button
                      onClick={() => updateStatus(order.id, "Completed")}
                      className="text-green-600 hover:text-green-700"
                    >
                      <CheckCircle size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;
