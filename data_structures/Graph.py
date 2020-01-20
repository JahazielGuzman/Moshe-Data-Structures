from .LinkedList import LinkedList

class GraphNode:
	def __init__(self, label):
		self.label = label

	def __str__(self):
		return str(self.label)

class Graph:
	def __init__(self):
		self.adj = {}
		self.num_nodes = 0
		self.graph_node_equality_func = lambda graph_node, label: graph_node.label == label

	def __len__(self):
		return num_nodes

	def __str__(self):

		output_str = ""
		for vertex in self.adj:
			output_str += f" |{vertex} is connected to nodes: {str(self.adj[vertex])}"
		return output_str



	def add_node(self, label):
		if self.adj.get(label):
			raise LookupError("that node label already exists")

		self.num_nodes += 1
		self.adj[label] = LinkedList()



	def remove_node(self, label):

		self.adj.pop(label)
		for edge_list in self.adj.values():
			try:
				edge_list.remove(label, self.graph_node_equality_func)
			except IndexError:
				continue
			except AttributeError:
				print("something was None")



	def add_edge(self, from_label, to_label):
		self.both_labels_valid(from_label, to_label)

		self.adj[from_label].addLast(GraphNode(to_label))



	def remove_edge(self, from_label, to_label):
		self.both_labels_valid(from_label, to_label)

		try:
			self.adj[from_label].remove(to_label, self.graph_node_equality_func)
		except AttributeError:
			print(f"Error at {node_label}")



	def both_labels_valid(self, from_label, to_label):
		if not self.adj.get(from_label) or not self.adj.get(to_label):
			raise LookupError("that node label does not exist!")
