import React from 'react';
import { GiCupcake } from "react-icons/gi";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import Banner from "../../assets/banner-1.jpg"


const ContactUs = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-start py-12 px-6 font-sans">
    {/* Page Title with Banner Background */}
    <div
        className="w-full bg-cover bg-center py-20 px-6 text-center rounded-xl shadow-md mb-12"
        style={{ backgroundImage: `url(${Banner})` }}
    >
        <h2 className="text-4xl font-bold text-white drop-shadow mb-4">
        Contact Cuppie Cake
        </h2>
        <p className="text-white max-w-xl mx-auto drop-shadow">
        We'd love to hear from you! Whether you have a sweet idea, a custom order, or just want to say hi—drop us a message below.
        </p>
    </div>


      {/* Contact Info Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 w-full max-w-6xl mx-auto">
        {[
            { icon: <MdPhone />, label: 'Phone', value: '(+91) 9876543210' },
            { icon: <MdEmail />, label: 'Email', value: 'hello@cuppiecake.com' },
            { icon: <MdLocationOn />, label: 'Location', value: 'Nagpur, MH, India' },
        ].map((info, idx) => (
            <div
            key={idx}
            className="bg-rose-50 rounded-xl shadow-md p-6 text-center border border-rose-100 my-6 flex flex-col items-center"
            >
            <div className="mb-4">
                <div className="flex justify-center items-center">
                <div className="text-5xl shadow-md p-5 rounded-full bg-pink-100 text-rose-400">
                    {info.icon}
                </div>
                </div>
            </div>
            <h3 className="text-lg font-semibold text-rose-400 mb-2">{info.label}</h3>
            <p className="text-gray-500">{info.value}</p>
            </div>
        ))}
        </div>

      {/* Contact Form + Map */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-6xl">
        {/* Form */}
        <form className="bg-white rounded-xl shadow-md p-8 space-y-5 border border-rose-100">
          <h3 className="text-2xl font-bold text-rose-400 mb-4">Send Us a Message</h3>
          <input type="text" placeholder="Name" className="w-full border border-rose-200 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-300" />
          <input type="email" placeholder="Email" className="w-full border border-rose-200 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-300" />
          <input type="tel" placeholder="Phone" className="w-full border border-rose-200 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-300" />
          <input type="text" placeholder="Subject" className="w-full border border-rose-200 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-300" />
          <textarea placeholder="Message" rows="4" className="w-full border border-rose-200 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-300"></textarea>
          <button type="submit" className="bg-rose-400 text-white px-6 py-3 rounded-2xl hover:bg-rose-500 transition">
            Send Message
          </button>
        </form>

        {/* Map */}
        <div className="rounded-xl overflow-hidden shadow-md border border-rose-100">
          <iframe
            title="Cuppie Cake Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.123456789!2d79.0881234!3d21.1456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c123456789%3A0xabcdef123456789!2sNagpur%2C%20MH!5e0!3m2!1sen!2sin!4v1600000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;