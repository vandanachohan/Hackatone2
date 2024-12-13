import React from "react";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";

export default function Nav() {
  return (
    <div className="container mx-auto px-6 mt-1 text-1xl md:text-1xl lg:text-2xl font-serif mb-6 text-base  ">
      {/* Top Header Section */}
      <div className="flex items-center justify-between py-4 border-b">
        {/* Left Section: Search Icon */}
        <div className="flex items-center">
          <Link href="/search" className="text-gray-600 hover:text-black">
            <CiSearch size={24} />
          </Link>
        </div>

        {/* Center Section: Brand Name */}
        <div className="flex flex-col absolute left-1/2 transform -translate-x-1/2text-1xl md:text-1xl lg:text-2xl font-serif mb-6 text-base lg:mt-1">
          <h1 className="text-lg font-ClashDisplay ">Avion</h1>
        </div>

        {/* Right Section: Cart and Profile Icons */}
        <div className="flex items-center space-x-4">
          <Link href="/cart" className="text-gray-600 hover:text-black">
            <AiOutlineShoppingCart size={24} />
          </Link>
          <Link href="/profile" className="text-gray-600 hover:text-black">
            <FaRegUserCircle size={24} />
          </Link>
        </div>
      </div>

      {/* Navigation Links Section */}
      <nav className="flex justify-center relative space-x-6 text-sm md:text-base py-4 bg: rgba(255, 255, 255, 1)
">
        <Link className="hover:text-black" href="/plant-pots">
          Plant pots
        </Link>
        <Link className="hover:text-black" href="/ceramics">
          Ceramics
        </Link>
        <Link className="hover:text-black" href="/tables">
          Tables
        </Link>
        <Link className="hover:text-black" href="/chairs">
          Chairs
        </Link>
        <Link className="hover:text-black" href="/crockery">
          Crockery
        </Link>
        <Link className="hover:text-black" href="/tableware">
          Tableware
        </Link>
        <Link className="hover:text-black" href="/cutlery">
          Cutlery
        </Link>
      </nav>
    </div>
  );
}
