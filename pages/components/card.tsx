import Image from "next/image";

export default function Section() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-12 gap-2 bg-white rounded-lg overflow-hidden ">
      {/* Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left bg-[#1b0f41] text-white lg:px-10 py-28  ">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          It started with a small idea
        </h2>
        <p className="text-white text-sm md:text-xl mb-6 ">
          A global brand with local beginnings, our story began in a small studio in South London in early 2014.
        </p>
        <button className="text-white bg-[#49397c] py-3 px-8 rounded-md hover:bg-[#675a91] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4A3E74]">
          View collection
        </button>
      </div>
      
      {/* Image Section */}
      <div className="lg:w-1/2">
        <div className="relative w-full aspect-[4/3] overflow-hidden lg:px-10 py-20  ">
          <Image
            src="/roomshofa.jpeg" 
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
