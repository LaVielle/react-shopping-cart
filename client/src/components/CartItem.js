import React from 'react'
import '../styles/CartItem.css'

const CartItem = (props) => (
  <div className="CartItem-container">
    <div className="CartItem-name">{props.product.name}</div>
    <div className="CartItem-count">
      <div
        className="CartItem-count-button"
        onClick={() => {console.log('add item')}}
      >
        +
      </div>
      <div className="CartItem-count-counter">{props.count}</div>
      <div
        className="CartItem-count-button"
        onClick={() => {console.log('remove item')}}
      >
        -
      </div>
    </div>
    <div className="CartItem-unitPrice">{props.product.price}</div>
    <div className="CartItem-total">{props.count * props.product.price}</div>
  </div>
)

export default CartItem
