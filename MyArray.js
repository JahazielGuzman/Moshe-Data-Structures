module.exports = class MyArray {

	constructor(size) {

		this.length = size;
		this.count = 0;
		this.arr = new Array(size);
	}

	insert(number) {
		if (this.isFull()) {
			this.length *= 2;
			this.copyArray();
		}
		else
			this.count ++;
		this.arr[this.count - 1] = number;
	}

	insertAt(index, number) {

		if (this.isFull()) {
			this.length *= 2;
		}
		this.copyArray(index);
		this.arr[index] = number;
	}

	copyArray(skip=-1) {

		if (skip != -1)
			this.count ++;

		let j = 0;
		let temp = new Array(this.length);

		for (var i = 0; i < this.count; i ++) {
			if (i != skip) {
				temp[i] = this.arr[j];
				j ++;
			}
		}

		if (skip == -1)
			this.count ++;

		this.arr = temp;
	}


	removeAt(index) {

		if (index < 0 || index >= this.count)
			throw new Error("index is not in range!");

		for (var i = index; i < this.count - 1; i ++) 
			this.arr[i] = this.arr[i + 1]
		this.count --;
	}

	reverse() {
		let i = 0;
		let j = this.count - 1;
		let temp = 0;

		while (i < j) {
			temp = this.arr[i];
			this.arr[i] = this.arr[j];
			this.arr[j] = temp;
			i ++;
			j --;
		}

		return this.arr;
	}

	intersect(otherArray) {

		let commonArray = [];
		let otherLength = otherArray.length
		let j;
		let found;
		// for each element
		for (var i = 0; i < this.count; i ++) {
			// if the current element is not already in commonArray
			if (commonArray.indexOf(this.arr[i]) == -1) {
				j = 0;
				found = false;
				while (j < otherLength && !found) {
					if (this.arr[i] == otherArray[j]) {
						commonArray.push(this.arr[i])
						found = true
					}
					j ++;
				}
			}
		}
		return commonArray;
	}

	isFull() {
		return this.count === this.length
	}

}