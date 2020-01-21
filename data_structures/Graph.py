from .LinkedList import LinkedList
from collections import deque

class GraphNode:
	def __init__(self, label):
		self.label = label

	def __str__(self):
		return str(self.label)

class Graph:
	def __init__(self):
		self.nodes = {}
		self.adjacency = {}

	def __str__(self):

		output_str = ""
		for vertex in self.adjacency:

			output_str += f" |{vertex} is connected to nodes: ["

			for node in self.adjacency[vertex]:
				output_str += f"{node}, "

			output_str += "]\n"

		return output_str



	def add_node(self, label):
		if self.adjacency.get(label):
			return

		self.nodes[label] = GraphNode(label)
		self.adjacency[label] = deque()



	def remove_node(self, label):

		self.adjacency.pop(label)

		for node in self.adjacency:
			
			graph_node = self.nodes[label]

			if graph_node in self.adjacency[node]:
				self.adjacency[node].remove(graph_node)


		self.nodes.pop(label)


	def add_edge(self, from_label, to_label):
		self.both_labels_valid(from_label, to_label)

		to_node = self.nodes[to_label]
		self.adjacency[from_label].append(to_node)



	def remove_edge(self, from_label, to_label):
		self.both_labels_valid(from_label, to_label)

		to_node = self.nodes[to_label]

		if to_node in self.adjacency[from_label]:

			self.adjacency[from_label].remove(to_node)



	def both_labels_valid(self, from_label, to_label):
		if not self.nodes.get(from_label) or not self.nodes.get(to_label):
			raise LookupError("these node labels do not exist!")

