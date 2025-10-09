// App.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Highlight from './Components/Highlight/Highlight';
import Services from './Components/Services/Services';
import Carousel from './Components/Carousel/Carousel';
import AppStore from './Components/AppStore/Appstore';
import DeliveryPage from './Components/DeliveryPage/DeliveryPage';
import Footer from './Components/Footer/Footer';
import MenuDashboard from './Components/MenuDashboard/MenuDashboard';
import ContactUs from './Components/ContactUs/ContactUs';
import AboutUs from './Components/AboutUs/AboutUs';
import ServiceHighlight from './Components/Services/ServiceHighlight';
import Custom from './Components/Custom/Custom'
import SpecialityCakes from './Components/SpecialityCake/SpecialityCake';


const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Highlight />
              <Services />
              <Carousel />
              <Custom />
              <ServiceHighlight />
              <AppStore />
            </>
          }
        />
        <Route path="/menu" element={<MenuDashboard />} />
        <Route path="/order" element={<DeliveryPage />} />
        <Route path="/cakes" element={<SpecialityCakes />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />

      </Routes>
      <Footer />
    </div>
  );
};

export default App;