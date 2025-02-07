import React, { useState } from "react";
import Image from "next/image";

// Define the type for a product
interface Product {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  dimensions: { height: string; width: string; depth: string };
}

const product: Product = {
  name: "Premium Cutlery Set",
  description:
    "This premium cutlery set includes everything you need for an elegant dining experience. Made from high-quality stainless steel, it features a sleek and modern design that will elevate any table setting.",
  price: 99,
  imageUrl: "/cutlery-set.jpeg", // Add your cutlery image here
  dimensions: { height: "25cm", width: "15cm", depth: "10cm" },
};

export default function CutleryDetail() {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="grid md:grid-cols-2 bg-white shadow-xl rounded-lg overflow-hidden w-full max-w-4xl">
        {/* Left Side - Product Image */}
        <div className="relative h-80 md:h-auto rounded-lg overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Right Side - Product Details */}
        <div className="p-6 md:p-10">
          <h1 className="text-3xl font-semibold text-gray-900">{product.name}</h1>
          <p className="text-2xl text-gray-700 mt-2">£{product.price}</p>

          <h2 className="text-lg font-medium text-gray-800 mt-6">Description</h2>
          <p className="text-gray-600 mt-2">{product.description}</p>

          <ul className="list-disc pl-5 mt-4 text-gray-600 space-y-1">
            <li>Made from high-quality stainless steel</li>
            <li>Elegant and modern design</li>
            <li>Dishwasher safe for easy cleaning</li>
          </ul>

          <h2 className="text-lg font-medium text-gray-800 mt-6">Dimensions</h2>
          <div className="grid grid-cols-3 gap-4 text-gray-700 mt-2">
            <div>
              <p className="font-medium">Height</p>
              <p>{product.dimensions.height}</p>
            </div>
            <div>
              <p className="font-medium">Width</p>
              <p>{product.dimensions.width}</p>
            </div>
            <div>
              <p className="font-medium">Depth</p>
              <p>{product.dimensions.depth}</p>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mt-6 flex items-center">
            <p className="mr-4 text-gray-700 font-medium">Quantity:</p>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={decreaseQuantity}
                className="px-3 py-1 bg-gray-200 hover:bg-gray-300 transition"
              >
                -
              </button>
              <span className="px-4 text-gray-700">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="px-3 py-1 bg-gray-200 hover:bg-gray-300 transition"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="mt-8 flex flex-col gap-4">
            <button className="w-full bg-purple-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-purple-500 transition">
              Add to Cart
            </button>
            <button className="w-full bg-gray-300 text-gray-800 py-3 rounded-lg text-lg font-medium hover:bg-gray-400 transition">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
