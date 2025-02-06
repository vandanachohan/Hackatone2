
import React, { useEffect, useState } from "react";
import Nav from "./components/TopNav";
import Footer from "./components/footer";
import Image from "next/image";
import Link from "next/link";

interface Product {
  [x: string]: any;
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://hackathon-apis.vercel.app/api/products"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (product: Product) => {
    setSelectedProduct(product);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedProduct(null);
  };

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <div>
      <Nav />
      <h1 className="text-center font-libre-bodoni font-semibold text-2xl my-8">
        Product List
      </h1>
      <div className="flex flex-wrap gap-8 justify-center px-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-300 p-4 rounded-lg w-56 shadow-md hover:shadow-lg transition-shadow"
          >
            <Link key={product.id} href={`/product/${product.slug?.current || product.id}`}>
            <Link href={`/product/${product.id}`}>
              <div className="cursor-pointer">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full h-36 object-cover rounded-md"
                />
                <h3 className="text-lg font-semibold mt-2 text-[#332a52] hover:underline">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm truncate">
                  {product.description}
                </p>
                <p className="font-bold mt-2 text-[#332a52]">
                  Price: ${product.price}
                </p>
              </div>
            </Link>
            </Link>
            <button
              onClick={() => handleAddToCart(product)}
              className="bg-[#332a52] text-white mt-4 py-2 px-4 rounded hover:bg-indigo-600 transition w-full"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {showForm && selectedProduct && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4 text-center text-[#332a52]">
              Add to Cart
            </h2>
            <p className="mb-2">
              <strong>Product:</strong> {selectedProduct.name}
            </p>
            <p className="mb-4">
              <strong>Price:</strong> ${selectedProduct.price}
            </p>
            <form>
              <label className="block mb-4">
                Quantity:
                <input
                  type="number"
                  name="quantity"
                  defaultValue={1}
                  min={1}
                  className="block mt-2 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </label>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition w-1/2 mr-2"
                >
                  Add
                </button>
                <button
                  type="button"
                  onClick={handleCloseForm}
                  className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition w-1/2 ml-2"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default App;


// import React, { useEffect, useState } from "react";
// import Nav from "./components/TopNav";
// import Footer from "./components/footer";
// import Image from "next/image";
// import Link from "next/link";
// import { createClient } from "@sanity/client";

// interface Product {
//   id: string;
//   name: string;
//   description: string;
//   price: number;
//   image: string;
//   slug: { current: string };
// }

// // Sanity Client Configuration
// const sanityClient = createClient({
//   projectId: "6xoqn3ql", 
//   dataset: "production", 
//   apiVersion: "2025-01-18",
//   useCdn: true, 
// token:"skSmHhemslgTa4AxlmlMJGSkpBt6BVuseGOIspKRRqCzN4Fm0TJcXi9oModhF6d2bP1CYOYqWeeMHjbjTrIuZCn13yEyN9qcsLWcrhUjhvjWJ4yNZZNvt3kEvSTK1eoe1Zq4riqnFJ1iTVUbBs7NgeGAUus5tTBLLG4RvDyCrNBUYySPdhxG"
// });

// const App: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [showForm, setShowForm] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch products from Sanity using a GROQ query
//         const query = `*[_type == "product"]{
//           _id,
//           name,
//           description,
//           price,
//           "image": image.asset->url, // Fetch the image URL
//           slug
//         }`;

//         // Fetch data from Sanity
//         const data = await sanityClient.fetch(query);
//         setProducts(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleAddToCart = (product: Product) => {
//     setSelectedProduct(product);
//     setShowForm(true);
//   };

//   const handleCloseForm = () => {
//     setShowForm(false);
//     setSelectedProduct(null);
//   };

//   if (loading) {
//     return <div className="flex items-center justify-center h-screen">Loading...</div>;
//   }

//   return (
//     <div>
//       <Nav />
//       <h1 className="text-center font-libre-bodoni font-semibold text-2xl my-8">
//         Product List
//       </h1>
//       <div className="flex flex-wrap gap-8 justify-center px-4">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="border border-gray-300 p-4 rounded-lg w-56 shadow-md hover:shadow-lg transition-shadow"
//           >
//             <Link href={`/product/${product.slug?.current || product.id}`}>
//               <div className="cursor-pointer">
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   width={200}
//                   height={200}
//                   className="w-full h-36 object-cover rounded-md"
//                 />
//                 <h3 className="text-lg font-semibold mt-2 text-[#332a52] hover:underline">
//                   {product.name}
//                 </h3>
//                 <p className="text-gray-500 text-sm truncate">
//                   {product.description}
//                 </p>
//                 <p className="font-bold mt-2 text-[#332a52]">
//                   Price: ${product.price}
//                 </p>
//               </div>
//             </Link>
//             <button
//               onClick={() => handleAddToCart(product)}
//               className="bg-[#332a52] text-white mt-4 py-2 px-4 rounded hover:bg-indigo-600 transition w-full"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       {showForm && selectedProduct && (
//         <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
//             <h2 className="text-xl font-bold mb-4 text-center text-[#332a52]">
//               Add to Cart
//             </h2>
//             <p className="mb-2">
//               <strong>Product:</strong> {selectedProduct.name}
//             </p>
//             <p className="mb-4">
//               <strong>Price:</strong> ${selectedProduct.price}
//             </p>
//             <form>
//               <label className="block mb-4">
//                 Quantity:
//                 <input
//                   type="number"
//                   name="quantity"
//                   defaultValue={1}
//                   min={1}
//                   className="block mt-2 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </label>
//               <div className="flex justify-between">
//                 <button
//                   type="submit"
//                   className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition w-1/2 mr-2"
//                 >
//                   Add
//                 </button>
//                 <button
//                   type="button"
//                   onClick={handleCloseForm}
//                   className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition w-1/2 ml-2"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//       <Footer />
//     </div>
//   );
// };

// export default App;
