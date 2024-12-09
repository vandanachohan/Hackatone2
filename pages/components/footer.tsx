import React from "react";
import Link from "next/link";
import { IoLogoInstagram } from "react-icons/io5";
import { BiLogoPinterestAlt } from "react-icons/bi";
import { CiLinkedin } from "react-icons/ci";
import { PiSkypeLogoLight } from "react-icons/pi";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1f173d] text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Menu Section */}
          <div>
            <h4 className="text-sm font-semibold">Menu</h4>
            <ul className="mt-4 space-y-2">
              {["New arrivals", "Best sellers", "Recently viewed", "Popular this week", "All products"].map((item) => (
                <li key={item}>
                  <Link href={`/products/${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-indigo-600">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Section */}
          <div>
            <h4 className="text-sm font-semibold">Categories</h4>
            <ul className="mt-4 space-y-2">
              {["Crockery", "Furniture", "Homeware", "Plant pots", "Chairs"].map((item) => (
                <li key={item}>
                  <Link href={`/categories/${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-indigo-600">
                    {item}
                    <li>
              </li>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="text-sm font-semibold">Our company</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/About" className="hover:text-indigo-600">About Us</Link>
              </li>
              <li>
                <Link href="/vacancies" className="hover:text-indigo-600">Vacancies</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-indigo-600">Contact us</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-indigo-600">Privacy</Link>
              </li>
              <li>
                <Link href="/returns-policy" className="hover:text-indigo-600">Returns policy</Link>
              </li>
           
            </ul>
          </div>

          {/* Mailing List Signup Section */}
          <div>
            <h4 className="text-sm font-semibold">Join our mailing list</h4>
            <form className="flex items-center mt-4">
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="px-5 py-4 w-full rounded-md bg-gray-700 text-gray-200 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="px-6 py-1 bg-[#5d518b] text-white rounded-r-md hover:bg-indigo-500 focus:outline-dotted"
                aria-label="Sign up for our mailing list"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 border-t border-gray-400 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">Copyright 2022 Avion LTD</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="https://www.linkedin.com" className="hover:text-indigo-600">
              <CiLinkedin size={24} />
            </Link>
            <Link href="https://www.facebook.com" className="hover:text-indigo-600">
              <FaFacebookSquare size={24} />
            </Link>
            <Link href="https://www.skype.com" className="hover:text-indigo-600">
              <PiSkypeLogoLight size={24} />
            </Link>
            <Link href="https://www.instagram.com" className="hover:text-indigo-600">
              <IoLogoInstagram size={24} />
            </Link>
            <Link href="https://www.pinterest.com" className="hover:text-indigo-600">
              <BiLogoPinterestAlt size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
