import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';


function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    axios.get('http://localhost:5000/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            <Product product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
