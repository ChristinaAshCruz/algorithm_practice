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
}
