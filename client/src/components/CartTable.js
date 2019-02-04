import React from 'react';
import CartItem from './CartItem';
import '../styles/CartTable.css';


// functions that calculate values for total
// NOTE: One big assumption is that we want to round numbers to 2 decimal points
//       In a real world scenario, this would obviously be a big decision as it could add up to a lots money.
//       Here I decided to go with rounding numbers so the user is not confused with long numbers and for aesthetics.
export const calcSubtotal = (arr) => +arr.reduce((subtotal, item) => subtotal + item.count * item.product.price, 0).toFixed(2)
export const calcShipping = (numberOfUnits, shippingCostPerUnit) => numberOfUnits * shippingCostPerUnit
export const calcTax = (subtotal, totalShipping, taxPercentage) => parseFloat(((subtotal + totalShipping) * taxPercentage).toFixed(2))
export const calcGrandTotal = (subtotal, totalShipping, taxTotal) => parseFloat((subtotal + totalShipping + taxTotal).toFixed(2))

const CartTable = ({ products }) => {

  const subtotal = calcSubtotal(products)
  const numberOfUnits = products.reduce((numberOfUnits, item) => numberOfUnits + item.count, 0)
  const shippingCostPerUnit = 5
  const totalShipping = calcShipping(numberOfUnits, shippingCostPerUnit)
  const taxPercentage = .19
  const taxTotal = calcTax(subtotal, totalShipping, taxPercentage)
  const grandTotal = calcGrandTotal(subtotal, totalShipping, taxTotal)

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
        <div style={{ width: 200}}>
          <div className="CartTable-totals">
            <div>Subtotal</div>
            <div>{subtotal}</div>
          </div>
          <div className="CartTable-totals">
            <div>Shipping</div>
            <div>{totalShipping}</div>
          </div>
          <div className="CartTable-totals">
            <div>VAT</div>
            <div>{taxTotal}</div>
          </div>
          <div className="CartTable-totals">
            <div>Total</div>
            <div>{grandTotal}</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CartTable
