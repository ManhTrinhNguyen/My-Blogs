// Create Object to hold value
// create  function that have value as a agurment 
// check if value in the object
// let cache = {}
// function memoizedAddTo80(n) {
//   if (n in cache) {
//     return cache[n]
//   } else {
//     cache[n] = n + 80
//     return cache[n]
//   }
// }


//Fibanocci 
// function fibonnaciMaster() {
//   let cache = {}
//   return function fib(n) {
//     if (n in cache) {
//       return cache[n]
//     } else {
//       if (n < 2) {
//         return n
//       } else {
//         cache[n] = fib(n - 1) + fib(n - 2); 
//         return cache[n]
//       }
//     }
//   }
// } 

// function fibonnaciMaster2(n) {  
//   let answer = [0, 1]
//   for (let i = 2; i <= n; i++) {
//     answer.push(answer[i - 2] + answer[i - 1])
//   }
//   return answer.pop()
// }

// let fasterFib = fibonnaciMaster()
// console.log(fasterFib(50));

//Climbing Stairs
// You are climbing staircase. It takes n steps to reach to the stop 
// Each time you can either climb 1 or 2 step s . In how many distinct ways you can climb to the top ? 

// function climbStair() {
//   let cache = {}
//   return function climbStairRecursive(n) {
//     if (cache[n]) {
//       return cache[n]
//     } else {
//       if (n <= 2) {
//         return n
//       } else {
//         cache[n] = climbStairRecursive(n - 1) + climbStairRecursive(n - 2)
//         return cache[n]
//       }
//     }
//   }
// }
// const n = 2
// let climbStairMaster = climbStair()
// console.log((climbStairMaster(5)));



// House Robbers 

// Cannot rob adjacent house 
// Return Max amount of money 

function rob(nums) {
  let result = 0
  for (let i = 0; i < nums.length; i = i + 2) {
    result += nums[i]
  }
  return result
}

console.log(rob([1,2,3,1]));