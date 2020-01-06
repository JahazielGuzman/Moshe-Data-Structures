const BST = require('./data_structures/BST');

const tree1 = new BST();
const tree2 = new BST();
const tree3 = new BST();

tree1.insert(20);
tree1.insert(10);
tree1.insert(30);
tree1.insert(6);
tree1.insert(14);
tree1.insert(24);
tree1.insert(3);
tree1.insert(8);
tree1.insert(26);

// console.log(tree.find(2));
// console.log(tree.find(10));


// console.log("Preorder:")
// tree.traversePreorder();
// console.log("Postorder:")
// tree.traversePostorder();

// const height_of_q = 6

// console.log(`height of ${height_of_q}`)
// console.log(tree.height(height_of_q));

tree2.insert(20);
tree2.insert(10);
tree2.insert(30);
tree2.insert(6);
tree2.insert(14);
tree2.insert(24);
tree2.insert(3);
tree2.insert(8);
tree2.insert(26);

tree3.insertNonBST(5);
tree3.insertNonBST(3);
tree3.insertNonBST(11);
tree3.insertNonBST(7);
tree3.insertNonBST(2);
tree3.insertNonBST(20);

// compare both trees
console.log("Tree 1 is equal to Tree 2", tree1.isEqual(tree2))
console.log("BST Inorder:")
tree1.traverseInorder();
console.log("Tree 1 is a valid BST", tree1.isValid())
console.log("Tree 2 is a valid BST", tree2.isValid())
tree2.swapRoot();
console.log("Non BST Inorder:")
tree3.traverseInorder();
console.log("Tree 3 is a valid BST", tree3.isValid())
console.log("Tree 2 is a valid BST", tree2.isValid())
