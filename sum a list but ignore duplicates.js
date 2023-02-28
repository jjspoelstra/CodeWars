// Please write a function that sums a list, but ignores any duplicate items in the list.

// For instance, for the list [3, 4, 3, 6] , the function should return 10.



function sumNoDuplicates(numList) {
    return numList.filter((x) => numList.indexOf(x) === numList.lastIndexOf(x)).reduce((accum, val) => accum + val, 0)
  }
  
  
  
  //parameters: given a list of numbers. If there are duplicates, ignore ALL of them.
  //return sum of list minus duplicates
  //example: [3,4,3,6] -> [4+6] -> 10
  //pseudo:
    //filter new array that just contains single letters, using indexOf and lastIndexOf
    //reduce array
  