import React from 'react';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* ShopEasy Logo */}
      <div className="flex items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Shop</h1>
        <h1 className="text-4xl font-bold text-yellow-500">Easy</h1>
      </div>

      {/* Empty Cart Message */}
      <div className="text-center p-6 bg-white rounded-lg shadow-md max-w-sm mx-auto">
        <p className="text-xl text-gray-700 mb-4">Your cart is empty.</p>
        <p className="text-gray-500">Looks like you haven't added anything to your cart yet. Start shopping now!</p>

        {/* Button to go back to shopping */}
        <Link href="/products">
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
              Continue Shopping
            </button>
        </Link>
      </div>
    </div>
  );
}

export default Page;
