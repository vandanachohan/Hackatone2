// import { useState } from "react";
// import Image from "next/image";

// export default function ProductCard() {
//   const [showProducts, setShowProducts] = useState(false);

//   const products = [
//     {
//       id: 1,
//       name: "The Poplar suede sofa",
//       price: "£980",
//       image: "/Large.png",
//     },
//     {
//       id: 2,
//       name: "The Dandy chair",
//       price: "£250",
//       image: "/cheyer.jpeg",
//     },
//     {
//       id: 3,
//       name: "The Dandy chair",
//       price: "£250",
//       image: "/cheir.jpeg",
//     },
//   ];

//   return (
//     <section className="py-10 px-4 sm:px-8 lg:px-20">
//       {/* Title */}
//       <h1 className="text-3xl font-serif text-[#332a52] mb-8">Our popular products</h1>

//       {/* Call to Action Button */}
//       <div className="text-center mb-8">
//         <button
//           onClick={() => setShowProducts(!showProducts)} // Toggle visibility
//           className="px-8 py-3 bg-gray-200 text-[#332a52] rounded-lg hover:bg-gray-300 transition"
//         >
//           {showProducts ? "Hide collection" : "View collection"}
//         </button>
//       </div>

//       {/* Product Grid (conditionally rendered) */}
//       {showProducts && (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {products.map((product) => (
//             <div key={product.id} className="flex flex-col items-center">
//               {/* Image */}
//               <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
//                   priority
//                 />
//               </div>
//               {/* Name */}
//               <h2 className="mt-4 text-lg font-serif text-[#332a52]">{product.name}</h2>
//               {/* Price */}
//               <p className="text-gray-600">{product.price}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }
import { useRouter } from "next/router";
import Image from "next/image";

export default function ProductCard() {
  const router = useRouter();

  const products = [
    {
      id: 1,
      name: "The Poplar suede sofa",
      price: "£980",
      image: "/Large.png",
      description: "A luxurious and comfortable suede sofa.",
    },
    {
      id: 2,
      name: "The Dandy chair",
      price: "£250",
      image: "/cheyer.jpeg",
      description: "A stylish chair for your modern living room.",
    },
    {
      id: 3,
      name: "The Dandy chair",
      price: "£250",
      image: "/cheir.jpeg",
      description: "An elegant chair with a contemporary design.",
    },
  ];

  return (
    <section className="py-10 px-4 sm:px-8 lg:px-20">
      {/* Title */}
      <h1 className="text-3xl font-serif text-[#332a52] mb-8">Our popular products</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => router.push(`/product/${product.id}`)} // Navigate to Product Detail
          >
            {/* Image */}
            <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                priority
              />
            </div>
            {/* Name */}
            <h2 className="mt-4 text-lg font-serif text-[#332a52]">{product.name}</h2>
            {/* Price */}
            <p className="text-gray-600">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
