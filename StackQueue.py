from Stack import Stack 

class StackQueue:

	def __init__(self, size):
		self.size = size
		self.count = 0
		self.back_q = Stack(size)
		self.front_q = Stack(size)

	def push(self, item):
		self.back_q.push(item)
		self.count += 1

	def pop(self):

		# reverse the queue on the front_q
		while (not self.back_q.isEmpty()):
			self.front_q.push(self.back_q.pop())

		front = self.front_q.pop()
		self.count -= 1

		while (not self.front_q.isEmpty()):
			self.back_q.push(self.front_q.pop())

		return front

	def isEmpty():
		return self.count == 0

	def isFull():
		return self.count == self.size

	def prints(self):
		return self.back_q.prints()
