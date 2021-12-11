'use strict';

// this sets up our data object
class Vertex {
  constructor(value) {
    this.value = value;
  }
}

//this sets up our connection from one vertex to another
class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

//implement an adjacency list which stores the vertices and edges
class Graph {
  constructor() {
    this.adjacencyList - new Map();
  }

  //add a value
  addVertex(value) {
    let vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);

    return vertex;
  }

  //add a connection between vertices: make sure to specify direct or undirected
  addDirectedEdge(startVertex, endVertex, weight = 0) {

    // this checks to see if our vertex exists in our list of vertices
    if(!this.adjacencyList.has(startVertex) && !this.adjacencyList.has(endVertex)) {
      throw new Error('Vertex Error!');
    }

    //this will grab the edges connected to the starting vertex
    let neighbors = this.adjacencyList.get(startVertex);

    //this will create a new edge from the ending vertex + push it into a the list of neighbors
    let newEdge = newEdge(endVertex, weight);
    neighbors.push(newEdge);
  }

  getNeighbors(vertex) {
    if(!this.adjacencyList.has(vertex)) {
      throw new Error('GetNeighbor Error: Invalid');
    }
    return [...this.adjacencyList.get(vertex)];
  }

  getNodes(){
    return this.adjacencyList;
  }

  size() {
    return this.numberOfVertices;
  }

  // implemented in cc 35 due to demo, but it is a cc 36 feature
  breadthFirst(startVertex) {
    const queue = [];
    const visitedNodes = new Set();

    queue.push(startVertex);
    visitedNodes.add(startVertex);

    while (queue.length) {
      const current = queue.shift();

      let neighbors = this.getNeighbors(current);

      for (let edge of neighbors) {
        let neighbor = edge.vertex;

        if (!visitedNodes.has(neighbor)) {
          queue.push(neighbor);
          visitedNodes.add(neighbor);
        } else {
          continue;
        }
      }
    }
  }

  //depth first traversal
  depthFirst(vertex) {
    const alreadyVisited = new Set();
    alreadyVisited.add(vertex);

    const traversal = (current, visited) => {
      visited.add(current);
      const neighbors = graph.getNeighbors(current);

      for (let neighbor of neighbors) {
        if (!visited.has(neighbor.vertex)) {
          traversal(neighbor.vertex, visited);
        }
      }
    };
    traversal(vertex, alreadyVisited);
    return alreadyVisited;
  }

  // business trip

  businessTrip(graph, array) {
    let total = 0;

    for (let i = 0; i < array.length - 1; i += 1) {
      let neighbors = graph.getNeighbors(array[i]);
      for (let j = 0; j < neighbors.length; j += 1) {
        let nextValue = array[i + 1].value;
        if (neighbors[j].vertex.value === nextValue) {
          total += neighbors[j].weight;
        }
      }
    }
    return `true, $${total}`;
  }

}

let graph = new Graph();

let A = graph.addVertex('A');
let B = graph.addVertex('B');
let C = graph.addVertex('C');
let D = graph.addVertex('D');
let E = graph.addVertex('E');
let F = graph.addVertex('F');
let G = graph.addVertex('G');
let H = graph.addVertex('H');

graph.addDirectedEdge(A, D);
graph.addDirectedEdge(A, C);
graph.addDirectedEdge(A, B);
graph.addDirectedEdge(D, F);
graph.addDirectedEdge(B, C);
graph.addDirectedEdge(B, E);
graph.addDirectedEdge(C, F);
graph.addDirectedEdge(C, E);
graph.addDirectedEdge(C, B);
graph.addDirectedEdge(F, G);
graph.addDirectedEdge(G, H);
graph.addDirectedEdge(H, F);


console.log(graph);
console.log('List of Neighbors:', graph.getNeighbors(A));
console.log('List of Nodes:', graph.getNodes());
console.log('Size of Graph:', graph.size());
console.log('Breadth First Traversal path:', graph.breadthFirst(A));


module.exports = Vertex, Edge, Graph;


