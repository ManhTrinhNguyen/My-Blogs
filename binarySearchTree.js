class Node {
  constructor(value) {
    this.left = null
    this.right = null
    this.value = value
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null 
  }

  insert(value) {
    let newNode = new Node(value)
    if (!this.root) {
      this.root = newNode
    } else {
      let currentNode = this.root 
      while (true) {
        if (value < currentNode.value) {
          // go Left 
          if (!currentNode.left) {
            currentNode.left = newNode
            return this
          }
          currentNode = currentNode.left
        } else {
          // go Right 
          if (!currentNode.right) {
            currentNode.right = newNode 
            return this 
          }
          currentNode = currentNode.right 
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) return false
    if (this.root.value === value) {
      return true 
    } else {
      let currentNode = this.root 
      while (currentNode) {
        if (value < currentNode.value) {
          // go Left 
          currentNode = currentNode.left 
        } else if (value > currentNode.value) {
          // go Right 
          currentNode = currentNode.right 
        } else {
          return currentNode
        }
      }
    }
    return false
  }

  remove(value) {
    if (!this.root) return false 
    
  }

  breadthFirstSearch() {
    let currentNode = this.root
    // Actual List will be answer , [] will insert number into 
    let list = []
    // Queue that to keep track the level we at so that we can keep track the children once we go through it
    let queue = []
    // First : Add to the queue the very first item 
    queue.push(currentNode)
    // use while loop to go from current Node to child Node (left to right)
    while (queue.length > 0) {
      // take out and remove the first item from the queue and put it as currentNode 
      currentNode = queue.shift();
      // put the first answer into the list 
      list.push(currentNode.value)
      // if currentNode have left child . Will put to the queue 
      if (currentNode.left) {
        queue.push(currentNode.left)
      }
      // if currentNode have right child . Will put to the queue 
      if (currentNode.right) {
        queue.push(currentNode.right)
      }
    }
    return list
  }
  breadthFirstSearchRecursive(queue, list) {
    // List is actual answer array 
    // Queue is array to keep track the level we at so that we can keep track the children node
    // Base Case 
    if (!queue.length) return list 
    
    // Recursive Case 
    let currentNode = this.queue.shift()  
    list.push(currentNode.value)
    if (currentNode.left) {
      queue.push(currentNode.left)
    }
    if (currentNode.right) {
      queue.push(currentNode.right)
    }
    return this.breadthFirstSearchRecursive(queue, list)
  }
  
  DFSInorder() {
    // Create Traverse function 
    return traverseInOrder(this.root, [])
   }
  DFSPostorder() {
    return traversePostOrder(this.root, [])
  }
  DFSPreorder() {
    return traversePreOrder(this.root, [])
  }

  validateBinarySearchTree() {
    // The left subtree of a node contains only nodes with keys less than the node's key 
    // The right subtree of a node contains only nodes with keys greater than nodes'key
    // Both the left and right subtrees must also be binary search trees

    let arrayData = traverseInOrderr(this.root , [])
    for(let i = 0; i < arrayData.length - 1; i++) {
      if(arrayData[i] >= arrayData[i+1]) return false
    }
    return true
  }
}

function traverseInOrder(node, list) {
  // Check does the Node have left child
  if (node.left) {
    // Traversal to the left child
    traverseInOrder(node.left, list)
  }
  // When end up to the last left child , push to the list
  list.push(node.value)
  // then go to the right do the same thing as the left
  if (node.right) {
    // Traversal to the right child
    traverseInOrder(node.right, list)
  }
  return list
}

function traversePreOrder(node, list) {
  // start from the parent node 
  list.push(node.value)
  // check does the Node have left child
  if (node.left) {
    // Traversal to the left child
    traversePreOrder(node.left, list)
  }
  // check does the Node have right child
  if (node.right) {
    // Traversal to the right 
    traversePreOrder(node.right, list)
  }
return list
}

function traversePostOrder(node, list) {
  // check if Node have the left child or if the Node have the right child
  if (node.left || node.right) {
    // traversal to the left
    traversePostOrder(node.left, list)
    // traversal to the right 
    traversePostOrder(node.right, list)
  }
  // push to the last child of the left node to the list
  list.push(node.value)

  return list
} 
/*
        9
    4      20
  1   6  15   70
*/

let myBST = new BinarySearchTree()
myBST.insert(9)
myBST.insert(4)
myBST.insert(20)
myBST.insert(1)
myBST.insert(6)
myBST.insert(15)
myBST.insert(70)
//console.log(myBST.breadthFirstSearch());
console.log(myBST.DFSPostorder());
console.log(myBST);


