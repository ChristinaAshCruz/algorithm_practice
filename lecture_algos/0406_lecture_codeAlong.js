//

// ----------------------------------------------------------------------------

// Singly Linked Lists
// we need to create a node class + singly linked list class

// node class
class Node {
  // every class is going to need a constructor method
  // a constructor method happens every time we make a new Node
  constructor(val) {
    // defining our attributes here
    this.val = val;
    this.next = null;
  }
  // when we are constructing a new Node, we'll be creating a node with 2 values: val and next
  // next will be pointing to the next node
}

// singly linked list class
// these lists are not built in
// but there are rules in order to create them
class SLL {
  // constructor
  // head = null
  // this means that if we don't pass anything as an argument, it will result to null
  // if we do pass something, then it will be that value
  constructor(head = null) {
    // attributes
    this.head = head;
  }

  // methods
  addFront(val) {
    // adding a value to the front of the list
    // we could try and change the value of node.next = head
    // that way the node would be placed in front
    let newNode = new Node(val);
    // creating a variable (newNode) and having it create a new instance
    newNode.next = this.head;
    // making this new node point to the list's head
    this.head = newNode;
    // officially making this SLL.head = newNode
    return this;
  }

  // what if we want to see all the values in the list
  printList() {
    while (this.head != null) {
      // whle the head does not equal null
      console.log(this.head.val);
      // this increments our loop
      // this moves through the list from one node to the next
      this.head = this.head.next;
    }
    return this;
  }
}

const node1 = new Node(8);
// stating the head of the list
let SL = new SLL(new Node(10));
// adding in nodes after the head
SL.addFront(1).addFront(3).addFront(15).addFront(20);
// printing the values of the list
SL.printList();

// recap
// Singly linked classes do not exist on their own
// we created 2 classes
// when we want to add a value to the front of an array
// we have to shift everything in the array
// adjusting the pointers throughout the list
// in order to add a value to the end of the list
// you'll have to loop through the whole list
// add it and make sure the node.next = null?
