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
    let num_counts = new Map();  // hash map to keep count of each number
    let degree = 0;              // initalize degree to 0
    
    let first_seen = new Map();  // hash map keep track of first time we see the number
    let min_length = 0;
    
    for (let i= 0; i<= nums.length; i++){    // loop through the numbers 
        if(!first_seen.has(nums[i])){   
            first_seen.set(nums[i], i);  // mark the index of first occurance
        }
        
        // key: current number
        // value: count of number( if nums is in map we get the current count or if not count equals 0 then we increment + 1)
         num_counts.set(nums[i], (num_counts.has(nums[i]) ? num_counts.get(nums[i]) : 0) + 1)  
        
        // if count > degree then we update the degree
     if(num_counts.get(nums[i]) > degree){
         degree = num_counts.get(nums[i]);
         min_length = i - first_seen.get(nums[i]) + 1;     // subtract occurance (max) from first occurance to see the 
     } else if (num_counts.get(nums[i]) === degree){      // if number is equal to degree
            min_length = Math.min(min_length, i - first_seen.get(nums[i])+ 1); 
        }
        
    }
    return min_length;
}


console.log(findShortestSubArray([1,2,2,3,1])) // 2
console.log(findShortestSubArray([1,2,2,3,1,4,2])) // 6
console.log(findShortestSubArray([1,1])) // 2
console.log(findShortestSubArray([1,2,1])) // 3
console.log(findShortestSubArray([1,1,2,2,2,1])) // 3