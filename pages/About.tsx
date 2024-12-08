import Image from "next/image";
import Nav from "./components/TopNav";
import Feature from "./components/feature";

export default function About() {
  return (
    <div>
      <Nav />
      {/* Center Section under Navbar */}
      <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left mt-10 md:mt-20 gap-8 px-6 md:px-16 lg:px-32">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold tracking-tight mb-6">Our Story</h1>
          <p className="text-gray-600 text-lg mb-4">
            Launched in 2015 Exclusive is South Asias premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a wide
            range of tailored marketing, data, and service solutions, Exclusive has
            10,500 sellers and 300 brands and serves 3 million customers across the
            region.
          </p>
          <p className="text-gray-600 text-lg font-semibold">
            Exclusive has more than 1 million products to offer, growing at a very
            fast pace. Exclusive offers a diverse assortment in categories ranging
            from consumer goods.
          </p>
        </div>
        {/* Sofa Image */}
        <div className="md:w-1/2">
          <Image
            src={"/halfshofa.jpeg"}
            alt="Sofa"
            width={500}
            height={300}
            className="object-contain"
          />
        </div>
      </div>

      {/* Feature Section */}
      <Feature />

      {/* Furniture Brand Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between bg-[#1b0f41] text-white lg:mt-12 px-6 py-12 lg:px-20">
        {/* Left Section */}
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h2 className="text-2xl font-serif mb-6">
            The furniture brand for the future, with timeless designs
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            A new era in eco-friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors, and a beautiful way to
            display things digitally using modern web technologies.
          </p>
          <button className="text-gray-100 bg-[#8773c9] py-3 px-6 rounded hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
            View collection
          </button>
        </div>
        {/* Right Section */}
        <div className="lg:w-1/2">
          <Image
            src="/cheyer.jpeg"
            alt="Modern chair"
            width={500}
            height={300}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
