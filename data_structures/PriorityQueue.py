class PriorityQueue:

	def __init__(self, size):
		self.size = size
		self.count = 0
		self.queue = [None] * size

	def isEmpty(self):
		return self.count == 0

	def isFull(self):
		return self.count == self.size

	def push(self, item):
		# loop through the queue starting from d back
		if self.isEmpty():
			self.queue[0] = item
			self.count += 1
		elif not self.isFull():
			if self.queue[i] < item:
				self.queue[i + 1] = item
			else:
				i = self.count - 1
				while i >= 0 and self.queue[i] > item:
					self.queue[i + 1] = self.queue[i]
				self.queue[i + 1] = item
				count += 1
		else:
			print("Sorry it's full")

	def __str__():
		i = 0
		while i < count:
			print("i - {self.queue[i]}")
			i += 1
