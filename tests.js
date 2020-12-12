// write your leetcode tests here
/*
Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum 
frequency of any one of its elements.
Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

Example:
Input: nums = [1,2,2,3,1]
Output: 2
Explanation: 
The input array has a degree of 2 because both elements 1 and 2 appear twice.
Of the subarrays that have the same degree:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
The shortest length is 2. So return 2.

Example:
Input: nums = [1,2,2,3,1,4,2]
Output: 6
Explanation: 
The degree is 3 because the element 2 is repeated 3 times.
So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.

Constraints:
nums.length will be between 1 and 50,000.
nums[i] will be an integer between 0 and 49,999.
*/

var findShortestSubArray = function(nums) {
    let degree = 0
    let repeated = new Set()
    let subArr = {}

    while (nums.length) {
        let n = nums[0]

        if (repeated.has(n)) {    
            degree++
            subArr[n]++
        } else {
            subArr[n] = 1
            repeated.add(n)
        }

        nums = nums.slice(1, nums.length)
    }

    return [degree, subArr]
}


console.log(findShortestSubArray([1,2,2,3,1])) // degree 2, res 2
console.log(findShortestSubArray([1,2,2,3,1,4,2])) // degree 3, res 6