// import Image from "next/image";
// import Link from "next/link";

// export default function Home() {
//   const products = [
//     {
//       id: 1,
//       name: "The Dandy chair",
//       price: "£250",
//       image: "/cheyer.jpeg",
//     },
//     {
//       id: 2,
//       name: "Rustic Vase Set",
//       price: "£155",
//       image: "/deco-pic.jpeg",
//     },
//     {
//       id: 3,
//       name: "The Silky Vase",
//       price: "£125",
//       image: "/deco-pic2.jpeg",
//     },
//     {
//       id: 4,
//       name: "The Lucy Lamp",
//       price: "£399",
//       image: "/lump.jpeg",
//     },
//   ];

//   return (
//     <section className="py-10 px-4 sm:px-8 lg:px-20">
//       <h1 className="text-3xl font-serif text-start mb-8 text-[#332a52]">
//         New ceramics
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         {products.map((product) => (
//           <div key={product.id} className="flex flex-col items-center">
//             <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
//               <Image
//                 src={product.image}
//                 alt={product.name}
//                 fill
//                 className="object-cover"
//                 priority
//               />
//             </div>
//             <h2 className="mt-4 text-lg font-serif text-[#332a52]">
//               {product.name}
//             </h2>
//             <p className="text-gray-600">{product.price}</p>
//           </div>
//         ))}
//       </div>
//       <div className="text-center mt-12">
//         <button className="px-8 py-3 bg-gray-200 text-[#332a52] rounded-lg hover:bg-gray-500 transition">
//           View collection
//         </button>
//       </div>
//     </section>
//   );
// }

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  slug?: {
    current: string;
  };
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://hackathon-apis.vercel.app/api/products");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Ensure proper structure
        const mappedData = data.map((product: any) => ({
          id: product.id,
          name: product.name || "Unnamed",
          description: product.description || "No description available",
          price: product.price || 0,
          image: product.image || "/placeholder-image.jpg",
          slug: product.slug || { current: product.id }, // Fallback slug
        }));

        setProducts(mappedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Ensure loading is false even if there's an error
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (!products.length) {
    return <div className="flex items-center justify-center h-screen">No products found</div>;
  }

  return (
    <div>
      <section className="py-10 px-4 sm:px-8 lg:px-20">
        <h2 className="text-2xl font-serif text-start mb-8 text-[#332a52]">New Ceramics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.slice(0, 4).map((product) => (
            <Link key={product.id} href={`/product/${product.slug?.current || product.id}`}>
              <div className="flex flex-col items-center cursor-pointer group">
                <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h3 className="mt-4 text-lg font-serif text-[#332a52] group-hover:text-gray-500">
                  {product.name}
                </h3>
                <p className="text-gray-600 group-hover:text-[#332a52]">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View Collection Button */}
        <div className="text-center mt-12">
          <Link href="/AddToCartButton">
            <button className="px-8 py-3 bg-gray-200 text-[#332a52] rounded-lg hover:bg-gray-500 hover:text-white transition">
              View Collection
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
