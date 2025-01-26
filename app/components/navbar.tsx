"use client";
import { useState } from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi"; // Import hamburger and close icons

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white py-4 px-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          Shop<span className="text-yellow-300">Easy</span>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex text-md space-x-6">
          <li>
            <Link href="/" className="hover:text-blue-300 transition-colors duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-300 transition-colors duration-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-blue-300 transition-colors duration-300">
              Products
            </Link>
          </li>
        </ul>

        {/* Shopping Cart */}
        <div className="flex items-center space-x-2">
          <Link href="/cart" className="hover:text-blue-300 transition-colors duration-300 flex items-center">
            <FaShoppingCart className="text-2xl" />
            <span className="ml-1 hidden md:inline text-lg">Cart</span>
          </Link>
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="mt-4 space-y-4 md:hidden text-center">
          <li>
            <Link
              href="/"
              className="block hover:text-blue-300 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block hover:text-blue-300 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="block hover:text-blue-300 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/cart"
              className="block hover:text-blue-300 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Cart
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
