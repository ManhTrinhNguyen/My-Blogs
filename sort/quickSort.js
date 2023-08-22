
function quickSort(array) {
  if (array.length === 1) {
    return array
  }

    // pick the Pivot 
  const pivot = array[array.length - 1]
  const leftArray = []
  const rightArray = []
  // Divided into subArray , less than pivot will go to leftArray , >= pivot will go to rightArray
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] < pivot) {
        leftArray.push(array[i])
      } else {
        rightArray.push(array[i])
      }
    }
  console.log(`Left : ${leftArray}, Right: ${rightArray}`);
    
  // check in the case of : ... 
  if (leftArray.length > 0 && rightArray.length > 0) {
    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
  } else if (leftArray.length > 0) {
    return [...quickSort(leftArray), pivot]
  } else {
    return [pivot, ...quickSort(rightArray)]
  }
  
}
const array = [1,345,123,432,4,2, 8]
console.log(quickSort(array));