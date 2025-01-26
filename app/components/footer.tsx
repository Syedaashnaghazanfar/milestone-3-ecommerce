import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import React from "react";

const footer = () => {
  return (
    <div className="bg-gray-200">
      <footer className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          {/* Text Logo */}
          <div className="text-2xl font-bold mb-4">
            Shop<span className="text-yellow-300">Easy</span>
          </div>

          {/* Divider Line */}
          <hr className="border-t-2 border-white opacity-50 w-2/3 mx-auto mb-4" />

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>

          {/* Footer Text */}
          <p className="text-sm">
            Made with <span className="text-red-400">&hearts;</span> by Ashna
            Ghazanfar
          </p>
        </div>
      </footer>
    </div>
  );
};

export default footer;
