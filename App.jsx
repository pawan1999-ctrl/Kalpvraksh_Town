import React from "react";
import { ThemeProvider } from "./Components/Context/Theme.jsx"; // Import ThemeProvider

import Amenities from "./Components/Amenities";
import Gallery from "./Components/Gallery";
import TownMap from "./Components/TownMap";
import Footer from "./Components/Footer";
import Header from "./Components/Header.jsx";
import Hero from "./Components/Hero.jsx";
import Collaboration from "./Components/Collaboration";

const App = () => {
  return (
    <ThemeProvider> {/* Wrap entire app in ThemeProvider */}
      <div className="overflow-hidden">
        <Header />
        <Hero />
        <Collaboration />
        <Amenities />
        <Gallery />
        <TownMap />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
