const Node = require('./Node');

module.exports = class LinkedList {

	constructor(item = null) {
		let node = null;
		this.size = 0;

		if (item != null) {
			node = new Node(item);
			this.size ++;
		}
		
		this.first = node;
		this.last = node;
	}

	createWithLoop() {

		this.addLast(1);
		this.addLast(2);
		this.addLast(3);
		this.addLast(4);

		const loopNode = new Node(5, this.first);
		this.last.next = loopNode;
	}

	length() {
		return this.size;
	}

	addFirst(item) {

		if (item == null) {
			throw new Error("cannot add a node with no item as first!");
		}

		const node = new Node(item, this.first);

		if (this.isEmpty()) {
			this.last = this.first = node;
		}
		else
			this.first = node;
		this.size ++;
	}

	addLast(item) {

		if (item == null) {
			throw new Error("cannot add a null node as last!");
		}

		const node = new Node(item);

		if (this.isEmpty()) {
			this.first = this.last = node;
		}
		else {
			this.last.next = node;
			this.last = node;
		}

		this.size ++;
	}

	deleteFirst() {

		if (this.isEmpty()) {
			throw new Error("UNDERFLOW!");
		}
		else if (this.first == this.last) {
			this.first = this.last = null;
		}
		else {
			const oldFirst = this.first;
			this.first = oldFirst.next;
			oldFirst.next = null;
		}

		this.size --;
	}

	deleteLast() {

		if (this.isEmpty()) {
			throw new Error("UNDERFLOW!");
		}
		else if (this.first == this.last) {

			this.first = this.last = null;
		}
		else {
			
			const previous = this.getPrevious(this.last);
			this.last = previous;
			this.last.next = null;
		}

		this.size --;
	}

	find(item, prop=null) {

		let currNode = this.first;

		while (currNode !== null && currNode.item.hasOwnProperty(prop) && currNode.item[prop] != item) {
			
			currNode = currNode.next;
		}

		if (currNode !== null)
			return currNode.item
		else
			return null
	}


	contains(item) {

		return this.indexOf(item) != -1
	}

	indexOf(item) {

		let currNode = this.first;
		let index = 0;

		while (currNode != null) {
			if (currNode.item == item)
				return index;

			currNode = currNode.next;
			index ++;
		}

		return -1;
	}

	isEmpty() {
		return this.first == null;
	}

	getPrevious(item) {

		let currNode = this.first;

		while (currNode.next != node) {
			currNode = currNode.next;
		}

		return currNode;
	}



	toArray() {

		let arr = new Array(this.size());
		let index = 0;
		const current = this.first;

		while (current != null) {
			arr[index] = current.item;
			current = current.next;
			index ++;
		}

		return arr;
	}

	toString() {

		let current = this.first;
		let arrString = "";

		if (current == null) {
			arrString = "[]";
		}
		else {
			while (current != null) {
				arrString += current.item + ",";
				current = current.next;
			}
		}

		return arrString;
	}

	reverse() {

		if (this.isEmpty()) {
			throw new Error("list is empty!");
		}
		else if (this.first == this.last) {
			return;
		}
		else {

			let previous = this.first, current = this.first.next, next;

			while (current != null) {
				next = current.next;
				current.next = previous;
				previous = current;
				current = next;
			}

			this.first.next = null;
			this.last = this.first;
			this.first = previous;
		}
	}

	// get Kth from the end
	getKthFromTheEnd(k) {

		if (this.isEmpty()) {
			throw new Error("it's tew lorge!");
		}

		let d = 0;
		let previous = this.first;
		let second = previous;

		while (second != this.last) {
			if (d < k - 1) {
				second = second.next;
				d ++;
			}
			else {
				previous = previous.next;
				second = second.next;
			}
		}

		if (d < k - 1)
			throw new Error("k is too large for this list");
		else
			return previous.item;
	}

	printMiddle() {

		if (this.isEmpty()) {
			throw new Error("there is a problem!");
		}

		let start = this.first, end = this.first;

		while (end != this.last && end.next != this.last) {
			end = end.next.next;
			start = start.next;
		}

		if (end == this.last)
			return start.item;
		else
			return `${start.item} ${start.next.item}`;
	}

	hasLoop() {

		let slow = this.first, fast = this.first.next.next;

		if (this.isEmpty())
			throw new Error("it's empty!");
		if (this.first == this.last) {
			return false;
		}
		else {
			while (slow != fast && fast != null) {
				slow = slow.next;
				fast = fast.next.next;
			}

			if (fast == null) 
				return false;
			else
				return true;
		}
	}
}