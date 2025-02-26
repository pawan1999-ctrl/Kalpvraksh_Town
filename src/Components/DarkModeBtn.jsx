import { Sun, Moon } from "lucide-react";
import {useTheme} from "./Context/Theme";
const DarkModeBtn = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <button
      onClick={toggleDarkMode}
      className={`relative w-32 h-10 flex  items-center  rounded-full border-2 border-neutral-600 shadow-xl hover:cursor-pointer transition-all duration-300`}
    >
      <div
        className={`absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-8 bg-white rounded-full flex items-center justify-center transition-all duration-500 ${
          darkMode ? "translate-x-16" : "translate-x-0"
        }`}
      >
        {darkMode ? (
          <Moon size={28} className="text-blue-700" />
        ) : (
          <Sun size={28} className="text-yellow-500" />
        )}
      </div>

      <div className="flex w-full justify-between items-center px-5 text-white font-semibold">
        <Sun size={24} />
        <Moon size={24} />
      </div>
    </button>
  );
};

export default DarkModeBtn;