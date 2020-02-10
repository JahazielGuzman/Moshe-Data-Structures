module.exports = class MyStack {

	constructor(size) {

		this.stack = new Array(size);
		this.top = -1;
	};

	isFull() {
		return this.top == this.stack.length - 1;
	}

	isEmpty() {
		return this.top == -1;
	}

	print() {
		return this.stack;
	}

	push(item) {

		if (this.isFull()) {
			throw new Error("The stack is full!");
		}
		else {
			this.top ++;
			this.stack[this.top] = item;
		}

	}

	pop() {

		if (this.isEmpty()) {
			throw new Error("The stack is empty!");
		}
		else {
			let top = this.stack[this.top];
			this.top --;
			return top;
		}
	}

	peek() {

		return this.stack[this.top];
	}


}