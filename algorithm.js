// Given root binary tree, return average value of the node on each level in the form of an array

function averageOfLevels(root) {
  // Actual array list
  let list = []
  // To track the level 
  let queue = []

  // First level average value alway itself
  list.push(root.val)
  queue.push(root.val)

  // loop through the tree  
  while (queue) {
    let currentNode = queue.shift();
    let sum = 0
    // check if currentNode have left child 
    if (currentNode.left) {
      queue.push(currentNode.left)
    }
    // check if currentNode have right child 
    if (currentNode.right) {
      queue.push(currentNode.right)
    }
    // loop through the queue to get the sum value then push to the list 
    for (let i = 0; i < queue.length; i++) {
      sum += queue[i]
      list.push(sum/queue.length)
    }
    sum = 0
  }
  return list 
};

function traversalBFS(queue, list) {
  // queue is an array to track the level of the Node
  // list is the actual array

  // Base case 
  if (!queue.length) return list

  // Recursive Case 
  let currentNode = queue.shift();

  // push value to the list 
  list.push(currentNode.val)

  // check if left child exist 
  if (currentNode.left) {
    queue.push(currentNode.left.val)
  }
  // check if right child exist 
  if (currentNode.right) {
    queue.push(currentNode.right.val)
  }

  return traversalBFS(queue, list)
}

