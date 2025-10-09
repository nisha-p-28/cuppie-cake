import React from 'react';
import { FaShoppingBag, FaTruck, FaGift } from 'react-icons/fa';

const services = [
  {
    icon: <FaShoppingBag />,
    title: 'NEW PICK UP SERVICE',
    subtitle: 'Get it fresh',
  },
  {
    icon: <FaTruck />,
    title: 'FREE DELIVERY',
    subtitle: 'Delivered to your door step',
  },
  {
    icon: <FaGift />,
    title: 'SPECIAL GIFT WRAPS',
    subtitle: 'Send a sweet surprise',
  },
];

const IconList = () => {
  return (
    <div className="bg-white py-16 px-4 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center border-t border-b border-rose-200 py-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center px-4 border-l border-r border-rose-200"
          >
            <div className="text-4xl text-rose-400 bg-pink-100 p-4 rounded-full shadow-md mb-4">
              {service.icon}
            </div>
            <h3 className="text-md font-semibold uppercase text-gray-800 mb-1 tracking-wide">
              {service.title}
            </h3>
            <p className="text-gray-500 text-sm">{service.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconList;