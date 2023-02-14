//Class for a single node
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//Class for a stack
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //method to prepend a node at the beginning of stack
  push(val) {
    //create new node
    let newNode = new Node(val);

    //if empty..
    if (!this.size) {
      //make new node both first and last
      this.first = newNode;
      this.last = newNode;
    } else {
      //if there are nodes in the stack...
      
      let oldFirst = this.first; //grab reference to current first
      this.first = newNode; //make first el be the new node
      this.first.next = oldFirst; //make new first (new node) point to old first
    }

    return ++this.size; //increment size and return it
  }

  //method to remove a node from the beginning of stack
  pop() {
    //if list is empty...
    if (!this.size) return null;

    let oldFirst = this.first; //grab reference to first node

    //if only one node in stack...
    if (this.size === 1) {
      //make last be null
      this.last = null;
    }

    //make first be the node after (if it is null, we set it to null so that 
    //both last and first are null)
    this.first = this.first.next;

    this.size--; //decrement size

    return oldFirst.val; //return the value of node that was popped
  }
}