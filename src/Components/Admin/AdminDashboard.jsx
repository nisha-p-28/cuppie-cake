import React, { useState } from "react";
import {
  Edit,
  Trash,
  LayoutDashboard,
  Cake,
  Settings,
  Gift,
  Package,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import cake_pre from "../../assets/cake-pre.jpg";
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
      className={`h-screen bg-gradient-to-b from-pink-200 via-rose-100 to-pink-50 text-gray-800 shadow-xl transition-all duration-300 ${collapsed ? "w-20" : "w-64"
        } fixed left-0 top-0`}
    >
      {/* 🔹 Logo + Collapse Button */}
      <div className="flex items-center justify-between p-6 border-b border-rose-200">
        {!collapsed && (
          <div className="flex items-center gap-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/857/857681.png"
              alt="Bakery Logo"
              className="w-10 h-10"
            />
            <h1 className="text-xl font-bold text-rose-600 tracking-wide">
              Sweetify
            </h1>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded-md hover:bg-rose-200 transition"
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
            className="flex items-center gap-3 hover:bg-white hover:text-rose-600 rounded-lg px-3 py-2 cursor-pointer transition font-medium"
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
  <div className="flex items-center justify-between mb-6">
    <h2 className="text-2xl font-semibold text-[#5c4742]">Hey, Baker 👋</h2>
    <div className="flex items-center gap-3">
      <input
        type="text"
        placeholder="Search cakes, offers or recipes..."
        className="px-4 py-2 w-80 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 shadow-sm"
      />
      <button className="p-2 rounded-full bg-rose-100 hover:bg-rose-200">
        🔔
      </button>
      <button className="p-2 rounded-full bg-rose-100 hover:bg-rose-200">
        ⚙️
      </button>
      <img
        src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png"
        alt="user"
        className="w-10 h-10 rounded-full shadow-md"
      />
    </div>
  </div>
);

/* 🔹 🌸 Banner Section */
const Banner = () => (
  <div className="relative bg-gradient-to-r from-rose-100 via-pink-50 to-white rounded-3xl shadow-lg overflow-hidden mb-8 border border-rose-100">
    <div className="flex flex-col md:flex-row items-center justify-between px-8 py-10">
      <div className="max-w-xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#5a2a27] leading-tight mb-4">
          Elevate Your Culinary Experience with <br />
          <span className="text-rose-600">Sweetify</span>
        </h1>
        <p className="text-gray-600 mb-6 text-sm md:text-base">
          Explore fresh bakery treats, discover recipes, and craft your dream
          cakes! Sweetify brings joy to your kitchen with delightful flavors
          made with love. 🍰
        </p>
        <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-full shadow-md transition">
          Get Started
        </button>
      </div>
      <div className="relative mt-6 md:mt-0">
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-bakery-concept_23-2148655826.jpg"
          alt="Bakery banner"
          className="w-[360px] md:w-[420px] object-contain drop-shadow-md"
        />
      </div>
    </div>
  </div>
);

/* 🔹 Categories Component */
const Categories = () => {
  const cats = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
      label: "Breads",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/9288/9288987.png",
      label: "Pastries",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/685/685352.png",
      label: "Cakes",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3158/3158983.png",
      label: "Muffins",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/5787/5787039.png",
      label: "Pizza",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
      label: "Donuts",
    },
  ];

  return (
    <div className="py-6">
      <h3 className="text-lg font-semibold text-[#5a2a27] mb-4 flex items-center gap-2">
        🍰 Choose Category
      </h3>
      <div className="flex flex-wrap gap-6">
        {cats.map(({ icon, label }, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center p-4 w-28 h-28 bg-white rounded-2xl cursor-pointer shadow hover:scale-105 transition border border-rose-100"
          >
            <img src={icon} alt={label} className="w-8 h-8" />
            <span className="text-sm mt-2 font-medium text-rose-500">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 🔹 CakeCustomization Component */
const CakeCustomization = ({ customization, setCustomization }) => {
  const handleChange = (field, value) => {
    setCustomization({ ...customization, [field]: value });
  };

  return (
    <div className="w-1/3 p-6 rounded-3xl shadow-lg bg-white border border-rose-100">
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

      <div className="preview-card p-4 bg-rose-50 shadow rounded-3xl flex flex-col items-center border border-rose-100">
        <img
          src={cake_pre}
          alt="Cake preview"
          className="w-36 h-36 object-cover rounded-2xl shadow-sm"
        />
        <div className="mt-3 text-center text-sm">
          <p className="font-semibold text-rose-600">{customization.flavor}</p>
          <p>{customization.topping}</p>
          <p>{customization.decoration}</p>
        </div>
      </div>
    </div>
  );
};

/* 🔹 CakeManager Component */
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
    <div className="w-2/3 p-8 rounded-3xl bg-white shadow-lg border border-rose-100">
      <h2 className="text-2xl font-bold mb-6 text-[#5a2a27]">🛒 Manage Cakes</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-rose-50 rounded-xl p-6 mb-8 shadow-inner border border-rose-100"
      >
        <div className="grid grid-cols-2 gap-5">
          {["Cake Name", "Base Price", "Discount %", "Seasonal Offer"].map(
            (label, i) => {
              const field = ["name", "price", "discount", "offer"][i];
              return (
                <input
                  key={field}
                  type={
                    field === "price" || field === "discount" ? "number" : "text"
                  }
                  placeholder={label}
                  value={form[field]}
                  onChange={(e) =>
                    setForm({ ...form, [field]: e.target.value })
                  }
                  className="border border-pink-200 p-3 rounded-lg focus:ring-pink-400 focus:border-pink-400 shadow-sm bg-white"
                  required
                />
              );
            }
          )}
        </div>
        <button
          type="submit"
          className="mt-6 bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-lg shadow-md transition"
        >
          {editIndex !== null ? "Update Cake" : "Add Cake"}
        </button>
      </form>

      <h3 className="text-lg font-semibold text-[#735751] mb-4">📋 Cake List</h3>
      <div className="space-y-4">
        {products.map((cake, i) => (
          <div
            key={i}
            className="bg-gradient-to-r from-rose-50 to-pink-50 p-5 rounded-lg shadow flex justify-between items-center border border-pink-100"
          >
            <div>
              <p className="font-bold text-rose-600 text-lg">{cake.name}</p>
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

/* 🔹 Main Page */
const ProductManagement = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [products, setProducts] = useState([]);
  const [customization, setCustomization] = useState({
    flavor: "Chocolate",
    topping: "Choco Chips",
    decoration: "Flowers",
  });

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <main
        className={`flex flex-col w-full transition-all duration-300 ${collapsed ? "ml-20" : "ml-64"
          } p-6`}
      >
        <Topbar />
        <Banner /> {/* 🩷 Added Banner Section here */}
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
