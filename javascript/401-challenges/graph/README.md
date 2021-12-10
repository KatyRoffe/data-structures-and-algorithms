# Graphs
<!-- Short summary or background information -->

## Challenge

Implement your own Graph. The graph should be represented as an adjacency list, and should include the following methods:

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

## API

```plaintext
add node
  Arguments: value
  Returns: The added node
  Add a node to the graph

add edge
  Arguments: 2 nodes to be connected by the edge, weight (optional)
  Returns: nothing
  Adds a new edge between two nodes in the graph
  If specified, assign a weight to the edge
  Both nodes should already be in the Graph

get nodes
  Arguments: none
  Returns all of the nodes in the graph as a collection (set, list, or similar)

get neighbors
  Arguments: node
  Returns a collection of edges connected to the given node
  Include the weight of the connection in the returned collection

size
  Arguments: none
  Returns the total number of nodes in the graph
```

## Challenge 36

### Problem Domain

Extend the current implementation to include a Breadth First Traversal

```plaintext
breadth first
  Arguments: Node
  Return: A collection of nodes in the order they were visited.
  Display the collection
```

### Graph Example

[source](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-3/#example)

![graph example](graph.png)

## Challenge 37

### Problem Domain

Given a business trip itinerary, and an Alaska Airlines route map, is the trip possible with direct flights? If so, how much will the total trip cost be?

```plaintext
businessTrip
  Arguments: graph, array of city names
  Return: cost or null
```

### Graph Example

[source](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-37/#example)