class ArrayQueue {

	constructor(size) {
		this.size = size;
		this.count = 0;
		this.front = 0;
		this.end = 0;
		this.queue = new Array(size);
	}

	isFull() {
		return this.count === this.size;
	}

	isEmpty() {
		return this.count === 0;
	}

	enqueue(item) {

		if (this.isFull())
			throw new Error(`array queue is full, could not insert element ${item}`);
		else {

			this.queue[this.end] = item;
			this.end = (this.end + 1) % this.size;
			this.count ++;
		}
	}

	dequeue() {
		if (this.isEmpty())
			throw new Error("array queue is empty");
		else {

			const dequeued = this.queue[this.front];
			this.queue[this.front] = 0;
			this.front = (this.front + 1) % this.size;
			this.count --;

			return dequeued;
		}
	}

	peek() {
		if (this.isEmpty())
			throw new Error("array queue is empty. Cannot peek");
		else
			return this.queue[this.front];
	}
}

module.exports = ArrayQueue;