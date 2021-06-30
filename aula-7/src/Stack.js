export class Stack {
  constructor() {
    this.items = []
  }

  push(element) {
    this.items.push(element)
  }

  pop() {
    if (this.items.length == 0) return false
    this.items.pop()
    return true
  }

  peek() {
    return this.items[this.items.length - 1]
  }

  isEmpty() {
    return this.items.length == 0
  }

  toString() {
    let stackString = ''

    for (let element of this.items) {
      stackString += element + ' '
    }
    return stackString.slice(0, -1)
  }
}
