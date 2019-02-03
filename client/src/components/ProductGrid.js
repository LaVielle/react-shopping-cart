import React from 'react';
import ProductCard from './ProductCard';
import '../styles/ProductGrid.css'

// Functional component the returns a grid of the products it was fed as props
const ProductGrid = (props) => (
  <div className="ProductGrid-container">
    <div>Product Grid</div>
    <div className="ProductGrid-grid">
    {
      props.products.map(item => <ProductCard key={item.id} data={item} /> )
    }
    </div>
  </div>
)

export default ProductGrid
