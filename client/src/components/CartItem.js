import React from 'react'
import { connect } from 'react-redux';
import { addProductToCart, removeProductFromCart } from '../actions';
import '../styles/CartItem.css'

const CartItem = (props, { dispatch }) => (
  <div className="CartItem-container">
    <div className="CartItem-name">{props.product.name}</div>
    <div className="CartItem-count">
      <div
        className="CartItem-count-button"
        onClick={() => { props.dispatch(addProductToCart(props.product)) }}
      >
        +
      </div>
      <div className="CartItem-count-counter">{props.count}</div>
      <div
        className="CartItem-count-button"
        onClick={() => { props.dispatch(removeProductFromCart(props.product)) }}
      >
        -
      </div>
    </div>
    <div className="CartItem-unitPrice">{props.product.price}</div>
    <div className="CartItem-total">{props.count * props.product.price}</div>
  </div>
)

export default connect()(CartItem)
