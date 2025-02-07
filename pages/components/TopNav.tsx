import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { ChevronDown } from "lucide-react";

const Nav = (): React.JSX.Element => {
  const router = useRouter();
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<{
    name: string;
    route: string;
  }[]>([]);

  // Example product list with routes
  const products = [
    { name: "Plant Pot", route: "/products/plant-pot" },
    { name: "Ceramic Vase", route: "/products/ceramic-vase" },
    { name: "Dining Table", route: "/products/dining-table" },
    { name: "Lounge Chair", route: "/products/lounge-chair" },
    { name: "Dinnerware Set", route: "/products/dinnerware-set" },
    { name: "Cutlery Set", route: "/products/cutlery-set" },
    { name: "Coffee Table", route: "/products/coffee-table" },
  ];

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen((prev) => !prev);
  };

  const handleLanguageChange = (language: string) => {
    console.log(`Language changed to: ${language}`);
    setIsLanguageDropdownOpen(false);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() !== "") {
      const filteredSuggestions = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (route: string) => {
    router.push(route);
  };

  return (
    <div className="container mx-auto px-6 mt-1 text-lg md:text-xl font-serif mb-6">
      {/* Top Header Section */}
      <div className="flex items-center justify-between py-4 border-b">
        {/* Left Section: Search Bar */}
        <div className="relative w-1/2 md:w-1/3">
          <div className="flex items-center border rounded-md px-2 py-1">
            <CiSearch size={24} className="text-gray-600" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search for products..."
              className="w-full outline-none px-2"
            />
          </div>
          {/* Search Suggestions */}
          {suggestions.length > 0 && (
            <div className="absolute bg-white shadow-lg rounded-md mt-1 w-full z-50">
              <ul>
                {suggestions.map((item, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSuggestionClick(item.route)}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Center Section: Brand Name */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="text-lg font-ClashDisplay">Avion</h1>
        </div>

        {/* Right Section: Cart, Profile, and Language */}
        <div className="flex items-center space-x-4">
          <Link href="/wishlist" aria-label="Cart">
            <AiOutlineShoppingCart
              size={24}
              className="text-gray-600 hover:text-black"
            />
          </Link>
          <Link href="/profile" aria-label="Profile">
            <FaRegUserCircle
              size={24}
              className="text-gray-600 hover:text-black"
            />
          </Link>
          {/* Language Dropdown */}
          <div className="relative">
            <span
              className="flex items-center text-gray-800 cursor-pointer"
              onClick={toggleLanguageDropdown}
            >
              English <ChevronDown className="ml-1" />
            </span>
            {isLanguageDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-40 z-50">
                <ul>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleLanguageChange("English")}
                  >
                    English
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleLanguageChange("Urdu")}
                  >
                    Urdu
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleLanguageChange("Spanish")}
                  >
                    Spanish
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleLanguageChange("German")}
                  >
                    German
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <nav className="flex justify-center space-x-6 text-sm md:text-base py-4">
        {[
          "plant-pots",
          "ceramics",
          "tables",
          "chairs",
          "crockery",
          "tableware",
          "cutlery",
        ].map((category) => (
          <Link
            key={category}
            href={`/category/${category}`}
            className="hover:text-black capitalize"
          >
            {category.replace("-", " ")}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Nav;
