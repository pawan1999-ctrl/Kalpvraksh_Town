import TagLine from "./Tagline";
import { useTheme } from "./Context/Theme"; // Import Theme Context

const Heading = ({ className, title, text, tag }) => {
  const { darkMode } = useTheme(); // Get dark mode state

  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {tag && <TagLine className="mb-4 md:justify-center">{tag}</TagLine>}

      {/* Title */}
      {title && (
        <h2
          className={`h2 ${
            darkMode ? "text-white" : "text-[#013A31]" // Change color in light mode
          }`}
        >
          {title}
        </h2>
      )}

      {/* Text */}
      {text && (
        <p
          className={`body-2 mt-4 ${
            darkMode ? "text-n-4" : "text-[#025F50]" // Change color in light mode
          }`}
        >
          {text}
        </p>
      )}
    </div>
  );
};

export default Heading;
