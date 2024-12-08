import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <main className="py-10 px-4 sm:px-8 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center justify-between bg-[#1b0f41] text-white lg:mt-1">
        {/* Left Section */}
        <div className="mt-1 max-w-lg lg:p-9 px-8 py-12 md:px-20 md:py-10">
          <div className="text-1xl md:text-1xl lg:text-2xl font-serif mb-6 text-base lg:mt-1">
            The furniture brand for the 
            <h2 className="text-1xl md:text-1xl lg:text-2xl font-serif mb-6 text-base">
              future, with timeless designs
            </h2>
            <button className="text-gray-100 bg-[#8773c9] py-3 px-6 rounded hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 mb-6">
              View collection
            </button>
            <p className="text-sm sm:text-base md:text-lg text-gray-300">
              A new era in eco-friendly furniture with Avelon, the French luxury
              retail brand with nice fonts, tasteful colors, and a beautiful way to
              display things digitally using modern web technologies.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="mt-20 lg:mt-0">
          <Image
            src="/cheyer.jpeg"
            alt="Modern chair"
            className="object-contain"
            width={500}
            height={300} // Adjust based on your image's aspect ratio
            layout="responsive"
          />
        </div>
      </div>
    </main>
  );
}
