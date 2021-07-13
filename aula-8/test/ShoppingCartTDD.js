import { expect } from 'chai'
import { ShoppingCart } from '../src/ShoppingCart.js'

describe('Shopping Cart TDD', () => {
  let shoppingCart
  let items

  before('create shopping cart instance', () => {
    shoppingCart = new ShoppingCart()
    items = shoppingCart.items = ['Apple', 'Pineapple']
  })

  it('should add an item to the cart', () => {
    shoppingCart.add('Banana')
    expect(items).to.deep.equal(['Apple', 'Pineapple', 'Banana'])
  })

  it('should remove last item from the cart', () => {
    shoppingCart.removeLast()
    expect(items).to.deep.equal(['Apple', 'Pineapple'])
  })

  it('should remove specific item from the cart', () => {
    shoppingCart.remove('Apple')
    expect(items).to.deep.equal(['Pineapple'])
  })

  it('should add n amount of item', () => {
    shoppingCart.addMany('Watermelon', 3)
    expect(items).to.deep.equal([
      'Pineapple',
      'Watermelon',
      'Watermelon',
      'Watermelon',
    ])
  })
})
