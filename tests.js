// write your leetcode tests here
/*
The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.
Given an integer n, return all distinct solutions to the n-queens puzzle.
Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' 
both indicate a queen and an empty space, respectively.

Example 1:
Input: n = 4
Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above

Example 2:
Input: n = 1
Output: [["Q"]]

Constraints:
1 <= n <= 9
*/

/**
 * @param {number} n
 * @return {string[][]}
 */
/*
  >> make a choice
  >> recuse or backtrack if no solution exist
  >> set my constraint
  >> set the base-case
  i have to solve for each row
    loop through each column of the row
      check if the there is no vertical or digonal column holding that postion
      if so to place the queen : else move to the next column in a row 
      if we reach the end of the row and there is no valid position for the queen we backtrack
      if we reach the end and all queens are placed that means we have a valid board placment
      and we push that to the result 
      and we keep going from the last postion of the first row and we check if there is another solution
      until we hit the base-case
    we check if we reached the end of the borad aka(the last row && column) we return
*/

var solveNQueens = function(n) {
    let board = new Array(n).fill().map(() => Array(n).fill(''))
    let columns = new Set()
    let rows = new Set()
    let digonal1 = new Set()
    let digonal2 = new Set()
    let res = []

    const placeQueens = i => {
        if (i == board.length-1) res.push(board)
        console.log(i, board.length)

        for (let j = 0; j < board[i].length; j++) {
            if (!columns.has(j) && !rows.has(i) && !digonal1.has(i+j) && !digonal2.has(j-i)) {
                board[i][j] = "Q"
                columns.add(j)
                rows.add(i)
                digonal1.add(i+j)
                digonal2.add(j-i)
            } else {
                board[i][j] = "."
            }
        }
    }

    for (let i = 0; i < board.length; i++) {
        placeQueens(i)
    }

    return res
}


console.log(solveNQueens(4))