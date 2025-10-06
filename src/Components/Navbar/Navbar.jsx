import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";  
import Logo from "../../assets/Logo.png";
import { IoMdLogIn } from "react-icons/io";
import LoginModal from "../LoginModal/LoginModal";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);


  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-23">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={Logo} alt="CakeShop Logo" className="h-20 w-auto" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-rose-500">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-rose-500">
              About Us
            </Link>
            <Link to="/cakes" className="text-gray-700 hover:text-rose-500">
              Speciality Cakes
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-rose-500">
              Products
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-rose-500">
              Contact Us
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setShowLogin(true)}
                className="flex items-center gap-2 whitespace-nowrap px-4 py-2 border border-rose-400 text-rose-500 rounded-lg hover:bg-rose-400 hover:text-white"
              >
                <IoMdLogIn /> Login
              </button>

              {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
            </div>

          </div>


          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-inner space-y-2 px-4 py-4">
          <Link
            to="/"
            className="block text-gray-700 hover:text-rose-400"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/cakes"
            className="block text-gray-700 hover:text-rose-400"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/delivery"
            className="block text-gray-700 hover:text-rose-400"
            onClick={() => setIsOpen(false)}
          >
            Speciality Cakes
          </Link>
          <Link
            to="/checkout"
            className="block text-gray-700 hover:text-rose-400"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/dashboard"
            className="block text-gray-700 hover:text-rose-400"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>

          

          <div className="relative">
              <button
                onClick={() => setShowLogin(true)}
                className="flex items-center justify-center gap-2 whitespace-nowrap w-full text-center px-4 py-2 border border-rose-400 text-rose-500 rounded-lg hover:bg-rose-400 hover:text-white"
              >
                <IoMdLogIn /> Login
              </button>

              {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
            </div>

        
        </div>
      )}
    </nav>
  );
};

export default Navbar;
