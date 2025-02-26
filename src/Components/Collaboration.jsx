import {check } from "../assets";
import {collabContent } from "../constants";
import Section from "./Sections";

import { useTheme } from "./Context/Theme"; // Import Theme Context

const Collaboration = () => {
  const { darkMode } = useTheme(); // Get dark mode state

  return (
    <Section crosses>
      <div className="container lg:flex pt-6">
        <div className="">
          {/* Updated h2 with dynamic text color */}
          <h2
            className={`h2 mb-4 md:mb-8 ${
              darkMode ? "text-white" : "text-[#013A31]" // Change text color in light mode
            }`}
          >
            Live the Life You Deserve - Nature and Luxury
          </h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6
                    className={`body-2 ml-5 ${
                      darkMode ? "text-white" : "text-[#013A31]" // Change h6 text color in light mode
                    }`}
                  >
                    {item.title}
                  </h6>
                </div>
                {item.text && (
                  <p
                    className={`body-2 mt-3 ${
                      darkMode ? "text-n-4" : "text-[#025F50]" // Change paragraph text color in light mode
                    }`}
                  >
                    {item.text}
                  </p>
                )}
              </li>
            ))}
          </ul>

          {/* <Button>Try it now</Button> */}
        </div>

        <div className="w-full grid gap-4 md:w-2/3">
          {/* First Row: One Landscape Image */}
          <div className="w-full shadow-[0_5px_45px] shadow-slate-600 rounded-lg overflow-hidden">
            <img
              src="./City_Image.jpg"
              alt="Landscape"
              className="w-full h-auto rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>

          {/* Second Row: Two Column Images */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="shadow-slate-600 shadow-[0_5px_25px] ">
              <img
                src="./Night_Entrance.jpg"
                alt="Image 1"
                className="w-full contain h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="shadow-slate-600 shadow-[0_5px_25px] overflow-hidden">
              <img
                src="./img4.png"
                alt="Image 2"
                className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
