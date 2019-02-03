import React, { Component } from 'react';
import ProductGrid from './components/ProductGrid';
import products from './products';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductGrid products={products}/>
      </div>
    );
  }
}

export default App;
