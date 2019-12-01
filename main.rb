require_relative './data_structures/ArrayQueue.rb'

aq = ArrayQueue.new(5)

aq.enqueue 1
aq.enqueue 2
aq.enqueue 3
aq.enqueue 4
aq.enqueue 5
aq.dequeue
aq.enqueue 6

puts aq

aq.dequeue
aq.dequeue
aq.dequeue
aq.enqueue 7
aq.enqueue 8
aq.enqueue 9


puts aq
puts aq.peek