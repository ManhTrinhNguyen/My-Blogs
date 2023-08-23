// Given 2 sorted List . Merge 2 lists into 1 sorted list 
const list1 = [1, 2, 4]
const list2 = [1, 3, 4]

const mergeTwoLists = function (list1, list2) {
  let result = new ListNode()
  let dummy = result

  while (list1 && list2) {
    let list1Val = list1 && list1.val 
    let list2Val = list2 && list2.val
    
    if (list1Val < list2Val) {
      result.next = list1
      list1 = list1 ? list1.next : null
    } else {
      result.next = list2
      list2 = list2 ? list2.next : null
    }

    result = result.next

    if(list1) {
      result.next = list1
    } 
    if(list2) {
      result.next = list2
    }
  }
  return dummy.next
}
console.log(mergeTwoLists(list1, list2));
/*
  list 2 : 1 3 3 3 4
  list 1 : 1 1 2 4,4
  [1, 1, 2, 3 , 4]
 */