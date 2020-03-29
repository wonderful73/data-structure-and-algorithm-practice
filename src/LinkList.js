 /*
  * 链表实现
  */ 

// 节点
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

// 链表类
class LinkList {
  constructor() {
    this.head = new Node("head");
  }

  // 查找
  find(item) {
    let currentNode = this.head;
    while (currentNode.element !== item) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  // 插入
  insert(newElement, item) {
    const newNode = new Node(newElement);
    const currentNode = this.find(item);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  // 显示
  display() {
    let currentNode = this.head;
    while (currentNode.next !== null) {
      console.log(currentNode.next.element);
      currentNode = currentNode.next;
    }
  }

  // 查找上一个节点
  findPrev(item) {
    let currentNode = this.head;
    while (currentNode.next !== null && currentNode.next.element !== item) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  // 删除
  remove(item) {
    let prevNode = this.findPrev(item);
    if (prevNode.next !== null) prevNode.next = prevNode.next.next;
  }

  // 将某个节点向前移动 n 个节点
  advance(item, n) {
    let prevNode = this.findPrev(item);
    let itemNode = this.find(item);
    let itemNextNode = this.find(item);
    for (let i = 0; i < n; i++) {
      itemNextNode = itemNextNode.next;
    }
    prevNode.next = prevNode.next.next;
    itemNode.next = null;
    this.insert(item, itemNextNode.element);
  }
}

// run example:
const guangZhouMetroLine1 = new LinkList();

guangZhouMetroLine1.insert('A', 'head');
guangZhouMetroLine1.insert('B', 'A');
guangZhouMetroLine1.insert('C','B');
guangZhouMetroLine1.insert('D','C');
guangZhouMetroLine1.insert('E', 'D');

guangZhouMetroLine1.display();

console.log('删除C: ');
guangZhouMetroLine1.remove('C');

guangZhouMetroLine1.display();

console.log('将 A 往前移动 2 个节点: ')
guangZhouMetroLine1.advance('A', 2);
guangZhouMetroLine1.display();