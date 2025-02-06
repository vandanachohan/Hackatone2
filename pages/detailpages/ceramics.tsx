import React from "react";

import Image from "next/image";
import Nav from "../components/TopNav";
import Card from "../components/card";
import Feature from "../components/feature";
import ProductCard from "../components/ProductCard";
import Footer from "../components/footer";

export default function HeroSection() {
  return (
    <div>
      <Nav />
      <section className="relative flex flex-col lg:flex-row items-center justify-between gap-8 p-20 lg:p-44 bg-gray-50">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Tableset.jpeg"
            alt="Luxury homeware background featuring a beautifully set dining table"
            fill
            style={{ objectFit: "cover" }}
            priority
            className="rounded-lg"
          />
        </div>

        {/* Right Section: Text Content */}
        <div className="relative z-10 lg:w-1/2 lg:ml-auto bg-white bg-opacity-90 p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-[#1b0f41] leading-tight mb-6">
            Luxury homeware for people who love timeless design quality
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Shop the new Spring 2022 collection today.
          </p>
          <button
            className="bg-[#1b0f41] text-white py-3 px-6 rounded-lg hover:bg-[#705bb5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8773c9]"
            aria-label="View collection"
          >
            View collection
          </button>
        </div>
      </section>
      <Feature />
      <ProductCard />
      <Card />
      <Footer />
    </div>
  );
}
