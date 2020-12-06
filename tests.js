// write your leetcode tests here
/*
  merge two sorted list
  Input: l1 = [1,2,4], l2 = [1,3,4]
  Output: [1,1,2,3,4,4]
*/

// your pseudo-code goes here
/*
*/



var mergeTwoLists = function(l1, l2) {
  let dummy = new ListNode()
  let head = dummy

  while (l1 && l2) {
    if (l1.val < l2.val) {
      dummy.next = l1
      l1 = l1.next
    } else {
      dummy.next = l2
      l2 = l2.next
    }
    dummy = dummy.next
  }

  if (l1) dummy.next = l1
  if (l2) dummy.next = l2
  
  return head.next
}


console.log(maxArea([1,8,6,2,5,4,8,3,7]))