class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.stack = [];
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.stack[this.stack.length - 1];
  }

  push(value) {
    this.stack.push(value);

    return this;
  }

  pop() {
    const poppedItem = this.stack.pop();

    return poppedItem;
  }
  isEmpty() {
    if (this.stack.length === 0) {
      return true;
    }
    return false;
  }
  printStack() {
    let stackItems = [];
    if (this.isEmpty()) {
      return null;
    }
    for (let i = 0; i < this.stack.length; i++) {
      stackItems.push[i];
    }
    return stackItems;
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
