import React from "react";
import Card from "./components/card";
import Feature from "./components/feature";
import Container from "./components/Container";
import Footer from "./components/footer";
import ProductCard from "./components/ProductCard";
import Nav from "./components/TopNav";

const HomewareSection = () => {
  return (
       
    <div className="">
      <Nav />
   
      <section className="relative flex flex-col lg:flex-row items-center justify-between gap-8 p-20 lg:p-44 bg-gray-50">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/Tableset.jpeg"
            alt="Luxury homeware background featuring a beautifully set dining table"
            className="h-[704px] w-[1440px] gap-0 object-cover"
          />
        </div>

        {/* Rightside Section: Text Content */}
        <div className="relative z-10 lg:w-1/2 lg:ml-auto bg-white bg-opacity-90 p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-[#1b0f41] leading-tight mb-6">
            Luxury homeware for people who love timeless design quality
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Shop the new Spring 2022 collection today.
          </p>
          <button className="bg-[#1b0f41] text-white py-3 px-6 rounded-lg hover:bg-[#705bb5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8773c9]">
            View collection
          </button>
        </div>
      </section>

    

 

  <div>
      {/* Other Components */}
      <section className="p-6 lg:p-12 ">
        {/* Feature Component */}
        <Feature />
        <ProductCard />
        <Card />
      </section>

      <section className="p-6 lg:p-12">
        {/* Container Component */}
        <Container />
      </section>

      <footer className="p-6 lg:p-12  text-white">
        {/* Footer Component */}
        <Footer />
      </footer>
      </div>


      </div>
  );
};



export default HomewareSection;
