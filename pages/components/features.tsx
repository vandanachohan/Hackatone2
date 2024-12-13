import Image from "next/image";

export default function features() {
  return (
    <div>
    
      <section className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left mt-10 lg:mt-20 gap-8 px-6 md:px-16 lg:px-32">
        {/* Left Section: Text */}
        <div className="lg:w-1/2 bg-white text-[#1b0f41] p-8 rounded-lg shadow-md">
          <h2 className="text-1xl font-bold tracking-tight mb-6">
            From a studio in London to a global brand with over 400 outlets
          </h2>
          <p className="text-xs mb-6 text-gray-700 leading-relaxed">
            When we started Avion, the idea was simple: Make high-quality furniture
            affordable and available for the mass market.
          </p>
          <p className="text-xs mb-6 text-gray-700 leading-relaxed">
            Handmade and lovingly crafted furniture and homeware is what we live,
            breathe, and design. Our Chelsea boutique became the hub of Londons
            interior design community.
          </p>
          <button className="bg-transparent border border-gray-400 text-[#1b0f41] py-3 px-6 rounded hover:bg-[#1b0f41] transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
            Get in touch
          </button>
        </div>

        {/* Right Section: Image */}
        <div className="lg:w-1/2">
          <Image
            src="/Image.png" 
            alt="Modern styled sofa with cushions"
            width={400}
            height={200}
            className="object-cover shadow-md"
          />
        </div>
      </section>
    </div>
  );
}
