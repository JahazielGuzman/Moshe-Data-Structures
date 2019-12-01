module.exports = class TwoStacks {

	constructor(size) {
		this.stack = new Array(size);
		this.top1 = -1
		this.top2 = size;
		this.size = size;
	}

	print() {
		return this.stack;
	}


	push1(item) {

		if (this.isFull1()) {
			throw new Error("OVERFLOW!");
		}
		else {
			this.stack[++this.top1] = item;
		}
	}

	push2(item) {

		if (this.isFull2()) {
			throw new Error("OVERFLOW!");
		}
		else {
			this.stack[--this.top2] = item;
		}
	}

	pop1() {

		if (this.isEmpty1())
			throw new Error("UNDERFLOW!");

		let top = this.stack[this.top1--];
		return top;
	}

	pop2() {

		if (this.isEmpty2())
			throw new Error("UNDERFLOW!");

		let top = this.stack[this.top2++];
		return top;
	}

	isEmpty1() {

		return this.top1 == 0;
	}

	isEmpty2() {
		return this.top2 == this.size;
	}

	isFull1() {
		return this.top1 == this.top2 - 1;
	}

	isFull2() {
		return this.top1 == this.top2 - 1;
	}
}