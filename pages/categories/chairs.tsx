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
  name: "The Dandy Chair",
  description:
    "A timeless design, with premium materials, featuring as one of our most popular and iconic pieces. The Dandy Chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
  price: 250,
  imageUrl: "/chear2.jpeg",
  dimensions: { height: "110cm", width: "75cm", depth: "50cm" },
};

export default function ProductDetail() {
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
            <li>Premium quality materials</li>
            <li>Elegant and versatile design</li>
            <li>Comfortable and durable</li>
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
