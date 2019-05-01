// Write a function, stepper(nums), that takes in an array of non negative numbers.
// Each element of the array represents the maximum number of steps you can take from that position in the array.
// The function should return a boolean indicating if it is possible to travel from the 
// first position of the array to the last position.
//
// For Example:
//
// Given [3, 1, 0, 5, 10]
//      - We begin at first position, 3. 
//      - Since the element is 3 we can take up to 3 steps from this position.
//      - This means we can step to the 1, 0, or 5
//      - Say we step to 1
//      - Since the element is 1, now the only option is to take 1 step to land on 0
//      - etc...
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//
// stepper([3, 4, 1, 0, 10]);           // => true, because we can step through elements 3 -> 4 -> 10

function stepper(nums) {
    let table = new Array (nums.length + 1).fill(false);
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums[i]; j++) {
            table[j] = true;
        }
    }
    return table[table.length - 1];

}
            
function stepper(nums, memo = {}) {
    let key = new String (nums);
    if (key in memo) return memo[key];
    let current = nums[0];
    for (let i = 1; i <= current; i++) {
        let sliced = nums.slice(i);
        if (current >= nums.length || stepper(sliced, memo)) {
            memo[key] = true;
            return true;
        }
    }
    memo[key] = false;
    return false;
}

// console.log(stepper([3, 1, 0, 5, 10]));           // => true, because we can step through elements 3 -> 5 -> 10
// console.log(stepper([2, 3, 1, 1, 0, 4, 7, 8]))    // => false, there is no way to step to the end
// console.log(stepper([2, 0, 2, 0, 3, 1, 0, 1]))
            
// Write a function, maxNonAdjacentSum(nums), that takes in an array of nonnegative numbers.
// The function should return the maximum sum of elements in the array we can get if we cannot take
// adjacent elements into the sum.
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//
// => 10, because 4 + 6 
function maxNonAdjacentSum(nums, memo = {}) {
    let key = new String (nums);
    if (key in memo) return memo[key];
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(...nums);
    let first = nums[0];
    let second = nums[1];
    
    let firstSlice = nums.slice(2);
    let secondSlice = nums.slice(3);
    
    let firstMax = Math.max(...firstSlice);
    let secondMax = Math.max(...secondSlice);
    
    let firstLowerIdx = firstSlice.indexOf(firstMax) - 1;
    let secondLowerIdx = secondSlice.indexOf(secondMax) - 1;
    let firstUpperIdx = firstLowerIdx + 2;
    let secondUpperIdx = secondLowerIdx + 2;
    if (firstLowerIdx <= 0) {
        firstLowerIdx = 0;
        firstUpperIdx += 1;
    }
    if (secondLowerIdx <= 0) {
        secondLowerIdx = 0;
        secondUpperIdx += 1;
    }
    
    let firstArray = firstSlice.slice(0, firstLowerIdx).concat(firstSlice.slice(firstUpperIdx));
    let secondArray = secondSlice.slice(0, secondLowerIdx).concat(secondSlice.slice(secondUpperIdx));
   
    let firstResult = first + firstMax + maxNonAdjacentSum(firstArray, memo);
    let secondResult = second + secondMax + maxNonAdjacentSum(secondArray, memo);
    
    if (firstResult > secondResult) {
        memo[key] = firstResult;
        return memo[key];
    } else {
        memo[key] = secondResult;
        return memo[key];
    }

}

function maxNonAdjacentSum (nums) {
    
}


// console.log(maxNonAdjacentSum([2, 7, 9, 3, 4]))  // => 15, because 2 + 9 + 4
// console.log(maxNonAdjacentSum([4, 2, 1, 6]))
// console.log(maxNonAdjacentSum([4, 1, 1, 10, 3, 2]))
// console.log(maxNonAdjacentSum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))
// console.log(maxNonAdjacentSum([1, 17, 2, 5, 1, 7, 6, 8, 11, 2, 3]))


// Write a function, minChange(coins, amount), that accepts an array of coin values
// and a target amount as arguments. The method should the minimum number of coins needed
// to make the target amount. A coin value can be used multiple times.
//
// You've seen this problem before with memoization, but now solve it using the Tabulation strategy!
//
// Examples:
//
// minChange([1, 2, 5], 11)         // => 3, because 5 + 5 + 1 = 11
// minChange([1, 4, 5], 8))         // => 2, because 4 + 4 = 8
// minChange([1, 5, 10, 25], 15)    // => 2, because 10 + 5 = 15
// minChange([1, 5, 10, 25], 100)   // => 4, because 25 + 25 + 25 + 25 = 100

// iterate thru 
function minChange(coins, amount) {


}


module.exports = {
    stepper,
    maxNonAdjacentSum,
    minChange
};