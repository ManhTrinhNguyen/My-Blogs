/**
 * Top K Frequent Elements 
 * Given integer array nums and integer k, return the k most frequently elements
 * if k = 2 return 2 most frequently element
 */


const topKFrequent = function(nums, k) {
    // Create map to track 
  let map = {}
  // Loop through nums Array and put the value into the map 
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1
    } else {
      map[nums[i]] += 1
    }
  }
  
  let arr = [...Object.keys(map)].sort((a, b) => {
    return map[b] - map[a]
  })
  return arr.slice(0, k);
  
};

console.log(topKFrequent([1,1,1,2,2,3], 2));