import Image from "next/image";

export default function ProductCard() {
  const products = [
    {
      id: 1,
      name: "The Poplar suede sofa",
      price: "£980",
      image: "/shofa.jpeg",
   wight:"360",
   height:"375"
    },
    {
      id: 2,
      name: "The Dandy chair",
      price: "£250",
      image: "/cheyer.jpeg", 
    },
    {
      id: 3,
      name: "The Dandy chair",
      price: "£250",
      image: "/cheir.jpeg", 
    },
  ];

  return (
    <section className="py-10 px-4 sm:px-8 lg:px-20">
      {/* Title */}
      <h1 className="text-3xl font-serif text-[#332a52] mb-8">Our popular products</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center">
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

      {/* Call to Action Button */}
      <div className="text-center mt-12">
        <button className="px-8 py-3 bg-gray-200 text-[#332a52] rounded-lg hover:bg-gray-300 transition">
          View collection
        </button>
      </div>
    
    </section>

  );
}
