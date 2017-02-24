'use strict'

export default class Stack {

  constructor() {
    this.stack = []
    this.top = 0
  }
  push(anElement) {
    this.stack[this.top++] = anElement
  }

  pop() {
    return this.stack[this.top--];
  }
  peek() {
    return this.collection[this.top-1]
  }

  isEmpty() {
    return this.collection.length <= 0
  }
  length() {
    return this.top
  }
}
