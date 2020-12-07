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
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (i && j) {
        grid[i][j] += Math.min(grid[i-1][j], grid[i][j-1])
      }
      else if (i || j) {
        if (i) grid[i][j] += grid[i-1][j]
        if (j) grid[i][j] += grid[i][j-1]
      }
    }
  }
    console.log(grid)

  return grid[grid.length-1][grid[0].length-1]
}


console.log(permute([1,2,3]))