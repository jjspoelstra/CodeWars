// In your class, you have started lessons about arithmetic progression. Since you are also a programmer, you have decided to write a function that will return the first n elements of the sequence with the given common difference d and first element a. Note that the difference may be zero!

// The result should be a string of numbers, separated by comma and space.

// Example
// # first element: 1, difference: 2, how many: 5
// arithmetic_sequence_elements(1, 2, 5) == "1, 3, 5, 7, 9"


function arithmeticSequenceElements(a, d, n) {
    let array = [a]
    for (let i = 1; i < n; i++){
      array.push(a + i*d)
    }
    return array.join(', ')  
  }
  
  
  
  
  // Given the 1st number in a string (a). Given how much to count by (d). Given how many numbers in the string (n). 
    //numbers may be negative or zero
  
  //return a string of numbers, separated by comma and space. 
  
  //create an array to put numbers in
    //loop 1 through n, pushing numbers into the array
    //join the array