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
      {/* Newsletter Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
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
            className="w-full sm:w-96 px-4 py-3 rounded-md  focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button className="px-6 py-3 bg-red-500 rounded-md font-semibold hover:bg-red-600 transition-all duration-300 shadow-lg">
            Subscribe
          </button>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-600 transition-all duration-300"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-pink-500 transition-all duration-300"
          >
            <FaInstagram />
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-600 transition-all duration-300"
          >
            <FaYoutube />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-700 transition-all duration-300"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-sky-500 transition-all duration-300"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 text-center py-6 text-sm text-gray-400">
        © 2026 NGO. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
