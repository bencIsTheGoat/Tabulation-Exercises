// Work through this problem on https://leetcode.com/problems/climbing-stairs/ and use the specs given there.
// Feel free to use this file for scratch work.

function climbStairs(n, memo={}) {
    if (n in memo) return memo[n];
    if (n === 1) return 1;
    if (n === 0) return 1;

    let left = climbStairs(n - 1, memo);
    let right = climbStairs(n - 2, memo);

    memo[n] = left + right;
    return memo[n];
}
