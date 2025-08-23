import { FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white py-6 sm:py-8 md:py-10 mt-10 sm:mt-16 md:mt-20" style={{
          backgroundImage: "url('/bg_fream.jpg')", // replace with your image path
        }}>
      <div className="container mx-auto flex flex-col items-center space-y-3 sm:space-y-4 px-4 sm:px-6 md:px-8">
        {/* Logo */}
        <img
          src="/jcicon.png" // replace with your logo path
          alt="Logo"
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
        />

        {/* Tagline */}
        <p className="text-orange-500 font-semibold tracking-wide sm:tracking-wider text-center text-sm sm:text-base md:text-lg px-4">
          TRADITION - TASTE - ROYALTY
        </p>

        {/* Social Links */}
        <div className="flex space-x-3 sm:space-x-4">
          <a
            href="#"
            className="border border-white p-1.5 sm:p-2 rounded-full hover:bg-orange-500 transition duration-300"
          >
            <FaInstagram size={16} className="sm:w-[18px] sm:h-[18px]" />
          </a>
          <a
            href="#"
            className="border border-white p-1.5 sm:p-2 rounded-full hover:bg-orange-500 transition duration-300"
          >
            <FaWhatsapp size={16} className="sm:w-[18px] sm:h-[18px]" />
          </a>
          <a
            href="#"
            className="border border-white p-1.5 sm:p-2 rounded-full hover:bg-orange-500 transition duration-300"
          >
            <FaFacebookF size={16} className="sm:w-[18px] sm:h-[18px]" />
          </a>
        </div>
      </div>

      {/* Optional background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: "url('/footer-bg.jpg')", // replace with your image path
        }}
      ></div>
    </footer>
  );
}
