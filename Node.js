module.exports = class Node {

	constructor(item, node=null) {
		this.item = item;
		this.next = node;
	}
} 