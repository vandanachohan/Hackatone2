"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Product } from "@/src/types/products";
import { urlFor } from "@/src/sanity/lib/image"; // Ensure this function is properly set

// Get the server-side product data using slug from URL
export async function getServerSideProps(context: { params: { slug: string } }) {
  const { slug } = context.params;

  try {
    // Fetch the product data based on the slug
    const response = await fetch(`https://hackathon-apis.vercel.app/api/products/${slug}`);

    if (!response.ok) {
      throw new Error("Product not found");
    }

    const product = await response.json();

    return {
      props: { product },  // Pass product data as props to the page
    };
  } catch (error) {
    return {
      notFound: true,  // This will show a 404 page if the product is not found
    };
  }
}

const ProductDetail: React.FC<{ product: Product }> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <section className="py-10 px-4 sm:px-8 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Product Image */}
          <div className="relative w-full h-96 lg:w-1/2 bg-gray-100 rounded-lg overflow-hidden">
            {product.image && (
              <Image
                src={urlFor(product.image).url()}
                alt={product.name}
                className="w-full h-auto object-cover"
                layout="fill"
              />
            )}
          </div>

          {/* Right Side - Product Details */}
          <div className="lg:w-1/2">
            <h1 className="text-3xl font-serif text-[#332a52]">{product.name}</h1>
            <p className="text-gray-600 mt-4">{product.description}</p>
            <p className="text-2xl font-semibold mt-4 text-[#332a52]">${product.price}</p>

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
            <button
              className="mt-6 w-full bg-purple-900 text-white py-3 rounded-lg text-lg font-medium hover:bg-purple-800 transition"
              onClick={() => alert("Product added to cart")}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
