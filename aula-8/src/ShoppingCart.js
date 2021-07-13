export class ShoppingCart {
  constructor() {
    this.items = []
  }

  add(item) {
    this.items.push(item)
  }

  removeLast() {
    if (this.items.length === 0) throw new Error("Can't remove from empty cart")

    this.items.pop()
  }

  remove(item) {
    const toBeRemoved = this.items.indexOf(item)

    this.items.splice(toBeRemoved, 1)
  }

  addMany(item, amount) {
    for (let i = 0; i < amount; i++) {
      this.items.push(item)
    }
  }
}
