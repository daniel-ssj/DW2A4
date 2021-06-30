import test from 'ava'
import { Stack } from '../src/Stack.js'

test.before((t) => {
  t.context.stack = new Stack()
  t.context.stack.items = [
    1, 2, 3, 9, 22, 54, 33, 99, 57, 78, 44, 12, 12, 16, 71,
  ]
})

test('push into stack', (t) => {
  t.context.stack.push(34)
  const expected = t.context.stack.peek()
  t.is(34, expected)
})

test('pop from stack', (t) => {
  const expected = t.context.stack.pop()
  t.true(expected)
})

test('peek stack', (t) => {
  const expected = t.context.stack.peek()
  t.is(71, expected)
})

test('check if stack is empty', (t) => {
  const expected = t.context.stack.isEmpty()
  t.false(expected)
})

test('get stack as string', (t) => {
  const expected = '1 2 3 9 22 54 33 99 57 78 44 12 12 16 71'
  const actual = t.context.stack.toString()
  t.deepEqual(actual, expected)
})
