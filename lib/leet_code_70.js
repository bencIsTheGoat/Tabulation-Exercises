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

function subsets (array) {
    let subs = [];
    j = 0;
    for (let i = 0; i < array.length; i++) {
        let sbs = [];
        while (j < array.length) {
            if (arr[i] === arr[j]) {
                subs.push(arr[i]);
                j++;
            } else {
                sbs.push([arr[i], arr[j]]);
                j++;
                sbs.push(arr[j]);
            }
            subs.push(sbs);
        }
    }
    return subs
}