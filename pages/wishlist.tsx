import { Product } from '@/src/types/products';
import React, { useEffect, useState } from 'react';
import { urlFor } from '@/src/sanity/lib/image'; // Correctly import the urlFor function

// WishlistItem Component
const WishlistItem = ({ item }: { item: Product }) => {
  const imageUrl = item.asset ? urlFor(item.asset).url() : ""; // Resolving image URL

  return (
    <div className="wishlist-item">
      <img
        src={imageUrl} // Pass the resolved image URL here
        alt={item.name} // Use the item's name or other description
        className="wishlist-item-image"
      />
      <h3 className="text-lg font-semibold mt-2 text-[#332a52]">{item.name}</h3>
      <p className="text-gray-500 text-sm truncate">{item.description}</p>
      <p className="font-bold mt-2 text-[#332a52]">Price: ${item.price}</p>
    </div>
  );
};

const Wishlist: React.FC = () => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  if (wishlist.length === 0) {
    return <div className="text-center mt-8">Your wishlist is empty!</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-8 text-center">Your Wishlist</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {wishlist.map((product) => (
          <div
            key={product.id}
            className="border border-gray-300 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <WishlistItem item={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
