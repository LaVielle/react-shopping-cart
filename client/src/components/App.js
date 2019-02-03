import React from 'react';
import ProductGrid from './ProductGrid';
import CartContent from '../containers/CartContent';
import products from '../products';


const App = () => (
  <div className="App">
    <CartContent />
    <ProductGrid products={products}/>
  </div>
)

export default App;
