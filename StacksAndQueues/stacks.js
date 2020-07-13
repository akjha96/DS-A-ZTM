class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  // peek method
  peek() {
    return this.top;
  }

  // push
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      this.bottom = this.top;
      this.top = newNode;
      newNode.next = this.bottom;
    }
    this.length++;
    return this;
  }

  // pop()
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const holdingPointer = this.top.value;

    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;
    return holdingPointer;
  }

  // isEmpty
  isEmpty() {
    if (!this.top) {
      return true;
    }
    return false;
  }

  // print stack
  printStack() {
    let stackitems = [];
    let currentNode = this.top;
    while (currentNode) {
      stackitems.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return stackitems;
  }
}

let stack1 = new Stack();
stack1.push("google");
stack1.push("Udemy");
stack1.push("facebook");
console.log(stack1.printStack());

console.log("***********Popping 1st**********");
console.log(stack1.pop());
console.log(stack1.printStack());
console.log(stack1);

console.log("*********Poping 2nd ************");
console.log(stack1.pop());
console.log(stack1.printStack());
console.log(stack1);

console.log("*********Poping 3nd ************");
console.log(stack1.pop());
console.log(stack1.printStack());
console.log(stack1);
