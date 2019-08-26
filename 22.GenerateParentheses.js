/*

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

@param {number} n
@return {string[]}
var generateParenthesis = function(n) {
    
};

*/

/*

Time Complexity - O( 4^n / sqrt(n) )
Space Complexity - O( 4^n / sqrt(n) )
leet code complexity - Medium

*/

// Solution

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    
    let result = [];
    
    dfs(result, '', 0, 0, n);
    
    return result;
};

function dfs(result, str, openBracket, closeBracket, times){
    if(str.length === times*2){
        result.push(str);
        return
    }
    
    if(openBracket < times){
        dfs(result, str+'(', openBracket+1, closeBracket, times)
    }
    if(closeBracket < openBracket){
        dfs(result, str+')', openBracket, closeBracket+1, times)
    }
}
