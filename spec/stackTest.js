import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/stack'

chai.use(chaiChange)

describe('Stack', () => {
  'use strict'

  it('exists', () => {
    expect(Stack).to.be.a('function')
  })

  context('push()', () => {
    it('pushes an element to the top of the stack', () => {
      let myStack = new Stack()

      expect(() => myStack.push('foo'))
        .to.alter(() => myStack.length(), { from: 0, to: 1 })
        cosnsole.log(mystack)
    })
  })

  context('pop()', () => {
    it('returns and removes the top element in the stack or null if the stack is empty', () => {
      let myStack = new Stack()
      myStack.push('lucky three')
      myStack.push('two is a good number')
      myStack.push('one is okay')
      myStack.push('bad Pringle Four')

      expect(() => myStack.pop())
        .to.alter(() => myStack.length(), { from: 4, to: 3 })
        let badPringle = myStack.pop()
        expect(badPringle).to.equal('bad Pringle Four')
    })
  })

  context('peek()', () => {
    it('returns the top element in the stack or null if the stack is empty', () => {
      let myStack = new Stack()
      myStack.push('lucky three')
      myStack.push('two is a good number')
      myStack.push('one is okay')
      myStack.push('see something')

      let seeSomething = myStack.peek()

      expect(seeSomething).to.equal('see something')
    })
  })

  context('isEmpty()', () => {
    it('checks to see if stack is empty', () => {
      let myStack = new Stack()
      let emptyStack = myStack.isEmpty()
      expect(emptyStack).to.deep.equal(true)
      myStack.push('lemons')
      let notEmptyStack = myStack.isEmpty()
      expect(notEmptyStack).to.eql(false)
    })
  })
})

  context('stackLength()', () => {
    it('returns the number of elements in the stack', () => {
      let myStack = new Stack
      myStack.push('lucky three')
      myStack.push('two is a good number')
      myStack.push('one is okay')
      myStack.push('see something')
      let stackLength = myStack.length()

      expect(myStack.length).to.equal(4)
    })
  })
// stack.length()    // returns the number of elements in the stack.


