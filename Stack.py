class Stack:

	def __init__(self, size):
		self.stack = [None] * size
		self.top = -1

	def isFull(self):
		return self.top == len(self.stack) - 1

	def isEmpty(self):
		return self.top == -1

	def prints(self):
		return self.stack

	def push(self, item):
		if self.isFull():
			print("The stack is full!")
		else:
			self.top += 1
			self.stack[self.top] = item


	def pop(self):
		if self.isEmpty():
			print("The stack is empty!")
		else:
			top = self.stack[self.top]
			self.top -= 1
			return top

	def peek(self):
		return self.stack[self.top]