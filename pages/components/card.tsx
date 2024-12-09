import Image from "next/image";

export default function Section() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-12 gap-12 bg-[#1b0f41]">
      {/* Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left text-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          It started with a small idea
        </h2>
        <p className="text-gray-300 text-lg md:text-xl mb-6">
          A global brand with local beginnings, our story began in a small studio in South London in early 2014.
        </p>
        <button className="text-white bg-[#4A3E74] py-3 px-8 rounded-md hover:bg-[#675a91] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4A3E74]">
          View collection
        </button>
      </div>
      
      {/* Image Section */}
      <div className="lg:w-1/2">
        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
          <Image
            src="/roomshofa.jpeg" // Replace with your image path
            alt="Modern chair in a cozy room"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
