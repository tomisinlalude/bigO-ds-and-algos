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

function findMaxSubArrayBruteForce(arr) {
	var max_so_far = Number.NEGATIVE_INFINITY;
	var leftIndex = 0,
		rightIndex = arr.length - 1,
		len = arr.length;

	for (var i = 0; i < len; i++) {
		maxSum = 0;

		for (var j = i; j < len; j++) {
			maxSum += arr[j];

			if (max_so_far < maxSum) {
				leftIndex = i;
				max_so_far = maxSum;
				rightIndex = j;
			}
		}
	}
	return {
		left: leftIndex,
		right: rightIndex,
		final_max_sum_subArray: max_so_far
	};
}

//Divide and conquer approach
/**
 *Split the input in half, and consider that the maximum sum subarray can come from three places:
Entirely from left half.
Entirely from right half.
It consists of some number of rightmost elements of the left half and some number of leftmost elements of the right half.
Then solve the problem recursively on the left and right halves. I would then know the best subarrays I can get that are entirely in each of the halves, for points 1 and 2 above.
1. Select the middle element of the array.
So the maximum subarray may contain that middle element or not.
2.1 If the maximum subarray does not contain the middle element, then we can apply the same algorithm to the the subarray to the left of the middle element and the subarray to the right of the middle element.
2.2 If the maximum subarray does contain the middle element, then the result will be simply the maximum suffix subarray of the left subarray plus the maximum prefix subarray of the right subarray
3 return the maximum of those three answer.

Now, time complexity:

T(n) = 2*T(n/2) + O(Max_Opposite).
If function “Max_Opposite” is O(n²), then T(n) = O(n²). But if we manage to make it O(n), then
T(n) = O(nlogn) 

So, I have to save four values for each subarray:
Maximum sum that is contained entirely in the left half ( mss_l)
Maximum sum that is contained entirely in the right half ( mss_r )
Sum of the whole array ( t )
Maximum of above values ( mx )
For the case, that I am checking a subarray of size 1 all of these values are equal to the value of that element. When merging two subarrays (sub_left, sub_right) these values will be:
 *
 */