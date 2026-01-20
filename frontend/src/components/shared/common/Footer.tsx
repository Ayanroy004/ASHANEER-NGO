import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-linear-to-r from-gray-800 via-gray-900 to-black text-white mt-16">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        {/* Brand */}
        <div className="mb-10 flex flex-col items-center">
          {/* Logo */}
          <img
            src="/logo.png" // place logo in public folder
            alt="NGO Logo"
            className="mb-3 h-16 w-16 object-contain"
          />

          {/* Brand Name */}
          <h1 className="text-2xl font-extrabold tracking-wide">
            ASHANEER ANANDA ASHROY <span className="text-red-500">Foundation</span>
          </h1>

          {/* Tagline */}
          <p className="mt-2 max-w-md text-sm text-gray-400">
            Empowering lives. Building a better tomorrow.
          </p>
        </div>

        {/* Newsletter Section */}
        <h2 className="text-3xl font-bold mb-4">
          Stay Connected with Our Mission
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter and get updates on our latest initiatives,
          events, and impact stories.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full sm:w-96 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button className="px-6 py-3 bg-red-500 rounded-md font-semibold hover:bg-red-600 transition-all duration-300 shadow-lg">
            Subscribe
          </button>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6">
          {[
            {
              href: "https://facebook.com",
              icon: <FaFacebookF />,
              hover: "hover:bg-blue-600",
            },
            {
              href: "https://instagram.com",
              icon: <FaInstagram />,
              hover: "hover:bg-pink-500",
            },
            {
              href: "https://youtube.com",
              icon: <FaYoutube />,
              hover: "hover:bg-red-600",
            },
            {
              href: "https://linkedin.com",
              icon: <FaLinkedinIn />,
              hover: "hover:bg-blue-700",
            },
            {
              href: "https://twitter.com",
              icon: <FaTwitter />,
              hover: "hover:bg-sky-500",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 flex items-center justify-center rounded-full bg-white/10 transition-all duration-300 ${item.hover}`}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 text-center py-6 text-sm text-gray-400">
        © 2026 NGO Foundation. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
