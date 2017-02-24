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
      const myStack = new Stack()

      expect(() => myStack.push('foo'))
        .to.alter(() => myStack.length(), { from: 0, to: 1 })
    })
  })

  context('pop()', () => {
    it('returns and removes the top element in the stack or null if the stack is empty', () => {
      const myStack = new Stack()
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
})
