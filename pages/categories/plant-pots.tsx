import React, { useEffect, useState } from "react";

// Define TypeScript interface for plant data
interface Plant {
  id: number;
  common_name: string;
  scientific_name: string[];
  default_image?: { thumbnail: string };
}

const PlantList: React.FC = () => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await fetch("https://perenual.com/api/species-list?key=YOUR_API_KEY");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (data.data) {
          setPlants(data.data as Plant[]);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchPlants();
  }, []);

  if (loading) {
    return <div className="text-center text-lg text-gray-600">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 text-lg">Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-[#332a52]">Plant Species</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {plants.map((plant) => (
          <div key={plant.id} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-[#332a52]">{plant.common_name}</h2>
            <p className="text-gray-700">{plant.scientific_name?.join(", ")}</p>
            {plant.default_image?.thumbnail && (
              <img
                src={plant.default_image.thumbnail}
                alt={plant.common_name}
                className="w-full h-auto rounded-md mt-4"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantList;
