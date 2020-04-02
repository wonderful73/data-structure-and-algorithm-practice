/*
 * 双向链表
 */

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
  }
}

class TwoWayLinkList {
  constructor() {
    this.head = new Node('head');
  }

  find(item) {
    let currentNode = this.head;
    while (currentNode.element !== item) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  insert(newElement, item) {
    let newNode = new Node(newElement);
    let currentNode = this.find(item);
    newNode.next = currentNode.next;
    newNode.previous = currentNode;
    currentNode.next = newNode;
  }

  display() {
    let currentNode = this.head;
    while (currentNode !== null && currentNode.next !== null) {
      console.log(currentNode.next.element)
      currentNode = currentNode.next;
    }
  }

  // 查找最后一个节点
  findLast() {
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  // 反向显示链表
  displayReverse() {
    let currentNode = this.findLast();
    while (currentNode.previous !== null) {
      console.log(currentNode.element);
      currentNode = currentNode.previous;
    }
  }
}

// example
const gzArea = new TwoWayLinkList();
gzArea.insert('天河区', 'head');
gzArea.insert('海珠区', '天河区');
gzArea.insert('南沙区', '海珠区');
console.log('正向输出链表: ');
gzArea.display();
console.log('反向输出链表: ');
gzArea.displayReverse();