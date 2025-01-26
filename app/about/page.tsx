import React from "react";
import team1 from "@/public/images/team-1-user-1.jpg";
import team2 from "@/public/images/team-1-user-2.jpg";
import team3 from "@/public/images/team-1-user-3.jpg";
import Image from "next/image";
import bg from "@/public/images/about.jpg";

const AboutUs = () => {
  return (
    <div className="relative min-h-screen">

      {/* Full Background Image */}
      <div className="absolute inset-0">
        <Image
          src={bg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="filter brightness-50"
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 text-center text-white px-4 py-16">
        {/* About Us Section */}
        <div className="container mx-auto mb-16">
          <h2 className="text-5xl font-bold mb-6 animate-fade-in-up">About ShopEasy</h2>
          <p className="text-lg leading-8 max-w-3xl mx-auto mb-4 animate-fade-in-right">
            At <span className="font-semibold text-blue-400">ShopEasy</span>, we believe in making shopping
            convenient, reliable, and stress-free. From everyday essentials to luxury items, we offer a
            wide range of products to cater to all your needs. Our mission is to provide exceptional
            service, ensuring customer satisfaction at every step.
          </p>
          <p className="text-lg leading-8 max-w-3xl mx-auto animate-fade-in-right">
            With a dedicated team working tirelessly behind the scenes, we are committed to delivering
            quality, efficiency, and value to our customers. Shop with ease, trust, and confidence at
            ShopEasy.
          </p>
        </div>

        {/* Stats Section */}
        <div className="bg-white bg-opacity-20 rounded-lg py-10 px-4 max-w-4xl mx-auto animate-fade-in-up">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Metric 1 */}
            <div className="flex flex-col items-center">
              <h1 className="text-5xl font-bold text-white">15K</h1>
              <h5 className="text-lg font-medium">Happy Customers</h5>
            </div>
            {/* Metric 2 */}
            <div className="flex flex-col items-center">
              <h1 className="text-5xl font-bold text-white">150K</h1>
              <h5 className="text-lg font-medium">Monthly Visitors</h5>
            </div>
            {/* Metric 3 */}
            <div className="flex flex-col items-center">
              <h1 className="text-5xl font-bold text-white">15</h1>
              <h5 className="text-lg font-medium">Countries Worldwide</h5>
            </div>
            {/* Metric 4 */}
            <div className="flex flex-col items-center">
              <h1 className="text-5xl font-bold text-white">100+</h1>
              <h5 className="text-lg font-medium">Top Partners</h5>
            </div>
          </div>
        </div>

        {/* Our Team Section */}
        <div className="container mx-auto mt-16">
          <h2 className="text-4xl font-bold mb-12 animate-fade-in-up">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Team Member 1 */}
            <div className="bg-white bg-opacity-80 rounded-lg p-6 text-center animate-zoom-in">
              <Image
                src={team1}
                alt="Team Member 1"
                width={150}
                height={150}
                className="mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-gray-800">Alice Brown</h3>
              <p className="text-sm text-gray-600">CEO & Founder</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white bg-opacity-80 rounded-lg p-6 text-center animate-zoom-in">
              <Image
                src={team2}
                alt="Team Member 2"
                width={150}
                height={150}
                className="mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-sm text-gray-600">Head of Marketing</p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white bg-opacity-80 rounded-lg p-6 text-center animate-zoom-in">
              <Image
                src={team3}
                alt="Team Member 3"
                width={150}
                height={150}
                className="mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-sm text-gray-600">Lead Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
