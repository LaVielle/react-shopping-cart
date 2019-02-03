import React from 'react';
import '../styles/ProductCard.css'

// Component that displays a product with a 'Add to cart' button
export default class ProductCard extends React.Component {

  componentDidMount() {
    console.log('ProductCard mounted');
    console.log(this.props);
  }

  render() {
    return(
      <div className="ProductCard-container">
        <img className="ProductCard-image" src={this.props.data.image} alt={this.props.data.name}/>
        <div style={{height: 20}}/>
        <div>{this.props.data.name}</div>
        <div style={{height: 20}}/>
        <div style={{display: 'flex', flexDirection: 'row', alignSelf: 'stretch', justifyContent: 'space-between'}}>
          <div>$ {this.props.data.price}</div>
          <button>Add to cart</button>
        </div>
      </div>
    )
  }
}
