const products = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART':
      return [
        ...state,
        action.product
      ]
    default:
    return state
  }
}

export default products
