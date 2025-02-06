import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "6xoqn3ql",
  dataset: "production",
  apiVersion: "2025-01-18",
  token: "skzhe7uMPNiwi5k7T0cHAQdvt7lLj5XWi1HoRgAKOtjn6xxZTkdpQBfCAAnM4m09ukjJhcTg4qTn7P4lgeuP6FJYRoKj42j6VViJx5oreGXPLChKSiHvOjUFRJRo5t3U0YHUeek0WS5bGxYSWBgnm25rwLnTwM3Sr5FdNnMdueSRBr7m0vZL",
  useCdn: false,
});

const fixSlugs = async () => {
  try {
    // Fetch all products with missing or invalid slugs
    const products = await client.fetch(
      `*[_type == "product" && !defined(slug.current)] {
        _id,
        name
      }`
    );

    if (products.length === 0) {
      console.log("No invalid slugs found.");
      return;
    }

    // Generate mutations for missing slugs
    const transaction = client.transaction();
    products.forEach((product) => {
      const newSlug = product.name.toLowerCase().replace(/\s+/g, "-");
      transaction.patch(product._id, {
        set: {
          slug: {
            _type: "slug",
            current: newSlug,
          },
        },
      });
    });

    // Commit the transaction
    const result = await transaction.commit();
    console.log(`Updated ${result.results.length} products with valid slugs.`);
  } catch (error) {
    console.error("Error fixing slugs:", error);
  }
};

fixSlugs();
