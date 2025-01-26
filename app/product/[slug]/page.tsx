import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

// Defining the Product type
interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  priceWithoutDiscount: number;
  rating: number;
  ratingCount: number;
  sizes: string[];
  imageUrl: string;
}

// Function to generate static paths for all posts
export async function generateStaticParams() {
  const query = `*[_type == "product"]{ "slug": slug.current }`;
  const products = await client.fetch(query);

  return products.map((products: { slug: string }) => ({
    slug: products.slug,
  }));
}

// Fetch data for a specific post dynamically
export default async function PostPage({ params }: { params: { slug: string } }){
  const resolvedParams = await params; // Await the promise to resolve `params`
  const { slug } = resolvedParams;

  
  const query = `
    *[_type == "product" && slug.current == $slug][0]{
        _id,
        name,
        description,
       "slugCurrent": slug.current,
        price,
        discountPercentage,
        priceWithoutDiscount,
        rating,
        ratingCount,
        tags,
        sizes,
        "imageUrl": image.asset->url
    }
  `;
  const post = await client.fetch(query, { slug });

  
  if (!post) {
    return <p>Post not found</p>;
  }
  return (
    <div className="container mx-auto px-6 py-10">
      {/* Page Heading */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Product Details</h1>
      </header>
  
      {/* Product Details */}
      <div key={post._id} className="flex flex-col md:flex-row items-center gap-12 mb-12">
        {/* Product Image */}
        <div className="w-full md:w-1/2">
          <Image
            src={post.imageUrl}
            alt={post.name}
            width={400} // Adjusted to make the image slightly smaller
            height={400} // Adjusted to make the image slightly smaller
            className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out object-cover"
          />
        </div>
  
        {/* Product Info */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{post.name}</h2>
          <p className="text-lg text-gray-600 mb-6">{post.description}</p>
  
          {/* Price Section */}
          <p className="text-2xl font-semibold text-green-600 mb-2">
            ${post.price} <span className="text-gray-500 line-through">${post.priceWithoutDiscount}</span>
          </p>
          <p className="text-sm text-gray-500 mb-6">Discount: {post.discountPercentage}%</p>
  
          {/* Rating Section */}
          <p className="text-sm text-gray-700 mt-4 mb-6">
            Rating: {post.rating} ({post.ratingCount} reviews)
          </p>
  
          {/* Sizes Section */}
          <div className="mt-6 mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Available Sizes:</h3>
            <div className="flex gap-4 flex-wrap">
              {post.sizes.map((size: string) => (
                <span
                  key={size}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
  
          {/* Add to Cart Button */}
          <Link href="/cart" className="mt-6 inline-block">
            <button className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
  

};
