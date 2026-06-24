// 1929 #LeetCode

function concatenationArray(nums: number[]) {

    let n = nums.length;
    let ans: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        ans[i] = nums[i];
        ans[i + n] = nums[i];
    }
    return ans;
}

// 1920 #Leetcode
function buildArray(nums: number[]) {
    let ans: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        ans[i] = nums[nums[i]];
    }

    return ans;
}

// 1480 #Leetcode
function runningSum(nums: number[]) {
    const ans = [];
    let currentSum = 0;
    for (let i = 0; i < nums.length; i++) {

        currentSum += nums[i];
        ans[i] = currentSum;

    }
    return ans;
}

// 1365 #Leetcode
function smallerNumbersThanCurrent(nums: number[]): number[] {
    let ans = [];

    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] < nums[i]) count++;
        }
        ans[i] = count;
    }
    return ans;
}

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));