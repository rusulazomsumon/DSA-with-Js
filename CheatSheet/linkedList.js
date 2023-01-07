class Node {
  constructor(element) {
    // element property to store data
    this.element = element;
    // next property to store reference to next node
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // head property to store reference to first node
    this.head = null;
    // size property to store number of nodes in list
    this.size = 0;
  }

  add(element) {
    // create a new Node with element
    const node = new Node(element);
    // variable to store current node
    let current;

    // if head is null, set head to new node
    if (this.head == null) {
      this.head = node;
    } else {
      // set current to head
      current = this.head;
      // iterate through list until you reach the end
      while (current.next) {
        current = current.next;
      }
      // set next property of current node to new node
      current.next = node;
    }
    // increment size of list
    this.size++;
  }

  insertAt(element, index) {
    // if index is out of bounds, return false
    if (index > 0 && index > this.size) {
      return false;
    } else {
      // create a new Node with element
      const node = new Node(element);
      // variables to store current and previous nodes
      let current, previous;

      // if index is 0, set head to new node
      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        // set current to head
        current = this.head;
        let it = 0;

        // iterate through list until you reach index
        while (it < index) {
          it++;
          previous = current;
          current = current.next;
        }
        // set next property of new node to current node
        node.next = current;
        // set next property of previous node to new node
        previous.next = node;
      }
      // increment size of list
      this.size++;
      return true;
    }
  }
}

const list = new LinkedList();
list.add(10);
list.add(20);
list.add(30);
list.insertAt(15, 1);
console.log(list.head.element);
console.log(list.head.next.element);