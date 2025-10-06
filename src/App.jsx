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
              <AppStore />
            </>
          }
        />
        <Route path="/order" element={<DeliveryPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;