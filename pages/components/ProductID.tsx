import { useRouter } from "next/router";
import Image from "next/image";

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

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Ensure id is a string before using it
  const productId = typeof id === "string" ? parseInt(id, 10) : null;

  // Find the product based on the ID
  const product = products.find((product) => product.id === productId);

  // Show a loading state if the product isn't available yet
  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <section className="py-10 px-4 sm:px-8 lg:px-20">
      <button
        onClick={() => router.back()}
        className="mb-8 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
      >
        Back
      </button>

      <div className="flex flex-col sm:flex-row gap-8">
        {/* Product Image */}
        <div className="relative w-full sm:w-1/2 aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-serif text-[#332a52]">{product.name}</h1>
          <p className="text-lg text-gray-600">{product.price}</p>
          <p className="text-gray-700">{product.description}</p>
        </div>
      </div>
    </section>
  );
}
