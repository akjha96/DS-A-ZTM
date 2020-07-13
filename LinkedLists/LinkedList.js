// checking input value function
checkInput = (inputFromUser) => {
  if (typeof inputFromUser === "number") {
    return true;
  }
  return false;
};

// create class Node to create nodes for linked lists
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//create class LinkedList that takes a value as arg and creates new object Node with that value
// and sets the head and the tail of our linkedList
class LinkedList {
  constructor(value) {
    if (checkInput(value)) {
      this.head = new Node(value);
      this.tail = this.head;
      this.length = 1;
    } else {
      ("Invalid Input");
    }
  }

  //   create  a function that appends a new value to our linkedList
  append(value) {
    if (checkInput(value)) {
      const newNode = new Node(value);
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
  }

  prepend(value) {
    if (checkInput(value)) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }
    return "Invalid Input";
  }
  // A function that takes the value from linkedList and puts it in an array
  printList() {
    const listItems = [];
    let currentList = this.head;
    while (currentList !== null) {
      listItems.push(currentList.value);
      currentList = currentList.next;
    }
    return listItems;
  }

  // Create a func that takes 2 arguments: position and value and inserts into the linkedlist
  insert(pos, value) {
    if (pos >= this.length) {
      this.append(value);
    } else if (pos === 0) {
      this.prepend(value);
    } else {
      const leader = this.traverseToIndex(pos - 1);
      const holdingPointer = leader.next;
      let newNode = new Node(value);
      leader.next = newNode;
      newNode.next = holdingPointer;
      this.length++;
    }
    return this;
  }
  // traverse function that takes an index and return the corresponding Node
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  //   create a remove function that removes a node from specific value
  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let leader;
      if (index >= this.length) {
        leader = this.traverseToIndex(this.length - 2);
        leader.next = null;
        this.tail = leader;
      } else {
        leader = this.traverseToIndex(index - 1);
        leader.next = leader.next.next;
      }
      this.length--;
      return this;
    }
  }

  reverse() {
    if (!this.head.next) {
      return this;
    } else {
      let first = this.head;
      this.tail = first;
      let second = first.next;
      while (second) {
        const temp = second.next;
        second.next = first;
        first = second;
        second = temp;
      }
      this.head.next = null;
      this.head = first;
      return this;
    }
  }
}

// create a linkedList
let myLinkedList = new LinkedList(10);
// print our linkedList
console.log(myLinkedList.printList());

myLinkedList.append(5);
// print our linkedList
console.log(myLinkedList.printList());

myLinkedList.append(16);
// print our linkedList
console.log(myLinkedList.printList());

myLinkedList.prepend(100);
// print our linkedList
console.log(myLinkedList.printList());

myLinkedList.remove(16);
// print our linkedList
console.log("remove: ", myLinkedList.printList());

myLinkedList.insert(1, 71);
console.log("insert: ", myLinkedList.printList());

console.log("*****************************");
myLinkedList.reverse();
console.log(myLinkedList.printList());
