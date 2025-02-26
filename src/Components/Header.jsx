import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import DarkModeBtn from "./DarkModeBtn";
import { useTheme } from "./Context/Theme"; // Import Theme Context

const Header = () => {
  const pathname = useLocation();
  const { darkMode } = useTheme(); // Get dark mode state from context
  const [openNavigation, setOpenNavigation] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Define logos for different themes
  const logoSrc = darkMode ? "./logo.png" : "./logoday.png";

  // Function to toggle navigation menu
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  // Close navigation when clicking on a menu item
  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  // Function to detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        openNavigation
          ? "bg-n-8"
          : scrolled
          ? darkMode
            ? "bg-n-8/90 backdrop-blur-sm" // Dark Mode Background on Scroll
            : "bg-[#DBEFCA]" // Light Mode Background on Scroll
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={logoSrc} width={150} height={20} alt="Kalpvraksh" />
        </a>

        {/* DarkModeBtn stays in place for mobile */}
        <div className="lg:hidden">
          <DarkModeBtn />
        </div>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[8rem] left-0 right-0 bottom-0 ${
            darkMode ? "bg-n-8" : "bg-[#DBEFCA]" // Change background color in light mode
          } lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="poppins text-2xl relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row lg:pr-44">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-poppins text-xl uppercase transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-sm lg:font-semibold lg:leading-5 xl:px-12 
                  ${
                    item.url === pathname.hash
                      ? "z-2" // Active link styling
                      : ""
                  } 
                  ${
                    darkMode
                      ? "text-n-1 lg:text-n-1/50 lg:hover:text-n-1" // Default text color for dark mode
                      : "text-[#013A31] lg:hover:text-[#013A31]" // Custom text color in light mode
                  } 
                  ${item.onlyMobile ? "lg:hidden" : ""}`}
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* DarkModeBtn appears at the end of navbar in desktop */}
          <div className="hidden lg:flex lg:ml-auto pt-6">
            <DarkModeBtn />
          </div>

          <HamburgerMenu />
        </nav>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
