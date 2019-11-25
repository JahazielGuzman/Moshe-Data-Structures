const MyArray = require('./MyArray.js');
const LinkedList = require('./LinkedList.js');

let a = new MyArray(5);

for (var i = 0; i < a.length; i ++) {
	a.insert(i + 1);
}

a.insert(a.length + 1);
console.log(a);
a.insertAt(3, 111);
a.insert(a.length + 1);
console.log(a);

const l = new LinkedList();
l.addLast(1)
l.addLast(2)
l.addLast(3)
l.addLast(4)
l.addFirst(5);

console.log(l.toString());

l.deleteFirst();

console.log(l.toString());

l.deleteLast()
l.deleteLast()
l.deleteLast()
l.deleteFirst();

l.addFirst(1);
l.addLast(2);
l.addLast(3);
l.addLast(4);
l.reverse();

console.log(l.toString());
// l.reverse();
console.log(l.getKthFromTheEnd(1));
console.log(l.printMiddle());

let b = new LinkedList();
b.createWithLoop();
console.log(b.hasLoop());

