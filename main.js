const MyArray = require('./MyArray.js');
const LinkedList = require('./LinkedList.js');
const MyStack = require('./MyStack.js');

let stack = new MyStack(6)
for (var i = 0; i < 6; i ++) {
	stack.push(i + 1);
}

console.log(stack.print());
stack.pop();
stack.pop();
let p = stack.pop();
console.log(p);