const LinkedList = require('../LinkedList')

class HashTable {

	constructor() {

		this.size = 10;
		this.table = new Array(this.size);
	}

	// Take the key and use the hash function to get
	// an index to insert into the array
	put(key, value) {

		const index = this.hash(key);
		const stringKey = typeof key === "string" ? key : JSON.stringify(key);
		const keyValPair = {key: stringKey, value: value};

		if (this.table[index] === undefined) {
			this.table[index] = new LinkedList(keyValPair);
		} else {
			const obj = this.table[index].find(stringKey, "key");
			if (obj != null)
				obj.value = value;
			else
				this.table[index].addLast(keyValPair);
		}
	}

	get(key, prop=null) {

		const index = this.hash(key);
		const stringKey = typeof key === "string" ? key : JSON.stringify(key);

		if (this.table[index] !== undefined) {
			return this.table[index].find(stringKey, "key").value;
		}
		else {
			return null;
		}
	}

	remove() {

	}

	hash(key) {

		const keyString = typeof key === "string" ? key : JSON.stringify(key);
		let stringTotal = 0;
		for (let c in keyString) {
			stringTotal += keyString.charCodeAt(c);
		}

		return stringTotal % this.size;
	}

	print(index) {
		if (this.table[index] === undefined)
			console.log("it's undefined!")
		else {

			let node = this.table[index].first;

			while (node != null) {
				console.log(node.item);
				node = node.next;
			}
		}
	}


}

module.exports = HashTable