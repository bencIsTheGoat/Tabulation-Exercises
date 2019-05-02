// Work through this problem on https://leetcode.com/problems/minimum-path-sum/ and use the specs given there.
// Feel free to use this file for scratch work.

// recursion and memoization
// function minPathSum(grid) {
//     console.log(grid);
//     if (grid.length === 1 || grid[0].length === 1) return grid[0][0];

//     if (grid[0][1] === undefined) {
//         let downMove = grid.slice(1);
//         return grid[0][0] + minPathSum(downMove);
//     } else if (grid[1][0] === undefined) {
//         let rightMove = grid.map(subGrid => subGrid.slice(1));
//         return grid[0][0] + minPathSum(rightMove);
//     } else {
//         let rightMove = grid.map(subGrid => subGrid.slice(1));
//         let downMove = grid.slice(1);
//         let rightSum = grid[0][0] + minPathSum(rightMove);
//         let downSum = grid[0][0] + minPathSum(downMove);
//         return grid[0][0] + Math.min(rightSum, downSum)
//     }
// }

// iteration and tabulation

function minPathSum(grid) {
    let x = grid[0].length;
    let y = grid.length;
    let table = new Array (y).fill().map(() => (new Array (x).fill(Infinity)));
    table[0][0] = grid[0][0];

    for (let i = 1; i < y; i++) {
        for (let j = 1; j < x; j++) {
            table[0][j] = table[0][j - 1] + grid[0][j];
            table[i][0] = table[i - 1][0] + grid[i][0];
        }
    }

    for (let outer = 1; outer < y; outer++) {
        for (let inner = 1; inner < x; inner++) {
            table[outer][inner] = grid[outer][inner] + Math.min(table[outer - 1][inner], table[outer][inner - 1]);
        }
    }

    return table[y - 1][x - 1];


}

console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]));