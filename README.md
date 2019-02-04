# react-shopping-cart

## How to run

1. Clone the repo and cd into the client directory

```
git clone https://github.com/LaVielle/react-shopping-cart.git
cd react-shopping-cart/client
```

2. Install node modules
```
npm i
```

3. Start the app
```
npm start
```

The app is now available at http://localhost:3000

## Docs

#### Product Model

A product is defined as follows:

- `id` (String): a five character string that uniquely identifies the product
- `name` (String): the display name of the product
- `price` (Number): the price of one unit of the product
- `image` (String): a url to an image file showing the product

#### Components


###### `<App>`
Renders a cart at the top and a grid of product under it.


###### `<CartTable>`
Renders a table with three sections: headers, items, and totals.

props: `products`, an array of products in the cart and how much of each:
```
[
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
```


###### `<CartItem>`
Renders a item in the cart, with product name, product count (+ and - buttons to add or remove units), unit price and total.

props:
  - `product`: object with `count` and `product` properties
  - `dispatch`: function passed by redux to dispatch actions


###### `<ProductGrid>`
Renders a grid of ProductCard components.

props: `products`, an array of products coming from the database (in our case products.json)


###### `<ProductCard>`
Renders a card with the product info and a 'Add to cart' button

props:
  - `product`: object containing the product data
  - `dispatch`: function passed by redux to dispatch actions
