import React, { useState } from "react";
import Image from "next/image";

export default function Chairs() {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="grid md:grid-cols-2 bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        {/* Left Side - Product Image */}
        <div className="relative h-80 md:h-auto">
          <Image src="/chear2.jpeg" alt="The Dandy Chair" layout="fill" objectFit="cover" />
        </div>

        {/* Right Side - Product Details */}
        <div className="p-6 md:p-10">
          <h1 className="text-3xl font-semibold text-gray-900">The Dandy Chair</h1>
          <p className="text-xl text-gray-700 mt-2">£250</p>

          <h2 className="text-lg font-medium text-gray-800 mt-6">Description</h2>
          <p className="text-gray-600 mt-2">
            A timeless design, with premium materials, featuring as one of our most popular and iconic pieces.
            The Dandy Chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.
          </p>

          <ul className="list-disc pl-5 mt-4 text-gray-600 space-y-1">
            <li>Premium material</li>
            <li>Handmade upholstery</li>
            <li>Quality timeless classic</li>
          </ul>

          <h2 className="text-lg font-medium text-gray-800 mt-6">Dimensions</h2>
          <div className="grid grid-cols-3 gap-4 text-gray-700 mt-2">
            <div>
              <p className="font-medium">Height</p>
              <p>110cm</p>
            </div>
            <div>
              <p className="font-medium">Width</p>
              <p>75cm</p>
            </div>
            <div>
              <p className="font-medium">Depth</p>
              <p>50cm</p>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mt-6 flex items-center">
            <p className="mr-4 text-gray-700 font-medium">Amount:</p>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={decreaseQuantity}
                className="px-3 py-1 bg-gray-200 hover:bg-gray-300 transition"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="px-3 py-1 bg-gray-200 hover:bg-gray-300 transition"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button className="mt-6 w-full bg-purple-900 text-white py-3 rounded-lg text-lg font-medium hover:bg-purple-800 transition">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
