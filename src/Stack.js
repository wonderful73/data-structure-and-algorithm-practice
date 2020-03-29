/**
 * 栈
 */

class Stack {
  constructor() {
    this.store = [];
    this.top = 0; // 栈顶
  }

  // 入栈
  push(element) {
    this.store[this.top++] = element;
  }

  // 出栈
  pop() {
    return this.store[--this.top];
  }

  // 获取栈顶
  peek() {
    return this.store[this.top - 1];
  }

  // 栈长度
  length() {
    return this.top;
  }

  // 清除栈
  clean() {
    this.top = 0;
  }

}

// example 数制转换
function conversion(number, base) {
  let str = new Stack();
  do {
    str.push(number % base);
    number = Math.floor(number /= base);
  } while (number > 0);

  let converted = '';
  while (str.length() > 0) {
    converted += str.pop();
  }
  return converted;
}

console.log(`将十进制的 100 转换为 二进制：${conversion(100, 2)}`);

// 回文判断
function isPalindrome(words) {
  let str = new Stack();
  for (let i = 0; i < words.length; i++) {
    str.push(words[i]);
  }

  let rewords = '';
  while (str.length() > 0) {
    rewords += str.pop();
  }

  if (words === rewords) {
    return true;
  }

  return false;
}

const hello = 'hello';
if (isPalindrome(hello)) {
  console.log(`${hello} 是回文`);
} else {
  console.log(`${hello} 不是回文`);
}

const abcdcba = 'abcdcba';
if (isPalindrome(abcdcba)) {
  console.log(`${abcdcba} 是回文`);
} else {
  console.log(`${abcdcba} 不是回文`);
}