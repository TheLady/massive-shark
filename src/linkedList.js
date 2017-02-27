'use strict'

class Node {
  constructor(data)
  this.data = data,
  this.next = null
  }
}

//set up a constructor to define first instance of a linked list
export default class Linked_List {
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }
// A linked list has data and directions. Create an instance of a Node by inserting data and lengthening it because you added data.
  insert(data) {
    let node = new Node(data)

    if(this.head === null) {
      ++this._length

    }
  }
}