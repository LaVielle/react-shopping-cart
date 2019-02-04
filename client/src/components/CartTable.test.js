import * as CartTable from './CartTable'

const dummyProductArray = [
  {
    count: 5,
    product: {
      id: "1gt87",
      name: "Product 1",
      price: 3.99,
      image: "https://cdn.cheapism.com/images/040417_products_made_in_usa_slide_13_fs.max-784x410.jpg"
    }
  },
  {
    count: 1,
    product: {
      id: "to0zo",
      name: "Product 2",
      price: 7.79,
      image: "https://cdn.cheapism.com/images/040417_products_made_in_usa_slide_13_fs.max-784x410.jpg"
    }
  }
]

const subtotal = CartTable.calcSubtotal(dummyProductArray)
const numberOfUnits = dummyProductArray.reduce((numberOfUnits, item) => numberOfUnits + item.count, 0)
const shippingCostPerUnit = 5
const totalShipping = CartTable.calcShipping(numberOfUnits, shippingCostPerUnit)
const taxPercentage = 0.19
const taxTotal = CartTable.calcTax(subtotal, totalShipping, taxPercentage)

describe('CartTable', () => {
  it('should calculate subtotal', () => {
    expect(CartTable.calcSubtotal(dummyProductArray)).toEqual(27.74)
  })

  it('should calculate shipping', () => {
    expect(CartTable.calcShipping(numberOfUnits, shippingCostPerUnit)).toEqual(30)
  })

  it('should calculate tax', () => {
    expect(CartTable.calcTax(subtotal, totalShipping, taxPercentage)).toEqual(10.9706)
  })

  it('should calculate grand total', () => {
    expect(CartTable.calcGrandTotal(subtotal, totalShipping, taxTotal)).toEqual(68.71)
  })
})
