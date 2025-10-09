import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  User,
  MapPin,
  Bookmark,
  Heart,
  Bell,
  Settings,
  HelpCircle,
  LogOut,
  Search,
  Palette,
  ShoppingCart,
  MessageCircle,
  Phone,
  Mail,
  TrendingUp,
  ArrowUp,
  ArrowDown,
  Clock,
  Star,
  Check,
  ChevronUp,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

/* ---------- Icon Component ---------- */
const Icon = ({ name, size = 18, className = "" }) => {
  const icons = {
    LayoutDashboard,
    Package,
    User,
    MapPin,
    Bookmark,
    Heart,
    Bell,
    Settings,
    HelpCircle,
    LogOut,
    Search,
    Palette,
    ShoppingCart,
    MessageCircle,
    Phone,
    Mail,
    TrendingUp,
    ArrowUp,
    ArrowDown,
    Clock,
    Star,
    Check,
    ChevronUp,
    ChevronDown,
    ChevronRight,
  };
  const IconComp = icons[name];
  return IconComp ? <IconComp size={size} className={className} /> : null;
};

/* ---------- Button Component ---------- */
const Button = ({
  children,
  onClick,
  variant = "default",
  iconName,
  fullWidth,
  className = "",
}) => {
  const base =
    "inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-all";
  const styles = {
    default: "bg-green-600 text-white hover:bg-green-700",
    outline:
      "border border-green-600 text-green-600 bg-white hover:bg-green-50",
    ghost: "hover:bg-gray-100 text-gray-700",
  };
  return (
    <button
      onClick={onClick}
      className={`${base} ${styles[variant]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
    >
      {iconName && <Icon name={iconName} size={16} className="mr-2" />}
      {children}
    </button>
  );
};

/* ---------- Sidebar Component ---------- */
const AccountSidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

  const sidebarItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      path: "/user-account-dashboard",
      icon: "LayoutDashboard",
    },
    {
      id: "orders",
      label: "Order History",
      path: "/order-tracking-history",
      icon: "Package",
    },
    { id: "profile", label: "Profile Settings", path: "#profile", icon: "User" },
    {
      id: "addresses",
      label: "Delivery Addresses",
      path: "#addresses",
      icon: "MapPin",
    },
    { id: "designs", label: "Saved Designs", path: "#designs", icon: "Bookmark" },
    { id: "wishlist", label: "Wishlist", path: "#wishlist", icon: "Heart" },
    {
      id: "notifications",
      label: "Notifications",
      path: "#notifications",
      icon: "Bell",
    },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-screen w-64 bg-white border-r shadow-md transform transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}
    >
      <div className="p-4 font-bold text-lg border-b text-green-600">
        🍰 Account Menu
      </div>
      <nav className="p-4 space-y-2">
        {sidebarItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className={`flex items-center space-x-3 p-3 rounded-md transition-all ${
              location.pathname === item.path
                ? "bg-green-100 text-green-700 font-semibold"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Icon name={item.icon} />
            <span>{item.label}</span>
          </Link>
        ))}
        <div className="mt-4 border-t pt-4 space-y-2">
          <button className="flex items-center space-x-3 text-gray-700 hover:text-green-700">
            <Icon name="Settings" />
            <span>Settings</span>
          </button>
          <button className="flex items-center space-x-3 text-gray-700 hover:text-green-700">
            <Icon name="HelpCircle" />
            <span>Help & Support</span>
          </button>
          <button className="flex items-center space-x-3 text-red-600 hover:text-red-700">
            <Icon name="LogOut" />
            <span>Sign Out</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

/* ---------- Banner Section ---------- */
const BannerSection = () => (
  <div className="bg-gradient-to-r from-green-500 to-green-700 text-white rounded-xl p-6 mb-6 shadow-lg">
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold mb-2">
          Elevate Your Culinary Experience 🍳
        </h1>
        <p className="text-sm text-white/90 mb-3">
          Explore recipes, plan your week, and shop seamlessly with Eggify.
        </p>
        <Button variant="outline" className="bg-white text-green-700">
          Get Started
        </Button>
      </div>
      <img
        src="https://images.unsplash.com/photo-1604908812890-0f33b7c8c882?auto=format&fit=crop&w=400&q=80"
        alt="Food Banner"
        className="w-48 md:w-64 rounded-lg shadow-md"
      />
    </div>
  </div>
);

/* ---------- Dashboard Stats Section ---------- */
const DashboardStats = () => {
  const stats = [
    {
      label: "Total Orders",
      value: 24,
      icon: "Package",
      color: "bg-green-100 text-green-600",
    },
    {
      label: "Pending Orders",
      value: 2,
      icon: "Clock",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      label: "Saved Designs",
      value: 8,
      icon: "Bookmark",
      color: "bg-blue-100 text-blue-600",
    },
    {
      label: "Wishlist Items",
      value: 12,
      icon: "Heart",
      color: "bg-pink-100 text-pink-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((item) => (
        <div
          key={item.label}
          className="p-4 bg-white border rounded-lg shadow-sm hover:shadow-md transition"
        >
          <div className="flex items-center justify-between mb-2">
            <div className={`p-2 rounded-md ${item.color}`}>
              <Icon name={item.icon} />
            </div>
            <div className="text-2xl font-bold">{item.value}</div>
          </div>
          <div className="text-sm font-medium text-gray-700">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

/* ---------- Quick Actions Section ---------- */
const QuickActions = () => {
  const actions = [
    { title: "Browse Cakes", icon: "Search", path: "/cake-category-browse" },
    { title: "Custom Designer", icon: "Palette", path: "/3d-custom-cake-designer" },
    { title: "Track Orders", icon: "Package", path: "/order-tracking-history" },
    { title: "View Cart", icon: "ShoppingCart", path: "/shopping-cart-checkout" },
  ];

  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Quick Actions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {actions.map((a) => (
          <Link
            key={a.title}
            to={a.path}
            className="flex items-center justify-between border p-3 rounded-lg hover:bg-gray-50 transition"
          >
            <div className="flex items-center space-x-2">
              <Icon name={a.icon} />
              <span>{a.title}</span>
            </div>
            <Icon name="ChevronRight" />
          </Link>
        ))}
      </div>
    </div>
  );
};

/* ---------- Main Menu Dashboard ---------- */
const MenuDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AccountSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex-1 p-6 md:ml-64 transition-all duration-300">
        <button
          className="md:hidden mb-4 text-gray-700"
          onClick={() => setSidebarOpen(true)}
        >
          <Icon name="LayoutDashboard" />
        </button>

        <BannerSection />
        <DashboardStats />
        <QuickActions />
      </div>
    </div>
  );
};

export default MenuDashboard;
