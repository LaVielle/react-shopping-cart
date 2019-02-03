import React from 'react'
import '../styles/CartItem.css'

const CartItem = (props) => (
  <div className="CartItem-container">
    <div style={{flex: 4}} className="CartItem-name">{props.product.name}</div>
    <div style={{flex: 2}} className="CartItem-count">{props.count}</div>
    <div style={{flex: 2}} className="CartItem-unitPrice">{props.product.price}</div>
    <div style={{flex: 3}} className="CartItem-total">{props.count * props.product.price}</div>
  </div>
)

export default CartItem
