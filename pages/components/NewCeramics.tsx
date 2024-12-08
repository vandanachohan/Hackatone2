import Image from "next/image";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "The Dandy chair",
      price: "£250",
      image: "/cheyer.jpeg", 
    },
    {
      id: 2,
      name: "Rustic Vase Set",
      price: "£155",
      image: "/deco-pic.jpeg", 
    },
    {
      id: 3,
      name: "The Silky Vase",
      price: "£125",
      image: "/deco-pic2.jpeg", 
    },
    {
      id: 4,
      name: "The Lucy Lamp",
      price: "£399",
      image: "/lump.jpeg", 
    },
  ];

  return (
    <section className="py-10 px-4 sm:px-8 lg:px-20">
      <h1 className="text-3xl font-serif text-start mb-8 text-[#332a52]">New ceramics</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center">
            <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <h2 className="mt-4 text-lg font-serif text-[#332a52]">{product.name}</h2>
            <p className="text-gray-600">{product.price}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <button className="px-8 py-3 bg-gray-200 text-[#332a52] rounded-lg hover:bg-gray-500 transition">
          View collection
        </button>
      </div>
    </section>
  );
}
