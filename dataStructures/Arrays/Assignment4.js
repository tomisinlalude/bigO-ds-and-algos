/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number) 
 * which has the largest sum and return its sum.
 * 
Example:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
 */

 /*
 PSEUDOCODE
1. Assign your variables using the worst case scenario i.e
Sum being negative infinity, first index of subarray being first index of original array
then last index of subarray being last index of original array
2. Loop through each element of the original array in nested loops
3. In the first loop, assign the sum of the subarray to zero
3. In the innermost loop, compare the initial sum, negative infinity to the sum of the subarray
*/

//Brute force
//Cubic Algorithm

var maxSubArray = (nums) => {
    var max_so_far = Number.NEGATIVE_INFINITY;
    var len = nums.length;

    for (var i = 0; i < len; i++) {

        for (var j = i; j < len; j++) {
            maxSum = 0;
            for (var k = i; k <= j; k++) {
                maxSum += nums[k];

                if (max_so_far < maxSum) {
                    leftIndex = i;
                    max_so_far = maxSum;
                    rightIndex = j;
                }
            }
        }
    }
    return max_so_far;
}

//Quadratic Algorithm
