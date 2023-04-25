// building a node// we will be cbuilding a Node class

class Node {
  // notice how constructor takes in 1 parameter
  // this is where we pass in the data we want to sore in the node
  constructor(data) {
    // node is built of: Data + pointer to next node
    this.data = data;
    // we want the pointer to = null since each node does not know what node they are attached to or what order they are in

    this.next = null;
  }
}

// we also need to build the linked list class

// LINKED LIST METHODS

// AddFront()
// we use addFront() to designate the head of the linked list
// technically easier to do then removing/adding from an array
class LinkedList {
  constructor() {
    this.head = null;
  }

  addFront(val) {
    // Creating a new node object with the value provided
    let new_node = new Node(val);
    // Checking to see if the current list does not have a head node (if the list is empty)

    // If the list is empty, place the new node as the head
    if (!this.head) {
      this.head = new_node;
      return this;
    }
    // If the list is not empty, assign the head to be the next node to the new node (Blue Arrow in picture above)
    new_node.next = this.head;
    // Then finally assign the new_node to be the new head of the list (Red Arrow in picture above)
    this.head = new_node;
    return this;
  }

  // ITERATING THROUGH LINKED LISTS
  // how can we track data throughout our nodes?
  // we use our 'runner'
  // our runner performs similarly as 'i' in our for loops
  // a for loop will not work here since we don't know how many nodes are in our list --> use a while loop instead!

  findSum() {
    //We first have to tell our train attendant that we want them to start at the front of the train
    let runner = this.head;
    let sum = 0;
    //Since a Linked List does not know how many nodes is within it, we will not be able to use a for loop to             iterate, instead we'll use a while
    //Also we need to tell them when to stop otherwise they will just run off the end of the train
    while (runner !== null) {
      //Since the runner is set to the current node, its value will be equal to the value of the node they                 are currently on
      sum += runner.data;
      //Tell our attendant to move to the next car
      runner = runner.next;
    }
    return sum;
  }
}
