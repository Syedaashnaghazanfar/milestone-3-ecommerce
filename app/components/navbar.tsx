import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa'; // Import shopping cart icon

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white py-4 px-6 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold mb-2">
            Shop<span className="text-yellow-300">Easy</span>
          </div>

      {/* Navigation Links */}
      <ul className="text-md flex items-center space-x-6">
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

      {/* Shopping Cart Icon */}
      <div className="flex items-center space-x-2">
        <Link href="/cart" className="hover:text-blue-300 transition-colors duration-300 flex items-center">
          <FaShoppingCart className="text-2xl" />
          <span className="ml-1 text-lg">Cart</span>
        </Link>
      </div>
    </nav>
  );
}
