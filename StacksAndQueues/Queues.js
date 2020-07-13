class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.first;
  }
  enqueue(value) {
    // after checking the value
    let newNode = new Node(value);
    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    const poppedItem = this.first.value;
    this.first = this.first.next;
    this.length--;
    return poppedItem;
  }

  isEmpty() {
    if (this.length === 0) {
      return true;
    }
    return false;
  }

  printQueue() {
    if (this.isEmpty()) {
      return null;
    }

    let queueItems = [];
    let currentNode = this.first;
    while (currentNode !== null) {
      queueItems.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return queueItems;
  }
}

let queue1 = new Queue();

queue1.enqueue("twitter");
queue1.enqueue("Udemy");
queue1.enqueue("facebook");
queue1.enqueue("ASUS");
queue1.enqueue("PowerSlide");
queue1.enqueue("Youtube");
console.log(queue1);

console.log("***********Popping 1st**********");
console.log(queue1.dequeue());
console.log(queue1.printQueue());
console.log(queue1);

console.log("*********Poping 2nd ************");
console.log(queue1.dequeue());
console.log(queue1.printQueue());
console.log(queue1);

console.log("*********Poping 3nd ************");
console.log(queue1.dequeue());
console.log(queue1.printQueue());
console.log(queue1);
console.log(queue1.peek());
