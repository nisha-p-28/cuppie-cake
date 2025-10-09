import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import AdminLogin from "./Components/Admin/AdminLogin";
import ProductManagement from "./Components/Admin/ProductManagement";
import Dashboard from "./Components/Admin/Dashboard";
import CustomerManagement from "./Components/Admin/CustomerManagement"
import DeliveryManagement from "./Components/Admin/DeliveryManagement";
import OrderManagement from "./Components/Admin/OrderManagement";
import AdminDashboard from "./Components/Admin/AdminDashboard";

const Admin = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="flex min-h-screen bg-rose-50">
      <div className="flex flex-col flex-1">
        <div className="p-6">
          <Routes>
            {/* Admin login page */}
            <Route path="/" element={<AdminLogin />} />

            {/* Dashboard page */}
            <Route path="dashboard" element={<Dashboard />} />

            {/* Product management page */}
            <Route path="product" element={<ProductManagement />} />

            {/* Product management page */}
            <Route path="customer" element={<CustomerManagement />} />

            {/* Delivery management page */}
            <Route path="delivery" element={<DeliveryManagement />} />

            {/* Order management page */}
            <Route path="order" element={<OrderManagement />} />

            {/* Dashboard */}
            <Route path="/admin-dash" element={<AdminDashboard />} />

          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;