// Write 2 functions that find the factorial of any number . One should use recursive, the other should just use a for loop 
// Factorial Explanation : 5! = 5 * 4 * 3 * 2 * 1
function findFactorialRecursive(number) {
  // identify the base case 
  if (number === 1) {
     return number 
  }
  // identify the base case
  return number * findFactorialRecursive(number-1)
}

function findFactorialIterative(number) {
  let answer = 1 
  for (let i = 1; i <= number; i++) {
    answer *= i 
  }
  return answer
}

// Given a number N return the index of value of the Fibonacci sequence, where the sequence is :
// 0 , 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequences is that each value is the sum of the 2 previous values, mean N=5 -> 2 + 3

function fibonacciRecursive(n) {
  // identify the base case
  if (n < 2) {
    return n
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}

function fibonacciIterative(n) { // O(2^n)
  let arr = [0, 1]
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1])
  }
  return arr[n]
}
console.log(fibonacciIterative(8));

