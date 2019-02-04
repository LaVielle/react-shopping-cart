export const addProductToCart = product => {
  console.log(product);
  return({
    type: 'ADD_PRODUCT_TO_CART',
    product
  })
}

export const removeProductFromCart = product => {
  console.log(product);
  return({
    type: 'REMOVE_PRODUCT_FROM_CART',
    product
  })
}
