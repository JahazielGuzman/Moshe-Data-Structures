const ArrayQueue = require('./data_structures/ArrayQueue');
const HashTable = require('./data_structures/HashTable')

function firstNotRepeating(s) {


	const charMap = {};
	for (const c in s) {

		const char = s.charAt(c).toLowerCase();
		if (charMap[char] === undefined)
			charMap[char] = 0;

		charMap[char] ++;
	}

	for (const c in s) {

	const char = s.charAt(c).toLowerCase();
		if (charMap[char] === 1) {
			return char;
		}
	}

	return "";
}

function findFirstRepeated(s) {

	const set = {};

	for (const c in s) {
		const char = s.charAt(c);

		if (set[char] === undefined) {
			set[char] = 0;
		}
		else {
			return char;
		}
	}

	return "";
}

// console.log(firstNotRepeating("A Green Apple"));
// console.log(findFirstRepeated("A Green Apple"));


const ht = new HashTable();

ht.put(1, "hummz");
ht.put(2, "skin84");
ht.put(3, "lip98");
ht.put(4, "m,.;kl");
ht.put(5, "eipir");
ht.put(6, "pweozl");
ht.put(7, "dlslz;a");
ht.put(8, "34fea");
ht.put(9, "dssdfdsf");
ht.put(10, "hummus");
ht.put("jeeda", "cheetos");
ht.put({"joe": "bin"}, "crazy");
ht.put("jeeda", "frosted flakes");
console.log(ht.get("jeeda"));