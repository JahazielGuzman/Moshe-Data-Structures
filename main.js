const MyArray = require('./MyArray.js');
const LinkedList = require('./LinkedList.js');
const MyStack = require('./MyStack.js');
const MathBalancer = require('./MathBalancer.js')
const TwoStacks = require('./TwoStacks.js');
const MinStack = require('./MinStack.js');

let stack = new TwoStacks(6)
let minstack = new MinStack([6,2,10,4,5]);
// let stock = new MathBalancer("((array[ + array3boxer")
// for (var i = 0; i < 6; i ++) {
// 	stack.push(i + 1);
// }

// console.log(stack.print());
// let p = stack.pop();
// console.log(p);
// console.log(stock.isBalanced());
console.log(minstack.min());
minstack.pop();
console.log(minstack.min());
minstack.push(11);
console.log(minstack.print());
