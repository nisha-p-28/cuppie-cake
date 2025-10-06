import React, { useState } from "react";
import {
  Edit,
  Trash,
  ChefHat,
  Cake,
  CakeSlice,
  Pizza,
  Dessert,
  Donut,
  LayoutDashboard,
  Settings,
  Gift,
  ChevronLeft,
  ChevronRight,
  Package,
} from "lucide-react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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

/* 🔹 Topbar Component */
const Topbar = () => (
  <div className="flex items-center justify-between">
    <h2 className="text-xl font-semibold text-[#5c4742]">Hey, Zack 👋</h2>
    <div className="flex items-center gap-3">
      <input
        type="text"
        placeholder="Search cakes or offers..."
        className="px-4 py-2 w-72 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-rose-200"
      />
      <button className="p-2 rounded-full bg-rose-100">🔔</button>
      <button className="p-2 rounded-full bg-rose-100">⚙️</button>
      <div className="w-10 h-10 rounded-full bg-rose-400 flex items-center justify-center text-white font-bold">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/female-user-image-illustration-svg-download-png-6515859.png"
          alt="user"
        />
      </div>
    </div>
  </div>
);

// 🔹 Categories Component
const Categories = () => {
  const cats = [
    { icon: ChefHat, label: "Breads" },
    { icon: CakeSlice, label: "Pastries" },
    { icon: Cake, label: "Cakes" },
    { icon: Dessert, label: "Muffins" },
    { icon: Pizza, label: "Pizza" },
    { icon: Donut, label: "Donuts" },
  ];

  return (
    <div className="py-6">
      <h3 className="text-lg font-semibold text-[#5a2a27] mb-4 flex items-center gap-2">
        <span role="img" aria-label="categories">
          🍴
        </span>{" "}
        Categories
      </h3>
      <div className="flex flex-wrap gap-6">
        {cats.map(({ icon: Icon, label }, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center p-4 w-28 h-28 bg-white rounded-xl cursor-pointer shadow hover:scale-105 transition"
          >
            <Icon className="w-8 h-8 text-[#f4978e]" />
            <span className="text-sm mt-2 font-medium text-[#f08080]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// 🔹 CakeCustomization Component
const CakeCustomization = ({ customization, setCustomization }) => {
  const handleChange = (field, value) => {
    setCustomization({ ...customization, [field]: value });
  };

  return (
    <div className="w-1/3 p-6 rounded-4xl shadow-lg bg-rose-50">
      <h2 className="text-xl font-bold mb-6 text-[#5c4742]">🎨 Customize Cake</h2>

      {[
        {
          label: "Flavor",
          field: "flavor",
          options: ["Chocolate", "Vanilla", "Strawberry", "Red Velvet"],
        },
        {
          label: "Toppings",
          field: "topping",
          options: ["Choco Chips", "Fruits", "Whipped Cream", "Sprinkles"],
        },
        {
          label: "Decorations",
          field: "decoration",
          options: ["Flowers", "Hearts", "Custom Text", "Photo Print"],
        },
      ].map(({ label, field, options }) => (
        <div key={field} className="mb-5">
          <label className="block text-sm font-semibold text-[#593d3b] mb-1">
            {label}
          </label>
          <select
            value={customization[field]}
            onChange={(e) => handleChange(field, e.target.value)}
            className="mt-1 block w-full p-2 rounded-lg border border-pink-200 focus:ring-pink-400 focus:border-pink-400 bg-white shadow-sm"
          >
            {options.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </div>
      ))}

      <div className="bg-white p-4 rounded-lg shadow-md text-center border border-pink-100">
        <h3 className="font-bold text-[#8d5b4c] mb-3">Cake Preview 🍰</h3>
        <p>
          Flavor: <b>{customization.flavor}</b>
        </p>
        <p>
          Topping: <b>{customization.topping}</b>
        </p>
        <p>
          Decoration: <b>{customization.decoration}</b>
        </p>
      </div>
    </div>
  );
};

// 🔹 CakeManager Component
const CakeManager = ({ products, setProducts, customization }) => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    discount: "",
    offer: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCake = { ...form, customization };

    if (editIndex !== null) {
      const updated = [...products];
      updated[editIndex] = newCake;
      setProducts(updated);
      setEditIndex(null);
    } else {
      setProducts([...products, newCake]);
    }

    setForm({ name: "", price: "", discount: "", offer: "" });
  };

  const handleEdit = (index) => {
    setForm(products[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  return (
    <div className="w-2/3 p-8 rounded-4xl bg-rose-50">
      <h2 className="text-2xl font-bold mb-6 text-[#5a2a27]">🛒 Manage Cakes</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-6 mb-8 border border-[#eddcd2]"
      >
        <div className="grid grid-cols-2 gap-5">
          {["Cake Name", "Base Price", "Discount %", "Seasonal Offer"].map(
            (label, i) => {
              const field = ["name", "price", "discount", "offer"][i];
              return (
                <input
                  key={field}
                  type={
                    field === "price" || field === "discount"
                      ? "number"
                      : "text"
                  }
                  placeholder={label}
                  value={form[field]}
                  onChange={(e) =>
                    setForm({ ...form, [field]: e.target.value })
                  }
                  className="border border-pink-200 p-3 rounded-lg focus:ring-pink-400 focus:border-pink-400 shadow-sm"
                  required
                />
              );
            }
          )}
        </div>
        <button
          type="submit"
          className="mt-6 bg-[#df7373] hover:opacity-80 text-white px-6 py-2 rounded-lg shadow-md transition"
        >
          {editIndex !== null ? "Update Cake" : "Add Cake"}
        </button>
      </form>

      <h3 className="text-lg font-semibold text-[#735751] mb-4">📋 Cake List</h3>
      <div className="space-y-4">
        {products.map((cake, i) => (
          <div
            key={i}
            className="bg-gradient-to-r from-rose-50 shadow to-pink-50 p-5 rounded-lg shadow flex justify-between items-center border border-pink-100"
          >
            <div>
              <p className="font-bold text-[#f08080] text-lg">{cake.name}</p>
              <p className="text-sm text-gray-700">
                Price: ₹{cake.price} | Discount: {cake.discount}% | Offer:{" "}
                {cake.offer}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {cake.customization.flavor} • {cake.customization.topping} •{" "}
                {cake.customization.decoration}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(i)}
                className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-lg flex items-center gap-1 shadow"
              >
                <Edit size={16} /> Edit
              </button>
              <button
                onClick={() => handleDelete(i)}
                className="bg-red-400 hover:bg-red-500 text-white px-3 py-1 rounded-lg flex items-center gap-1 shadow"
              >
                <Trash size={16} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// 🔹 Main ProductManagement Page
const ProductManagement = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [products, setProducts] = useState([]);
  const [customization, setCustomization] = useState({
    flavor: "Chocolate",
    topping: "Choco Chips",
    decoration: "Flowers",
  });

  return (
    <div className="flex min-h-screen bg-[#fbf8f8]">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <main
        className={`flex flex-col w-full transition-all duration-300 ${
          collapsed ? "ml-20" : "ml-64"
        } p-6`}
      >
        <Topbar />
        <Categories />
        <div className="flex w-full gap-6">
          <CakeCustomization
            customization={customization}
            setCustomization={setCustomization}
          />
          <CakeManager
            products={products}
            setProducts={setProducts}
            customization={customization}
          />
        </div>
      </main>
    </div>
  );
};

export default ProductManagement;
