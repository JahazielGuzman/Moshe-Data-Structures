const ArrayQueue = require('./data_structures/ArrayQueue');

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

console.log(firstNotRepeating("A Green Apple"));