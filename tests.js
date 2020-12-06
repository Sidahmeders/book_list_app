// write your leetcode tests here
/*
  Given an array nums of distinct integers, return all the possible permutations. 
  You can return the answer in any order.

  Example 1:
  Input: nums = [1,2,3]
  Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

  Example 2:
  Input: nums = [0,1]
  Output: [[0,1],[1,0]]

  Example 3:
  Input: nums = [1]
  Output: [[1]]
*/

// your pseudo-code goes here
/*
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let perm = []
  
  const DFS = (nums, path, used, perm) => {
    if (path.length == nums.length) {
      perm.push(Array.from(path))
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue
      path.push(nums[i])
      used[i] = true
      DFS(nums, path, used, perm)
      path.pop()
      used[i] = false
    }
  }
  
  DFS(nums, [], Array.from(nums).fill(false), perm)

  return perm
}


console.log(permute([1,2,3]))