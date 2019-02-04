import products from './products'
import productData from '../products.json'

describe('products reducer', () => {
  it('should handle initial state', () => {
    expect(
      products(undefined, {})
    ).toEqual([])
  })

  it('should handle ADD_PRODUCT_TO_CART', () => {
    // add product 1 to empty cart
    expect(
      products([], {
        type: 'ADD_PRODUCT_TO_CART',
        product: productData[0]
      })
    ).toEqual([
      {
        count: 1,
        product: productData[0]
      }
    ])

    // add product 2 to cart already containing product 1
    expect(
      products([
        {
          count: 1,
          product: productData[0]
        }
      ], {
        type: 'ADD_PRODUCT_TO_CART',
        product: productData[1]
      })
    ).toEqual([
      {
        count: 1,
        product: productData[0]
      },
      {
        count: 1,
        product: productData[1]
      }
    ])

    // add product 1 to cart already containing one unit of product 1 and one unit of product 2
    expect(
      products([
        {
          count: 1,
          product: productData[0]
        },
        {
          count: 1,
          product: productData[1]
        }
      ], {
        type: 'ADD_PRODUCT_TO_CART',
        product: productData[0]
      })
    ).toEqual([
      {
        count: 2,
        product: productData[0]
      },
      {
        count: 1,
        product: productData[1]
      }
    ])
  })

  it('should handle REMOVE_PRODUCT_FROM_CART', () => {
    // remove one unit of product 1 from cart containing 2xproduct 1 and 1xproduct 2
    expect(
      products([
        {
          count: 2,
          product: productData[0]
        },
        {
          count: 1,
          product: productData[1]
        }
      ], {
        type: 'REMOVE_PRODUCT_FROM_CART',
        product: productData[0]
      })
    ).toEqual([
      {
        count: 1,
        product: productData[0]
      },
      {
        count: 1,
        product: productData[1]
      }
    ])

    // remove product 2 from cart containing 1xproduct 1 and 1xproduct 2
    expect(
      products([
        {
          count: 1,
          product: productData[0]
        },
        {
          count: 1,
          product: productData[1]
        }
      ], {
        type: 'REMOVE_PRODUCT_FROM_CART',
        product: productData[1]
      })
    ).toEqual([
      {
        count: 1,
        product: productData[0]
      }
    ])

    // remove product 1 from a cart containing only 1xproduct 1
    expect(
      products([
        {
          count: 1,
          product: productData[0]
        }
      ], {
        type: 'REMOVE_PRODUCT_FROM_CART',
        product: productData[0]
      })
    ).toEqual([])

  })
})
