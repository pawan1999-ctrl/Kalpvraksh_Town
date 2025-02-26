import { useTheme } from "./Context/Theme"; // Import Theme Context

const Footer = () => {
  const { darkMode } = useTheme(); // Get dark mode state

  // Define background images for both themes
  const backgroundImage = darkMode
    ? "url(./footerbackground.png)" // Dark mode background
    : "url(./footerbackgroundlight.png)"; // Light mode background

  return (
    <div
      className="border-t-2 border-neutral-800 pt-9"
      style={{ background: backgroundImage, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <footer className="text-white text-center py-10 px-5">
        {/* First Row: One Logo Centered */}
        <div className="flex justify-center mb-6">
          <img src="/logo.png" alt="Kalpavraksh Hills" className="w-40" />
        </div>

        {/* Second Row: Two Logos in Flex */}
        <div className="flex justify-center space-x-10 mb-6">
          <div><img src="/dani_logo.png" alt="Dani Buildcon" className="w-24" /></div>
          <div className="border-r"></div>
          <div><img src="/sunshine_logo.png" alt="Sunshine Group" className="w-24" /></div>
        </div>

        {/* Third Row: Address Centered */}
        <p className="font-poppins text-lg font-light">
          Site Address : Bihadiya Road, Near Mahendipur Balaji Mandir, Indore (M.P)
        </p>

        {/* Fourth Row: Contact Centered */}
        <p className=" font-poppins text-lg font-semibold mt-2">
          Contact: 9238716001, 9977776349
        </p>

        {/* Fifth Row: Email Centered */}
        <p className="text-lg mt-2">
          Email:{" "}
          <a
            href="mailto:danibuildcon@gmail.com"
            className="text-blue-400 hover:underline"
          >
            danibuildcon@gmail.com
          </a>
        </p>

        {/* Sixth Row: Three QR Codes in Flex */}
        <div className="flex justify-center space-x-8 mt-6">
          <div className="text-center">
            <img src="/insta_Qr.png" alt="Instagram QR" className="w-24 mx-auto" />
            <p className="text-sm mt-2 font-poppins">Scan QR to Visit Instagram</p>
          </div>
          <div className="text-center">
            <img src="/video_Qr.png" alt="Video QR" className="w-24 mx-auto" />
            <p className="text-sm mt-2 font-poppins">Scan QR to See Video</p>
          </div>
          <div className="text-center">
            <img src="/website_Qr.png" alt="Website QR" className="w-24 mx-auto" />
            <p className="text-sm mt-2 font-poppins">Scan QR to Visit Website</p>
          </div>
        </div>

        {/* Eighth Row: RERA Registration Number in h4 */}
        <h4 className="mt-6 text-lg font-semibold">
          RERA REGISTRATION NUMBER: P-IND-24-4668
        </h4>

        {/* Disclaimer */}
        <p className="font-poppins mt-4 text-xs text-gray-300 px-4 border-t flex items-start justify-center py-4">
          The Concept Of This Brochure Is Purely Conceptual And No Legal Binding Onus. The Builder Reserves The Right To Amend The Same Without Prior Notice.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
