import Image from "next/image";
import Nav from "./components/TopNav";
import Feature from "./components/feature";
import Card from "./components/card";
import Footer from "./components/footer";

export default function About() {
  return (
    <div>
      <Nav />
      
      {/* Center Section under Navbar */}
      <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-right mt-10 md:mt-20 gap-8 px-6 md:px-16 lg:px-32">
        
        {/* Image Section */}
        <div className="md:w-1/2 text-center">
          <Image
            src="/halfshofa.jpeg"
            alt="A comfortable and stylish half sofa"
            width={355}
            height={400}
            priority
            className="object-contain"
          />
        </div>

        {/* Text Section under the image */}
        <div className="md:w-1/2 lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-bold tracking-tight mb-6">Our Story</h1>
          <p className="text-black text-lg mb-4">
            Launched in 2015, Exclusive is South Asias premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a wide
            range of tailored marketing, data, and service solutions, Exclusive has
            10,500 sellers and 300 brands and serves 3 million customers across the
            region.
          </p>
          <p className="text-black text-lg font-semibold">
            Exclusive offers more than 1 million products, growing at a very
            fast pace. We provide a diverse assortment in categories ranging
            from consumer goods to luxury items.
          </p>
        </div>
      </section>

      {/* Feature and Card Components */}
      <Feature />
      <Card />
      <Footer />
    </div>
  );
}
