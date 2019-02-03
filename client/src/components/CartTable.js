import React from 'react';
import CartItem from './CartItem';

const CartTable = ({ products }) => {
  console.log(products);
  return (
    <div>
      {products.map(item => <CartItem key={item.product.id} {...item} />)}
    </div>
  )
}

export default CartTable
