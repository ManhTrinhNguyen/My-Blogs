let arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++){
      let keep = arr[j]
      if (arr[j] > arr[j + 1]) {
        arr[j] = arr[j + 1]
        arr[j + 1] = keep
      }
    }
  }
  return arr
}

console.log(bubbleSort(arr));