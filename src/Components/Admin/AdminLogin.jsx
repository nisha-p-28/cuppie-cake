import React from "react";
import Login_img from "../../assets/admin-login.jpg"
import Logo from "../../assets/Logo.png"

export default function AdminLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        
      <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden w-[900px]">
        
        {/* Left Side Illustration */}
        <div className="hidden md:flex md:w-1/2 bg-rose-200">
            <img
                src={Login_img}
                alt="Bakery Illustration"
                className="w-full h-full object-cover"
            />
        </div>


        {/* Right Side Login Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <p className="text-right text-sm text-gray-500">
            Not a member?{" "}
            <a href="/register" className="text-rose-600 hover:underline">
              Register now
            </a>
          </p>
            
          <h2 className="text-2xl font-bold text-gray-800 mt-4">Hello Admin!</h2>
          <p className="text-gray-500 mb-6">Welcome back you’ve been missed!</p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter username"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
            />
            <div className="text-right">
              <a href="/forgot-password" className="text-sm text-rose-600 hover:underline">
                Recovery Password
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-red-400 hover:bg-red-500 text-white font-semibold py-3 rounded-lg transition"
            >
              Sign In
            </button>
          </form>

          {/* Social Logins */}
          <div className="mt-6">
            <p className="text-center text-gray-500">Or continue with</p>
            <div className="flex justify-center mt-3 space-x-4">
              <button className="p-3 bg-gray-100 rounded-lg shadow hover:shadow-md">
                <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-6 h-6" />
              </button>
              <button className="p-3 bg-gray-100 rounded-lg shadow hover:shadow-md">
                <img src="https://www.svgrepo.com/show/511330/apple-173.svg" alt="Apple" className="w-6 h-6" />
              </button>
              <button className="p-3 bg-gray-100 rounded-lg shadow hover:shadow-md">
                <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
