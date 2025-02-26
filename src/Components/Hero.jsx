import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "./Context/Theme"; // Import Theme Context

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const layers = useRef([]);
  const { darkMode, toggleDarkMode } = useTheme(); // Use theme context

  useEffect(() => {
    gsap.to(layers.current, {
      y: (index) => index * 80, // Adjust depth for noticeable parallax
      ease: "power1.out",
      scrollTrigger: {
        trigger: layers.current[0], // Use the first layer as trigger
        start: "top top",
        end: "+=300%",
        scrub: 2,
      },
    });
  }, []);

  // Define image sets for both themes
  const images = {
    dark: {
      background: "/Hero/NightBackground2.png",
      mountain: "/Hero/mountains1new2.png",
      logo: "/Hero/logo_land1new2.png",
      jungle1: "/Hero/jungle1new2.png",
      jungle2: "/Hero/jungle2new2.png",
      jungle3: "/Hero/cityback2.png",
      cityFront: "/Hero/cityfront2.png",
      tree: "/Hero/kalpatreenewfinal.png",
    },
    light: {
      background: "/Hero/lightTheme/daybackgrpound.png",
      mountain: "/Hero/lightTheme/mountainday.png",
      logo: "/Hero/lightTheme/logolandday.png",
      jungle1: "/Hero/lightTheme/jungle1day.png",
      jungle2: "/Hero/lightTheme/jungle2day.png",
      jungle3: "/Hero/lightTheme/citybackday.png",
      cityFront: "/Hero/lightTheme/cityfrontday.png",
      tree: "/Hero/lightTheme/kalpatreenewday.png",
    },
  };

  const theme = darkMode ? "dark" : "light";

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gray-900">
      {/* Theme Toggle Button */}

      {/* Parallax Layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Background */}
        <div
          ref={(el) => (layers.current[0] = el)}
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${images[theme].background})` }}
        ></div>

        {/* Mountain Layer */}
        <div
          ref={(el) => (layers.current[1] = el)}
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center pointer-events-auto"
          style={{ backgroundImage: `url(${images[theme].mountain})` }}
        ></div>

        {/* Logo Layer */}
        <div
          ref={(el) => (layers.current[2] = el)}
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${images[theme].logo})` }}
        ></div>

        {/* Jungle 1 */}
        <div
          ref={(el) => (layers.current[3] = el)}
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${images[theme].jungle1})` }}
        ></div>

        {/* Centered Content */}
        <div
          ref={(el) => (layers.current[4] = el)}
          className="absolute inset-0 flex flex-col items-center justify-center text-center z-[7] transform translate-y-[-80px]"
        >
          <h1
            className={`aladin-regular text-4xl font-bold md:text-8xl bg-clip-text text-transparent ${
              darkMode
                ? "bg-gradient-to-b from-[#4C04DC] to-[#FFFAFA] " // Dark Mode Gradient
                : "bg-[#012F28]" // Light Mode Solid Color
            }`}
          >
            Kalpavraksh Hills
          </h1>
          <p
            className={`poppins-medium mt-2 text-lg md:text-xl ${
              darkMode ? "text-white" : "text-[#013A31]" // White in Dark Mode, Custom Green in Light Mode
            }`}
          >
            Modern Living, Rooted in Community Spirit
          </p>
        </div>

        {/* Jungle 2 */}
        <div
          ref={(el) => (layers.current[5] = el)}
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-[8]"
          style={{ backgroundImage: `url(${images[theme].jungle2})` }}
        ></div>

        {/* Jungle 3 */}
        <div
          ref={(el) => (layers.current[6] = el)}
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-[9]"
          style={{ backgroundImage: `url(${images[theme].jungle3})` }}
        ></div>

        {/* City Front */}
        <div
          ref={(el) => (layers.current[7] = el)}
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-[10]"
          style={{ backgroundImage: `url(${images[theme].cityFront})` }}
        ></div>

        {/* Extra 8th Image Layer */}
        <div
          ref={(el) => (layers.current[8] = el)}
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-[11]"
          style={{ backgroundImage: `url(${images[theme].tree})` }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
