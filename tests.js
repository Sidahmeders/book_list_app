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

const solveRow = (row, columns) => {
    let comb = []
    for (let i = 0; i < row.length; i++) {
        if (columns[i] !== "Q") comb.push("Q")
        else comb.push(".")
    }
    return comb
}

var solveNQueens = function(n) {
    let board = Array(n).fill().map(()=>Array(n).fill(""))

    // making choices
    let columns = []
    board.forEach(row => {
        solveRow(row, columns)
    })
    
    // constraint

    // seting the base-case

    // goal

    return board
}



console.log(solveNQueens(4))