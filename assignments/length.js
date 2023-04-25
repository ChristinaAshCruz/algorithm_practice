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

  // we now need to add a contains(value) function that allows us return a boolean (t/f)
  // true = list has a node that contains value
  contains(val) {
    // we need to establish a runner variable that can go through our SLL
    let runner = this.head;
    // we also need to make that runner's value equat to this.head since it's going to start at the head of the array
    // while the runner does not point to null
    while (runner !== null) {
      // if the runner.data equates to the val in the argument...
      if (runner.data === val) {
        return true;
      }
      // then make that runner equate to the next node before looping again
      runner = runner.next;
    }
    // if the runner gets to 'null' return false
    return false;
  }

  // LENGTH()
  // number of nodes in that list
  length() {
    // we need to make a variable set at 0, so we can add through it during our while loop
    let amount = 0;
    // same as the contains(), we need to make a 'runner' that can pass through our loop until runner == null
    let runner = this.head;

    while (runner !== null) {
      // for every loop, we increase our amount by 1
      amount++;
      // after, we make our runner equate to the next
      runner = runner.next;
    }
    // after the loop, we return the amount (which ends up being the length of the SLL)
    return amount;
  }
}

const SLLtest = new SLL();
SLLtest.addFront(23);
SLLtest.addFront(12);
SLLtest.removeFront();
SLLtest.addFront(4);
SLLtest.addFront(20);
SLLtest.addFront(20);
console.log(SLLtest);

console.log(SLLtest.contains(23));
console.log(SLLtest.length());
