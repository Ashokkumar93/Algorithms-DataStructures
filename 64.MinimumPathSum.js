/*
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example:

Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.


*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
}

//Solution

/*
Time- O(m*n)	Space - O(m*n)		Leetcode Compl = Medium
*/

var minPathSum = function(grid) {
    if(grid.length === 0){
        return 0;
    }
    let dp = [];
    let width = grid.length;
    let height = grid[0].length;
    dp[0] = [grid[0][0]];
    for(var i = 1; i < width; i++){
        dp[i] = [dp[i-1][0]+grid[i][0]]
    }
    
    for(var j = 1; j < height; j++){
        dp[0][j] = dp[0][j-1]+ grid[0][j]
    }
    
    for(let i = 1; i< width; i++){
        for(let j = 1; j< height; j++){
            dp[i][j] = Math.min(Number(dp[i-1][j]),Number(dp[i][j-1]))+grid[i][j];
        }
    }
    
    return dp[width-1][height-1];
};
