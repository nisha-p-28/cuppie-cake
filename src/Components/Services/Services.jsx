import React from "react";
import { motion } from "framer-motion"; 
import BannerImg from "../../assets/cake.webp";
import { GiCupcake } from "react-icons/gi";
import { FaBirthdayCake } from "react-icons/fa";
import { LuDessert } from "react-icons/lu";


const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="bg-[#fdd5d9]">
        <div className="min-h-[450px] flex justify-center items-center py-16 px-6 sm:px-12">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
              
              {/* Cake Image with Motion */}
              
                <img
                  src={BannerImg}
                  alt="cake"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)] spin"
                />
            

              {/* Text Content */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0 px-4 sm:px-0">
                <h1
                  data-aos="fade-up"
                  className="text-3xl sm:text-4xl font-bold font-cursive text-gray-900"
                >
                  Delicious Cakes, Baked with Love
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-base text-gray-700 tracking-wide leading-6"
                >
                  From birthdays to weddings, our cakes are crafted with passion
                  and the finest ingredients to make your celebrations truly
                  memorable.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-5">
                    <div data-aos="fade-up" className="flex items-center gap-3">
                      <GiCupcake className="text-2xl h-12 w-12 shadow-md p-3 rounded-full bg-pink-100" />
                      <span className="font-medium text-gray-800">
                        Freshly Baked
                      </span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="300"
                      className="flex items-center gap-3"
                    >
                      <FaBirthdayCake className="text-2xl h-12 w-12 shadow-md p-3 rounded-full bg-purple-100" />
                      <span className="font-medium text-gray-800">
                        Custom Designs
                      </span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="500"
                      className="flex items-center gap-3"
                    >
                      <LuDessert className="text-2xl h-12 w-12 shadow-md p-3 rounded-full bg-yellow-100" />
                      <span className="font-medium text-gray-800">
                        Premium Taste
                      </span>
                    </div>
                  </div>

                  <div
                    data-aos="slide-left"
                    className="border-l-4 border-pink-400/60 pl-6 space-y-3"
                  >
                    <h1 className="text-2xl font-semibold font-cursive text-gray-900">
                      For Every Celebration
                    </h1>
                    <p className="text-sm text-gray-700 leading-6">
                      Whether it’s a birthday, wedding, or just a sweet craving,
                      our cakes add joy to every special moment.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Text Content */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
