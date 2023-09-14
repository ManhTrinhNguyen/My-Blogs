/** 
 * Valid Palindrome 
 * After converting all uppercase letters into lowercase letters and removing all non-alphamueric characters, it reads the same forward and backward.
 * return true if Panlindrome, false otherwise
 * 
 * const isPalindrome = function (s) {
  // Convert the str into lowerCase and Remove all non-alphamueric by regular expression 
  const newStr = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
  // Create 2 pointer head and tail to track if the word from head === to the word from tail
  let head = 0
  let tail = newStr.length - 1
  // loop through the string until head < tail
  while (head < tail) {
    // if newStr[head] === newStr[tail] increase head and decrease tail 
    if (newStr[head] === newStr[tail]) {
      head++
      tail--
    } else {
      return false
    }
  }
  return true
}
console.log(isPalindrome('A man, a plan, a canal: Panama'));
*/


/**
 * Two Sum II - Input array is Sorted 
 * Given a 1-indexed array of integers sorted in non-decreasing order
 * Find two numbers such that they add up to a specific target number . 
 * 
 * 
 * const twoSum = function (numbers, target) {
  let head = 0
  let tail = numbers.length - 1
  while (head < tail) {
    let curSum = numbers[head] + numbers[tail]
    if (curSum > target) {
      tail--
    } else if (curSum < target) {
      head++
    } else {
      return [head + 1, tail + 1]
    }
  }
}
console.log(twoSum([2,7,11,15], 9));
 */


/**
 * 3 Sum
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
 * i != j , j != k, nums[i] + nums[j] + nums[k] == 0
 */


const threeSum = function (nums) {
  const numsSorted = (nums.sort((a, b) => {
    return a - b
  }));
  let result = []
  for (let i = 0; i < numsSorted.length; i++) {
    // Check if number is the same the number before so we skip that number
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    let left = i + 1
    let right = nums.length - 1
    console.log(`i: ${i} , left: ${left} , right : ${right}`);
    while (left < right) {
      let threeSum = nums[i] + nums[left] + nums[right]
      if (threeSum < 0) {
        left++
      } else if (threeSum > 0) {
        right--
      } else {
        result.push([nums[i], nums[left], nums[right]])
        left++ 
        while (nums[left] === nums[left - 1] && left < right) {
          left++
        }
      }
    }

  }

  return result
}
console.log(threeSum([-1,0,1,2,-1,-4]));

