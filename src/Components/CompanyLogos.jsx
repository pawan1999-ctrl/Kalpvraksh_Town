import React from "react";
import { img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11 } from "../assets";
import Heading from "./Heading";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
       <Heading
          className="max-w-sm md:max-w-md lg:max-w-4xl text-center mx-auto"
          title="A Glimpse into Life at Kalpavraksh Hills"
        />
      <div className="mt-10 flex overflow-hidden space-x-16 border-gray-500 relative">
        {/* Animated scrolling container */}
        <div className="flex space-x-8 animate-loop-scroll group-hover:paused">
          {images.map((img, index) => (
            <img key={index} loading="lazy" src={img} className="max-w-none w-[300px] h-[200px]" alt={`Image ${index + 1}`} />
          ))}
        </div>

        {/* Duplicate for seamless effect */}
        <div className="flex space-x-8 animate-loop-scroll group-hover:paused" aria-hidden="true">
          {images.map((img, index) => (
            <img key={`duplicate-${index}`} loading="lazy" src={img} className="max-w-none w-[300px] h-[200px]" alt={`Duplicate Image ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
