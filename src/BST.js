/*
 * 二叉查找树
 */

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  show() {
    return this.data;
  }
}

class Bst {
  constructor() {
    this.root = null;
  }

  // 插入
  insert(data) {
    let n = new Node(data, null, null);
    if (this.root === null) {
      this.root = n;
    } else {
      let current = this.root;
      let parent;
      while (true) {
        parent = current;
        if (data < current.data) {
          current = current.left;
          if (current === null) {
            parent.left = n;
            break;
          }
        } else {
          current = current.right;
          if (current === null) {
            parent.right = n;
            break;
          }
        }
      }
    }
  }
}

// 中序遍历
function middleOrder(node) {
  if (node !== null) {
    middleOrder(node.left);
    console.log(node.show() + ' ');
    middleOrder(node.right);
  }
}

// 先序遍历
function preOrder(node) {
  if (node !== null) {
    console.log(node.show() + ' ');
    middleOrder(node.left);
    middleOrder(node.right);
  }
}

// 后序遍历
function postOrder(node) {
  if (node !== null) {
    middleOrder(node.left);
    middleOrder(node.right);
    console.log(node.show() + ' ');
  }
}

// example
const nums = new Bst();
nums.insert(3);
nums.insert(5);
nums.insert(1);
nums.insert(4);
nums.insert(2);
nums.insert(6);
console.log('中序遍历 nums: ')
middleOrder(nums.root);
console.log('先序遍历 nums: ')
preOrder(nums.root);
console.log('后序遍历 nums: ')
postOrder(nums.root);
