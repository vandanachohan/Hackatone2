export interface Product {
  asset: any;
  name: string;
  id: string | null | undefined; // Clarified as string or null/undefined
  _id: string; // Unique identifier for the product
  productName: string; // The name/title of the product
  _type: "product"; // The type of document (always "product" in this case)
  
  // Image field (optional), with asset reference
  image?: {
    asset: {
      _ref: string; // Reference to the image asset in Sanity
      _type: string; // Type of the asset (e.g., "image")
    };
  };

  price: number; // Price of the product
  description?: string; // Optional description of the product

  // Slug for the product, used in URLs
  slug: {
    _type: "slug"; // Always "slug"
    current: string; // The actual slug value
  };

  // Features of the product (optional array of strings)
  features?: string[];

  // Dimensions of the product (optional object with width, height, and depth)
  dimensions?: {
    width: string;
    height: string;
    depth: string;
  };
}
