import React from "react";
import { ThemeProvider } from "./Components/Context/Theme.jsx"; // Import ThemeProvider
import Collaboration from "./components/Collaboration";
import Amenities from "./components/Amenities";
import Gallery from "./components/Gallery";
import TownMap from "./components/TownMap";
import Footer from "./components/Footer";
import Header from "./Components/Header.jsx";
import Hero from "./Components/Hero.jsx";
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
