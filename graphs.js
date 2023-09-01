// Edge List  
const graph = [[0, 2], [2, 3], [2, 1], [1, 3]]

// Adjacent List (index is the Node, value is the Node neigbor)
const graph2 = [[2], [2, 3], [0, 1, 3], [1, 2]]

// Adjencent Matrix (0 is No, 1 is Yes)
const graph3 = [
  [0, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 1, 0, 3],
  [0, 1, 1, 0]
]

/*
  {
  0 : [1, 2],
  1 : [3, 0 ,2],

  }
*/
class Graph  {
  constructor() {
    this.numberOfNodes = 0
    this.adjacentList = {}
  }
  addVertex(node) {
    if (!this.adjacentList[node]) {
      this.adjacentList[node] = []
      this.numberOfNodes++
    }
    return this.adjacentList
  } 
  addEdge(node1, node2) {
    if (this.adjacentList[node1] && this.adjacentList[node2]) {
      this.adjacentList[node1] = [...this.adjacentList[node1], node2]
      this.adjacentList[node2] = [...this.adjacentList[node2], node1]
    }
    return this.adjacentList
  }
  showConnections() {
    
  }
}
let myGraph = new Graph
myGraph.addVertex("0")
myGraph.addVertex("1")
myGraph.addVertex("2")
myGraph.addVertex("3")
myGraph.addVertex("4")
myGraph.addVertex("5")
myGraph.addVertex("6")


myGraph.addEdge("3", "1")
myGraph.addEdge("3", "4")
myGraph.addEdge("4", "2")
myGraph.addEdge("4", "5")
myGraph.addEdge("1", "2")
myGraph.addEdge("1", "0")
myGraph.addEdge("0", "2")
myGraph.addEdge("6", "5")
