import React from "react"
import { motion } from "framer-motion"
import Logo from "../../assets/Logo.png"
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"

const Footer = ({ sectionVariants }) => {
  const socialLinks = [
    { icon: <FaFacebook />, href: "https://facebook.com" },
    { icon: <FaInstagram />, href: "https://instagram.com" },
    { icon: <FaTwitter />, href: "https://twitter.com" },
    { icon: <FaYoutube />, href: "https://youtube.com" },
  ]

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
      className="bg-rose-50 text-gray-700 py-14"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand Section */}
          <motion.div
            className="md:col-span-1"
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0, transition: { delay: 0.1 } },
            }}
          >
            <div className="flex items-center mb-6">
              <img src={Logo} alt="Logo" className="w-25" />
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Creating sweet memories with premium custom cakes and interactive
              3D design experiences.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-rose-400 hover:text-white hover:bg-rose-400 transition"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.2 } },
            }}
          >
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/cake-category-browse", text: "Browse Cakes" },
                { href: "/3d-custom-cake-designer", text: "Custom Designer" },
                { href: "/shopping-cart-checkout", text: "Cart" },
                { href: "/order-tracking-history", text: "Track Order" },
              ].map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                >
                  <motion.a
                    href={link.href}
                    className="text-gray-600 hover:text-rose-400 transition"
                    whileHover={{ x: 5 }}
                  >
                    {link.text}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.3 } },
            }}
          >
            <h3 className="font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              {["Bento Cakes", "Birthday Cakes", "Wedding Cakes", "Seasonal Specials"].map(
                (category, index) => (
                  <motion.li
                    key={category}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                  >
                    <motion.a
                      href="/cake-category-browse"
                      className="text-gray-600 hover:text-rose-400 transition"
                      whileHover={{ x: 5 }}
                    >
                      {category}
                    </motion.a>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.4 } },
            }}
          >
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>📞 (555) 123-CAKE</li>
              <li>✉ hello@cuppiecake.com</li>
              <li>📍 123 Sweet Street, Bakery District</li>
              <li>🕒 Mon-Sat: 8AM - 8PM</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-300 mt-10 pt-6 text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p>
            &copy; {new Date().getFullYear()} Cuppie Cake. All rights reserved. |{" "}
            <a href="/privacy-policy" className="hover:underline">Privacy Policy</a> |{" "}
            <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
