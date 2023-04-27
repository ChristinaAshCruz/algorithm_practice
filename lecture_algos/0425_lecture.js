class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  addFront(val) {
    // if root is null add new Node as root
    if (this.root == null) {
      this.root = new Node(val);
      return this;
    } else {
      let runner = this.root;
      while (runner !== null) {
        // new node is less than
        if (runner.val < val) {
          // new node is less than
          if (runner.right == null) {
            runner.right = new Node(val);
            return this;
          }
          runner = runner.right;
          // new node is less than
        } else {
          if (runner.left == null) {
            runner.left = new Node(val);
            return this;
          }
          runner = runner.left;
        }
      }
    }
    return this;
  }

  size(bst = this.root) {
    if (bst == null) {
      return 0;
    } else {
      // goes throught root.left values
      let leftNodes = this.size(bst.left);
      // goes throught root.right values
      let rightNodes = this.size(bst.right);
      // adding 1 to include root
      return leftNodes + rightNodes + 1;
    }
  }
}

node1 = new Node(10);
bst1 = new BST();
bst1.addFront(3).addFront(6).addFront(20).addFront(8).addFront(5);
console.log(bst1);
console.log(bst1.size());
