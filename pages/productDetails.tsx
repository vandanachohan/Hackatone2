import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { createClient } from "@sanity/client";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

// Initialize Sanity client
const sanityClient = createClient({
  projectId: "6xoqn3ql", // Replace with your project ID
  dataset: "production", // Replace with your dataset name
  apiVersion: "2025-01-18", // Use the latest API version
  useCdn: true, // Use CDN for faster responses
});

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query; // Get the product ID from the URL
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!router.isReady || !id) return; // Wait until router and id are ready

    const fetchProduct = async () => {
      try {
        // Fetch product details from Sanity
        const query = `*[_type == "product" && _id == $id][0]{
          _id,
          name,
          description,
          price,
          "image": image.asset->url // Resolve image URL
        }`;
        const params = { id: String(id) }; // Ensure id is a string
        const fetchedProduct = await sanityClient.fetch(query, params);

        setProduct(fetchedProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [router.isReady, id]);

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500">
        Product not found
      </div>
    );
  }

  return (
    <div>
      <header className="text-center py-6 bg-gray-100 shadow-md">
        <h1 className="text-3xl font-bold text-[#332a52]">{product.name}</h1>
      </header>
      <section className="py-10 px-4 sm:px-8 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-[#332a52] mb-4">{product.name}</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-xl font-bold text-[#332a52]">${product.price.toFixed(2)}</p>
          </div>
        </div>
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gray-200 text-[#332a52] rounded-lg hover:bg-gray-500 transition">
            Add to Cart
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
