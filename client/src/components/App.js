import React from 'react';
import ProductGrid from './ProductGrid';
import products from '../products';


const App = () => (
  <div className="App">
    <ProductGrid products={products}/>
  </div>
)

export default App;
