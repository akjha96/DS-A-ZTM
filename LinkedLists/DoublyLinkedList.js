class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(pos, value) {
    if (pos === 0) {
      this.prepend(value);
    } else if (pos >= this.length) {
      this.append(value);
    } else {
      const leader = this.traverseToIndex(pos - 1);
      const follower = leader.next;
      let newNode = new Node(value);
      leader.next = newNode;
      newNode.prev = leader;
      newNode.next = follower;
      follower.prev = newNode;
    }
    this.length++;
    return this;
  }

  traverseToIndex(index) {
    let newNode = this.head;
    let counter = 0;
    while (counter !== index) {
      newNode = newNode.next;
      counter++;
    }
    return newNode;
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
    } else if (index >= this.length) {
      this.tail = this.tail.prev;
    } else {
      const leader = this.traverseToIndex(index - 1);
      const follower = leader.next.next;
      leader.next = follower;
    }
    this.length--;
    return this;
  }

  printList() {
    const listItems = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      listItems.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return listItems;
  }
}

let myDoublyLinkedList = new DoublyLinkedList(10);
console.log(myDoublyLinkedList);
console.log("**************************");
myDoublyLinkedList.append(5);
console.log(myDoublyLinkedList);
console.log(myDoublyLinkedList.printList());

console.log("**************************");
myDoublyLinkedList.prepend(100);
console.log(myDoublyLinkedList);
console.log(myDoublyLinkedList.printList());

console.log("**************************");
myDoublyLinkedList.insert(1, 71);
console.log(myDoublyLinkedList);
console.log(myDoublyLinkedList.printList());

console.log("**************************");
myDoublyLinkedList.remove(1);
console.log(myDoublyLinkedList);
console.log(myDoublyLinkedList.printList());
