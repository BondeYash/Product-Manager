import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(response => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then(data => setProducts(data.products))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <div className="grid gap-4">
        {products.map((product) => (
          <div key={product._id} className="bg-gray-100 p-4 rounded-md shadow">
            <h3 className="text-xl">{product.productName}</h3>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
            <Link
              to={`/update-product/${product._id}`}
              className="text-blue-600 hover:underline"
            >
              Edit
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
