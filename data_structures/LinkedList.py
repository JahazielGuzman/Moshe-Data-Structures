class LinkedNode:
	def __init__(self, item, nextNode = None):
		self.item = item
		self.next = nextNode

class LinkedList:
	def __init__(self, item = None):
		self.size = 0

		if (item != None):
			node = LinkedNode(item)
			self.size += 1
		else:
			node = None
		
		self.first = node
		self.last = node
	

	# def create_loop():

	# 	self.addLast(1)
	# 	self.addLast(2)
	# 	self.addLast(3)
	# 	self.addLast(4)

	# 	loopNode = LinkedNode(5, self.first)
	# 	self.last.next = loopNode
	

	def length(self):
		return self.size
	

	def addFirst(self, item):

		if (item == None):
			raise ValueError("cannot add a node with no item as first!")
		

		node = LinkedNode(item, self.first)

		if self.isEmpty():
			self.last = self.first = node
		
		else:
			self.first = node
		self.size += 1
	

	def addLast(self, item):

		if (item == None) :
			raise Error("cannot add a null node as last!")
		

		node = LinkedNode(item)

		if self.isEmpty():
			self.first = self.last = node
		
		else:
			self.last.next = node
			self.last = node
		

		self.size += 1
	

	def deleteFirst(self):

		if self.isEmpty():
			raise IndexError("UNDERFLOW!")
		elif self.first == self.last:
			self.first = self.last = None
		else:
			oldFirst = self.first
			self.first = oldFirst.next
			oldFirst.next = None
		

		self.size -= 1
	

	def deleteLast(self):

		if self.isEmpty():
			raise IndexError("UNDERFLOW!")
		elif self.first == self.last:
			self.first = self.last = None
		else:
			previous = self.getPrevious(self.last)
			self.last = previous
			self.last.next = None
		

		self.size -= 1

	def remove(self, item, equality_func = None):
		if self.isEmpty():
			raise IndexError("UNDERFLOW!")

		if equality_func == None:
			equality_func = lambda item1, item2: item1 == item2 
		
		if equality_func(self.first.item, item) and equality_func(self.last.item, item):
			self.first = None
			self.last = None
		elif equality_func(self.first.item, item):
			to_remove = self.first
			self.first = self.first.next
			to_remove.next = None
		else:
			previous = self.get_previous(item, equality_func)
			previous.next = previous.next.next
			if equality_func(self.last.item, item):
				self.last = previous
	
	def get_previous(self, item, equality_func = None):

		if self.isEmpty():
			raise IndexError("UNDERFLOW!")

		prev_node = None
		curr_node = self.first

		while (curr_node != None and not equality_func(curr_node.item, item)):
			prev_node = curr_node
			curr_node = curr_node.next

		if curr_node == None:
			raise IndexError("Its not in the list")

		return prev_node

	def contains(self, item):

		return self.indexOf(item) != -1
	

	def indexOf(self, item):

		currNode = self.first
		index = 0

		while currNode != null :
			if currNode.item == item:
				return index

			currNode = currNode.next
			index += 1
		

		return -1
	

	def isEmpty(self):
		return self.first == None

	def __str__(self):

		current = self.first
		list_str = ""

		if current == None:
			list_str = "[]"
		
		else:
			while current != None:
				list_str += (str(current.item) + ",")
				current = current.next
			
		

		return list_str
	
	# def find(item, prop=null):

	# 	let currNode = self.first

	# 	while (currNode !== null && currNode.item.hasOwnProperty(prop) && currNode.item[prop] != item) :
			
	# 		currNode = currNode.next
		

	# 	if (currNode !== null)
	# 		return currNode.item
	# 	else
	# 		return null
	


	

	



	# def toArray():

	# 	let arr = new Array(self.size())
	# 	let index = 0
	# 	current = self.first

	# 	while (current != null) :
	# 		arr[index] = current.item
	# 		current = current.next
	# 		index += 1
		

	# 	return arr
	

	

	# def reverse():

	# 	if (self.isEmpty()) :
	# 		throw new Error("list is empty!")
		
	# 	else if (self.first == self.last) :
	# 		return
		
	# 	else :

	# 		let previous = self.first, current = self.first.next, next

	# 		while (current != null) :
	# 			next = current.next
	# 			current.next = previous
	# 			previous = current
	# 			current = next
			

	# 		self.first.next = null
	# 		self.last = self.first
	# 		self.first = previous
		
	

	# // get Kth from the end
	# def getKthFromTheEnd(k):

	# 	if (self.isEmpty()) :
	# 		throw new Error("it's tew lorge!")
		

	# 	let d = 0
	# 	let previous = self.first
	# 	let second = previous

	# 	while (second != self.last) :
	# 		if (d < k - 1) :
	# 			second = second.next
	# 			d += 1
			
	# 		else :
	# 			previous = previous.next
	# 			second = second.next
			
		

	# 	if d < k - 1:
	# 		throw new Error("k is too large for self list")
	# 	else:
	# 		return previous.item
	

	# def printMiddle():

	# 	if self.isEmpty():
	# 		throw new Error("there is a problem!")
		

	# 	let start = self.first, end = self.first

	# 	while end != self.last and end.next != self.last:
	# 		end = end.next.next
	# 		start = start.next
		

	# 	if end == self.last:
	# 		return start.item
	# 	else:
	# 		return `$:start.item $:start.next.item`
	

	# def hasLoop():

	# 	let slow = self.first, fast = self.first.next.next

	# 	if self.isEmpty():
	# 		throw new Error("it's empty!")
	# 	if self.first == self.last:
	# 		return false
		
	# 	else:
	# 		while slow != fast && fast != null:
	# 			slow = slow.next
	# 			fast = fast.next.next
			

	# 		if fast == null:
	# 			return false
	# 		else:
	# 			return true
		
	
