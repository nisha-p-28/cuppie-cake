import React from "react"
import { motion } from "framer-motion"
import BgImg from "../../assets/banner.png"

const bgImageStyle = {
  backgroundImage: `url(${BgImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  width: "100vw",
}

const Hero = () => {
  return (
    <main style={bgImageStyle}>
      <section className="w-full h-full flex items-center justify-center">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <motion.div
            className="flex flex-col items-center text-center space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Headline */}
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Freshly Baked Happiness, Just for You
            </motion.h1>

            {/* Sub-text */}
            <motion.p
              className="text-lg text-white/90 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              From classic breads to custom-designed cakes, we bring sweetness
              to every occasion.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col md:flex-row gap-4 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              <motion.a
                href="/order"
                className="px-6 py-3 bg-rose-400 text-white rounded-xl hover:bg-rose-500 transition shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Order Now
              </motion.a>
              <motion.a
                href="/menu"
                className="px-6 py-3 bg-white text-rose-400 rounded-xl hover:bg-gray-100 transition shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Menu
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default Hero
