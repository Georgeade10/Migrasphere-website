import React from 'react';
import Home from './pages/Home';
import OverlaySection from './pages/OverlaySection';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />

      <Home />
      <Page1 />
      <OverlaySection />
      <Page2 />
      <Page3 />
      <Page4 />
      <AboutUs />
      <Footer />
    </>
  );
}

export default App;
