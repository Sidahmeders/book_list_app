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

const placeQueens = (board, i, diagonal1, diagonal2, vertical) => {
    if (i == board.length) {
        // base case do something..
        return addToList(board)
    }
    console.log('_____')
    
    for (let j = 0; j < board.length; j++) {
        console.log(board)
        if (!diagonal1.has(i+j) && !diagonal2.has(i-j) && !vertical.has(j)) {
            board[i][j] = 1
            diagonal1.add(i+j)
            diagonal2.add(i-j)
            vertical.add(j)
            placeQueens(board, i+1, diagonal1, diagonal2, vertical)
            board[i][j] = 0
            diagonal1.delete(i+j)
            diagonal2.delete(i-j)
            vertical.delete(j)
        }
    }
}

const addToList = board => {
    let arr = []
    for (let i = 0; i < board.length; i++) {
        let tmp = ""
        for (let j = 0; j < board[i].length; j++) {
            if (board[i[j] == 0]) tmp += "."
            else tmp += "Q"
        }
        arr.push(tmp)
    }
    return arr
}

var solveNQueens = function(n) {
    let board = new Array(n).fill().map(() => Array(n).fill(''))

    return placeQueens(board, 0, new Set(), new Set(), new Set())
}



console.log(solveNQueens(4))