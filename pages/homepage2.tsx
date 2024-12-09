import Image from "next/image";
import Nav from "./components/TopNav";

export default function HeroSection() {
  return (
   <div>
    <Nav/>
    <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left gap-8 px-6 md:px-16 lg:px-32 py-12 bg-[#f9f9f9]">
      {/* Left Section: Image */}

      <div className="lg:w-1/2">
        <Image
          src="/Tableset.jpeg" // Replace with the correct image path
          alt="Luxury homeware"
          width={600}
          height={400}
          className="object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Right Section: Text */}
      <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-[#1b0f41] leading-tight mb-6">
          Luxury homeware for people who love timeless design quality
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Shop the new Spring 2022 collection today.
        </p>
        <button className="bg-[#8773c9] text-white py-3 px-6 rounded-lg hover:bg-[#705bb5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8773c9]">
          View collection
        </button>
      </div>
    </div>
    </div>
  );
}
