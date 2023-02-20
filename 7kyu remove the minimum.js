// The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]


function removeSmallest(numbers) {
    let newNumbers = numbers.map(x => x)
    let indexToRemove = newNumbers.indexOf(Math.min(...newNumbers))
    newNumbers.splice(indexToRemove, 1)
    return newNumbers
  }
  
  
  
  
  //parameters: array of numbers. THey will always be integers, unless the array is empty.
  //return: a NEW array of numbers with the lowest value removed. When there are two lowest values, remove the one with the smaller index.
    //do not SORT the array.
  
  //example: * Input: [1,2,3,4,5], output = [2,3,4,5]
  
  //pseudo: //create a new array, and copy the original into it.
    //check for the minimum value.
    // remove that value.
    //return the new array