import { sanityFetch } from "@/sanity/lib/fetch";
import { allproducts } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
//defining types for query
type Product = {
  _id: string;
  name: string;
  slug: { current: string };
  description: string;
  price: number;
  imageUrl: string;
  slugCurrent: string;
};

export default async function Home() {
  const products: Product[] = await sanityFetch({ query: allproducts });

  return (
    <div>
      {/* Heading */}
      <header className="text-center my-8">
        <h2 className="text-4xl font-bold text-gray-800">Our Products</h2>
      </header>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {products.map((product) => (
          <div
            key={product._id}
            className=" bg-gray-200 shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[300px]"
          >
            {/* Image */}
            <div className="w-full aspect-square flex justify-center items-center overflow-hidden rounded-t-lg bg-white">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
            {/* Content */}
            <div className="mt-4 flex flex-col flex-grow justify-between">
              <h3 className="text-xl font-semibold text-gray-700 text-center">
                {product.name}
              </h3>
              <p className="text-lg font-bold text-green-600 text-center mt-2">
                price: ${product.price}
              </p>
              <Link key={product.slugCurrent} href={`/product/${product.slugCurrent}`}>
                <span className="mt-4 block rounded- bg-blue-600 text-white px-4 py-2 text-center font-body text-sm font-bold uppercase hover:bg-blue-800">
                  View Product
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
