"useclient";
import { useState, useEffect } from "react";
// import { useRouter } from "next/router";
import { urlFor } from "@/src/sanity/lib/image";  // Ensure urlFor function is properly set
import Image from "next/image";
import { Product } from "@/src/types/products";

// This is already correct if you're using getServerSideProps or getStaticProps
export async function getServerSideProps(context: { params: { slug: string } }) {
  const { slug } = context.params;

  try {
    const response = await fetch(`https://hackathon-apis.vercel.app/api/products/`);

    if (!response.ok) {
      throw new Error("Product not found");
    }

    const product = await response.json();

    return {
      props: { product },  // Pass product data as props to the page
    };
  } catch (error) {
    return {
      notFound: true,  // This will show a 404 page if product is not found
    };
  }
}

const ProductDetail: React.FC<{ product: Product }> = ({ product }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (product) {
      setIsLoading(false);
    }
  }, [product]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>; // Fallback for missing product data
  }

  return (
    <section className="py-10 px-4 sm:px-8 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="relative w-full h-96 lg:w-1/2 bg-gray-100 rounded-lg overflow-hidden">
            {product.image && (
              <Image
                src={urlFor(product.image).url()}
                alt={product.name}
                className="w-full h-auto object-cover"
                layout="fill" // Ensures the image fills the container correctly
              />
            )}
          </div>
          <div className="lg:w-1/2">
            <h1 className="text-3xl font-serif text-[#332a52]">{product.name}</h1>
            <p className="text-gray-600 mt-4">{product.description}</p>
            <p className="text-2xl font-semibold mt-4 text-[#332a52]">${product.price}</p>
            <button
              className="px-8 py-3 bg-gray-200 text-[#332a52] rounded-lg hover:bg-gray-500 transition mt-6"
              onClick={() => alert("Product added to cart")} // You can replace this with actual cart functionality
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
