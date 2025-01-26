"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
// import FourProducts from "./components/fourproducts/page";
import dynamic from "next/dynamic";

const FourProducts = dynamic(() => import("./components/fourproducts/page"), {
  ssr: false,
});

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/images/dis4.jpg", "/images/dis2.jpg", "/images/dis6.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (

    <div className="bg-gradient-to-b from-blue-50 via-white to-blue-100 min-h-screen text-black">

      {/* Banner Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-16 gap-8">

        {/* Discount Image */}
        <div
          className="relative w-full md:w-1/2 mb-6 md:mb-0 animate-fadeIn"
          style={{ animationDelay: "0.2s" }}
        >
          <Image
            src={images[currentImage]}
            alt="Discount Banner"
            width={500}
            height={400}
            className="object-cover rounded-lg shadow-lg w-full h-[200px] lg:h-[400px] md:h-[300px] transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>

        {/* Text Section */}
        <div
          className="w-full md:w-1/2 text-center md:text-left pl-8 animate-slideIn"
          style={{ animationDelay: "0.4s" }}
        >
          <h2 className="text-5xl font-extrabold text-darkBlue mb-4">
            Shop<span className="text-yellow-500">Easy</span>
          </h2>
          <h3 className="text-3xl font-medium text-gray-700 mb-6">
            Reliable Clothing with Exclusive Discounts
          </h3>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Discover a wide range of high-quality clothing at unbeatable prices. 
            ShopEasy is your one-stop destination for style, comfort, and affordability.
          </p>

          {/* Call-to-Action */}
          <div className="flex justify-center md:justify-start mb-6">
            <a
              href="/products"
              className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-md font-semibold text-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Start Shopping
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center md:justify-start space-x-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-3xl text-gray-500 hover:text-blue-500 transform transition-transform duration-300 hover:rotate-12" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-3xl text-gray-500 hover:text-blue-500 transform transition-transform duration-300 hover:rotate-12" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-3xl text-gray-500 hover:text-blue-500 transform transition-transform duration-300 hover:rotate-12" />
            </a>
          </div>
        </div>
      </div>
      <FourProducts />
      
      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideIn {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out;
        }
        .animate-slideIn {
          animation: slideIn 1s ease-in-out;
        }
      `}</style>
      
    </div>
  );
}
