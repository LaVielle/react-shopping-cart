import * as actions from './index'
import productData from '../products.json'

describe('product actions', () => {
  it('addProductToCart should create ADD_PRODUCT_TO_CART action', () =>{
    expect(actions.addProductToCart(
      productData[0]
    )).toEqual({
      type: 'ADD_PRODUCT_TO_CART',
      product: productData[0]
    })
  })

  it('removeProductFromCart should create REMOVE_PRODUCT_FROM_CART action', () =>{
    expect(actions.removeProductFromCart(
      productData[0]
    )).toEqual({
      type: 'REMOVE_PRODUCT_FROM_CART',
      product: productData[0]
    })
  })
})
