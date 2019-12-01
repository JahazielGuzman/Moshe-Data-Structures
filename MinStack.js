const MyStack = require('./MyStack.js');

module.exports = class MinStack {

	constructor(arr) {

		this.mainStack = new MyStack(arr.length);
		this.backupStack = new MyStack(arr.length - 1);
		arr.forEach((item) => this.push(item));

	}

	push(item) {

		let val;
		while (!this.mainStack.isEmpty() && this.mainStack.peek() < item) {
			this.backupStack.push(this.mainStack.pop());

		}
		this.mainStack.push(item);
		while (!this.backupStack.isEmpty()) {
			this.mainStack.push(this.backupStack.pop());
		}
	}

	pop() {
		return this.mainStack.pop();
	}

	min() {
		return this.mainStack.peek();
	}

	print() {
		return this.mainStack.print();
	}
}