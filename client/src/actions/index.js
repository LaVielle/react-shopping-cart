export const addProductToCart = product => {
  console.log(product);
  return({
    type: 'ADD_PRODUCT_TO_CART',
    product
  })
}
