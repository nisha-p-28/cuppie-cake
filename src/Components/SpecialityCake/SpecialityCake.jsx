import React from "react";
import bentoCake from "../../assets/bento-cake.jpg";
import birthdayCake from "../../assets/birthday-cake.jpg";
import weddingCake from "../../assets/wedding-cake.jpg";
import seasonalCake from "../../assets/seasonal-cake.jpg";
import bannerImage from "../../assets/speciality-banner.jpg"; // add your banner image here

const SpecialityCakes = () => {
  const cakes = [
    { id: 1, title: "Bento Cakes", image: bentoCake },
    { id: 2, title: "Birthday Cakes", image: birthdayCake },
    { id: 3, title: "Wedding Cakes", image: weddingCake },
    { id: 4, title: "Seasonal Specials", image: seasonalCake },
  ];

  return (
    <section className="font-sans bg-gradient-to-b from-pink-50 via-rose-50 to-white">
      {/* -------- Banner Section -------- */}
      <div className="relative w-full h-[280px] md:h-[380px] lg:h-[420px] flex items-center justify-center text-center overflow-hidden">
        <img
          src={bannerImage}
          alt="Speciality Cakes Banner"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-white px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">Our Speciality Cakes</h1>
          <p className="text-sm md:text-lg text-gray-100 max-w-xl mx-auto">
            Every cake is crafted with love, creativity, and perfection — just for you!
          </p>
        </div>
      </div>

      {/* -------- Cakes Grid Section -------- */}
      <div className="max-w-7xl mx-auto py-16 px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-rose-500 mb-2">
            Explore Our Range
          </h2>
          <p className="text-gray-600">
            From intimate celebrations to grand events — we have a cake for every occasion!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cakes.map((cake) => (
            <div
              key={cake.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 border border-gray-100"
            >
              <img
                src={cake.image}
                alt={cake.title}
                className="w-full h-56 object-cover rounded-t-xl"
              />
              <div className="p-5 text-center">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                  {cake.title}
                </h3>
                <button className="bg-rose-400 hover:bg-rose-500 text-white font-medium px-5 py-2 rounded-full mt-3 transition">
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* -------- Bottom Section -------- */}
      <div className="bg-rose-50 py-14 px-6 md:px-16 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-rose-500 mb-4">
          Crafted with Passion & Perfection 💕
        </h3>
        <p className="text-gray-700 max-w-3xl mx-auto mb-6">
          Whether you’re planning a surprise for someone special or celebrating life’s biggest
          moments, our speciality cakes are baked fresh with top-quality ingredients and decorated
          to perfection. Let us make your celebration truly unforgettable!
        </p>
        <button className="bg-rose-400 hover:bg-rose-500 text-white font-semibold px-8 py-3 rounded-full shadow-md transition">
          Customize Your Cake
        </button>
      </div>
    </section>
  );
};

export default SpecialityCakes;
