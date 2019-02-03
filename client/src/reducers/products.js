const products = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART':
      const itemInCart = [...state].filter(el => el.product.id === action.product.id)[0]

      // if item is in cart, increment the count of that item in the array
      if (itemInCart) {
        const cartWithoutItem = [...state].filter(el => el.product.id !== action.product.id)
        itemInCart.count ++
        return [
          ...cartWithoutItem,
          itemInCart
        ]
      }

      // if item is not in the cart already, create a new object with count = 1 and push it to the array
      else {
        return [
          ...state,
          {
            count: 1,
            product: action.product
          }
        ]
      }
    default:
      return state
  }
}

export default products
