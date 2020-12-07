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
  const i = grid.length - 1
  const j = grid[0].length - 1
  
  for(let k = 0; k <= i; ++k) {
      for(let l = 0; l <= j; ++l) {
          if(k > 0 && l > 0)
              grid[k][l] = Math.min(grid[k][l] + grid[k][l - 1], grid[k - 1][l] + grid[k][l])
          else if(k > 0 || l > 0) {
              if(l > 0)
                  grid[k][l] += grid[k][l - 1]
              else
                  grid[k][l] += grid[k - 1][l]
              }   
      }
  }
  
  return grid[i][j]
}

console.log(permute([1,2,3]))