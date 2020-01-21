from Stack import Stack
from StackQueue import StackQueue
from data_structures.PriorityQueue import PriorityQueue
from data_structures.LinkedList import LinkedList
from data_structures.Graph import Graph

# pq = PriorityQueue()
# pq.push(1)
# pq.push(5)
# pq.push(4)
# pq.push(3)
# pq.push(2)

# print(pq)

# lk = LinkedList()
# lk.addFirst(2)
# lk.addLast(3)
# lk.addLast(4)
# lk.addFirst(1)
# print(lk)
# lk.remove(3)
# print(lk)
# lk.remove(1)
# lk.remove(2)
# lk.remove(4)
# print(lk)

G = Graph()
G.add_node("A")
G.add_node("B")
G.add_node("C")
G.add_node("D")
G.add_edge("A", "B")
G.add_edge("A", "C")
G.add_edge("A", "D")
G.add_edge("B", "A")
G.add_edge("B", "C")
G.add_edge("C", "B")
print("Graph G initially:\n", G)
G.remove_node("C")
print("After removing node C:\n", G)
G.remove_edge("A", "B")
G.remove_edge("A", "D")
print("After removing edges A->B and A->D:\n", G)