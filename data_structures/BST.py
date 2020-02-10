class Node:

    def __init__(self, value: int):
        self.value = value
        self.left = None
        self.right = None
    
    def __str__(self):
        print(int(self))

class BST:

    def __init__(self, value: int = None):

        if value == None:
            self.root = None
        else:
            self.root = Node(value)
    
    def is_empty(self):
        return self.root == None
    
    def insert(self, value):

        to_insert = Node(value)

        if self.is_empty():
            self.root = to_insert
            return
        
        current = self.root
        traverse = True

        while traverse:
            if value <= current.value:
                if current.left == None:
                    current.left = to_insert
                    traverse = False
                else:
                    current = current.left
            elif value > current.value:
                if current.right == None:
                    current.right = to_insert
                    traverse = False
                else:
                    current = current.right
    
    def inorder_traversal(self):
        if self.is_empty():
            return
        
        print(self.inorder_traversal_h(self.root))

    def inorder_traversal_h(self, root):

        if root == None:
            return []
        
        return self.inorder_traversal_h(root.left) + [root.value] + self.inorder_traversal_h(root.right)

    def find(self, value):

        current = self.root

        while current != None:
            if value < current.value:
                current = current.left
            elif value > current.value:
                current = current.right
            else:
                return current
        return None
            
    
    def height(self, root = None):

        if root == None:
            return self.height_h(self.root)
        else:
            return self.height_h(root)
    
    def height_h(self, root):

        if root == None:
            return 0
        
        return 1 + max(self.height_h(root.left), self.height_h(root.right))
    
    def min(self, root = None):
        
        if root == None:
            return self.min_h(self.root)
        else:
            return self.min_h(root)
    
    def min_h(self, root):

        if root.left == None and root.right == None:
            return root.value
        elif root.left == None:
            return min(root.value, root.right.value)
        elif root.right == None:
            return min(root.value, root.left.value)
        else:
            min_left = self.min_h(root.left)
            min_right = self.min_h(root.right)
            return min(root.value, min_left, min_right)
    
    def equal(self, other):

        if other == None:
            return False

        elif other.is_empty() or self.is_empty():
            return False
        
        return self.equal_h(self.root, other.root)
    
    def equal_h(self, root1, root2):

        if root1 == None and root2 == None:
            return True
        elif root1 == None or root2 == None:
            return False
        
        return (root1.value == root2.value) and self.equal_h(root1.left, root2.left) and self.equal_h(root1.right, root2.right)
    
    def valid(self):

        return self.valid_h(self.root)

    def valid_h(self, root):

        if root == None:
            return True
        
        left_valid = (root.left.value < root.value) if root.left else True
        right_valid = (root.right.value > root.value) if root.right else True

        return (left_valid and right_valid) and self.valid_h(root.left) and self.valid_h(root.right)



b = BST()
c = BST()

b.insert(10)
b.insert(5)
b.insert(12)
b.insert(11)
b.insert(4)

c.insert(10)
c.insert(5)
c.insert(12)
c.insert(11)
c.insert(4)


b.inorder_traversal()
print("height of tree:", b.height())
print("min value:", b.min())
print("are equal?:", b.equal(c))
print("is valid?", b.valid())