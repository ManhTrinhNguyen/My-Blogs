let number = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
// divided the Array into half until array.length === 1 
// Use Recursion to divide array into half
function mergeSort(array) {
  let length = array.length 
  let middle = Math.floor(length / 2)
  let left = array.slice(0, middle)
  let right = array.slice(middle)
  // Base case 
  if (array.length === 1) {
    return array
  }
  // Recursive Case 

  return merge(mergeSort(left), mergeSort(right))
}

// Create another the function to merge the number from small to big

function merge(left, right) {
  let array = [] 
  let leftIndex = 0 
  let rightIndex = 0 
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array.push(left[leftIndex])
      leftIndex++
    } else {
      array.push(right[rightIndex])
      rightIndex++
    }
  }
  return array.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))

}
console.log(mergeSort(number));


  
