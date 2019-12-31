const TreeNode = require('./TreeNode');

class BST {

	constructor() {
		this.root = null;
		this.count = 0;
	}

	insert(item) {

		if (this.root === null)
			this.root = new TreeNode(item);
		else {

			let current = this.root;
			let traverse = true;

			while (traverse) {

				if (item < current.item) {
					if (current.left === null) {
						current.left = new TreeNode(item);
						traverse = false;
					}
					else
						current = current.left;
				}
				else {
					if (current.right == null){
						current.right = new TreeNode(item);
						traverse = false;
					}
					else
						current = current.right
				}
			}
		}
	}

	find(item, use = false) {

		let current = this.root;

		while (current != null) {

			if (item < current.item) {
				current = current.left;
			}
			else if (item > current.item) {
				current = current.right;
			}
			else {
				if (use)
					return current;
				else
					return true;
			}
		}

		return false;
	}

	isEmpty() {

		return this.root === null;
	}

	traversePreorder(root = this.root) {

		if (!root)
			return;
		console.log(root.item);
		this.traversePreorder(root.left)
		this.traversePreorder(root.right)
	}	

	traverseInorder(root = this.root) {
		
		if (!root)
			return;
		this.traverseInorder(root.left)
		console.log(root.item);
		this.traverseInorder(root.right)
	}	

	traversePostorder(root = this.root) {
		
		if (!root)
			return;
		this.traversePostorder(root.left)
		this.traversePostorder(root.right)
		console.log(root.item);
	}

	height(item) {

		const targetNode = this.find(item, true);

		return this.height_h(targetNode);
	}

	height_h(root) {

		if (this.isLeaf())
			return 0;

		const h_left = this.height_h(root.left);
		const h_right = this.height_h(root.right);

		return Math.max(h_left, h_right) + 1;
	}

	

	isLeaf(node) {
		return root.left === null && root.right === null
	}
}

module.exports = BST;