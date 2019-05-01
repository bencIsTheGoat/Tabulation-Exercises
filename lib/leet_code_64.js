// Work through this problem on https://leetcode.com/problems/minimum-path-sum/ and use the specs given there.
// Feel free to use this file for scratch work.

// recursion and memoization
function minPathSum(grid) {
    console.log(grid);
    if (grid.length === 1 || grid[0].length === 1) return grid[0][0];

    if (grid[0][1] === undefined) {
        let downMove = grid.slice(1);
        return grid[0][0] + minPathSum(downMove);
    } else if (grid[1][0] === undefined) {
        let rightMove = grid.map(subGrid => subGrid.slice(1));
        return grid[0][0] + minPathSum(rightMove);
    } else {
        let rightMove = grid.map(subGrid => subGrid.slice(1));
        let downMove = grid.slice(1);
        let rightSum = grid[0][0] + minPathSum(rightMove);
        let downSum = grid[0][0] + minPathSum(downMove);
        return grid[0][0] + Math.min(rightSum, downSum)
    }
}

// iteration and tabulation

function minPathSum(grid) {
    let table = new Array (grid.length).fill(new Array (grid[0].length));
    table = table.map((row, idx) => row[0] = grid[idx][0]);
    return table
    table[0][0] = grid[0][0];



}

console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]));