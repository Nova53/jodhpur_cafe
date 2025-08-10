import { FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white py-10 mt-20">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        {/* Logo */}
        <img
          src="/jcicon.png" // replace with your logo path
          alt="Logo"
          className="w-16 h-16"
        />

        {/* Tagline */}
        <p className="text-orange-500 font-semibold tracking-wider text-center">
          TRADITION - TASTE - ROYALTY
        </p>

        {/* Social Links */}
        <div className="flex space-x-4">
          <a
            href="#"
            className="border border-white p-2 rounded-full hover:bg-orange-500 transition duration-300"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href="#"
            className="border border-white p-2 rounded-full hover:bg-orange-500 transition duration-300"
          >
            <FaWhatsapp size={18} />
          </a>
          <a
            href="#"
            className="border border-white p-2 rounded-full hover:bg-orange-500 transition duration-300"
          >
            <FaFacebookF size={18} />
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
