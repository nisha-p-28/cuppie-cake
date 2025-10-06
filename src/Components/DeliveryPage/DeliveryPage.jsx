import React, { useState } from "react";
import BakeryImg from "../../assets/wedding-cake.png"; 
import { IoLocationOutline } from "react-icons/io5";


const DeliveryOptions = () => {
  const [option, setOption] = useState("delivery"); 

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      {/* Left Side Image */}
      <div className="bg-rose-100 flex items-center justify-center">
        <img
          src={BakeryImg}
          alt="Bakery"
          className="max-w-md w-full object-contain"
        />
      </div>

      {/* Right Side Options */}
      <div className="flex items-center justify-center bg-white">
        <div className="w-full max-w-md text-center p-5">
          {/* Tabs */}
          <div className="flex justify-center gap-10 mb-6 border-b">
            <button
              onClick={() => setOption("delivery")}
              className={`pb-2 font-medium ${
                option === "delivery"
                  ? "border-b-2 border-rose-400 text-rose-400"
                  : "text-gray-500"
              }`}
            >
              DELIVERY
            </button>
            <button
              onClick={() => setOption("pickup")}
              className={`pb-2 font-medium ${
                option === "pickup"
                  ? "border-b-2 border-rose-400 text-rose-400"
                  : "text-gray-500"
              }`}
            >
              PICKUP
            </button>
          </div>

          {/* Content */}
          {option === "delivery" ? (
            <>
              <p className="text-gray-700 mb-6 flex items-center justify-center gap-2">
                <span className="text-xl"><IoLocationOutline /></span>
                Select an option to get started
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
                <button className="whitespace-nowrap px-5 py-2.5 bg-rose-400 text-white rounded-lg hover:bg-rose-500">
                    Use my current location
                </button>
                    {/* <p className="justify-center aling-middel ">OR</p> */}
                <button className="whitespace-nowrap px-5 py-2.5 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
                    Enter the delivery location
                </button>
            </div>
            </>
          ) : (
            <div className="text-gray-700">
                <p className="text-gray-700 mb-6 flex items-center justify-center gap-2">
                <span className="text-xl"><IoLocationOutline /></span>
                Select an option to get started
              </p>
               <button className="whitespace-nowrap px-5 py-2.5 bg-rose-400 text-white rounded-lg hover:bg-rose-500">
                  Select Pickup Outlet
                </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeliveryOptions;
