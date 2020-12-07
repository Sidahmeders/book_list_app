// write your leetcode tests here
/*
  Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, 
  which minimizes the sum of all numbers along its path.
  Note: You can only move either down or right at any point in time.

  Example 1:
  Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
  Output: 7
  Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.

  Example 2:
  Input: grid = [[1,2,3],[4,5,6]]
  Output: 12
*/

// your pseudo-code goes here
/*
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  
  const explore = (grid, shortest=[]) => {
    let i = 0
    let j = 0
    while (i < grid.length) {
      while (j < grid[i].length) {
        shortest.push(grid[i][j])
        j++
      }
      i++
    }
  }
  
}

console.log(permute([1,2,3]))