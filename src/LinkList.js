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
    console.log(`finded ${item}`);
    return currentNode;
  }

  // 插入
  insert(newElement, item) {
    const newNode = new Node(newElement);
    const currentNode = this.find(item);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    console.log(`insert ${newElement} success`)
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
    let preNode = this.findPrev(item);
    if (preNode.next !== null) preNode.next = preNode.next.next;
  }
}

// run example:
const guangZhouMetroLine1 = new LinkList();

guangZhouMetroLine1.insert('广州东站', 'head');
guangZhouMetroLine1.insert('体育中心站', '广州东站');
guangZhouMetroLine1.insert('体育西路站','体育中心站');

guangZhouMetroLine1.display();

console.log('删除体育西路站: ');
guangZhouMetroLine1.remove('体育西路站');

guangZhouMetroLine1.display();