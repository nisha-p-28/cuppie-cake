import React from "react";
import CakeImage from "../../assets/custom-cake.png";

const CustomThemeCake = () => {
  return (
    <section className="bg-gradient-to-br from-pink-50 via-rose-100 to-peach-100 justify-center items-center py-16 px-6">
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-red-400">
          Customised <span className="text-gray-900">Theme Cakes</span>
        </h2>
        <p className="text-gray-500 mt-2">
          Crafted with love, designed to make your celebrations sweeter
        </p>
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[60%_40%] gap-12 items-center">
        {/* Text Section */}
        <div className="flex flex-col justify-center text-left px-4 ">
          <p className="text-gray-700 text-[16px] mb-6 leading-relaxed">
            We handcraft and customize celebration cakes for all special
            occasions. From theme-based and personalized birthday cakes to
            exquisite multi-tiered wedding cakes, we make every moment sweeter
            with love and creativity!
          </p>

          <p className="text-gray-600 text-[16px] mb-10">
            Write to us with your customized theme cake requirements at{" "}
            <span className="text-rose-400 font-semibold">
              contact@cuppiecake.in
            </span>
          </p>

          
        </div>

        {/* Image Section */}
        <div className="flex justify-center align-center">
          <img
            src={CakeImage}
            alt="Custom Theme Cake"
            className="w-[250px] h-auto object-contain drop-shadow-xl"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <button className="text-white bg-rose-400 px-6 py-3 rounded-lg hover:bg-rose-500 transition">
            Customize My Cake
        </button>
      </div>
    </section>
  );
};

export default CustomThemeCake;
