import React from "react";
import { motion } from "framer-motion";

// Import your own local images
import bentoCake from "../../assets/bento-cake.jpg";
import birthdayCake from "../../assets/birthday-cake.jpg";
import weddingCake from "../../assets/wedding-cake.jpg";
import seasonalCake from "../../assets/seasonal-cake.jpg";

const categories = [
  { id: 1, title: "Bento Cakes", image: bentoCake },
  { id: 2, title: "Birthday Cakes", image: birthdayCake },
  { id: 3, title: "Wedding Cakes", image: weddingCake },
  { id: 4, title: "Seasonal Specials", image: seasonalCake },
];

const Highlight = () => {
  return (
    <section className="py-16 bg-white justify-center items-center">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-red-400">Our Highlights</h2>
        <p className="text-gray-500 mt-2">Perfect cakes for every occasion</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-5">
        {categories.map((cat, index) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer"
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold">{cat.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

    <div className="flex justify-center mt-10">
      <button className="text-white bg-rose-400 px-6 py-3 rounded-lg hover:bg-rose-500">
        View More
      </button>
    </div>    
  </section>
  );
};

export default Highlight;
