import { useState } from "react";
import Section from "./Sections";
import Heading from "./Heading";

const Collaboration = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Section crosses>
      <div className="container">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Your Guide to Every Street"
        />
        <div className="flex justify-center mt-6">
          <div
            className="w-full max-w-4xl rounded-lg shadow-lg relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Image */}
            <img
              src="./mapimg.jpeg"
              alt="Street Guide"
              className="w-full h-auto object-cover rounded"
            />
            
            {/* Overlay + Button */}
            <div
              className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <a
                href="https://www.google.com/maps/place/Kalpvraksh+Hills+township+By+Dani%E2%80%99s+(best+township+in+Indore)/@22.6570679,75.9231994,17z/data=!3m1!4b1!4m6!3m5!1s0x3962e5390b1d7137:0xfddf0ab63e95a849!8m2!3d22.6570679!4d75.9231994!16s%2Fg%2F11vp_fc59y?entry=ttu&g_ep=EgoyMDI1MDIxOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg text-lg transition-transform transform hover:scale-105"
              >
                Explore Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
