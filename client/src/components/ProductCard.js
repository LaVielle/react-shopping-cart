import React from 'react';
import { connect } from 'react-redux';
import { addProductToCart } from '../actions';
import '../styles/ProductCard.css'

// Component that displays a product with a 'Add to cart' button
const ProductCard = (props, {dispatch}) => (
  <div className="ProductCard-container">
    <img className="ProductCard-image" src={props.data.image} alt={props.data.name}/>
    <div style={{height: 20}}/>
    <div>{props.data.name}</div>
    <div style={{height: 20}}/>
    <div style={{display: 'flex', flexDirection: 'row', alignSelf: 'stretch', justifyContent: 'space-between'}}>
      <div>$ {props.data.price}</div>

      {/*
        Button that dispatches the redux action ADD_PRODUCT_TO_CART
      */}
      <button
        onClick={() => { props.dispatch(addProductToCart(props.data)) }}
      >
        Add to cart
      </button>
    </div>
  </div>
)

export default connect()(ProductCard)
