import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

// Import your local images
import cake1 from "../../assets/design1.webp";
import cake2 from "../../assets/design2.webp";
import cake3 from "../../assets/design3.webp";
import cake4 from "../../assets/design4.webp";
import cake5 from "../../assets/design5.jpg";
import cake6 from "../../assets/design6.webp";
import cake7 from "../../assets/design7.jpg";

const designs = [
  { id: 1, title: "Cake Design 1", image: cake1 },
  { id: 2, title: "Cake Design 2", image: cake2 },
  { id: 3, title: "Cake Design 3", image: cake3 },
  { id: 4, title: "Cake Design 4", image: cake4 },
  { id: 5, title: "Cake Design 5", image: cake5 },
  { id: 6, title: "Cake Design 6", image: cake6 },
  { id: 7, title: "Cake Design 7", image: cake7 },
];

const FeaturedCarousel = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured <span className="text-red-400">Trending Designs</span>
        </h2>

        {/* Carousel */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 }, 
          }}
        >
          {designs.map((design) => (
            <SwiperSlide key={design.id}>
              <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {design.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center mt-10">
      <button className="text-white bg-rose-400 px-6 py-3 rounded-lg hover:bg-rose-500">
        View More
      </button>
    </div>
      </div>
    </section>
  );
};

export default FeaturedCarousel;
