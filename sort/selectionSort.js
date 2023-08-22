let number = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
  
function selectionSort(array) {
  for (let i = 0; i < array.length; i++){
    let min = i
    let keep = array[i]
    for (let j = i + 1; j < array.length; j++){
      if (array[min] > array[j]) {
        min = j 
      }
    }
    array[i] = array[min]
    array[min] = keep
  }
  return array
}
console.log(selectionSort(number));
