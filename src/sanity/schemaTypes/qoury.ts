const query = `*[_type == "product" && _id == $id][0]{
    _id,
    name,
    description,
    price,
    "image": image.asset->url // Resolve image URL
  }`;
  