'use strict'

export default class Stack {

  constructor() {
    this.stack = []
    this.top = 0
  }
  push(anElement) {
    this.stack[this.top++] = anElement
  }
// returns and removes the top element in the stack or null if the stack is empty
  pop() {
    if(this.stack.length == 0) {return null
    }

    return this.stack[this.top--];
  }
  peek() {
    return this.stack[this.top-1]
  }

  isEmpty() {
    return this.stack.length <= 0
  }
  myLength() {
    return this.length
  }
}
