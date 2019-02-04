const products = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART':
      // check if the item is in the cart
      const itemInCart = [...state].filter(el => el.product.id === action.product.id)[0]

      // if item is in cart, increment the count of that item in the array
      if (itemInCart) {
        const indexOfItemInCart = state.findIndex(el => el.product.id === action.product.id)
        const cart = [...state]
        cart[indexOfItemInCart].count ++
        return cart
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

    case 'REMOVE_PRODUCT_FROM_CART':
      // get the index of the item in the cart array
      const indexOfItemInCart = state.findIndex(el => el.product.id === action.product.id)

      // if the item is in the cart:
      if (indexOfItemInCart || (indexOfItemInCart === 0)) {
        // copy the cart
        const cart = [...state]

        // if there are more than one unit of the item in the cart, decrement its count by 1
        if (state[indexOfItemInCart].count > 1) {
          cart[indexOfItemInCart].count --
          return cart
        }
        // if there is only one unit of the item in the cart, remove the item
        else {
          cart.splice(indexOfItemInCart, 1)
          return cart
        }
      }
      // if the item is NOT in the cart, return the cart
      else {
        return state
      }

    default:
      return state
  }
}

export default products
