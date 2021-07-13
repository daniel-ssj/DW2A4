import { expect } from 'chai'
import { ShoppingCart } from '../src/ShoppingCart.js'

describe('Shopping Cart BDD', () => {
  describe('When shopping', () => {
    const shoppingCart = new ShoppingCart()

    it('should throw an error when attempting to remove from empty cart', () => {
      expect(() => shoppingCart.removeLast()).to.throw(
        Error,
        "Can't remove from empty cart"
      )
    })

    it('should add an apple to the cart', () => {
      shoppingCart.add('Apple')
      expect(shoppingCart.items).to.deep.equal(['Apple'])
    })

    it('should add five bananas to the cart', () => {
      shoppingCart.addMany('Banana', 5)
      expect(shoppingCart.items).to.deep.equal([
        'Apple',
        'Banana',
        'Banana',
        'Banana',
        'Banana',
        'Banana',
      ])
    })

    it('should remove apple from cart', () => {
      shoppingCart.remove('Apple')
      expect(shoppingCart.items).to.deep.equal([
        'Banana',
        'Banana',
        'Banana',
        'Banana',
        'Banana',
      ])
    })
  })
})
