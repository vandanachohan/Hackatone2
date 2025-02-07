import { GetServerSideProps } from 'next';
import Image from 'next/image';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { category } = context.query;
  const categoryString = Array.isArray(category) ? category[0] : category;

  try {
    console.log("Fetching products...");
    const res = await fetch(`http://localhost:3000/api/products`);

    if (!res.ok) {
      throw new Error(`API returned ${res.status}`);
    }

    const products: Product[] = await res.json();

    const filteredProducts = products.filter(
      (product) =>
        product.category.toLowerCase() === categoryString?.toLowerCase()
    );

    return {
      props: {
        products: filteredProducts,
        category: categoryString || "Unknown",
      },
    };
  } catch (error) {
    return {
      props: {
        products: [],
        category: categoryString || "Unknown",
        error: "Failed to fetch products.",
      },
    };
  }
};

interface CategoryPageProps {
  products: Product[];
  category: string;
  error?: string;
}

const CategoryPage = ({ products, category, error }: CategoryPageProps) => {
  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (!products.length) {
    return <div>No products found in the "{category}" category.</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 capitalize">{category}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-md">
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <div className="relative w-full h-40 mt-2 rounded overflow-hidden">
              <Image
                src={product.image}
                alt={product.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">{product.description}</p>
            <p className="text-lg font-bold mt-2">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
