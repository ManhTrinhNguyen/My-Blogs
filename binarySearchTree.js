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

}

let myBST = new BinarySearchTree()
myBST.insert(9)
myBST.insert(4)
myBST.insert(20)
myBST.insert(1)
myBST.insert(6)
myBST.insert(15)
myBST.insert(70)
console.log(myBST.lookup(90));
console.log(myBST);

/*
        9
    4      20
  1   6  15   70
    
 
*/
