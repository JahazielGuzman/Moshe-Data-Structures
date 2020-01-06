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

	insertNonBST(item) {
		if (this.root == null)
			this.root = new TreeNode(item);
		else {

			let current = this.root
			let count = 0;
			while (current) {

				if (current.left == null && current.right == null) {
					current.left = new TreeNode(item);
					current = null;
					count ++;
				}
				else if (current.right == null) {
					current.right = new TreeNode(item);
					current = null;
					count ++;
				}
				else if (count % 2 == 0)
					current = current.left;
				else
					current = current.right;
			}
		}

	}

	swapRoot() {
		let temp = this.root.left;
		this.root.left = this.root.right;
		this.root.right = temp;
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

	isEqual(tree2) {

		if (tree2 == null)
			throw new Error("The tree you gave is null");
		// initiate isEqual_h with this root and tree2 root
		return this.isEqual_h(this.root, tree2.root)
	}

	isEqual_h(root, root2) {

		// base case when we hit a null pointer
		const rootIsNull = (root == null);
		const root2IsNull = (root2 == null);
		// if either is null
		if (rootIsNull || root2IsNull) {
			// return if both are null
			return rootIsNull && root2IsNull;
		}

		const left_equal = this.isEqual_h(root.left, root2.left);
		const right_equal = this.isEqual_h(root.right, root2.right);
		if (root.item != root2.item)
			return false;
		else
			return left_equal && right_equal;
	}

	isValid(root=this.root) {

		if (!root)
			return true
		// if we are at a null pointer, return true
		// get if left subtree is valid
		const leftIsValid = this.isValid(root.left);
		// get if right subtree is valid
		const rightIsValid = this.isValid(root.right);
		// if (left is not null) check if left is less or equal to me
		const leftIsLess = (root.left == null) ? true : (root.left.item <= root.item); 
		// if right is not null check if right is greater or equal than me
		const rightIsLess = (root.right == null) ? true : (root.right.item >= root.item); 

		return leftIsValid && leftIsLess && rightIsValid && rightIsLess;
	}


}

module.exports = BST;