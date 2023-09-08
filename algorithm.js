// Given an array of strings strs, group the anagrams together. can => answer in any other 
// 
const strs = ["eat","tea","tan","ate","nat","bat"]

function groupAnagrams(strs) { 
  let map = {}

  if (strs.length === 1) return [strs[0]]

  for (let i = 0; i < strs.length; i++) {
    const sortedStrs = (strs[i].split("").sort().join(""))
    if (!map[sortedStrs]) {
      map[sortedStrs] = [strs[i]]
    } else {
      map[sortedStrs].push(strs[i])
    }
  }
  return Object.values(map)
}
console.log(groupAnagrams(strs));