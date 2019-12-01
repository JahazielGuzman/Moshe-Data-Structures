class ArrayQueue

	def initialize(size)
		@size = size
		@queue = Array.new(size)
		@front = 0
		@back = 0
		@count = 0
	end

	def enqueue(item)

		if isFull?
			raise 'OVERFLOW!'
		end

		@queue[@back] = item
		@back = (@back + 1) % @size
		@count += 1
	end

	def dequeue

		if isEmpty?
			raise 'UNDERFLOW'
		end

		removed = @queue[@front]
		@queue[@front] = nil

		@front = (@front + 1) % @size
		@count -= 1

		removed
	end

	def peek
		@queue[@front]
	end

	def isEmpty?
		@count == 0
	end

	def isFull?
		@count == @size
	end

	def reverse(q)
		s = []


		while (!q.empty?)
			s.push q.shift
		end

		while (!s.empty?)
			q.push s.pop
		end

		q
	end

	def to_s
		@queue.inspect
	end

end