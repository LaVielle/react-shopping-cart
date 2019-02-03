import React from 'react';
import CartItem from './CartItem';
import '../styles/CartTable.css';

const CartTable = ({ products }) => {
  console.log(products);

  const subtotal = products.reduce((subtotal, item) => subtotal + item.count * item.product.price, 0)
  const numberOfUnits = products.reduce((numberOfUnits, item) => numberOfUnits + item.count, 0)
  const shippingCostPerUnit = 5
  const totalShipping = numberOfUnits * shippingCostPerUnit
  const taxPercentage = .19
  const taxTotal = (subtotal + totalShipping) * taxPercentage
  const grandTotal = subtotal + totalShipping + taxTotal

  return (
    <div className="CartTable-container">

      {/*
        Headers
      */}
      <div className="CartTable-headers">
        <div className="CartTable-header-name">Product</div>
        <div className="CartTable-header-count">Count</div>
        <div className="CartTable-header-unitPrice">Unit Price</div>
        <div className="CartTable-header-total">Total</div>
      </div>

      {/*
        Items
      */}
      <div>
        {products.map(item => <CartItem key={item.product.id} {...item} />)}
      </div>


      {/*
        Totals
      */}
      <div className="CartTable-total-section">
        <div className="CartTable-totals">
          <div>Subtotal</div>
          <div style={{ width: 20}} />
          <div>{subtotal}</div>
        </div>
        <div className="CartTable-totals">
          <div>Shipping</div>
          <div style={{ width: 20}} />
          <div>{totalShipping}</div>
        </div>
        <div className="CartTable-totals">
          <div>VAT</div>
          <div style={{ width: 20}} />
          <div>{taxTotal}</div>
        </div>
        <div className="CartTable-totals">
          <div>Total</div>
          <div style={{ width: 20}} />
          <div>{grandTotal}</div>
        </div>
      </div>

    </div>
  )
}

export default CartTable
