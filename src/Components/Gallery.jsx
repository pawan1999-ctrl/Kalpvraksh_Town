import React from "react";
import CompanyLogos from "./CompanyLogos";
import { useTheme } from "./Context/Theme"; // Import Theme Context

const Gallery = () => {
  const { darkMode } = useTheme(); // Get dark mode state

  return (
    <div
      className={` ${
        darkMode ? "bg-transparent" : "bg-[#DBEFCA]" // Light mode background color change
      }`}
    >
      <CompanyLogos className=" relative z-10  lg:block" />
    </div>
  );
};

export default Gallery;
