// ADD FRONT
// Write a method that accepts a value
// then create a new node
// then assign it to the list head, and return a pointer to the new head node.
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
  }

  addFront(val) {
    // we need to create a new node to be added as added as a head
    var new_node = new Node(val);
    // next we need to set this new_node.next to the SLL's current head
    new_node.next = this.head;
    // now we need to establish that the new head is new_node
    this.head = new_node;
    return this.head;
  }

  removeFront() {
    // we need the current head to now equate to the note that it is pointing to
    this.head = this.head.next;
    return this;
  }

  getValOfFront() {
    // first we need to make an if statement that can check whether the this.head == null
    if (this.head == null) {
      return null;
    } else {
      return this.head.data;
    }
  }
}

const SLLtest = new SLL();
SLLtest.addFront(23);
SLLtest.addFront(12);
SLLtest.removeFront();
SLLtest.addFront(4);
SLLtest.addFront(20);
console.log(SLLtest);
